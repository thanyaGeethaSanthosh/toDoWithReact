import React from 'react';

class InputText extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: this.props.defaultValue || '' };
    this.handleChange = this.handleChange.bind(this);
    this.keyPress = this.keyPress.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  keyPress(event) {
    if (event.key === 'Enter') {
      this.props.submitHandler(this.state.value);
      this.setState((prevState) => ({ value: '' }));
    }
  }

  render() {
    return (
      <input
        className='input-task'
        value={this.state.value}
        onKeyDown={this.keyPress}
        onChange={this.handleChange}
      />
    );
  }
}
export default InputText;
