import React from 'react';
import Styled from 'styled-components/native';

const Container = Styled.View`
  flex-direction: row;
  background-color: #FFF;
  margin: 4px 16px;
  padding: 8px 16px;
  border-radius: 8px;
  align-items: center;
`;

const Label = Styled.Text`
  flex: 1;
`;

const DeleteButton = Styled.TouchableOpacity``;
const Icon = Styled.Image`
  width: 24px;
  height: 24px;
`;

interface Props {
  text: string;
  onDelete: () => void;
}

// TodoList 컴포넌트에 데이터가 있을 때,
// 해당 데이터를 표시할 TodoItem 컴포넌트
const TodoItem = ({text, onDelete}: Props) => {
  return (
    <Container>
      <Label>{text}</Label>
      <DeleteButton onPress={onDelete}>
        <Icon source={require('~/Assets/Images/remove.png')} />
      </DeleteButton>
    </Container>
  );
};

export default TodoItem;
