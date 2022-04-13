import Place from '../../models/places';
import {PLACES} from '../types/index';

const {ADD_PLACE} = PLACES;

const initialState = {
  places: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLACE:
      const newPlace = new Place(
        Date.now(),
        action.place.name,
        action.place.image,
      );
      return {
        ...state,
        places: state.places.concat(newPlace),
      };
    default:
      return state;
  }
};
