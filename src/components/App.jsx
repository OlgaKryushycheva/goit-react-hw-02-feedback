import { Component } from 'react';

import { Section } from './Section';
import { FeedbackOptions } from './FedbackOptions';
import { Notification } from './Notification';
import { Statistics } from './Statistacs';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = evt => {
    const option = evt.target.name;

    this.setState(
      prevState => ({
        [option]: prevState[option] + 1,
      })

      // (name === 'good' && {
      //   good: prevState.good + 1,
      // }) ||
      // (name === 'neutral' && {
      //   neutral: prevState.neutral + 1,
      // }) ||
      // (name === 'bad' && {
      //   bad: prevState.bad + 1,
      // })
    );
  };

  countTotalFeedback = (good, neutral, bad) => {
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = (good, total) => {
    return Math.round((good * 100) / total);
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback(good, neutral, bad);
    const positivePercentage = this.countPositiveFeedbackPercentage(
      good,
      total
    );

    return (
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={this.handleClick}
        />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          positivePercentage={positivePercentage}
        />
        <Notification total={total} massage={'There is no feedback'} />
      </Section>
    );
  }
}
