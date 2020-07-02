import React, {createContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-community/async-storage';

interface Props {
  children: JSX.Element | Array<JSX.Element>;
}

// createContext를 통해 초기값을 할당하여 Context 생성
// @types/index.d.ts 정의한 타입을 사용하여 타입 지정
const TodoListContext = createContext<ITodoListContext>({
  todoList: [],
  addTodoList: (todo: string): void => {},
  removeTodoList: (index: number): void => {},
});

const TodoListContextProvider = ({children}: Props) => {
  // Context를 사용하기 위해 만든 컴포넌트도 rn 컴포넌트이므로
  // 수정가능한 데이터를 사용하기 위해선 useState를 사용해야 함
  const [todoList, setTodoList] = useState<Array<string>>([]);

  const addTodoList = (todo: string): void => {
    // todoList는 불변값이므로 새로운 변수 list를 생성하여
    // todoList의 모든 데이터를 넣고, 매개변수로 전달받은 새로운 데이터를 추가
    const list = [...todoList, todo];
    // 추가된 데이터를 setTodoList를 통해 State값 변경
    setTodoList(list);
    // setItem은 문자열 형태의 키값으로 데이터를 관리하므로
    // 문자열 배열 데이터를 stringify를 통해 문자열로 변경하여 저장
    AsyncStorage.setItem('todoList', JSON.stringify(list));
  };

  const removeTodoList = (index: number): void => {
    // 불변값인 todoList를 삭제하기 위해 spread로 펼쳐서 list에 복사
    let list = [...todoList];
    list.splice(index, 1);
    setTodoList(list);
    // 값 제거 후 AsyncStorage 업데이트
    AsyncStorage.setItem('todoList', JSON.stringify(list));
  };

  // 앱이 시작될 때 AsyncStorage 저장된 데이터 불러와
  // Context의 값을 초기화하기 위한 함수
  const initData = async () => {
    try {
      const list = await AsyncStorage.getItem('todoList');
      if (list !== null) {
        // AsyncStorage에 사용된 값은 문자열이므로 이 데이터를
        // JSON.parse를 사용하여 문자열 배열로 변경
        setTodoList(JSON.parse(list));
      }
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect가 componentDidMount와 같은 역할을 수행하도록 지시
  // 첫 번째 매개변수에는 함수를 설정하여 역할을 설정
  // 두 번째 매개변수에 빈 배열을 전달하여 componentDidMount와 역할 수행
  // 컴포넌트가 처음 화면에 표시된 이후 useEffect는 한 번만 호출됨
  useEffect(() => {
    initData();
  }, []);

  return (
    <TodoListContext.Provider
      value={{
        todoList,
        addTodoList,
        removeTodoList,
      }}>
      {children}
    </TodoListContext.Provider>
  );
};

export {TodoListContextProvider, TodoListContext};
