import React from "react";

const Header = ({ course }) => (
  <div>
    <h2>{course.name}</h2>
  </div>
);

const Part = ({ part, exercises }) => (
  <p>
    {part}: {exercises}
  </p>
);

const Course = ({ course }) => (
  <div>
    <Header course={course} />
    <Content course={course} />
  </div>
);

const Content = ({ course }) => {
  const totalExercises = course.parts.reduce(
    (accumulate, parts) => accumulate + parts.exercises, 0
  );

  return (
    <div>
      {course.parts.map( part => <Part key={part.id} part={part.name} exercises={part.exercises} />)}
      <p>
        <strong>Number of exercises: {totalExercises}</strong>
      </p>
    </div>
  );
};

export default Course;
