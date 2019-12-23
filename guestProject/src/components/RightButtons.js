import React from 'react';
import {CheckBox, Icon} from 'react-native-elements';

export default RightButtons = ({deleteGuest, id, isChecked, checkGuest}) => {
    return (
        <>
            <CheckBox
                center
                checked={isChecked}
                onPress={() => {
                    checkGuest(id);
                }}
            />
            <Icon onPress={() => {
                deleteGuest(id);
            }}
                  name='close'
                  type="evilicon"
                  color='#ef3900'></Icon>
        </>);

};
