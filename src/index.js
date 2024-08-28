import React from 'react';
import ReactDOM from 'react-dom';
import Board from './chess';
function Main(){
  return(
    <div>
      <Board/>
    </div>
  )
}
ReactDOM.render(<Main/>,document.getElementById('root'));

