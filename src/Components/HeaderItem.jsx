import React from 'react';

function HeaderItem({ name, Icon }) {
  return (
    <div className="header-item">
      <Icon className="header-icon" />
      <span className="header-name">{name}</span>
    </div>
  );
}

export default HeaderItem;