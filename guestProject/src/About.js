import React, {useState} from 'react';
import {KeyboardAvoidingView, SafeAreaView, ScrollView, View,} from 'react-native';
import {Button, Icon} from 'react-native-elements';

import {connect} from 'react-redux';
import {editGuest} from "./store/list/actions";
import TextInputGuest from "./components/TextInputGuest";
import Title from "./components/Title";

export function AboutScreen({navigation, list, editGuest}) {
    const id = navigation.getParam('id');
    let guest = list.filter(
        guest => guest.id === id
    )[0];
    const [aboutText, setAboutText] = useState(guest.about);
    return (
        <SafeAreaView>
            <KeyboardAvoidingView behavior="position">
                <ScrollView keyboardShouldPersistTaps="always">
                    <View>
                        <Title>Гость: {guest.name}</Title>
                        <Button
                            buttonStyle={{width: 100, marginBottom: 10}}
                            icon={<Icon name="arrow-back" color="white"/>}
                            title="Назад"
                            onPress={() => {
                                navigation.navigate('Main');
                            }}
                        />
                            <TextInputGuest
                                value={aboutText}
                                onChangeText={setAboutText}
                                placeholder="Комментарий"
                                containerStyle={{marginBottom: 20}}
                                multiline={true}
                                numberOfLines={10}
                                onBlur={() => {
                                    guest.about = aboutText;
                                    editGuest(guest);
                                }}
                            />
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );

}


const mapStateToProps = state => ({
    list: state.list
});

const mapDispatchToProps = dispatch => ({
    editGuest: guest => dispatch(editGuest(guest)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(AboutScreen);
