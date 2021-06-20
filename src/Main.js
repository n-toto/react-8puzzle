import React from 'react';
import Board from './Board';
import Rule from './Rule';

class Main extends React.Component {
  render() {
    const rule = {
        name: 'Rule of the game',
        introduction: '0と隣接する数字をクリックすると位置が入れ替わります．左上から「123456780」の順番に並べたらゲームクリアです',
      }
    return (
      <div className="main">
        <h1>8 Puzzle</h1>
        <div className="rule">
          <Rule
            name={ rule.name }
            introduction={ rule.introduction }
          />
        </div>
        <div className="game-board">
          <Board />
        </div>
      </div>
    );
  }
}

export default Main;
