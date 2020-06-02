import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import {Button} from 'react-native-elements';
import {connect} from 'react-redux';
import {addGuest} from '../store/list/actions'
import {TextInputGuest} from '../components'
import {setTestId} from "../service/test-util";

const AddGuest = ({dispatch}) => {
    const [text, setText] = useState();

    return (<SafeAreaView>
        <TextInputGuest  {...setTestId('inputText')} placeholder="Введите имя гостя"
                        onChangeText={setText} value={text}
        />
        <Button  {...setTestId('addGuest')} disabled={!text} title={'Добавить'} onPress={add}/>
    </SafeAreaView>);

    function add() {
        setText('');
        dispatch(addGuest(text));
    }
};
export default connect()(AddGuest)

