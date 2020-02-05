import React, {useState} from 'react';
import {connect} from 'react-redux';
import {ButtonGroup} from 'react-native-elements';
import {setVisibilityFilter, VisibilityFilters} from "../store/filter/actions";
import {setTestId} from "../service/test-util";

const FilterGuest = ({list, setVisibilityFilter}) => {
    const [selectedIndex, updateIndex] = useState(0);
    const buttons = ['Все', 'С парой', 'Без пары'];
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