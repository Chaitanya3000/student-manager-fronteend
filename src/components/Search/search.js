import "./search.css";

function search() {
  return (
    <>
      <div className="search-nav1">
        <form action="" className="form1">
          <input type="text" placeholder="Year" />
          <input type="text" placeholder="Roll Number" />
          <input type="submit" />
        </form>
        <form action="" className="form2">
          <input list="branches" placeholder="Branch"/>
          <datalist id="branches">
            <option value="CSE" />
            <option value="ECE" />
            <option value="EEE" />
            <option value="IT" />
            <option value="AI" />
          </datalist>
          <input list="sections" placeholder="Section"/>
          <datalist id="sections">
            <option value="A" />
            <option value="B" />
            <option value="C" />
            <option value="D" />
            <option value="E" />
            <option value="F" />
          </datalist>
          <input type="submit" />
        </form>
      </div>
    </>
  );
}

export default search;
