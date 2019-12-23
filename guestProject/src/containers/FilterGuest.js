import React, {useState} from 'react';
import {connect} from 'react-redux';
import {ButtonGroup} from 'react-native-elements';

const FilterGuest = ({dispatch}) => {
    const [selectedIndex, updateIndex] = useState(0);
    const buttons = ['Все', 'С парой', 'Без пары'];
    return (
        <ButtonGroup
            onPress={updateIndex}
            selectedIndex={selectedIndex}
            buttons={buttons}
        />);

};
export default connect()(FilterGuest)