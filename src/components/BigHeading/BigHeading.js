import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './BigHeading.scss';

class BigHeading extends Component {
  static displayName = 'BigHeading';
  static propTypes = {
    iconClass: PropTypes.string,
    title: PropTypes.string,
    tightHeading: PropTypes.bool
  };
  render() {
    const tightHeading = this.props.tightHeading ? ' tight-heading' : '';
    return (
      <div className={`big-headings${tightHeading}`}>
        <div className="bh-icon-circle">
          <div className="bh-icon">
            <i className={this.props.iconClass} aria-hidden="true"></i>
          </div>
        </div>
        <div className="bh-component">
          <span className="bh-description">{this.props.title}</span>
        </div>
      </div>
    );
  }
}

export default BigHeading;