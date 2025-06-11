import CourseSelect from "./components/CourseSelect";
import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState({0:[36,40]})
  const [gpa, setGPA] = useState(9)

  useEffect(()=>{
    const result = Object.values(data).reduce((acc, curr) => acc + curr[0], 0)
    const total = Object.values(data).reduce((acc, curr) => acc + curr[1], 0)
    setGPA(result/total)
  }, [data])

  const [courseComponents, setCourseComponents] = useState([<CourseSelect index={0} key={0} setData={setData}/>]);

  function handleClickAddCourseButton(){
    setCourseComponents((prev)=>[...prev, <CourseSelect index={prev.length} key={prev.length} setData={setData}/>])
  }

  return (
    <>
    <h1>VIT GPA Calculator</h1>
    <div className="courseComponents">
      {courseComponents}
    </div>
      <button onClick={handleClickAddCourseButton}>Add Course</button>
      <h2>GPA: {gpa*10}</h2>
    </>
  );
}

export default App;

