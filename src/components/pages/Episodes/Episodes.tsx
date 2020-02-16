import React, { useEffect } from 'react';
import {thunkGetEpisodesById, thunkGetShowById} from 'src/thunks/show.thunk';
import { useDispatch, useSelector } from 'react-redux';
import { MatchProps } from 'src/types/global.types';
import {getEpisodes, getShow} from 'src/selectors/show.selectors';
import EpisodeItem from 'src/components/pages/Episodes/EpisodeItem/EpisodeItem';
import Header from 'src/components/shared/Header/Header';

const Episodes = ({ match: { params } }: MatchProps) => {
  const dispatch = useDispatch();
  const episodes = useSelector(getEpisodes);
  const show = useSelector(getShow);

  useEffect(() => {
    if (!episodes.length && params.id) {
      dispatch(thunkGetEpisodesById(params.id));
      if (!show.id) {
        dispatch(thunkGetShowById(params.id));
      }
    }
  }, [dispatch, params.id, episodes.length, show.id]);

  return (
    <div>
      <Header backUrl={`/show/${show.id}`}>Episodes of {show.name}</Header>
      <div className="container__row">
        {!!episodes.length &&
          episodes.map((episode) => (
            <div className="container__col-3">
              <EpisodeItem key={episode.id} {...episode} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Episodes;
