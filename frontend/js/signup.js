const form = document.querySelector("#signup-form");

const checkPassword = () => {
  const formData = new FormData(form);
  const password1 = formData.get("password");
  const password2 = formData.get("password2");

  if (password1 === password2) {
    return true;
  } else {
    return false;
  }
};

const handleSubmit = async (event) => {
  event.preventDefault();

  // 비밀번호 hash화 하기
  const formData = new FormData(form);
  const sha256password = sha256(formData.get("password"));

  formData.set("password", sha256password);
  console.log(formData.get("password"));

  const div = document.querySelector("#info");

  if (checkPassword()) {
    const res = await fetch("/signup", {
      method: "post",
      body: formData,
    });
    const data = await res.json();
    if (data === "200") {
      //   div.innerText = "회원가입에 성공했습니다.";
      //   div.style.color = "blue";
      alert("회원가입에 성공했습니다.");
      window.location.pathname = "/login.html";
    }
  } else {
    div.innerText = "비밀번호가 일치하기 않습니다.";
    div.style.color = "red";
  }
};

form.addEventListener("submit", handleSubmit);
