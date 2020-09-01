import React from 'react';
import InputText from './InputText';

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
      <h3 onClick={this.toggleEditable}>{this.props.title}</h3>
    );
  }
}

export default Header;
