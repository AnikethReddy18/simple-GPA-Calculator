import CourseSelect from "./components/CourseSelect";
import { useState } from "react";

function App() {
  const [courseComponents, setCourseComponents] = useState([<CourseSelect key={0}/>]);

  function handleClickAddCourseButton(){
    setCourseComponents((prev)=>[...prev, <CourseSelect key={prev.length}/>])
  }
  return (
    <>
    <div>
      {courseComponents}
    </div>
      <button onClick={handleClickAddCourseButton}>Add Course</button>
    </>
  );
}

export default App;

