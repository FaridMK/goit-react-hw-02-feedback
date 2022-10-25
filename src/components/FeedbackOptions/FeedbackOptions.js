import React from 'react';
import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <>
      <ul className={s.list}>
        {options.map(option => {
          return (
            <li key={option}>
              <button
                className={s.btn}
                onClick={onLeaveFeedback}
                option={option}
              >
                {option}
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
