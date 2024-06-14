import './Statistics.css';
export const Statistics = ({ Good, Neutral, Bad, Total, Percentage }) => {
  return (
    <div>
      <p className="review-stats">
        Good: <span>{Good}</span>
      </p>
      <p className="review-stats">
        Neautral: <span>{Neutral}</span>
      </p>
      <p className="review-stats">
        Bad: <span>{Bad}</span>
      </p>
      <p>
        Total: <span>{Total}</span>
      </p>
      <p>
        Percentage: <span>{Percentage.toFixed(0)}%</span>
      </p>
    </div>
  );
};
