import React from 'react';
import {SafeAreaView} from 'react-native';
import styled from 'styled-components';
import {AddGuest} from "./components/AddGuest";
import {ListGuest} from "./components/ListGuest";

const Title = styled.Text`
  color: white;
  textAlign: center;
  fontSize: 48;
  margin-bottom: 15
`;

export const MainScreen = () => (
    <SafeAreaView>
        <Title>Гости</Title>
        <AddGuest/>
        <ListGuest></ListGuest>
    </SafeAreaView>
);