import { useState, useEffect } from "react";

function CourseSelect({index, setData}) {
    const [grade, setGrade] = useState(9);
    const [credits, setCredits] = useState(4);

    useEffect(() => {
        setData((prev)=>{
            return {...prev, [index]: [credits*grade, credits*10]}
        })
    }, [grade, credits])

    return (<div >
        <select defaultValue={9} onChange={(e) => setGrade(Number(e.target.value))}>
            <option value={10}>S</option>
            <option value={9}>A</option>
            <option value={8}>B</option>
            <option value={7}>C</option>
            <option value={6}>D</option>
            <option value={5}>E</option>
        </select>

        <select defaultValue={4} onChange={(e) => setCredits(Number(e.target.value))}>
            <option value={4}>4</option>
            <option value={3}>3</option>
            <option value={2}>2</option>
        </select></div>);
}

export default CourseSelect;