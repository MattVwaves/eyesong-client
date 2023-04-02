import { useState } from 'react';
import Eye from './Eye';

export default function Decades() {
  return (
    <>
      <div className="App">
        <div className="circle-container">
          <Eye />
        </div>

        <div className="title-container">
          <h1>EYESONG</h1>
        </div>
      </div>
    </>
  );
}
