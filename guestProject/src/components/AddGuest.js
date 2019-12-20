import styled from "styled-components";
import React, {useState, useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import { connect } from 'react-redux';
import { addGuest } from '../store/list/actions'

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
const AddGuest = ({ dispatch }) => {
    const [text, setText] = useState();

    return (<SafeAreaView>
        <TextInputGuest placeholder="Введите имя гостя"
                        onChangeText={setText} value={text}
        ></TextInputGuest>
        <AddButton title={'Добавить'} onPress={add}></AddButton>

    </SafeAreaView>);

    function add() {
        setText('');
        dispatch(addGuest(text));
    }
};
export default connect()(AddGuest)

