import { useGPA } from '../../hooks/useGPA';
import CourseSelect from './components/CourseSelect';

const GPACalculator = () => {
  const { courses, gpa, addCourse, updateCourse, removeCourse } = useGPA();

  return (
    <div className="gpa-calculator">
      <h1>GPA Calculator</h1>
      <div className="course-list">
        {courses.map(course => (
          <CourseSelect
            key={course.id}
            course={course}
            onUpdate={updateCourse}
            onRemove={removeCourse}
          />
        ))}
      </div>
      <button onClick={addCourse} className="add-course-btn">Add Course</button>
      <div className="gpa-result">
        <h2>Your GPA: {gpa.toFixed(2)}</h2>
      </div>
    </div>
  );
};

export default GPACalculator;

