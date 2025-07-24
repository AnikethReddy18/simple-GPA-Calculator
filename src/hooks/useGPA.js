import { useState, useEffect, useCallback } from 'react';

const calculateGPA = (courses) => {
  const totalPoints = courses.reduce((acc, course) => acc + course.grade * course.credits, 0);
  const totalCredits = courses.reduce((acc, course) => acc + course.credits, 0);
  return totalCredits > 0 ? (totalPoints / totalCredits) : 0;
};

export const useGPA = () => {
  const [courses, setCourses] = useState([{ id: 0, grade: 9, credits: 4 }]);
  const [gpa, setGPA] = useState(0);

  useEffect(() => {
    setGPA(calculateGPA(courses));
  }, [courses]);

  const addCourse = () => {
    setCourses(prevCourses => [
      ...prevCourses,
      { id: prevCourses.length, grade: 9, credits: 4 }
    ]);
  };

  const updateCourse = (id, updatedCourse) => {
    setCourses(prevCourses =>
      prevCourses.map(course =>
        course.id === id ? { ...course, ...updatedCourse } : course
      )
    );
  };

  const removeCourse = (id) => {
    setCourses(prevCourses => prevCourses.filter(course => course.id !== id));
  }

  return { courses, gpa, addCourse, updateCourse, removeCourse };
};