const form = document.querySelector("#login-form");

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

  // '/login' post 요청의 response를 data로 받은 후 로컬 저장소에 토큰 세팅
  const accessToken = data.access_token;
  window.localStorage.setItem("token", accessToken);
  alert("로그인 되었습니다.");

  window.location.pathname = "/";
};

form.addEventListener("submit", handleSubmit);
