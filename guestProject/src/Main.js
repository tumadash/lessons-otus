import React from 'react';
import {SafeAreaView} from 'react-native';
import styled from 'styled-components';
import AddGuest from "./containers/AddGuest";
import ListGuest from "./containers/ListGuest";
import FilterGuest from "./containers/FilterGuest";

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
        <FilterGuest></FilterGuest>
        <ListGuest></ListGuest>
    </SafeAreaView>
);