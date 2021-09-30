import { Component } from 'react';
import './Pager.css';

class Pager extends Component {
  constructor(props) {
    super(props);

    this.state = { pageIndex: 1 };

    this.navigateToPage = this.navigateToPage.bind(this);
  }

  navigateToPage(idx) {
    this.setState({ pageIndex: idx });
    console.log("switching to index", idx);
  }

  render() {
    const { totalPages } = this.props;
    const { pageIndex } = this.state;

    if (totalPages <= 0) { return "Cannot create pager with no pages. Pass a valid integer for 'totalPages'."}

    const idxBeforeCurrent = pageIndex - 1;
    const idxAfterCurrent = pageIndex + 1;

    const validPageBeforeCurrent = idxBeforeCurrent >= 0;
    const validPageAfterCurrent = idxAfterCurrent <= totalPages;

    return (
      <div>
        <Arrow isForward disabled={pageIndex === 0} onClick={() => this.navigateToPage(0)}/>
        { validPageBeforeCurrent ? <PagerButton onClick={() => this.navigateToPage(idxBeforeCurrent)} value={idxBeforeCurrent}>{idxBeforeCurrent}</PagerButton>: null}
        <PagerButton onClick={() => this.navigateToPage(pageIndex)} value={pageIndex} active disabled>{pageIndex}</PagerButton>
        { validPageAfterCurrent ? <PagerButton onClick={() => this.navigateToPage(idxAfterCurrent)} value={idxAfterCurrent}>{idxAfterCurrent}</PagerButton>: null}
        <Arrow disabled={pageIndex === totalPages} onClick={() => this.navigateToPage(totalPages)}/>
      </div>
    );
  }
}
Pager.defaultProps = {
  totalPages: 12 // Assuming this will be an integer, but not actually doing any checking here.
}

const PagerButton = ({ value, disabled, active, onClick }) => (<button className={`pager-button ${active ? "active": ""}`}  {...{ disabled, onClick }}>{value}</button>);
const Arrow = ({ isForward, disabled, onClick }) => (<PagerButton value={isForward ? "<" : ">"} {...{ disabled, onClick }}/>);

export default Pager;