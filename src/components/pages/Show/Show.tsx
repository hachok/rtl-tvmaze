import React, { Fragment, useEffect } from 'react';
import { thunkGetShowById } from 'src/thunks/show.thunk';
import { MatchProps } from 'src/types/global.types';
import { useDispatch, useSelector } from 'react-redux';
import { getShow } from 'src/selectors/show.selectors';
import { Link } from 'react-router-dom';
import Header from 'src/components/shared/Header/Header';
import './Show.scss';

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
        <Fragment>
          <Header>{name}</Header>
          <div className="show">
            <img alt="cover" className="show-image" src={image.medium} />
            <div className="show-body">
              <div>
                <h5 className="show-title">{name}</h5>
                <p dangerouslySetInnerHTML={{ __html: summary }} />
              </div>
              <div className="show-link">
                <Link to={`/show/${id}/episodes`} className="btn btn-primary">
                  Episodes
                </Link>
              </div>
            </div>
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default Show;
