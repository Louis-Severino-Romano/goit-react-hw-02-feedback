import { Component } from 'react';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notifications } from './Notifications/Notifications';

export class App extends Component {
  state = {
    Good: 0,
    Bad: 0,
    Neutral: 0,
  };

  countTotalFeedback = () => {
    const { Good, Neutral, Bad } = this.state;
    return Good + Neutral + Bad;
  };

  countPositiveFeedbackPercentage = () => {
    const Total = this.countTotalFeedback();
    return Math.round((this.state.Good / Total) * 100);
  };

  handleClick = type => {
    this.setState(prevState => ({
      ...prevState,
      [type]: prevState[type] + 1,
    }));
  };

  render() {
    const { Good, Neutral, Bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const Percentage = this.countPositiveFeedbackPercentage();
    const options = ['Good', 'Neutral', 'Bad'];

 
    
    return (
      <div>
        <Section title="Please Leave a Feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.handleClick}
          />
          
        </Section>
        <Section title="Statistics">
        {totalFeedback >0 ?(
          <Statistics
          Good={Good}
          Neutral={Neutral}
          Bad={Bad}
          Total={totalFeedback}
          Percentage={Percentage}
        />
        ):(<Notifications message="There is no feedback" />)}
          
        
        </Section>
      </div>
    );
  }
}
