import React from 'react';
import {SafeAreaView} from 'react-native';
import styled from 'styled-components';
import {AddGuest, ListGuest, FilterGuest} from "./containers";
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

const MainScreen = ({}) => (
    <SafeAreaView>
        <Title>Гости</Title>
        <AddGuest/>
        <CountGuest>Количество гостей: {4}</CountGuest>
        <FilterGuest/>
        <ListGuest/>
    </SafeAreaView>
);
// const mapStateToProps = state => ({
//     allGuests: state.allGuests
// });


// export default connect(
//     mapStateToProps,
// )(MainScreen)
export default MainScreen;