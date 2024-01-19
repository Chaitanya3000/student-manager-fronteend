import "./studentMarks.css";

function studentMarksUpdate() {
  return (
    <>
      <div className="marks">
        <h1 className="heading">Update Student Marks</h1>
        <form class="row gy-2 gx-3 align-items-center">
          <div class="col-auto">
            <input
              type="text"
              class="form-control"
              id="autoSizingInput"
              placeholder="Roll No"
            />
          </div>
          <div class="col-auto">
            <select class="form-select" id="autoSizingSelect">
              <option selected>Branch</option>
              <option value="1">CSE</option>
              <option value="2">ECE</option>
              <option value="3">EEE</option>
            </select>
          </div>
          <div class="col-auto">
            <select class="form-select" id="autoSizingSelect">
              <option selected>Semister</option>
              <option value="1">I-1</option>
              <option value="2">I-2</option>
              <option value="3">II-1</option>
              <option value="3">II-2</option>
              <option value="3">III-1</option>
              <option value="3">III-2</option>
              <option value="3">IV-1</option>
              <option value="3">IV-2</option>
            </select>
          </div>
          <div class="col-auto">
            <button type="submit" class="btn btn-primary">
              Get
            </button>
          </div>
        </form>

        <form class="row gy-2 gx-3 align-items-center">
        <div class="col-4">
            <label class="form-label text-white">
              Password
            </label>
            <input
              type="text"
              class="form-control"
              id="autoSizingInput"
              placeholder="Subject1"
            />
          </div>
          <div class="col-12">
            <button type="submit" class="btn btn-primary">
              Update
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default studentMarksUpdate;
