import React, {useState, useCallback} from 'react';
import {Image, View, TouchableOpacity, Text} from 'react-native';
import ImagePickerLib from 'react-native-image-picker';
import ImageResizer from 'react-native-image-resizer';
import {Button, Icon, Avatar} from 'react-native-elements';
const options = {
    title: 'Select Image',
    customButtons: [{name: 'fb', title: 'Choose Photo from Facebook'}],
    storageOptions: {
        skipBackup: true,
        path: 'images',
    },
};

export const ImagePicker = () => {
    const [image, setImage] = useState(undefined);
    const pickImage = useCallback(() => {
        ImagePickerLib.launchCamera(options, response => {
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
                ImageResizer.createResizedImage(
                    response.uri,
                    response.width / 6,
                    response.height / 6,
                    'JPEG',
                    5,
                ).then(compressed => {
                    const now = String(Date.now());
                    const source = {
                        uri: compressed.uri,
                        width: response.width / 4,
                        height: response.height / 4,
                        name: `${now}.jpg`,
                    };
                    setImage(source);
                });
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
