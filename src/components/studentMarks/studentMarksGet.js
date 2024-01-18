function studentMarksGet() {
  return (
    <>
      <h1>Check Student Marks</h1>
      <form>
        <input className="" type="text" placeholder="Rollnumber" />
        <select>
          <option value="">-- Select --</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
        <input type="submit" />
      </form>
    </>
  );
}

export default studentMarksGet;
