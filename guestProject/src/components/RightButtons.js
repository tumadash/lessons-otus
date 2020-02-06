import React from 'react';
import {CheckBox, Icon} from 'react-native-elements';
import {setTestId} from "../service/test-util";

export default RightButtons = ({toAbout, deleteGuest, guest, checkGuest}) => {
    return (
        <>
            <CheckBox
                {...setTestId(guest.name + 'Check')}
                checked={guest.isChecked}
                onPress={() => {
                    checkGuest(guest.id);
                }}
            />
            <Icon onPress={() => {
                toAbout(guest);
            }} center
                  name='pencil'
                  type="evilicon"
                  size={36}
                  color='#ef3900'/>
            <Icon onPress={() => {
                deleteGuest(guest);
            }}
                  {...setTestId(guest.name + 'Delete')}
                  name='close'
                  size={36}
                  type="evilicon"
                  color='#ef3900'/>
        </>);

};
