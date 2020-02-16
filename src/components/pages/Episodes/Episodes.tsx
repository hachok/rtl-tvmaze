import React, { useEffect } from 'react';
import { thunkGetEpisodesById } from 'src/thunks/shows.thunk';
import { useDispatch } from 'react-redux';
import { DEFAULT_SHOW_ID } from 'src/constants';
import {MatchProps} from 'src/types/global.types';

const Episodes = ({ match }: MatchProps) => {
  const dispatch = useDispatch();
  console.log('match', match.params.id);

  useEffect(() => {
    dispatch(thunkGetEpisodesById(DEFAULT_SHOW_ID));
  }, [dispatch]);

  return <div className="App">show page</div>;
};

export default Episodes;
