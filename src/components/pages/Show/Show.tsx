import React, { useEffect } from 'react';
import { thunkGetShowById } from 'src/thunks/show.thunk';
import { MatchProps } from 'src/types/global.types';
import { useDispatch, useSelector } from 'react-redux';
import { getShow } from 'src/selectors/show.selectors';
import { Link } from 'react-router-dom';

const Show = ({ match: { params } }: MatchProps) => {
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
        <div className="card">
          <img alt="cover" className="card-image-top" src={image.medium} />
          <div className="card-body">
            <div>
              <h5 className="card-title">{name}</h5>
              <p dangerouslySetInnerHTML={{ __html: summary }} />
            </div>
            <Link to={`/show/${id}/episodes`} className="btn btn-primary">
              Episodes
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Show;
