import React, { useState } from "react";
import ReactDOM from "react-dom";

const Title = (props) => <h1>{props.name}</h1>;

const Button = (props) => <button onClick={props.onClick}>{props.text}</button>;

const StatisticTable = ({ text, value }) => (
  <tr>
    <td><strong>{text}:</strong></td>
    <td>{value}</td>
  </tr>
);

const Statistic = ({good, neutral, bad}) => {
  const total = good + neutral + bad;
  const average = (good - bad) / total;
  const positive = (good / total) * 100;

  return total === 0 ? (
    <div>
      <div>
        <Title name="Statistics" />
      </div>
      <div>
        <p>No feedback given</p>
      </div>
    </div>
  ) : (
    <div>
      <div>
        <Title name="Statistics" />
      </div>
      <table>
        <tbody>
          <StatisticTable text="Good" value={good} />
          <StatisticTable text="Neutral" value={neutral} />
          <StatisticTable text="Bad" value={bad} />
          <StatisticTable text="All" value={total} />
          <StatisticTable text="Average" value={average} />
          <StatisticTable text="Positive" value={positive + "%"} />
        </tbody>
      </table>
    </div>
  );
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <>
      <div>
        <Title name="Feedback" />
        <Button onClick={() => setGood(good + 1)} text="good" />
        <Button onClick={() => setNeutral(neutral + 1)} text="neutral" />
        <Button onClick={() => setBad(bad + 1)} text="bad" />
      </div>
      <div>
        <Statistic good={good} neutral={neutral} bad={bad} />
      </div>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
