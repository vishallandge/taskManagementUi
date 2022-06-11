import {
  SELECTED_DATA,
} from "./actionType";

const initialState = {
  selectedData: [
  ]
};
// eslint-disable-next-line import/no-anonymous-default-export
export default function (state = initialState, action) {
  switch (action.type) {
    case SELECTED_DATA: {
      return {
        ...state,
        selectedData: action.payload,
      };
    }
    default:
      return state;
  }
}
