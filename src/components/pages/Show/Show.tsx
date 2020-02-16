import React, { Fragment, useEffect } from 'react';
import { thunkGetShowById } from 'src/thunks/show.thunk';
import { MatchProps } from 'src/types/global.types';
import { useDispatch, useSelector } from 'react-redux';
import { getShow } from 'src/selectors/show.selectors';

const Show = ({ match: {params} }: MatchProps) => {
  const dispatch = useDispatch();
  const { id, name, summary, image } = useSelector(getShow);

  useEffect(() => {
    if (!id && params.id) {
      dispatch(thunkGetShowById(params.id));
    }
  }, [dispatch, params.id, id]);

  return (
    <div>
      {id && (
        <Fragment>
          {name}
          {summary}
          {image.medium}
        </Fragment>
      )}
    </div>
  );
};

export default Show;
