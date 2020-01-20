import React, {useState} from 'react';
import TextInputGuest from '../components/TextInputGuest'
import {ListItem} from 'react-native-elements';
import RightButtons from "../components/RightButtons";
import {StyleSheet} from 'react-native';

export function Item({editGuest, deleteGuest, item, selected, onSelect, checkGuest}) {
    const {name, id, isChecked} = item;
    const [text, setText] = useState(name);

    return (
        selected === id ?
            <TextInputGuest placeholder="Введите имя гостя"
                            onChangeText={setText} value={text} onBlur={() => {
                editGuest({id: selected, name: text, isChecked: isChecked});
                onSelect('');
            }}
            ></TextInputGuest> : <ListItem titleStyle={styles.inputItem} key={id}
                                           title={name}
                                           bottomDivider onLongPress={() => onSelect(id)}
                                           rightElement={<RightButtons deleteGuest={deleteGuest} id={id}
                                                                       isChecked={isChecked}
                                                                       checkGuest={checkGuest}></RightButtons>}>

            </ListItem>
    );
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
    },
    inputItem: {
        fontSize: 24,
    }
});