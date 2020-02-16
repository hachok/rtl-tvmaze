import React from 'react';
import { IEpisode } from 'src/types/show.types';

const EpisodeItem = (episode: IEpisode) => {
  const { url, name, summary, image } = episode;
  return (
    <div className="card">
      <img alt="cover" className="card-image-top" src={image?.medium} />
      <div className="card-body">
        <div>
          <h5 className="card-title">{name}</h5>
          <p dangerouslySetInnerHTML={{ __html: summary }} />
        </div>
        <a href={url} rel="noopener noreferrer" target="_blank" className="btn btn-primary">
          More information
        </a>
      </div>
    </div>
  );
};

export default EpisodeItem;
