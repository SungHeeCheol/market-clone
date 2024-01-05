<script>
    let hour = new Date().getHours();
    let min = new Date().getMinutes();

    setInterval(() => (min = min + 1), 1000);
</script>

<header>
    <div class="info-bar">
      <div class="info-bar__time">{hour}:{min}</div>
      <div class="info-bar__icons">
        <img src="assets/chart-bar.svg" alt="chart-bar" />
        <img src="assets/wifi.svg" alt="wifi.svg" />
        <img src="assets/battery.svg" alt="battery.svg" />
      </div>
    </div>
    <div class="menu-bar">
      <div class="menu-bar__location">
        <div>역삼1동</div>
        <div class="menu-bar__location-icon">
          <img src="assets/arrow.svg" alt="arrow.svg" />
        </div>
      </div>
      <div class="menu-bar__icons">
        <img src="assets/search.svg" alt="search.svg" />
        <img src="assets/menu.svg" alt="menu.svg" />
        <img src="assets/aleart.svg" alt="aleart.svg" />
      </div>
    </div>
  </header>

  <main>
    <a class="write-btn" href="#/write">+ 글쓰기</a>
  </main>

  <footer>
    <div class="footer-block">
      <div class="footer-icons">
        <div class="footer-icons__img">
          <img src="assets/home.svg" alt="home.svg" />
        </div>
        <div class="footer-icons__desc">홈</div>
      </div>
      <div class="footer-icons">
        <div class="footer-icons__img">
          <img src="assets/doc.svg" alt="doc.svg" />
        </div>
        <div class="footer-icons__desc">동네생활</div>
      </div>
      <div class="footer-icons">
        <div class="footer-icons__img">
          <img src="assets/location.svg" alt="location.svg" />
        </div>
        <div class="footer-icons__desc">내근처</div>
      </div>
      <div class="footer-icons">
        <div class="footer-icons__img">
          <img src="assets/chat.svg" alt="chat.svg" />
        </div>
        <div class="footer-icons__desc">채팅</div>
      </div>
      <div class="footer-icons">
        <div class="footer-icons__img">
          <img src="assets/user.svg" alt="user.svg" />
        </div>
        <div class="footer-icons__desc">나의당근</div>
      </div>
    </div>
  </footer>

  <div class="media-info-msg">화면 사이즈를 줄여주세요.</div>

  <style>
    .info-bar__time{
        color: blue;
    }
  </style>