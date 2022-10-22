import React from 'react';
import { FeedbackBtn } from './Feedback.styled';

const FeedbackOptions = ({ goodFeedBack, neutralFeedBack, badFeedBack }) => (
  <FeedbackBtn>
    <button type="text" onClick={goodFeedBack}>
      Good
    </button>
    <button type="text" onClick={neutralFeedBack}>
      Neutral
    </button>
    <button type="text" onClick={badFeedBack}>
      Bad
    </button>
  </FeedbackBtn>
);

export default FeedbackOptions;
