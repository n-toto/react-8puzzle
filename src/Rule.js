import React from 'react';

class Rule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {cardNumber: 0};
  }

  handleClickRule() {
    this.setState({isModalOpen: true});
  }

  handleClickClose() {
    this.setState({isModalOpen: false});
  }

  render() {
    let modal;
    if (this.state.isModalOpen) {
      modal = (
        <div className='modal'>
          <div className='modal-inner'>
            <div className='modal-header'></div>
            <div className='modal-introduction'>
              <h2>{this.props.name}</h2>
              <p>{this.props.introduction}</p>
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
      <div className='rule-container'>
        <div
          className='rule-item'
          onClick={() => {this.handleClickRule()}}
        >
          <p>{this.props.name}</p>
        </div>
        {modal}
      </div>
    );
  }
}

export default Rule;

