import React from 'react';

import Avatar from '@components/Avatar';
import './RepoTile.css';
import StarIcon from '@components/StarIcon';
import { RepoItem } from '@store/GitHubStore/types';

export type RepoTileProps = {
  item: RepoItem;
  onClick?: (e: React.MouseEvent) => void;
};

const RepoTile: React.FC<RepoTileProps> = ({ item, onClick }) => {
  return (
    <div className="git-repo-tile git-repo-tile_hover" onClick={onClick}>
      <Avatar
        src={item.owner.avatar_url}
        alt="avatar"
        letter={
          item.owner.login.length
            ? item.owner.login[0].toUpperCase()
            : undefined
        }
      />
      <div className="content">
        <div className="repo-name">{item.name}</div>
        <div className="org-name org-name_hover">{item.owner.login}</div>
        <div className="info">
          <div className="stars">
            <StarIcon />
            <p className="stars__p">{item.stargazers_count}</p>
          </div>
          <div className="date">
            Updated{' '}
            {item.updated_at.slice(8, 10) +
              '.' +
              item.updated_at.slice(5, 7) +
              '.' +
              item.updated_at.slice(0, 4)}
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(RepoTile);
