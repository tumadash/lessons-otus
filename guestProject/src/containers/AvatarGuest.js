import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Avatar} from 'react-native-elements';
import {connect} from "react-redux";
import {setTestId} from "../service/test-util";

const AvatarGuest = ({user, toProfile}) => {
    const image = {uri: user.photo};
    return (
        <View style={styles.avatar}>
            {image.uri ? <Avatar size={"large"} rounded source={image} onPress={toProfile} {...setTestId('toProfile')}/> :
                <Avatar size={"large"} rounded icon={{name: 'user', type: 'font-awesome'}} onPress={toProfile} {...setTestId('toProfile')}/>}
        </View>
    );
};

const styles = StyleSheet.create({
    avatar: {
        alignItems: 'flex-end', margin: 5
    }
});


const mapStateToProps = state => ({
    user: state.user
});

export default connect(
    mapStateToProps,
)(AvatarGuest);
