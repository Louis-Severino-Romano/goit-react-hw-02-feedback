import './FeedbackOptions.css'; 

export const FeedbackOptions = ({options, onLeaveFeedback}) => {
  return (
    <div>{options.map(option=>(
        <button className='colorButton' key={option} onClick={()=>onLeaveFeedback(option)}> {option}</button>
      ))}
</div>
  )
}
