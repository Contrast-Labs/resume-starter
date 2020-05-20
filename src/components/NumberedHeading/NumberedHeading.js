import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SubItem from './SubItem';

import './NumberedHeading.scss';

class NumberedHeading extends Component {
  static displayName = 'NumberedHeading';
  static propTypes = {
    headings: PropTypes.array
  };
  render() {
    const headings = this.props.headings.map((ele, idx) => {
      const bubbleVal = ele.bubble ? ele.bubble : idx + 1;
      const bubbleClass = ele.bubble ? ' bubbleFont' : '';
      return (
        <li key={idx}>
          <span className='line'/>
          <span className={`number${bubbleClass}`}>{bubbleVal}</span>
          <div className='title-block'>
            <div className='heading'>
              <span className='title'>{ele.title}</span>
              <span className='date'>{ele.date}</span>
            </div>
            <SubItem items={ele.subItems} />
          </div>
        </li>
      );
    });

    return (
      <ul className="numbered-headings">
        {headings}
      </ul>
    );
  }
}

export default NumberedHeading;