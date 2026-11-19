// 열린 드롭다운은 바깥을 누르거나 Escape를 누르면 닫힙니다.
const navigation = document.querySelector(".nav");

// 클릭한 곳과 다른 드롭다운이 열려 있으면 닫습니다.
document.addEventListener("click", (event) => {
  const selectedMenu = event.target.closest("details");
  for (const openMenu of navigation.querySelectorAll("details[open]")) {
    if (openMenu !== selectedMenu) openMenu.open = false;
  }
});

// Escape를 누르면 열린 메뉴를 닫고 해당 화살표로 키보드 포커스를 돌려줍니다.
navigation.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  const openMenu = event.target.closest("details[open]") || navigation.querySelector("details[open]");
  if (!openMenu) return;
  openMenu.open = false;
  openMenu.querySelector("summary").focus();
});


// 스크롤 위치에 따라 상단 메뉴의 그림자를 켜고 끕니다.
const header = document.querySelector(".header");

function updateHeaderShadow() {
  header.classList.toggle("is-scrolled", window.scrollY > 10);
}

window.addEventListener("scroll", updateHeaderShadow, { passive: true });

// 처음 열거나 이전 스크롤 위치가 복원됐을 때도 반영합니다.
window.addEventListener("pageshow", updateHeaderShadow);
updateHeaderShadow();
