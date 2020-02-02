import React from 'react';
import {SafeAreaView} from 'react-native';
import styled from 'styled-components';
import {AddGuest, FilterGuest, ListGuest} from "./containers";
import {connect} from "react-redux";
import {VisibilityFilters} from "./store/filter/actions";

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

function calcAllGuest(filter, list) {
    switch (filter) {
        case VisibilityFilters.SHOW_TWO:
            return list.filter(guest => guest.isChecked).length * 2;
        case VisibilityFilters.SHOW_ONE:
            return list.filter(t => !t.isChecked).length;
        default:
            let allGuest = 0;
            for (let i = 0; i < list.length; i++) {
                allGuest = list[i].isChecked ? allGuest + 2 : allGuest + 1;
            }
            return allGuest;
    }
}

const MainScreen = ({allGuests}) => (
    <SafeAreaView>
        <Title>Гости</Title>
        <AddGuest/>
        <CountGuest>Количество гостей: {allGuests}</CountGuest>
        <FilterGuest/>
        <ListGuest/>
    </SafeAreaView>
);

const mapStateToProps = state => ({
    allGuests: calcAllGuest(state.visibilityFilter, state.list)
});
export default connect(
    mapStateToProps
)(MainScreen);