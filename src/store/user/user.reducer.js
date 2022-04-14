export const USER_ACTION_TYPES = {
    SET_CURRENT_USER: "SET_CURRENT_USER",
  };
  
  const INITIAL_STATE = {
    currentUser: null,
  };
  
  export  const userReducer = (state = INITIAL_STATE, action) => {
      // you have to set an initial state for state bc we no longer
      // have the hook useReducer to initialize it for us
    
    const { type, payload } = action;
    switch (type) {
      case USER_ACTION_TYPES.SET_CURRENT_USER:
        return { ...state, currentUser: payload };
      default:
        return state; 
        // bc every reducer fires with all actions its very probable it wont match
        // any case of this reducer. 
        // Returning the same state by default makes Redux know that the reducer didn't change
    }
  };