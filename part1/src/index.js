import React from "react";
import ReactDOM from "react-dom";

const Hello = (props) => {
  return (
    <div>
      <p>
        Hello {props.name}, with {props.age} years old; this is a const attached
        to the main <b>App</b> var
      </p>
    </div>
  );
};

const App = () => {
  console.log("Hello from component");
  const now = new Date();
  const a = 10;
  const b = 20;
  const link = <a href="https://github.com/xNoll/FSOC-20">xNoll's repo</a>;
  const name = "Const";

  return (
    <>
      <h1>Hello world, it is, {now.toString()}</h1>
      <p>{link}</p>
      <Hello name="Visitor" age="32" />
      <Hello name={name} age={a + b} />
    </>
  );
};

ReactDOM.render(
  React.createElement(App, null),
  document.getElementById("root")
);
