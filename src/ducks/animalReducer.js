// initial state
const initialState = {
  animalName: "",
  legsInput: ""
};

// constants
const UPDATE_NAME = "UPDATE_NAME";
const UPDATE_LEGS = "UPDATE_LEGS";

// action creators
export const updateName = animalName => {
  return {
    action: UPDATE_NAME,
    payload: animalName
  };
};
export const updateLegs = legsInput => {
  return {
    action: UPDATE_LEGS,
    payload: legsInput
  };
};

// reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_NAME:
      return { ...state, animalName: action.payload };
    case UPDATE_LEGS:
      return { ...state, legsInput: action.payload };
    default:
      return state;
  }
}
