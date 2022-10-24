import React from 'react';
import { FeedbackResult, FeedbackStatistics } from './Feedback.styled';

const Statistics = ({ totalFeedbacks, positivePercentage, up, zero, down }) => (
  <div>
    {totalFeedbacks === 0 ? (
      <p>There is no feedback</p>
    ) : (
      <>
        <FeedbackStatistics>
          <ul>Statistics</ul>
          <li>Good: {up}</li>
          <li>Neutral: {zero}</li>
          <li>Bad: {down} </li>
        </FeedbackStatistics>
        <FeedbackResult>
          <p>TOTAL: {totalFeedbacks}</p>
          <p>
            Positive Feedbacks in:
            {positivePercentage}
          </p>
        </FeedbackResult>
      </>
    )}
  </div>
);

export default Statistics;
