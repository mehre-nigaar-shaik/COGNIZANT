import "../Stylesheets/mystyle.css";

function percentToDecimal(decimal) {
  return (decimal * 100).toFixed(2) + "%";
}

function calcScore(total, goal) {
  return percentToDecimal(total / goal);
}

function CalculateScore({ Name, School, total, goal }) {
  return (
    <div className="formatstyle">
      <h1>Student Details</h1>

      <p className="Name">
        <b>Name:</b> {Name}
      </p>

      <p className="School">
        <b>School:</b> {School}
      </p>

      <p className="Total">
        <b>Total:</b> {total} Marks
      </p>

      <p className="Score">
        <b>Score:</b> {calcScore(total, goal)}
      </p>
    </div>
  );
}

export default CalculateScore;