import { type } from '@testing-library/user-event/dist/type';
import {Component} from 'react'; 
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
    let Percentage = this.countPositiveFeedbackPercentage()*100;
    const options=['Good', 'Neutral', 'Bad'];
    return <div>
      {options.map(option=>(
        <button key={option} onClick={()=>this.handleClick(option)}> {option}</button>
      ))};

      <p>Good <span>{Good}</span></p>
      <p>Neautral <span>{Neutral}</span></p>
      <p>Bad <span>{Bad}</span></p>
      <p>Total <span>{Total}</span></p>
      <p>Percentage <span>{Percentage}%</span></p>
    </div>;
  }
}