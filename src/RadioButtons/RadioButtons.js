import { Component } from 'react';
import './RadioButtons.css';
import Panel from '../components/Panel/Panel.js';
import Button from '../components/Button/Button.js';

class RadioButtons extends Component {
  static cloneArrayOfObjs(arr) {
    return arr.map(obj => ({...obj}));
  }

  constructor(props) {
    super(props);

    // create a clone of prop data for initializing buttonData state
    const { buttonData } = this.props; 
    const clonedButtonData = RadioButtons.cloneArrayOfObjs(buttonData);

    this.state = { buttonData: clonedButtonData}

    this.toggle = this.toggle.bind(this);
  }

  toggle(e) {
    const { target: { value } = {} } = e;
    const { buttonData } = this.state;

    const newState = RadioButtons.cloneArrayOfObjs(buttonData);
    newState.forEach((obj) => {
      if (obj[value] === true) {
        obj[value] = false;
      } else if (obj[value] === false) {
        obj[value] = true;
      }
    });
    
    this.setState({ buttonData: newState });
  }

  render () {
    const { buttonData } = this.state;
    return buttonData.map((datum) => {
      const { 0: buttonText } = Object.keys(datum) || [];
      const value = datum[buttonText];
      
      const isActive = value === true;
      const isDisabled = value === null;

      const cls = `${isActive ? "active" : ""} radio-button`;

      return (
        <Panel key={buttonText}>
          <Button {...{ cls }} onClick={this.toggle} disabled={isDisabled} value={buttonText} text={buttonText} />
        </Panel>
      );
    });
  }
}
RadioButtons.defaultProps = {
  buttonData: [{ "Apple": true }, { "Pear": false }, { "Orange": null }]
}

export default RadioButtons;
