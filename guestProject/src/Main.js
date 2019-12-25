import React from 'react';
import {SafeAreaView} from 'react-native';
import styled from 'styled-components';
import AddGuest from "./containers/AddGuest";
import ListGuest from "./containers/ListGuest";
import FilterGuest from "./containers/FilterGuest";
import {connect} from "react-redux";

const Title = styled.Text`
  color: white;
  textAlign: center;
  fontSize: 48;
  margin-bottom: 15
`;
const CountGuest = styled.Text`
  color: white;
  textAlign: center;
  fontSize: 18;
  margin: 15px
`;

const MainScreen = ({allGuests}) => (
    <SafeAreaView>
        <Title>Гости</Title>
        <AddGuest/>
        <CountGuest>Количество гостей: {allGuests}</CountGuest>
        <FilterGuest></FilterGuest>
        <ListGuest></ListGuest>
    </SafeAreaView>
);
const mapStateToProps = state => ({
    allGuests: state.allGuests
});


export default connect(
    mapStateToProps,
)(MainScreen)