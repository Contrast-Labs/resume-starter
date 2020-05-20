import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './NameHeader.scss';

class NameHeader extends Component {
  static displayName = 'NameHeader';
  static propTypes = {
    firstName: PropTypes.string,
    lastName: PropTypes.string,
    title: PropTypes.string
  };
  render() {
    return (
      <div className='named-header'>
        <div className='name'>
          {this.props.firstName} <b>{this.props.lastName}</b>
        </div>
        <div className='title'>
          {this.props.title}
        </div>
      </div>
    );
  }
}

export default NameHeader;