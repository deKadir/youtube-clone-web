import React from 'react';
import './spinner.scss';
export default function Spinner({ loading }) {
  if (!loading) return <div></div>;
  return (
    <div style={style}>
      <div class="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

const style = {
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
};
