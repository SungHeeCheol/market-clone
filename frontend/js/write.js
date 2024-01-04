const form = document.getElementById("write-form");

// docs로 값을 넣었을때 백엔드에선 데이터가 보내지는데
// 프론트엔드에서 값을 받을 때 method 문제로 post요청이 안됨. 405 에러
const handleSubmitForm = async (event) => {
  event.preventDefault();
  const body = new FormData(form);
  body.append("insertAt", new Date().getTime());
  try {
    const res = await fetch("/items", {
      method: "POST",
      body,
    });
    const data = await res.json();
    if (data === "200") {
      window.location.pathname = "/";
    }
  } catch (e) {
    console.error(e);
  }
};

form.addEventListener("submit", handleSubmitForm);
