# 초보자를 위한 깃허브(GitHub) 업로드 및 웹 배포 가이드

이 가이드는 프로그램 설치부터 회원 가입, 업로드, 그리고 최종 인터넷 주소(URL) 생성까지 한 단계씩 차근차근 진행할 수 있도록 구성되어 있습니다.

---

## 1단계: Git 설치 여부 확인 및 설치하기

Git(깃)은 컴퓨터의 파일 변화를 기록하는 도구입니다. 깃허브에 올리기 위해서는 먼저 내 컴퓨터에 Git이 설치되어 있어야 합니다.

1. **Git 다운로드 페이지**([https://git-scm.com/downloads](https://git-scm.com/downloads))에 접속합니다.
2. **Windows**용 다운로더를 받아 설치합니다. (설정 창이 여러 번 나오는데, 모두 기본값(Next)으로 두고 설치하시면 됩니다.)
3. 설치가 끝난 후, 바탕화면의 빈 곳에서 마우스 우클릭을 했을 때 **`Git Bash Here`** 또는 **`Git GUI Here`** 메뉴가 보이면 정상적으로 설치된 것입니다.

---

## 2단계: Git Bash 열기 및 사용자 정보 등록

컴퓨터에게 "내가 누구인지" 알려주는 사용자 등록 과정입니다. 이 작업은 평생 **처음 딱 한 번만** 하면 됩니다.

1. 바탕화면에 있는 **`웹 명함`** 폴더를 엽니다.
2. 폴더 안 빈 공간에서 마우스 우클릭을 한 뒤 **`Git Bash Here`**를 클릭합니다. (검은색 명령창이 실행됩니다.)
3. 아래의 명령어 두 개를 한 줄씩 입력하고 엔터를 누릅니다. (`이름`과 `이메일` 부분은 본인 정보로 교체하세요.)

```bash
# 1. 깃허브에 표시될 이름 등록 (영문 권장)
git config --global user.name "sunny8079"

# 2. 깃허브 계정에 가입할(또는 가입한) 이메일 주소 등록
git config --global user.email "diaz99kr@gmail.com"
```

> ✅ **완료됨**: 사용자명 `sunny8079`, 이메일 `diaz99kr@gmail.com`으로 등록 완료되었습니다.

> **성공 여부 확인 방법**: `git config --global --list`를 입력하고 엔터를 치면 방금 입력한 이름과 이메일이 화면에 나타납니다.

---

## 3단계: 깃허브(GitHub) 가입 및 저장소(Repository) 생성

인터넷상에 내 파일을 보관할 원격 공간(폴더)을 만드는 과정입니다.

1. **[GitHub 공식 사이트](https://github.com)**에 접속해 회원가입(Sign Up) 및 로그인을 합니다.
2. 메인 화면 우측 상단 또는 좌측의 초록색 **`New`** 버튼(또는 `Create repository` 버튼)을 클릭합니다.
3. 설정값을 다음과 같이 입력합니다:
   - **Repository name** (저장소 이름): `my-resume` (영문과 하이픈만 사용 권장)
   - **Public / Private**: **`Public`**을 선택합니다. (인터넷 주소로 배포하려면 반드시 Public이어야 합니다.)
   - **Initialize this repository with...**: 아래 체크박스들(Add a README file 등)은 **모두 체크하지 않은 상태**로 둡니다.
4. 맨 아래의 초록색 **`Create repository`** 버튼을 클릭합니다.
5. 저장소가 만들어지며 화면에 여러 명령어들이 나타납니다. 이 페이지를 그대로 열어두세요.

---

## 4단계: 내 컴퓨터 폴더와 깃허브 저장소 연결하고 업로드하기

다시 2단계에서 열어둔 **Git Bash** 창으로 돌아옵니다. (창을 닫았다면 `웹 명함` 폴더에서 마우스 우클릭 -> `Git Bash Here`를 다시 열어주세요.)

아래 명령어들을 순서대로 한 줄씩 입력합니다.

### 1. 현재 폴더를 Git 저장소로 초기화하기
```bash
git init
```
*(폴더 내부에 숨겨진 `.git` 폴더가 생성됩니다.)*

### 2. 업로드할 파일들 장바구니에 담기
```bash
git add .
```
*(한 칸 띄고 마침표(.)를 입력해야 현재 폴더의 모든 파일이 담깁니다. 에러 메시지 없이 다음 줄로 넘어가면 성공입니다.)*

### 3. 오늘의 작업 기록 남기기 (박스 포장)
```bash
git commit -m "최초 이력서 업로드"
```

### 4. 기본 브랜치 이름을 main으로 설정하기
```bash
git branch -M main
```

### 5. 내 컴퓨터 폴더와 3단계에서 만든 깃허브 주소 연결하기
```bash
git remote add origin https://github.com/sunny8079/my-resume.git
```

### 6. 파일을 깃허브로 실제로 업로드하기
```bash
git push -u origin main
```

> **💡 중요**: 처음 `git push`를 실행하면 로그인 창(GitHub Sign-in)이 팝업됩니다. **`Sign in with your browser`** 버튼을 누르면 웹 브라우저를 통해 안전하고 편리하게 로그인이 연동됩니다.

업로드가 완료되면 3단계에서 열어두었던 깃허브 페이지를 새로고침 해보세요. 작성한 파일들이 웹사이트 화면에 올라와 있는 것을 볼 수 있습니다!

---

## 5단계: GitHub Pages로 나만의 이력서 사이트 실시간 배포하기

깃허브에서는 올린 HTML 파일을 무료로 웹사이트 주소로 배포해 주는 기능을 기본 제공합니다.

1. 내 깃허브 저장소(`my-resume`) 화면의 우측 상단에서 톱니바퀴 아이콘인 **`Settings`** 메뉴를 클릭합니다.
2. 왼쪽 메뉴 바에서 **`Pages`** 메뉴를 찾아 클릭합니다.
3. **Build and deployment** 섹션 아래의 **Branch** 설정에서:
   - `None`으로 되어 있는 선택창을 클릭하여 **`main`**으로 변경합니다.
   - 우측 폴더 아이콘 창은 **`/(root)`**로 그대로 둔 채 **`Save`** 버튼을 누릅니다.
4. 약 1~2분 정도 기다린 뒤 페이지를 새로고침 하면, Pages 설정 페이지 상단에 **"Your site is live at `https://sunny8079.github.io/my-resume/`"** 라는 인터넷 주소가 나타납니다.
5. 이 주소를 클릭하면 스마트폰이나 전 세계 다른 사람들의 컴퓨터에서도 접속 가능한 나만의 웹 명함이 정상 작동합니다!

---

## 6단계: OG 태그 설정 (SNS 공유 미리보기) ✅ 완료

카카오톡, 페이스북, 링크드인, 트위터(X) 등 SNS에서 명함 링크를 공유할 때 아래와 같이 **제목, 설명, 이미지**가 예쁘게 표시되도록 OG(Open Graph) 태그를 설정했습니다.

### 적용된 OG 태그 목록

| 태그 | 값 | 설명 |
|------|-----|------|
| `og:type` | `website` | 콘텐츠 유형 |
| `og:title` | 진선희 \| 데이터 기획 & 콘텐츠 디자이너 | 공유 시 제목 |
| `og:description` | 11년 금융 데이터 전문성 · 웹디자인기능사 ... | 공유 시 설명문 |
| `og:url` | GitHub Pages 배포 주소 | 대표 URL |
| `og:image` | 정장 사진.png (절대 경로) | 미리보기 이미지 |
| `og:image:width` | 1200 | SNS 권장 너비 |
| `og:image:height` | 630 | SNS 권장 높이 |
| `og:image:type` | image/png | 이미지 형식 |
| `og:image:alt` | 프로필 이미지 설명 | 접근성 대체 텍스트 |
| `og:locale` | ko_KR | 한국어 로케일 |
| `og:site_name` | 진선희 디지털 명함 | 사이트 이름 |
| `twitter:card` | summary_large_image | X(트위터) 대형 이미지 카드 |
| `twitter:image:alt` | 프로필 이미지 설명 | X(트위터) 접근성 |
| `canonical` | GitHub Pages 배포 주소 | 검색엔진 대표 URL |

### ⚠️ 배포 전 반드시 확인할 것

`index.html` 파일 내 **`YOUR_USERNAME`** → `sunny8079`, **`YOUR_REPO`** → `my-resume`으로 총 **5곳**을 변경해야 합니다:

```
해당 위치 (index.html 내):
- og:url        → https://sunny8079.github.io/my-resume/
- og:image      → https://sunny8079.github.io/my-resume/%EC%A0%95%EC%9E%A5%20%EC%82%AC%EC%A7%84.png
- twitter:image → https://sunny8079.github.io/my-resume/%EC%A0%95%EC%9E%A5%20%EC%82%AC%EC%A7%84.png
- canonical     → https://sunny8079.github.io/my-resume/
```

### 💡 배포 후 SNS 미리보기 확인 & 캐시 초기화 방법

| 플랫폼 | 확인/초기화 도구 |
|--------|------------------|
| **카카오톡** | [카카오 공유 디버거](https://developers.kakao.com/tool/debugger/sharing) |
| **페이스북** | [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/) |
| **트위터(X)** | [Twitter Card Validator](https://cards-dev.twitter.com/validator) |
| **링크드인** | [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/) |

> 💡 **팁**: SNS에서 미리보기가 이전 정보로 나오면, 위 도구에서 URL을 입력하고 **"캐시 초기화"** 버튼을 눌러 새로운 OG 정보를 다시 불러오게 해주세요.
