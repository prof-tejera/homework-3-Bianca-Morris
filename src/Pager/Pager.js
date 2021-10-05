import { Component } from 'react';
import './Pager.css';
import Panel from '../components/Panel/Panel.js';
import Button from '../components/Button/Button.js';

class Pager extends Component {
  constructor(props) {
    super(props);

    this.state = { pageIndex: 1 };

    this.navigateToPage = this.navigateToPage.bind(this);
  }

  navigateToPage(idx) {
    this.setState({ pageIndex: idx });
  }

  render() {
    const { totalPages } = this.props;
    const { pageIndex } = this.state;

    if (totalPages <= 0) { return "Cannot create pager with no pages. Pass a valid integer for 'totalPages'."}

    const idxBeforeCurrent = pageIndex - 1;
    const idxAfterCurrent = pageIndex;

    const validPageBeforeCurrent = idxBeforeCurrent >= 1;
    const validPageAfterCurrent = idxAfterCurrent <= totalPages - 1;

    return (
      <Panel>
        <Arrow isForward disabled={pageIndex === 1} onClick={() => this.navigateToPage(1)} cls="pager-button"/>
        { validPageBeforeCurrent ? <Button onClick={() => this.navigateToPage(idxBeforeCurrent)} cls="pager-button" text={idxBeforeCurrent}/>: null}
        <Button onClick={() => this.navigateToPage(pageIndex)} cls="pager-button active" value={pageIndex} active disabled text={pageIndex}/>
        { validPageAfterCurrent ? <Button onClick={() => this.navigateToPage(1 + idxAfterCurrent)} cls="pager-button" text={idxAfterCurrent + 1}/>: null}
        <Arrow disabled={pageIndex === totalPages} onClick={() => this.navigateToPage(totalPages)}/>
      </Panel>
    );
  }
}
Pager.defaultProps = {
  totalPages: 12 // Assuming this will be an integer, but not actually doing any checking.
}

const Arrow = ({ isForward, disabled, onClick }) => (<Button cls="pager-button" text={isForward ? "<" : ">"} {...{ disabled, onClick }}/>);

export default Pager;