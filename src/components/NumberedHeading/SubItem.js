import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './NumberedHeading.scss';

class SubItem extends Component {
  static displayName = 'SubItem';
  static propTypes = {
    items: PropTypes.array
  };
  render() {
    const items = this.props.items.map((ele, idx) => {
      const subTexts = ele.text.map((el) => {
        return (
          <div className='' key={el}>{el}</div>
        );
      });
      return (
        <div key={ele.title}>
          <span className='sub-title'>
            <span>{ele.title}</span>
            <span className='extra-info'>{ele.extraInfo}</span>
          </span>
          <div className='sub-text'>
            {subTexts}
          </div>
        </div>
      );
    });

    return (
      <div className='sub-item'>
        {items}
      </div>
    );
  }
}

export default SubItem;