import React from 'react';

class Square extends React.Component {
  render() {
    return (
      <button
        className="square"
        onClick={() => {
          this.props.onClick();
        }}
      >
        {this.props.value}
      </button>
    );
  }
}

class Board extends React.Component {
  constructor(props) {
    super(props);
    this.state = { squares: new Array(0, 1, 2, 3, 4, 5, 6, 7, 8), count: 0, isClearModalOpen: false};
  }

  handleClickClose() {
    this.setState({isClearModalOpen: false});
  }

  nextToZero(index1) {
    const index2 = this.state.squares.indexOf(0);
    if ((Math.floor(index1 / 3) === Math.floor(index2 / 3)) && Math.abs(index1 % 3 - index2 % 3) === 1) return true;
    if ((index1 % 3 === index2 % 3) && Math.abs(Math.floor(index1 / 3) - Math.floor(index2 / 3)) === 1) return true;
    return false;
  }

  judge(squares) {
    for(var i = 1; i <= 8; i++) {
      if (squares[i-1] !== i) {
        return false;
      }
    }
    return true;
  }

  renderSquare(i) {
    return <Square 
              value={this.state.squares[i]} 
              onClick = {() => {
                  const clickedNum = this.state.squares[i];
                  const squares = this.state.squares.slice();
                  if (!this.judge(squares) && clickedNum !== 0 && this.nextToZero(i)){
                    squares[i] = 0;
                    squares[this.state.squares.indexOf(0)]= this.state.squares[i];
                    this.setState({squares: squares});
                    this.setState({count: this.state.count+1});
                    if (this.judge(squares)) this.setState({isClearModalOpen: true});
                  }
                  else {
                    console.log("invalid input");
                  }
                  
                }
              }
            />;
  }

  render() {
    let modal;
    if (this.state.isClearModalOpen) {
      modal = (
        <div className='modal'>
          <div className='modal-inner'>
            <div className='modal-header'></div>
            <div className='modal-introduction'>
              <h2>Congratulations!!!</h2>
              <h3>{this.state.count}</h3>
            </div>
            <button
              className='modal-close-btn'
              onClick={() => this.handleClickClose()}
            >
              とじる
            </button>
          </div>
        </div>
      );
    }
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
        <div className="game-info">COUNT : {this.state.count}</div>
        <div className="clear-modal">{modal}</div>

      </div>
    );
  }
}

export default Board;

