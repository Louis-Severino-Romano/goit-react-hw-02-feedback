

export const Statistics = ({Good, Neutral, Bad, Total, Percentage}) => {
    
    
    return (
    <div><p>Good <span>{Good}</span></p>
    <p>Neautral <span>{Neutral}</span></p>
    <p>Bad <span>{Bad}</span></p>
    <p>Total <span>{Total}</span></p>
    <p>Percentage <span>{Percentage}%</span></p>
    </div>
  )
}
