import React from 'react';
import Snake from "./components/Snake"
import Food from "./components/Food"



function App() {
  return (
    <div className="game-area">
        <Snake snakeDots={this.state.snakeDots}/>
        <Food dot={this.state.food}/>
    </div>
    )
}

export default App;
