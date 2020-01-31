import React, {useState, useCallback} from 'react';
import {Image, View, TouchableOpacity, Text} from 'react-native';
import ImagePickerLib from 'react-native-image-picker';
import {Button, Icon, Avatar} from 'react-native-elements';
const options = {
    title: 'Выберите фото...',
    storageOptions: {
        skipBackup: true,
        path: 'images',
    },
};

export const ImagePicker = () => {
    const [image, setImage] = useState(undefined);
    const pickImage = useCallback(() => {
        ImagePickerLib.showImagePicker(options, response => {
            console.log('Response = ', response);
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                console.log(response);
                const source = {uri: response.uri};
                setImage(source);
            }
        });
    }, []);
    return (
        <View style={{alignItems: 'center'}}>
            {image ? <Avatar size={"large"} rounded source={image} onPress={pickImage}/> :
                <Avatar size={"large"} rounded icon={{name: 'user', type: 'font-awesome'}} onPress={pickImage}/>}
        </View>
    );
};
