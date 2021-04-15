import { useReducer } from 'react';
import axios from 'axios';
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
  const searchShows = async seachTerm => {
    dispatch({ type: SET_LOADING });

    const { data } = await axios.get(
      `http://api.tvmaze.com/search/shows?q=${seachTerm}`
    );

    console.log(data);

    dispatch({
      type: SEARCH_SHOWS,
      payload: data,
    });
  };

  return (
    <ShowsContext.Provider
      value={{
        shows: state.shows,
        singleShow: state.singleShow,
        loading: state.loading,
        searchShows,
      }}
    >
      {props.children}
    </ShowsContext.Provider>
  );
};

export default ShowsState;
