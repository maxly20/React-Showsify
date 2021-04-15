import { useReducer } from 'react';
import ShowsContext from './showsContext';
import ShowsReducer from './showsReducer';
import {
  SEARCH_SHOWS,
  SET_LOADING,
  SET_SINGLE_SHOW,
  CLEAR_SINGLE_SHOW,
} from '../types';

const ShowsState = props => {
  const initialState = {
    shows: [],
    singleShow: {},
    loading: false,
  };
  const [state, dispatch] = useReducer(ShowsReducer, initialState);

  // ACTIONS CREATORS
  

  return (
    <ShowsContext.Provider
      value={{
        shows: state.shows,
        singleShow: state.singleShow,
        loading: state.loading,
      }}
    >
      {props.children}
    </ShowsContext.Provider>
  );
};

export default ShowsState;
