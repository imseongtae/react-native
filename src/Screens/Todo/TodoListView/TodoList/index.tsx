import React, {useContext} from 'react';
import {FlatList} from 'react-native';
import Styled from 'styled-components/native';

import {TodoListContext} from '~/Context/TodoListContext';

import EmptyItem from './EmptyItem';
import TodoItem from './TodoItem';

// 리액트 네이티브 리스트 뷰 중 하나인 FlatList 컴포넌트를 사용하여
// TodoList 컴포넌트를 만듦
const Container = Styled(FlatList)`
`;

interface Props {}

const TodoList = ({}: Props) => {
  // 함수형 컴포넌트에서 Context를 사용하기 위해서는
  // 리액트 훅의 useContext 함수를 불러와, 사용하고자 하는 Context를 초기값으로 설정하고
  // 해당 Context에서 사용하고자 하는 값들을 불러와 사용할 수 있음
  const {todoList, removeTodoList} = useContext<ITodoListContext>(
    TodoListContext,
  );
  return (
    // FlatList 컴포넌트는 아래처럼 Props를 전달하여 사용가능
    <Container
      data={todoList}
      keyExtractor={(item, index) => {
        return `todo-${index}`;
      }}
      ListEmptyComponent={<EmptyItem />}
      renderItem={({item, index}) => (
        <TodoItem
          text={item as string}
          onDelete={() => removeTodoList(index)}
        />
      )}
      contentContainerStyle={todoList.length === 0 && {flex: 1}}
    />
  );
};

// FlatList 컴포넌트는 아래처럼 Props를 전달하여 사용가능
/*
 * data: 리스트 뷰에 표시할 데이터의 배열
 * keyExtractor: 리액트에서 반복적으로 표시하는 Item에 키값을 설정하기 위한 Props
 * ListEmptyComponent: 주어진 배열에 데이터가 없을 경우 표시되는 컴포넌트
 * renderItem: 주어진 배열에 데이터를 사용하여 반복적으로 표시될 컴포넌트
 * contentContainerStyle: 데이터가 없는 경우 ListEmptyComponent가 화면에 표시되는데 이를 전체화면으로 표현하기 위해 flex: 1 설정
 */

export default TodoList;
