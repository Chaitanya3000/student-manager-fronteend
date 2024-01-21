import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function StudentUpdate() {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="details">
      <h1 className="heading">Update Student Details</h1>
      <form>
        <div class="row mb-3">
          <label for="inputEmail3" class="label col-sm-2 col-form-label">
            Student Name
          </label>
          <div class="col-sm-3">
            <input type="text" class="form-control" id="inputEmail3" />
          </div>
        </div>
        <div class="row mb-3">
          <label for="inputEmail3" class="label col-sm-2 col-form-label">
            Roll Number
          </label>
          <div class="col-sm-3">
            <input type="text" class="form-control" id="inputEmail3" />
          </div>
        </div>
        <div class="row mb-3">
          <label for="inputEmail3" class="label col-sm-2 col-form-label">
            Email
          </label>
          <div class="col-sm-3">
            <input type="email" class="form-control" id="inputEmail3" />
          </div>
        </div>
        <div class="row mb-3">
          <label for="inputEmail3" class="label col-sm-2 col-form-label">
            Date of birth
          </label>
          <div class="col-sm-3">
            <DatePicker
              selected={selectedDate}
              onChange={handleDateChange}
              dateFormat="dd/MM/yyyy"
              className="form-control"
              placeholderText="DD/MM/YYYY"
            />
          </div>
        </div>
        <div class="row mb-3">
          <label for="inputEmail3" class="label col-sm-2 col-form-label">
            Address
          </label>
          <div class="col-sm-3">
            <input class="form-control" id="inputEmail3" />
          </div>
        </div>
        <div class="row mb-3">
          <label for="inputEmail3" class="label col-sm-2 col-form-label">
            Course
          </label>
          <div class="col-sm-3">
            <select class="form-select" id="autoSizingSelect">
              <option selected>Choose...</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>
        <div class="row mb-3">
          <label for="inputEmail3" class="label col-sm-2 col-form-label">
            Branch
          </label>
          <div class="col-sm-3">
            <select class="form-select" id="autoSizingSelect">
              <option selected>Choose...</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
        </div>
        <button type="submit" class="btn btn-primary">
          Update
        </button>
      </form>
    </div>
  );
}

export default StudentUpdate;
