<!-- prettier-ignore -->
# 원티드 프리온보딩

## 도입

1. 폴더구조  
폴더 구조는 아래와 같습니다  

```
src
|-- components
|   |-- Toggle.js
|   |-- Tab.js
|   |-- Slider.js
|   |-- Input.js
|   |-- Dropzone.js
|
|-- image
|   |-- arrow.svg
|   |-- check.svg
|   |-- falseEye.svg
|   |-- trueEye.svg
|
|-- App.js
|-- index.js

```

컴포넌트의 완성도를 위해서 image폴더에 4개의 이미지를 사용했습니다  
App.js에 모든 컴포넌트를 확인하라는 요구사항에 맞추어 components 폴더의 컴포넌트들을 App으로 합쳐주었습니다  

2. 외부 라이브러리  
CSS-in-JS인 emotion/styled를 사용했습니다  
CSS 요소를 따로 만들어서 관리하기보다 리액트와 같이 UI를 한 파일내에서 관리해주는 것이 편하다고 생각했습니다    

---

## 컴포넌트 설명

### Toggle.js

useState hook을 통해 toggle이라는 상태를 boolean 형태로 관리했습니다

- toggle값이 true라면 '기본'이 선택되어지고
- toggle값이 false라면 '상세'가 선택되어집니다.

또 toggle값은 styled-component의 인수로 전달되어 background-color의 변화를 일으킵니다



### Tab.js

toggle.js와 비슷하게 구현했습니다  
 클릭시 변경되야할 css속성들을 styled-component로 전달해서 변화를 일으킨 점이 동일합니다  
 보여야 할 항목들(ex 감자, 고구마, 카레라이스)을 **배열**로 관리해서 반복문으로 button요소를 만들었습니다

상태값은 boolean이 아닌 각각의 **배열**값으로 관리해서 해당 항목이 맞으면 스타일을 바꾸도록 했습니다  
슬라이더 효과를 위해서 가상요소 '::after'를 만들었고 상태값에 따라 left 속성이 변하도록 했습니다

컴포넌트를 읽기 좋게 구현하려 노력했고, css속성도 관련있는 것이라 판단 되는 것들을 연관지어 묶었습니다.



### Slider.js

일반적인 input-range로는 커스텀한 디자인을 꾸며줄 수 없었습니다  
 webkit관련 브라우저에 한해서 apeearance속성을 꺼줌으로 커스텀한 디자인을 만들어서 적용했습니다.

인풋 항목 밑에 단계를 나타내는 박스를 따로 만들어 클릭시 변경 사항이 일어나고 그 값을 state에 저장함으로서 관리했습니다

구현 자체는 간단했으나 css를 커스텀하게 만드는 점에서 많은 것을 배울 수 있었습니다



### Input.js

상태값을 4가지로 구현했습니다.

- form - email, password input의 value값
- touched - blur이벤트를 통해 focus를 해제할 때 오류 메시지를 렌더링하기 위한 boolean값
- validity - email의 유효성을 체크하는 boolean값
- clicked - password의 image를 눌렀는지 확인하는 toggle로서의 boolean값

이메일의 유효성을 체크하기 위해 input값의 change가 있을때마다 정규표현식을 통해 이메일 형식이 맞는지 확인했습니다.  
유효성(validity값)이 틀렸고 그럼에도 email input에서 벗어난다면(touched) 에러 메시지를 보여줄 수 있도록 구현했습니다.  



### Dropzone.js

기본구현은 select요소를 통해 간단하게 만들어낼 수 있지만, 결과가 보여주는 박스와 선택하는 요소의 위치를 따로 잡고, css를 커스텀하게 적용하기 위해서 기본 html의 select요소가 아닌 박스모델을 새로 만들어야한다고 생각했습니다

커스텀한 디자인을 위해 여러 영상을 참조해서 해결했습니다  

커스텀한 디자인을 제외하고서의 포인트는 필터창이었고, 검색 input의 value값과 찾을 대상 항목 target값을 모두 소문자로 변경한 뒤에 일치하는 항목이 있는지 indexOf 함수를 통해 점검했고 일치하는 항목들만 display속성을 유지했습니다  

---



## 느낀점

> 실전에 나가면 숨쉬듯 만들어야 하는 다섯가지 컴포넌트가 있다

과제 공고에 있던 말인데요, 반성하게 되는 계기였습니다  
프론트엔드 개발자를 희망하는 제가 위와 같은 과제를 수월하게 만들어 낼 수 있는가? 라고 한다면 대답은 단연코 no였기 때문입니다   
외부 라이브러리 antd 같은 만들어진 css요소가 아니라면 하나의 기본 폼 요소조차 깊이 있게 이해하고 있는지 반성했습니다  

과제제출로서의 목적이 아닌 프론트엔드 개발자를 꿈꾸기 위한 탄탄한 기본기라 생각하고 고민하고 반복하며 만들었고 나름의 리팩토링도 해 나가며 한단계 성장할 수 있었습니다 감사합니다  
