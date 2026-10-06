# Ethan Portfolio

Ethan의 한 페이지 포트폴리오 초안입니다. 별도의 패키지 설치나 빌드 없이 HTML과 CSS로 실행됩니다.

## 로컬 실행

저장소 디렉터리에서 실행합니다.

```sh
python3 -m http.server 8000 --bind 0.0.0.0
```

브라우저에서 서버의 8000 포트로 접속합니다. `index.html`에서 소개와 프로젝트 내용을, `styles.css`에서 디자인을 수정할 수 있습니다. 소개 문구와 두 번째 프로젝트는 추후 교체할 초안이며, GitHub 링크는 DevUknow 계정과 현재 저장소를 가리킵니다.

## GitHub Pages

저장소의 **Settings → Pages → Deploy from a branch**에서 **main** 브랜치와 **/(root)**를 선택합니다. 이후 `main`에 푸시한 변경 사항은 GitHub Pages에서 자동으로 게시됩니다.

기본 게시 주소: https://devuknow.github.io/Ethan_Portfolio/

`.nojekyll` 파일은 Jekyll 변환 없이 정적 파일을 그대로 게시하도록 지정합니다.
