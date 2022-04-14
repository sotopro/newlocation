import {PLACES} from '../types';
import RNFS from 'react-native-fs';
import {insertPlace, fetchPlaces} from '../../db/index';

const {ADD_PLACE, LOAD_PLACE} = PLACES;

export default {
  addPlace: (name, image, address, latitude, longitude) => {
    return async dispatch => {
      const fileName = image.split('/').pop();
      const Path = `file://${RNFS.DocumentDirectoryPath}/${fileName}`;

      try {
        await RNFS.copyFile(image, Path);

        const result = await insertPlace(
          name,
          Path,
          address,
          latitude,
          longitude,
        );
        dispatch({
          type: ADD_PLACE,
          place: {
            id: result.insertId,
            name,
            image: Path,
            address,
            latitude,
            longitude,
          },
        });
      } catch (err) {
        console.log(err);
      }
    };
  },
  loadPlace: () => {
    return async dispatch => {
      try {
        const result = await fetchPlaces();
        dispatch({
          type: LOAD_PLACE,
          place: result,
        });
      } catch (err) {
        console.log(err);
      }
    };
  },
};
