
import {Component} from 'react'; 
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';

export class App extends Component {
  state={
    Good:0,
    Bad:0,
    Neutral:0,
  }

  countTotalFeedback = ()=>{
    const {Good, Neutral, Bad}=this.state;
    return Good + Neutral + Bad;
  }

  countPositiveFeedbackPercentage=()=>{
    const Total = this.countTotalFeedback();
    return this.state.Good/Total;
  }

  handleClick=type=>{
    this.setState(prevState=>({
      ...prevState,
      [type]:prevState[type]+1,
    }))

  }

  render() {
    const {Good, Neutral, Bad}=this.state;
    let Total=this.countTotalFeedback();
   
    const options=['Good', 'Neutral', 'Bad'];
    return <div>
      <FeedbackOptions options={options} onLeaveFeedback={this.handleClick}/>
     <Statistics Good={Good} Neutral={Neutral} Bad={Bad} Total={Total}/> 
    </div>;
  }
}