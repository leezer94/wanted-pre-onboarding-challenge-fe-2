# 원티드 온보딩 2월 타입스크립트 사전과제

## Document 배포 링크
[배포링크](https://leezer94.github.io/wanted-pre-onboarding-challenge-fe-2/)

## 실행방법

### 설치
``` shell
$ npm install
$ npm prepare
```
### 빌드
``` shell
$ npm run doc

```

## 📝 Requirements

- [x] JSDoc을 활용해 문서화한다.
- [x] GitHub Page를 활용해 JSDoc 정적 페이지를 배포한다.

### Todo

```js
Todo {
  아이디(required),
  내용(required),
  완료여부(required),
  카테고리(required),
  태그들(optional),
}
```

### CREATE

- [x] 할 일을 추가할 수 있다.
- [x] 내용없이 추가할 수 없다.

### READ

- [x] 모든 할 일을 조회할 수 있다.
- [x] ID를 기반으로 특정 할 일을 조회할 수 있다.

### UPDATE

- [x] ID를 제외한 모든 속성을 수정할 수 있다.
- [x] 특정 할 일의 특정 태그를 수정할 수 있다.

### DELETE

- [x] ID를 기반으로 특정 할 일을 삭제할 수 있다.
- [x] 모든 할 일을 제거할 수 있다.
- [x] 특정 할 일의 특정 태그를 삭제할 수 있다.
- [x] 특정 할 일의 모든 태그를 제거할 수 있다.

### Modeling (Shape)

```js
Item {
  property(required),
  property(optional),
}
```

## Dependencies

```json
    "eslint": "^8.33.0",
    "eslint-config-prettier": "^8.6.0",
    "eslint-plugin-prettier": "^4.2.1",
    "husky": "^8.0.0",
    "jsdoc": "^4.0.0",
    "lint-staged": "^13.1.0",
    "prettier": "^2.8.3"
```
