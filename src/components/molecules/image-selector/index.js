import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  Image,
  Alert,
  PermissionsAndroid,
} from 'react-native';
import * as ImagePicker from 'react-native-image-picker';
import {COLORS} from '../../../constants';
import {styles} from './styles';

const ImageSelector = ({onImage}) => {
  const [pickedUri, setPickedUri] = useState();

  const verifyPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CAMERA,
        {
          title: 'New Location  Camera Permission',
          message: 'New Location App needs access to your camera ',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        return true;
      } else {
        return false;
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const handlePickImage = async () => {
    const isCamaraOk = await verifyPermission();
    if (!isCamaraOk) return;

    let options = {
      storageOptions: {
        skipBackup: true,
        path: 'images',
      },
    };

    ImagePicker.launchCamera(options, response => {
      setPickedUri(response.assets[0].uri);
      onImage(response.assets[0].uri);
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.preview}>
        {!pickedUri ? (
          <Text>No image picked yet</Text>
        ) : (
          <Image source={{uri: pickedUri}} style={styles.image} />
        )}
        <Button
          title="Pick Image"
          color={COLORS.primaryColor}
          onPress={handlePickImage}
        />
      </View>
    </View>
  );
};

export default ImageSelector;
