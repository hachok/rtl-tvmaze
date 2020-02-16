import React, { useEffect } from 'react';
import { thunkGetShowById } from 'src/thunks/show.thunk';
import { MatchProps } from 'src/types/global.types';
import { useDispatch, useSelector } from 'react-redux';
import { getShow } from 'src/selectors/show.selectors';

const Show = ({ match }: MatchProps) => {
  const { id, name, summary, image } = useSelector(getShow);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!id) {
      dispatch(thunkGetShowById(match.params.id));
    }
  }, [dispatch, match.params.id, id]);

  return (
    <div>
        {name}
        {summary}
        {image.medium}
    </div>
  );
};

export default Show;
