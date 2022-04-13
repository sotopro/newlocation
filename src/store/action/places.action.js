import {PLACES} from '../types';
import RNFS from 'react-native-fs';

const {ADD_PLACE} = PLACES;

export default {
  addPlace: (name, image) => {
    return async dispatch => {
      const fileName = image.split('/').pop();
      const Path = `file://${RNFS.DocumentDirectoryPath}/${fileName}`;

      try {
        await RNFS.copyFile(image, Path);
        dispatch({
          type: ADD_PLACE,
          place: {
            name,
            image: Path,
          },
        });
      } catch (err) {
        console.log(err);
      }
    };
  },
};
