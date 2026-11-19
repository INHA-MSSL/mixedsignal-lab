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


// F5 또는 새로고침 버튼으로 페이지를 다시 열었는지 확인합니다.
const pageNavigation = performance.getEntriesByType("navigation")[0];

if (pageNavigation?.type === "reload") {
  // 브라우저가 이전 스크롤 위치로 돌아가는 것을 막습니다.
  history.scrollRestoration = "manual";

  // 페이지가 로드되면 맨 위로 이동합니다.
  window.addEventListener("pageshow", () => {
    requestAnimationFrame(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant"
      });
    });
  });
}

// 이 아래부터 기존 메뉴 코드가 이어집니다.
