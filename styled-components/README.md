# styled-components
### 설치 방법
```
yarn add styled-components 
or
npm install styled-components
```

> #### Css-in-JS   
>   - 자바스크립트로 css코드를 작성하는 방식   
>   - props를 통해서 조건부 스타일링 가능하다. 


### GlobalStyles(전역 스타일링)
styled-components -> 해당 컴포넌트에 대한 스타일링

### Sacc(Syntactically Awesome Style Sheets)
> - css를 전통적인 방법보다 효율적으로 사용하기 위해 만들어진 언어.
> - css는 웹 프로젝트 규모가 커지면 커질수록 코드가 복잡해지고 유지보수도 불편하다.
> - 동일한 코드를 복사하고 붙여넣는 과정을 반복해야하고, `Human Error`를 줄여야한다.
> - 코드의 재사용성을 높이고, 가족성 또한 향상시킨다.

#### Sass의 특징 및 예시 소개
- 변수를 사용할 수 있다.
```sass
    $color: #4287f5;
    $borderRadius: 10rem;

  div {
    background: $color;
    border-radius: $borderRadius;
  }
```
- 중첩이 가능하다.
```sass
    label {
      padding: 3% 0;
      width: 100%;
      cursor: pointer;
      color: $colorPoint;
      
      &:hover {
        color: white;
        background-color: $color;
      }
    }
```
- 다른 style 파일을 import 할 수 있다.
  - common.scss
    ```sass
    $color1: #ed5b46;
    $color2: #f26671;
    $color3: #f28585;
    $color4: #feac97;
    ```

  - style.css
    ```scss
    @import "common.scss";
    .box {
      background-color: $color3;
    }
    ``` 
### Reset css
브라우저가 html 요소에 
기본적으로css를 적용하는것을 초기화 시키는 작업

#### 사용방법 
구글에서 reset css를 검색하여
마음에드는 reset css를 복사 후 reset.css 파일을 만들고
react의 시작 페이지에
`import './styles/reset.css';`
를 import하여 사용한다.
