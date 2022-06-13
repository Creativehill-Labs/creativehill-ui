# creativehill-ui
크리에이티브힐 UI Kit

## 설치전 준비

### @creativehill-labs/* 패키지 설치권한 설정
최상단에 `.npmrc` 파일을 만들어 아래 내용 삽입. (`GITHUB_TOKEN` 자리에는 Github 메뉴 - Settings - Developer settings - Personal access tokens 메뉴에서 `read:packages` 권한이 포함된 토큰을 발급받아 삽입)
```
//npm.pkg.github.com/:_authToken=GITHUB_TOKEN
@creativehill-labs:registry=https://npm.pkg.github.com/
```

## 설치

```bash
yarn add @creativehill-labs/creativehill-ui
```

