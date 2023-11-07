# React Hook

## useState
- 가장 기본적인 hook
- 함수형 컴포넌트 내에서 가변적인 상태를 갖게함
### 사용방법
```javascript
const [state, setState] = useState(초기값);
```
### 함수형 업데이트
#### 함수형 업데이트란?   

```javascript
// 기본 업데이트
   // 3번 호출 했으니 +3이 될거같지만...
   // 1씩 증가되는걸 확인할 수 있다.
   setNumber(number + 1);
   setNumber(number + 1);
   setNumber(number + 1);
```
```javascript
    // 함수형 업데이트
    // 하지만 함수형 업데이트를 사용하면 내가 생각했던 +3이 되는걸 확인할 수 있다.
    setNumber((prevState) => prevState + 1);
    setNumber((prevState) => prevState + 1);
    setNumber((prevState) => prevState + 1);
```
일반 업데이트 방식은 버튼을 클릭했을 때 setNumber가 각각 실행되는게 아니라
배치(batch)처리 한다. 즉, onClick을 했을 때 setNumber라는 함수를 세번 호출하지만
리액트는 그 호출을 하나로 모아 최종적으로 한번만 실행한다.

반면에 함수형 업데이트는 세번을 동시에 호출하면, 그 호출을 모아 순차적으로 각각 한번씩 실행 시킨다.

#### 왜 이렇게 만들었냐..?
- 공식 문서
> 리액트는 성능을 위해 setState()를 다일 업데이트로 한꺼번에 처리할 수 있습니다.

불필요한 리렌더링을 방지하기 위해 리액트 성능을 위해 한꺼번에 state를 업데이트 한다.

---

## useEffect
- 렌더링이 될 때 특정한 작업을 수행해야 할 떄 설정하는 훅.
    - 컴포넌트가 화면에 보여졌을 때
    - 컴포넌트가 화면에서 사라졌을 때(return)

### 사용방법
```javascript
useEffect(() => {console.log('hello useEffect!')});
```

### useEffect와 리렌더링
useEffect는 속한 컴포넌트가 화면에 렌더링이 될 때 실행된다. 이런 useEffect의 특징 때문에 의도치 않은 동작을 경험한다.
```javascript
import {useEffect, useState} from "react";

function UseEffect() {
  const [value, setValue] = useState('');
  useEffect(()=>{
    console.log('hello useEffect');})
  return (
      <div>
        <input type="text" value={value} onChange={(e)=>setValue(e.target.value)}/>
      </div>
  );
}

export default UseEffect;
```
input 태그에 어떤 값을 입력할 때 마다 이 컴포넌트는 리렌더링이 된다.
리렌더링 될 때마다 useEffect가 실행되는 문제가 있다. 

> 위 코드의 흐름   
>1. input에 값을 입력한다.
>2. value, 즉 state가 변경된다.
>3. state가 변경되었기 때문에, App 컴포넌트가 리렌더링 된다.
>4. 리렌더링이 되었기 때문에 useEffect가 다시 실행된다.
>5. 1번 → 5번 과정이 계속 순환환다.

### 의존성 배열
#### 의존성 배열(dependency array)란?
useEffect에는 의존성 배열이라는 것이 있다. 
의존성 배열은 "이 배열에 값을 너으면 그 값이 바뀔 때만 useEffect를 실행한다라는 것이다."
```javascript
useEffect(() => {}, [의존성배열])
```
#### 의존성 배열이 빈 배열인 경우
```javascript
  useEffect(() => {
  console.log(`hello useEffect`);
}, []);
```
렌더링 될 때 딱 한번만 실행된다.

#### 의존성 배열에 값이 있는 경우
```javascript
  useEffect(() => {
  console.log(`hello useEffect: ${value}`);
}, [value]);
```
의존성 배열에 있는 state가 변경될 때 마다 실행된다.

### 클린업
#### 클린 업 이란?
컴포넌트가 사라졌을 때 무언가를 실행할 때 사용한다. 이 과정을 클린 업(clean up)이라고 표현한다.

#### 클린 업 사용 방법
```javascript
  useEffect(() => {
  console.log(`hello useEffect`);
  
  return () => {
    console.log('여기가 바로 클린 업');
  }
}, []);
```

---

## useRef
### useRef의 활용방법
- 저장공간으로서의 useRef
- DOM요소 접근 방법으로서의 useRef

### useRef 란?
- DOM 요소에 접근할 수 있도록 하는 React Hook  
javascript에서 DOM 접근하는 방법
```javascript
  const div = document.querySelector('div');
  const p = document.querySelector('p');
```
react에서는 DOM 객체를 선택하기 위해 useRef를 사용하면 된다.

### 사용 방법
```javascript
const ref = useRef('초기값');
console.log(ref); //{current: '초기값'}

ref.current = '변경값';
console.log('변경값');
```
> 설정된 ref 값은 컴포넌트가 계속해서 렌더링 되어도 unmount 전까지 값을 유지한다.
#### 저장공간
- state와 비슷한 역할을 하지만 state는 변화가 일어나면 다시 렌더링이 일어나고 내부 변수는 초기화 된다.
- ref에 저장한 값은 렌더링을 일으키지 않는다. 즉, ref의 값 변화가 일어나도 렌더링으로 인해 내부 변수들이 초기화 되는 것을 막을 수 있다.

#### DOM요소 접근
- 예시) 렌더링 되자마자 특정 input이 focusing 되어야 한다면 useRef를 사용하면 된다.

```javascript
import { useEffect, useRef } from "react";

function UseRef() {
  const idRef = useRef(null);
  useEffect(() => {
    idRef.current.focus();
  }, []);
  return (
    <>
      <div>
        아이디: <input type="text" ref={idRef} />
      </div>
      <div>
        비밀번호: <input type="password" />
      </div>
    </>
  );
}

export default UseRef;
```

---

## useContext
### react context의 필요성
- 부모 -> 자식으로 데이터를 전달해 줄 때 props에 담아 넘겼다
하지만 `부모 -> 자식 -> 그자식 -> 그자식의 자식` 이렇게 깊어지면서 prop drilling 현상이 일어난다.
- prop drilling현상의 문제점은 어떤 컴포넌트로 props가 전달되었는지 파악하기 어렵다.
- 어떤 컴포넌트에서 오류가 발생하면 찾기가 힘들다.

![Untitled.png](..%2F..%2F..%2FLibrary%2FContainers%2Fat.EternalStorms.Yoink%2FData%2FDocuments%2FYoinkPromisedFiles.noIndex%2FyoinkFilePromiseCreationFolder881C002F-F6C8-4638-A3AD-C71994ABAE53%2Fadd881C002F-F6C8-4638-A3AD-C71994ABAE53%2FUntitled.png)

### context API 필수 개념
- createContext: context 생성
- Consumer: context 변화 감지
- Provider: context 전달(to 하위 컴포넌트)

### 코드 구현은 프로젝트내에서 확인
- components/*
- context/*

### 주의 사항
- 렌더링 문제
- useContext를 사용할 떄, Provider에서 제공한 value가 달라진다면 useContext를 사용하고 있는 모든 컴포넌트가 리렝더링 하게 된다.

---

## React.memo
### memo란?
리 렌더가 될때 자식 컴포넌트가 필요치 않은 리 렌더를 하게되는데 이 부분을 잡아주는 역할을 한다.
### 사용 방법 
프로젝트 내에 코드 참고.
```javascript
export default React.memo(Box2);
```

## useCallback
### useCallback 이란?
React.memo는 컴포넌트를 메모제이션 했다면, useCallback은 인자로 들어오는 함수 자체를 기억(메모제이션)한다.

### 사용 방법
프로젝트 내에 코드 참고.
```javascript
  const initCount = useCallback(() => {
  setCount(0);
}, [count]);
```

