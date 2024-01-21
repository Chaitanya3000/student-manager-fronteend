import React from 'react'

function StudentUpdate() {
  return (
    <div className='details'>
      <h1 className='heading'>Update Student Details</h1>
      <form>
        <div class="row mb-3">
          <label for="inputEmail3" class="label col-sm-2 col-form-label">
            Student Name
          </label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="inputEmail3" />
          </div>
        </div>
        <div class="row mb-3">
          <label for="inputEmail3" class="label col-sm-2 col-form-label">
            Roll Number
          </label>
          <div class="col-sm-10">
            <input type="text" class="form-control" id="inputEmail3" />
          </div>
        </div>
        <div class="row mb-3">
          <label for="inputEmail3" class="label col-sm-2 col-form-label">
            Email
          </label>
          <div class="col-sm-10">
            <input type="email" class="form-control" id="inputEmail3" />
          </div>
        </div>
        <div class="row mb-3">
          <label for="inputEmail3" class="label col-sm-2 col-form-label">
            Date of birth
          </label>
          <div class="col-sm-10">
            <input class="form-control" id="inputEmail3" />
          </div>
        </div>
        <div class="row mb-3">
          <label for="inputEmail3" class="label col-sm-2 col-form-label">
            Address
          </label>
          <div class="col-sm-10">
            <input class="form-control" id="inputEmail3" />
          </div>
        </div>
        <div class="row mb-3">
          <label for="inputEmail3" class="label col-sm-2 col-form-label">
            Course
          </label>
          <div class="col-sm-10">
            <input class="form-control" id="inputEmail3" />
          </div>
        </div>
        <div class="row mb-3">
          <label for="inputEmail3" class="label col-sm-2 col-form-label">
            Branch
          </label>
          <div class="col-sm-10">
            <input class="form-control" id="inputEmail3" />
          </div>
        </div>
        <button type="submit" class="btn btn-primary">
          Update
        </button>
      </form>
    </div>
  )
}

export default StudentUpdate
