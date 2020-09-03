import React from 'react';
import InputText from './InputText';
import CloseButton from './closeButton';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { editable: false };
    this.toggleEditable = this.toggleEditable.bind(this);
    this.changeTitle = this.changeTitle.bind(this);
  }

  changeTitle(title) {
    this.setState((prevState) => ({ editable: !this.state.editable }));
    this.props.changeTitle(title);
  }

  toggleEditable(event) {
    this.setState((prevState) => ({ editable: !this.state.editable }));
  }

  render() {
    return this.state.editable ? (
      <InputText
        defaultValue={this.props.title}
        submitHandler={this.changeTitle}
      />
    ) : (
      <div className='left-text flex'>
        <h3 onClick={this.toggleEditable}>{this.props.title}</h3>
        <CloseButton onClick={this.props.deleteTitle} />
      </div>
    );
  }
}

export default Header;
