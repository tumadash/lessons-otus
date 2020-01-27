import React, {useEffect, useState} from 'react';
import TextInputGuest from '../components/TextInputGuest'
import {ListItem} from 'react-native-elements';
import RightButtons from "../components/RightButtons";
import {StyleSheet, Animated} from 'react-native';

export function Item({editGuest, deleteGuest, item, selected, onSelect, checkGuest}) {
    const {name, id, isChecked} = item;
    const [text, setText] = useState(name);
    let opacity = new Animated.Value(1);
    const deleteItem  = ({id, isChecked}) => {
        Animated.timing(opacity, {
            toValue: 0,
            duration: 300,
        }).start(()=>{
            deleteGuest({id, isChecked})
        });
    };
    return (<Animated.View style={{ opacity: opacity }}>
            {selected === id ?
                <TextInputGuest placeholder="Введите имя гостя"
                                onChangeText={setText} value={text} onBlur={() => {
                    editGuest({id: selected, name: text, isChecked: isChecked});
                    onSelect('');
                }}
                /> : <ListItem titleStyle={styles.inputItem} key={id}
                               title={name}
                               bottomDivider onLongPress={() => onSelect(id)}
                               rightElement={<RightButtons deleteGuest={deleteItem} id={id}
                                                           isChecked={isChecked}
                                                           checkGuest={checkGuest}/>}>

                </ListItem>}
        </Animated.View>
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
