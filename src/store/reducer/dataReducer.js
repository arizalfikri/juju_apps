import { DATA } from "../actions/actionType";
let initialState = {
  data: [],
};

export default function dataReducer(state = initialState, action) {
  switch (action.type) {
    case DATA:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
}
