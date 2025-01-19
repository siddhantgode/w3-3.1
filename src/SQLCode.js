import React from 'react';

function SqlCode({ children }) {
  return (
    <div style={{
      color: 'blue', 
      fontWeight: 'bold', 
      backgroundColor: '#e6e6e6', 
      padding: '0 2px', 
      display: 'inline-block' 
    }}>
      {children}
    </div>
  );
}

export default SqlCode;