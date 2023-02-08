# 원티드 온보딩 2월 타입스크립트 사전과제

[사전과제 진행 브랜치](https://github.com/leezer94/wanted-pre-onboarding-challenge-fe-2/tree/requirement-pre)

[1주차 과제 진행 브랜치](https://github.com/leezer94/wanted-pre-onboarding-challenge-fe-2/tree/requirement-week-1)

## Document 배포 링크

[배포링크](https://leezer94.github.io/wanted-pre-onboarding-challenge-fe-2/)

## 실행방법

### 설치

```shell
$ npm install
$ npm prepare
```

### 빌드

```shell
$ npm run doc
```

## Dependencies

```json
    "@typescript-eslint/eslint-plugin": "^5.51.0",
    "@typescript-eslint/parser": "^5.51.0",
    "eslint": "^8.33.0",
    "eslint-config-prettier": "^8.6.0",
    "eslint-plugin-prettier": "^4.2.1",
    "husky": "^8.0.0",
    "jsdoc": "^4.0.0",
    "lint-staged": "^13.1.0",
    "prettier": "^2.8.3",
    "typescript": "^4.9.5"
```

## 📝 Requirements

<details>
  <summary>사전과제 기능 요구사항</summary> 
  
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

</details>

<details>
  <summary>1주차 과제 기능 요구사항</summary>
  
- [x] 필요한 데이터를 모두 TypeScript's Interface로 모델링한다.
- [x] 사용되는 모든 함수를 `선언부만` 만든다.
- [x] 함수 및 클래스의 내부는 구현하지 않습니다.
- [x] **Interface만을 따라 작성한 코드가 동작하는 애플리케이션이 되도록 유도하셔야합니다.**

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

</details>
