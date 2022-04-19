import React from 'react';
import {View, Image, Text} from 'react-native';
import {MAPS} from '../../../constants/index';
import {styles} from './styles';

const MapsPreview = ({location, style, children}) => {
  const mapPreviewUrl = location
    ? `${MAPS.URL}/staticmap?center=${location.latitude},${location.longitude}&zoom=${MAPS.ZOOM}&size=${MAPS.SIZE}&maptype=${MAPS.MAP_TYPE}&markers=color:blue%7Clabel:S%7C${location.latitude},${location.longitude}&key=${MAPS.API_KEY}`
    : '';

  return (
    <View style={{...styles.container, ...style}}>
      {location ? (
        <Image style={styles.image} source={{uri: mapPreviewUrl}} />
      ) : (
        children
      )}
    </View>
  );
};

export default MapsPreview;
