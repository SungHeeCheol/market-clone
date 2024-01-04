const form = document.querySelector("#login-form");

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

  const res = await fetch("/login", {
    method: "post",
    body: formData,
  });
  const data = await res.json();

  console.log("액세스 토큰:", data);
  // 오류번호(status)를 활용해서 코드 작성하기
  if (res.status === 200) {
    alert("로그인에 성공했습니다!");
    window.location.pathname = "/";
  } else if (res.status === 401) {
    alert("존재하지 않는 ID 혹은 PASSWORD가 틀렸습니다.");
  }
};

form.addEventListener("submit", handleSubmit);
