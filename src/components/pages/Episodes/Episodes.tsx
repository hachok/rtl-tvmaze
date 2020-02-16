import React, { useEffect } from 'react';
import { thunkGetEpisodesById } from 'src/thunks/show.thunk';
import { useDispatch, useSelector } from 'react-redux';
import { MatchProps } from 'src/types/global.types';
import { getEpisodes } from 'src/selectors/show.selectors';

const Episodes = ({ match: { params } }: MatchProps) => {
  const dispatch = useDispatch();
  const episodes = useSelector(getEpisodes);

  useEffect(() => {
    if (!episodes.length && params.id) {
      dispatch(thunkGetEpisodesById(params.id));
    }
  }, [dispatch, params.id]);

  return <div className="App">episodes page</div>;
};

export default Episodes;
