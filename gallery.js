// Team Gallery: 앨범 클릭, 사진 넘기기, 확대 창 닫기
(() => {
  const viewer = document.querySelector("#photo-viewer");
  if (!viewer) return;

  const photo = viewer.querySelector(".viewer-photo");
  const counter = viewer.querySelector(".viewer-count");
  const closeButton = viewer.querySelector(".viewer-close");
  const prevButton = viewer.querySelector(".viewer-prev");
  const nextButton = viewer.querySelector(".viewer-next");

  let images = [];
  let currentIndex = 0;
  let albumTitle = "";
  let activeCard = null;

  // 현재 순서에 해당하는 사진 표시
  function showPhoto(index) {
    currentIndex = (index + images.length) % images.length;

    photo.alt = `${albumTitle} — Photo ${currentIndex + 1}`;
    photo.src = images[currentIndex];
    counter.textContent = `${currentIndex + 1} / ${images.length}`;

    // 한 장짜리 앨범은 좌우 버튼 숨기기
    prevButton.hidden = images.length < 2;
    nextButton.hidden = images.length < 2;
  }

  // 각 앨범 카드 연결
  document.querySelectorAll(".album-card").forEach((card) => {
    card.addEventListener("click", () => {
      let albumImages;

      try {
        albumImages = JSON.parse(card.dataset.images);
      } catch {
        console.error("앨범의 data-images 형식을 확인해 주세요.", card);
        return;
      }

      if (
        !Array.isArray(albumImages) ||
        albumImages.length === 0 ||
        !albumImages.every((src) => typeof src === "string" && src.trim())
      ) {
        console.error("앨범에 사진 파일명을 넣어 주세요.", card);
        return;
      }

      images = albumImages;
      albumTitle = card.dataset.title || "Photo album";
      activeCard = card;

      viewer.setAttribute("aria-label", albumTitle);
      showPhoto(0);
      viewer.showModal();
      document.body.classList.add("gallery-open");
    });
  });

  // 버튼으로 이전 / 다음 사진 보기
  prevButton.addEventListener("click", () => {
    showPhoto(currentIndex - 1);
  });

  nextButton.addEventListener("click", () => {
    showPhoto(currentIndex + 1);
  });

  // 닫기 버튼
  closeButton.addEventListener("click", () => {
    viewer.close();
  });

  // 사진 주변의 빈 영역을 클릭하면 닫기
  viewer.addEventListener("click", (event) => {
    if (
      event.target === viewer ||
      event.target.classList.contains("viewer-stage")
    ) {
      viewer.close();
    }
  });

  // Esc로 닫을 때도 스크롤과 포커스를 복원
  viewer.addEventListener("close", () => {
    document.body.classList.remove("gallery-open");
    activeCard?.focus({ preventScroll: true });
  });

  // 키보드 방향키로 사진 넘기기
  viewer.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      showPhoto(currentIndex - 1);
    }

    if (event.key === "ArrowRight") {
      event.preventDefault();
      showPhoto(currentIndex + 1);
    }
  });

  // 모바일에서 좌우로 밀어서 넘기기
  let touchStart = null;

  photo.addEventListener("touchstart", (event) => {
    if (event.touches.length !== 1) {
      touchStart = null;
      return;
    }

    touchStart = {
      x: event.touches[0].clientX,
      y: event.touches[0].clientY
    };
  }, { passive: true });

  photo.addEventListener("touchend", (event) => {
    if (!touchStart || images.length < 2) return;

    const distanceX = event.changedTouches[0].clientX - touchStart.x;
    const distanceY = event.changedTouches[0].clientY - touchStart.y;
    touchStart = null;

    // 가로로 충분히 움직였을 때만 넘기기
    if (
      Math.abs(distanceX) > 50 &&
      Math.abs(distanceX) > Math.abs(distanceY)
    ) {
      showPhoto(currentIndex + (distanceX < 0 ? 1 : -1));
    }
  }, { passive: true });

  photo.addEventListener("touchcancel", () => {
    touchStart = null;
  }, { passive: true });
})();
