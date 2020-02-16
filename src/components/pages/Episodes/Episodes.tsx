import React, { Fragment, useEffect } from 'react';
import { thunkGetEpisodesById } from 'src/thunks/show.thunk';
import { useDispatch, useSelector } from 'react-redux';
import { MatchProps } from 'src/types/global.types';
import { getEpisodes } from 'src/selectors/show.selectors';
import EpisodeItem from 'src/components/pages/Episodes/EpisodeItem/EpisodeItem';

const Episodes = ({ match: { params } }: MatchProps) => {
  const dispatch = useDispatch();
  const episodes = useSelector(getEpisodes);

  useEffect(() => {
    if (!episodes.length && params.id) {
      dispatch(thunkGetEpisodesById(params.id));
    }
  }, [dispatch, params.id, episodes.length]);

  return (
    <div className="container__row">
      {episodes.length &&
        episodes.map((episode) => (
          <div className="container__col-3">
            <EpisodeItem key={episode.id} {...episode} />
          </div>
        ))}
    </div>
  );
};

export default Episodes;
