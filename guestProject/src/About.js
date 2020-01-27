import React, {useState} from 'react';
import {KeyboardAvoidingView, SafeAreaView, ScrollView, Text, View,} from 'react-native';
import {Button, Input} from 'react-native-elements';

import {connect} from 'react-redux';

class NewPostScreen extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'iiiiii love eat'
        };
    }

    static navigationOptions = {
        headerTitle: () => <Text>New Post</Text>,
        headerRight: () => (
            <Button
                onPress={() => alert('This is a button!')}
                title="Info"
                color="#fff"
            />
        ),
    };

    render() {
        // const {comment, setComment, publish} = this.props;
        return (
            <SafeAreaView>
                <KeyboardAvoidingView behavior="position">
                    <ScrollView keyboardShouldPersistTaps="always">
                        <View>
                            <Input
                                value={this.state.text}
                                // onChangeText={this.setState}
                                placeholder="Комментарий"
                                containerStyle={{marginBottom: 20}}
                            />
                            <Button
                                title="back"
                                onPress={() => {
                                    // publish();
                                    this.props.navigation.navigate('Main');
                                }}
                            />
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView>
            </SafeAreaView>
        );
    }
}

const mapStateToProps = state => {
    return {
        // comment: state.newpost.comment,
    };
};

const mapDispatchToProps = dispatch => ({
    // setComment: text => dispatch(setNewPostComment(text)),
    // publish: () => dispatch(publishPost()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(NewPostScreen);