import React, { useEffect } from 'react';
import { thunkGetShowById } from 'src/thunks/shows.thunk';
import { useDispatch } from 'react-redux';
import { DEFAULT_SHOW_ID } from 'src/constants';
import { MatchProps } from 'src/types/global.types';

const Show = ({ match }: MatchProps) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(thunkGetShowById(match.params.id || DEFAULT_SHOW_ID));
  }, [dispatch, match.params.id]);

  return <div className="App">show page</div>;
};

export default Show;
