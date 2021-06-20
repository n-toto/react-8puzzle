import React from 'react';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isSubmitted: false,
      username: '',
      hasusernameError: false,
      content : '',
      hasContentError: false,
      
    };
  }

  handleusernameChange(event) {
    const inputValue = event.target.value;
    const isEmpty = inputValue === '';
    this.setState({
      username: inputValue,
      hasusernameError: isEmpty,
    });
  }

  handleContentChange(event) {
    const inputValue = event.target.value;
    const isEmpty = inputValue === '';
    this.setState({
      content: inputValue,
      hasContentError: isEmpty,
    });
  }
 

  handleSubmit() {
    this.setState({isSubmitted: true});
  }

  render() {
    let usernameErrorText;
    if (this.state.hasusernameError) {
      usernameErrorText = (
        <p className='contact-message-error'>
          ユーザ名を入力してください
        </p>
      );
    }
    
    let contentErrorText;
    if (this.state.hasContentError) {
      contentErrorText =  (
      <p className='contact-message-error'>
          感想を入力してください
        </p>);
    }
    
    let contactForm;
    if (this.state.isSubmitted) {
      contactForm = (
        <div className='contact-submit-message'>
          送信完了
        </div>
      );
    } else {
      contactForm = (
        <form onSubmit={() => {this.handleSubmit()}} >
          <p>ユーザ名（必須）</p>
          <input
            value={this.state.username}
            onChange={(event) => {this.handleusernameChange(event)}}
          />
          {usernameErrorText}
          <p>感想（必須）</p>
          <textarea
            value={this.state.content}
            onChange={(event) => {this.handleContentChange(event)}}
          />
          {contentErrorText}
          
          <input
            type='submit'
            value='送信'
          />
        </form>
      );
    }
    
    return (
      <div className='contact-form'>
        {contactForm}
      </div>
    );
  }
}

export default ContactForm;
