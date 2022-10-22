import React, { Component } from 'react';
import FeedbackOptions from './FeedbackOptions';

import { FeedbackTitle } from './Feedback.styled';
import Statistics from './Statistics';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
  };

  handleGoodCounting = () => {
    this.setState({ good: this.state.good + 1 });
  };

  handleNeutralCounting = () => {
    this.setState({ neutral: this.state.neutral + 1 });
  };

  handleBadCounting = () => {
    this.setState({ bad: this.state.bad + 1 });
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((val, item) => (val += item), 0);
  };

  countPositiveFeedbackPercentage = () => {
    const feedbackPercentage =
      (this.state.good * 100) / this.countTotalFeedback();
    const PositiveFeedPercentage = feedbackPercentage.toFixed(1);
    return this.state.good ? PositiveFeedPercentage + '%' : '0%';
  };

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div>
        <FeedbackTitle>Please leave Feedback</FeedbackTitle>

        <FeedbackOptions
          goodFeedBack={this.handleGoodCounting}
          neutralFeedBack={this.handleNeutralCounting}
          badFeedBack={this.handleBadCounting}
        />

        <Statistics
          totalFeedbacks={this.countTotalFeedback()}
          up={good}
          zero={neutral}
          down={bad}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />

        {/* <FeedbackBtn>
          <button type="text" onClick={this.handleGoodCounting}>
            Good
          </button>
          <button type="text" onClick={this.handleNeutralCounting}>
            Neutral
          </button>
          <button type="text" onClick={this.handleBadCounting}>
            Bad
          </button>
        </FeedbackBtn> */}
        {/* <FeedbackStatistics>
          <ul>Statistics</ul>
          <li>Good: {this.state.good}</li>
          <li>Neutral: {this.state.neutral}</li>
          <li>Bad: {this.state.bad} </li>
        </FeedbackStatistics>
        <FeedbackResult>
          <p>TOTAL: {this.countTotalFeedback()}</p>
          <p>
            Positive Feedbacks in %:
            {this.countPositiveFeedbackPercentage()}
          </p>
        </FeedbackResult> */}
      </div>
    );
  }
}

// function EmptyStatisticsPanel() {
//   if (this.countTotalFeedback() > 0) {
//     return <Statistics />;
//   }
//   return 'There is no feedback!';
// }

export default Feedback;
