import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import {Button} from 'react-native-elements';
import {connect} from 'react-redux';
import {addGuest} from '../store/list/actions'
import {TextInputGuest} from '../components'

const AddGuest = ({dispatch}) => {
    const [text, setText] = useState();

    return (<SafeAreaView>
        <TextInputGuest placeholder="Введите имя гостя"
                        onChangeText={setText} value={text}
        />
        <Button disabled={!text} title={'Добавить'} onPress={add}/>
    </SafeAreaView>);

    function add() {
        setText('');
        dispatch(addGuest(text));
    }
};
export default connect()(AddGuest)

