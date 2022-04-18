import React, {useState} from 'react';
import {View, Text, Alert, Button} from 'react-native';
import colors from '../../../constants/colors';
import Geolocation from '@react-native-community/geolocation';
import {PERMISSIONS, request, RESULTS} from 'react-native-permissions';

import {styles} from './styles';

const LocationSelector = ({onLocation}) => {
  const [pickedLocation, setPickedLocation] = useState(null);
  const getLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        console.warn(position);
        const {latitude, longitude} = position.coords;
        const location = {
          latitude,
          longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        };
        setPickedLocation(location);
        onLocation(location);
      },
      error => {
        console.warn('error', error);
        Alert.alert('Can not get location', 'Please try again later', [
          {text: 'Okay'},
        ]);
      },
      {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 3600000,
      },
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.preview}>
        {pickedLocation ? (
          <Text>
            {pickedLocation.latitude}, {pickedLocation.longitude}
          </Text>
        ) : (
          <Text> No location picked yet</Text>
        )}
      </View>
      <Button
        title="Pick Location"
        color={colors.primaryColor}
        onPress={() => getLocation()}
      />
    </View>
  );
};

export default LocationSelector;
