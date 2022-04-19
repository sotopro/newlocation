import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {styles} from './styles';
import MapView, {Marker} from 'react-native-maps';

const Map = () => {
  const [initialRegion, setInitialRegion] = useState(null);

  const handleSelectLocation = ({navigation}) => {};
  return (
    <>
      {initialRegion ? (
        <MapView
          style={styles.container}
          region={initialRegion}
          onPress={handleSelectLocation}>
          {selectedLocation && (
            <Marker title="Selected Location" coordinate={selectedLocation} />
          )}
        </MapView>
      ) : (
        <Text style={styles.loading}>Loading...</Text>
      )}
    </>
  );
};

export default Map;
