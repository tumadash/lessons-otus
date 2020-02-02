import React, {useState} from 'react';
import {RightButtons, TextInputGuest} from '../components'
import {ListItem} from 'react-native-elements';
import {Animated, StyleSheet} from 'react-native';

export const Item = ({toAbout, editGuest, deleteGuest, item, selected, onSelect, checkGuest}) => {
    const {name, id, isChecked} = item;
    const [text, setText] = useState(name);
    let opacity = new Animated.Value(1);
    const deleteItem = ({id, isChecked}) => {
        Animated.timing(opacity, {
            toValue: 0,
            duration: 300,
        }).start(() => deleteGuest({id, isChecked}));
    };
    const save = () => {
        editGuest({id: selected, name: text, isChecked: isChecked});
        onSelect('');
    };
    return (<Animated.View style={{opacity: opacity}}>
            {selected === id ?
                <TextInputGuest placeholder="Введите имя гостя"
                                onChangeText={setText}
                                value={text}
                                onBlur={save}
                /> : <ListItem titleStyle={styles.inputItem}
                               key={id}
                               title={name}
                               bottomDivider
                               onLongPress={() => onSelect(id)}
                               rightElement={<RightButtons toAbout={toAbout}
                                                           deleteGuest={deleteItem}
                                                           guest={item}
                                                           checkGuest={checkGuest}/>}>

                </ListItem>}
        </Animated.View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
    },
    inputItem: {
        fontSize: 24,
    }
});
