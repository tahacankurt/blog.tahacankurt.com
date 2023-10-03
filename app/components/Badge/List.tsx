import React from 'react';
import { IPlaceBadge } from '../../../typings';
import Badge from './Badge';

function BadgeList({ badgeList } : { badgeList:IPlaceBadge[] }) {
  return (
    <div className="absolute -right-3 z-10 flex flex-col">
      {badgeList.map((badge) => (
        <Badge key={badge.id}>
          {badge.name}
        </Badge>
      ))}
    </div>

  );
}

export default BadgeList;
