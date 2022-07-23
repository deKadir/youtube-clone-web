import React from 'react';
import './spinner.scss';
export default function Spinner({ loading }) {
  if (!loading) return <div></div>;
  return (
    <div class="lds-ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
