const CourseSelect = ({ course, onUpdate, onRemove }) => {
  const handleGradeChange = (e) => {
    onUpdate(course.id, { grade: Number(e.target.value) });
  };

  const handleCreditsChange = (e) => {
    onUpdate(course.id, { credits: Number(e.target.value) });
  };

  return (
    <div className="course-select">
      <select value={course.grade} onChange={handleGradeChange}>
        <option value={10}>S</option>
        <option value={9}>A</option>
        <option value={8}>B</option>
        <option value={7}>C</option>
        <option value={6}>D</option>
        <option value={5}>E</option>
      </select>
      <select value={course.credits} onChange={handleCreditsChange}>
        <option value={4}>4</option>
        <option value={3}>3</option>
        <option value={2}>2</option>
        <option value={1}>1</option>
      </select>
      <button onClick={() => onRemove(course.id)} className="remove-course-btn">Remove</button>
    </div>
  );
};

export default CourseSelect;
