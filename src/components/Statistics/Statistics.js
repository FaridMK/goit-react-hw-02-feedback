import React, { Component } from 'react';
import s from './Statistics.module.css';
import PropTypes from 'prop-types';

export default class Statistics extends Component {
  render() {
    const { bad, good, neutral, total, feedbackPercentage } = this.props;
    return (
      <>
        <ul className={s.list}>
          <li>
            Good: <span>{good}</span>
          </li>
          <li>
            Neutral: <span>{neutral}</span>
          </li>
          <li>
            Bad: <span>{bad}</span>
          </li>
          <li>
            Total: <span>{total}</span>
          </li>
          <li>
            Positive feedback: <span>{feedbackPercentage + '%'}</span>
          </li>
        </ul>
      </>
    );
  }
}

Statistics.propTypes = {
  bad: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  good: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  feedbackPercentage: PropTypes.number.isRequired,
};
