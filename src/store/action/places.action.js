import { PLACES } from "../types";

const { ADD_PLACE } = PLACES;

export default {
    addPlace: (name) => {
        return {
            type: ADD_PLACE,
            place: {
                name
            }
        }
    }
}
