function CourseSelect() {
    return ( <div>
          <select defaultValue={9}>
        <option value={10}>S</option>
        <option value={9}>A</option>
        <option value={8}>B</option>
        <option value={7}>C</option>
        <option value={6}>D</option>
        <option value={5}>E</option>
      </select>

      <select defaultValue={4}>
        <option value={4}>4</option>
        <option value={3}>3</option>
        <option value={2}>2</option>
      </select></div> );
}

export default CourseSelect;