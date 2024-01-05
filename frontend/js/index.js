// 타임스탬프 생성 함수
const calcTime = (timestamp) => {
  // 한국시간은 세계시간 기준보다 9시간 빠르기 때문에 9시간을 빼준다
  const curTime = new Date().getTime() - 9 * 60 * 60 * 1000;
  const time = new Date(curTime - timestamp);
  const hour = time.getHours();
  const minutes = time.getMinutes();
  const second = time.getSeconds();

  if (hour > 0) {
    return `${hour > 0}시간 전`;
  } else if (minutes > 0) {
    return `${minutes}분 전`;
  } else if (second >= 0) {
    return `${second}초 전`;
  } else {
    return "방금 전";
  }
};

const renderData = (data) => {
  const main = document.querySelector("main");

  data.forEach(async (obj) => {
    const div = document.createElement("div");
    div.className = "item-list";

    const imgDiv = document.createElement("div");
    imgDiv.className = "item-list__img";

    const img = document.createElement("img");
    // const res = await fetch(`/images/${obj.id}`);
    // const blob = res.blob();
    // const url = URL.createObjectURL(blob);
    // img.src = url;
    img.src = obj.image;

    const InfoDiv = document.createElement("div");
    InfoDiv.className = "item-list__info";

    const InfoTitleDiv = document.createElement("div");
    InfoTitleDiv.className = "item-list__info-title";
    InfoTitleDiv.innerText = obj.title;

    const InfoMetaDiv = document.createElement("div");
    InfoMetaDiv.className = "item-list__info-meta";
    InfoMetaDiv.innerText = obj.place + " " + calcTime(obj.insertAt);

    const InfoPriceDiv = document.createElement("div");
    InfoPriceDiv.className = "item-list__info-price";
    InfoPriceDiv.innerText = obj.price;

    imgDiv.appendChild(img);
    InfoDiv.appendChild(InfoTitleDiv);
    InfoDiv.appendChild(InfoMetaDiv);
    InfoDiv.appendChild(InfoPriceDiv);
    div.appendChild(imgDiv);
    div.appendChild(InfoDiv);
    main.appendChild(div);
  });
};

const fetchList = async () => {
  const accessToken = window.localStorage.getItem("token");
  const res = await fetch("/items", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (res.status === 401) {
    alert("로그인이 필요합니다!");
    window.location.pathname = "/login.html";
    return;
  }

  const data = await res.json();
  renderData(data);
};

fetchList();
