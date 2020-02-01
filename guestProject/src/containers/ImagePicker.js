import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Avatar} from 'react-native-elements';
import {connect} from "react-redux";

const ImagePicker = ({user, toProfile}) => {
    const image = {uri: user.photo};
    return (
        <View style={styles.avatar}>
            {image ? <Avatar size={"large"} rounded source={image} onPress={toProfile}/> :
                <Avatar size={"large"} rounded icon={{name: 'user', type: 'font-awesome'}} onPress={toProfile}/>}
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
)(ImagePicker);