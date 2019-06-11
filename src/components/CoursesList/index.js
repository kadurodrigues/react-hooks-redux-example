import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

export default function CoursesList() {
  const courses = useSelector(state => state.data);
  const dispatch = useDispatch();

  function addCourse() {
    dispatch({
      type: 'ADD_COURSE',
      title: 'Express'
    });
  }

  return (
    <>
      <ul>
        {courses.map(course => (
          <li key={course}>{course}</li>
        ))}
      </ul>
      <button type="button" onClick={addCourse}>
        Add other Course
      </button>
    </>
  );
}
