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

    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
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
        {total > 0 && (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        )}
        {total === 0 && (
          <Notification total={total} massage={'There is no feedback'} />
        )}
      </Section>
    );
  }
}
