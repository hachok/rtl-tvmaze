import React, { useEffect } from 'react';
import { thunkGetEpisodesById } from 'src/thunks/show.thunk';
import { useDispatch } from 'react-redux';
import {MatchProps} from 'src/types/global.types';

const Episodes = ({ match }: MatchProps) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(thunkGetEpisodesById(match.params.id));
  }, [dispatch]);

  return <div className="App">show page</div>;
};

export default Episodes;
