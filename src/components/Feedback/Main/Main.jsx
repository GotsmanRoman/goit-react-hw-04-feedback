import { useState, useEffect } from 'react';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Statistics } from '../Statistics/Statistics';
import { Section } from '../Section/Section';
import { Notification } from '../Notification/Notification';

import { Container } from './Main.styled';

function Feedback() {
  const [good, voteGood] = useState(0);
  const [neutral, voteNeutral] = useState(0);
  const [bad, voteBad] = useState(0);
  const [total, countTotalFeedback] = useState(0);
  const [positive, countPositiveFeedbackPercentage] = useState(0);

  useEffect(() => {
    countTotalFeedback(good + neutral + bad);
    countPositiveFeedbackPercentage((good / total) * 100 || 0);
  }, [good, bad, neutral, total]);

  const handleClick = event => {
    const { name } = event.target;
    switch (name) {
      case 'good':
        voteGood(prevValue => {
          return prevValue + 1;
        });
        break;
      case 'neutral':
        voteNeutral(prevValue => {
          return prevValue + 1;
        });
        break;
      case 'bad':
        voteBad(prevValue => {
          return prevValue + 1;
        });
        break;
      default:
        return;
    }
  };
  return (
    <Container>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={Object.keys({ good, neutral, bad })}
          onLeaveFeedback={handleClick}
        />
      </Section>
      {total === 0 ? (
        <Notification message="There is no feedback" />
      ) : (
        <Section title={'Statistic'}>
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positive}
          />
        </Section>
      )}
    </Container>
  );
}

export { Feedback };
