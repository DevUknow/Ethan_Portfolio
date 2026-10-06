# Ethan Portfolio

Ethan의 한 페이지 포트폴리오입니다. [Brittany Chiang](https://brittanychiang.com/)의 포트폴리오를 참고해 왼쪽 고정 소개와 오른쪽 콘텐츠 레이아웃을 구성했습니다. 별도의 패키지 설치나 빌드 없이 HTML, CSS, JavaScript로 실행됩니다.

## 로컬 실행

저장소 디렉터리에서 실행합니다.

```sh
python3 -m http.server 8000 --bind 0.0.0.0
```

브라우저에서 서버의 8000 포트로 접속합니다.

## 구성과 수정

- `index.html`: 소개, 경험, 프로젝트, 연락. 주석으로 표시한 경험과 두 번째 프로젝트는 추후 채울 자리이며 실제 경력을 나타내지 않습니다.
- `styles.css`: 네이비 배경, 민트색 포인트, 데스크톱의 고정 프로필과 모바일의 세로 레이아웃.
- `script.js`: 스크롤 위치에 따른 메뉴 강조와 마우스를 따라 움직이는 은은한 배경 조명. JavaScript를 꺼도 콘텐츠와 링크를 사용할 수 있습니다.
- `favicon.svg`: Ethan 모노그램 아이콘.

CSS와 JavaScript 주소의 `?v=` 값은 파일 내용의 SHA-256 앞 12자리입니다. 파일을 변경하면 `index.html`의 해당 버전도 갱신해 이전 브라우저 캐시가 사용되지 않도록 합니다.

이름, 역할, 소개는 프로필과 소개 섹션에서 교체하고, 경력은 기간·역할·소속·설명을 입력합니다. 실제 프로젝트를 추가할 때는 준비 중인 카드를 링크 카드로 바꾸고 이미지·설명·사용 기술을 채웁니다. GitHub 링크는 DevUknow 계정과 현재 저장소를 가리킵니다.

원본의 코드, 개인 이력, 이미지를 가져오지 않고 레이아웃을 참고해 새로 구현했으며, 페이지 하단에 참고 사이트를 표시했습니다.

## GitHub Pages

저장소의 **Settings → Pages → Deploy from a branch**에서 **main** 브랜치와 **/(root)**를 선택합니다. 이후 `main`에 푸시한 변경 사항은 GitHub Pages에서 자동으로 게시됩니다.

기본 게시 주소: https://devuknow.github.io/Ethan_Portfolio/

`.nojekyll` 파일은 Jekyll 변환 없이 정적 파일을 그대로 게시하도록 지정합니다.
