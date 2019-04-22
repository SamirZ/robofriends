import React from 'react';

const Scroll = ({ children }) => (
  <div
    style={{
      flexGrow: 1,
      display: 'flex',
      flexDirection: 'column',
      minHeight: 0,
      padding: '10px 0'
    }}
  >
    <div
      style={{
        flexGrow: 1,
        overflow: 'auto',
        minHeight: 0
      }}
    >
      {children}
    </div>
  </div>
);

export default Scroll;
