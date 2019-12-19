import styled from "styled-components";
import React from 'react';
import {SafeAreaView} from 'react-native';

const TextInputGuest = styled.TextInput`
  backgroundColor: white
  width: 400;
  border-radius:5
  fontSize: 24;
  alignSelf: center;
  padding:  10px;
  margin-bottom: 15 
`;
const AddButton = styled.Button`
  background: white;
  margin-bottom: 15 
  width: 10
`;
export const AddGuest = () => (
    <SafeAreaView>
        <TextInputGuest placeholder="Введите имя гостя"
        ></TextInputGuest>
        <AddButton title={'Добавить'}></AddButton>

    </SafeAreaView>
);