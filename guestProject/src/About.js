import React, {useState} from 'react';
import {KeyboardAvoidingView, SafeAreaView, ScrollView, View,} from 'react-native';
import {Button, Input} from 'react-native-elements';

import {connect} from 'react-redux';
import {editGuest} from "./store/list/actions";

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
                        <Input
                            value={aboutText}
                            onChangeText={setAboutText}
                            placeholder="Комментарий"
                            containerStyle={{marginBottom: 20}}
                            onBlur={() => {
                                guest.about = aboutText;
                                editGuest(guest);
                            }}
                        />
                        <Button
                            title="back"
                            onPress={() => {
                                navigation.navigate('Main');
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
