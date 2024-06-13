import {Component} from 'react'; 
export class App extends Component {
  state={
    good:3,
    bad:0,
    neutral:1,
  }

  countTotalFeedback = ()=>{
    const {good, neutral, bad}=this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage=()=>{
    const Total = this.countTotalFeedback();
    return this.state.good/Total;
  }

  render() {
    const {good, neutral, bad}=this.state;
    let Total=this.countTotalFeedback();
    let Percentage = this.countPositiveFeedbackPercentage()*100;

    return <div>
      <button>Good</button>
      <button>Neutral</button>
      <button>Bad</button>
      <p>Good <span>{good}</span></p>
      <p>Neautral <span>{neutral}</span></p>
      <p>Bad <span>{bad}</span></p>
      <p>Total <span>{Total}</span></p>
      <p>Percentage <span>{Percentage}%</span></p>
    </div>;
  }
}