import React, {useState} from 'react';
import {connect} from 'react-redux';
import {ButtonGroup} from 'react-native-elements';
import {setVisibilityFilter, VisibilityFilters} from "../store/filter/actions";
import {setTestId} from "../service/test-util";
import {Text} from "react-native";

const FilterGuest = ({list, setVisibilityFilter}) => {
    const [selectedIndex, updateIndex] = useState(0);
    const component1 = () => <Text {...setTestId('allButton')}>Все</Text>;
    const component2 = () =><Text {...setTestId('withPartnerButton')}>С парой</Text>;
    const component3 = () =><Text {...setTestId('withoutPartnerButton')}>Без пары</Text>;
    const buttons = [{element: component1}, {element: component2}, {element: component3}];
    return (
        <ButtonGroup
            onPress={click}
            selectedIndex={selectedIndex}
            buttons={buttons}
        />);

    function click(selectedIndex) {
        switch (selectedIndex) {
            case 0:
                setVisibilityFilter({filter: VisibilityFilters.SHOW_ALL, list});
                break;
            case 1:
                setVisibilityFilter({filter: VisibilityFilters.SHOW_TWO, list});
                break;
            case 2:
                setVisibilityFilter({filter: VisibilityFilters.SHOW_ONE, list});
                break;
        }
        updateIndex(selectedIndex)
    }
};

const mapStateToProps = state => ({list: state.list});
const mapDispatchToProps = dispatch => ({
    setVisibilityFilter: filter => dispatch(setVisibilityFilter(filter))
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterGuest)
