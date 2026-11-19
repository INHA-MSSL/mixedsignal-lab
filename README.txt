AMSIC Lab. 홈페이지 코드 안내

1. 압축을 푼 뒤 index.html을 더블클릭하면 홈페이지가 열립니다.
2. 코드를 보려면 VS Code나 메모장에서 같은 파일을 여세요.
3. 수정한 뒤 저장하고 브라우저를 새로고침하세요. 폴더 안 파일들은 함께 두세요.

index.html                    홈 제목, 뉴스, 연구 요약, 연락처
research.html                 연구 상세 설명과 피규어
contact.html                  이메일, 위치, 오시는 길
professor.html / students.html / alumni.html
                              교수님, 재학생, 졸업생
papers.html / patents.html     저널·학회 논문, 특허
team-gallery.html / chip-gallery.html
                              팀과 칩 사진
styles.css                    색, 글자, 여백, 모바일 배치, 애니메이션
menu.js                       드롭다운 바깥 클릭과 Escape 동작

처음에는 index.html에서 ‘실제 소식으로 바꿀 때’를 검색해
뉴스 예시를 바꿔보세요. HTML의 <!-- ... -->와 CSS의 /* ... */,
JavaScript의 //로 시작하는 줄은 코드 설명용 주석입니다.

이번 수정 내용
- 스크롤바 자리를 항상 확보해 페이지 전환 시 로고의 가로 이동을 방지했습니다.
- 선택 메뉴의 글자 굵기를 400으로 맞춰 메뉴 너비가 바뀌지 않도록 했습니다.
- Home과 세부 페이지 제목의 등장 시간을 800ms로 반영했습니다.
- 모든 상단 Contact 메뉴를 독립된 contact.html에 연결했습니다.
- Contact의 정확한 건물명, 호실, 주소와 지도 링크는 주석을 참고해 채워주세요.

GitHub 업로드
압축을 풀고 이 폴더 안의 파일들을 기존 저장소의 같은 위치에 업로드하세요.
contact.html도 함께 올리고 기존 HTML, styles.css, menu.js를 교체하세요.
index.html이 저장소의 최상위에 보이도록 업로드하면 됩니다.
