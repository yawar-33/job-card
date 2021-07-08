import React from 'react'

function ShiftTimming(props) {
  return (
    <>
      <h5 className="modal-title" id="exampleModalLabel">
        Schedule Working Day and Shift Timming
        <div className="col-md-12">
          <div className="form-group">
            <a className="btn btn-primary" href="#" role="button">
              S
            </a>
            <a className="btn btn-primary" href="#" role="button">
              M
            </a>
            <a className="btn btn-primary" href="#" role="button">
              T
            </a>
            <a className="btn btn-primary" href="#" role="button">
              W
            </a>
            <a className="btn btn-primary" href="#" role="button">
              T
            </a>
            <a className="btn btn-primary" href="#" role="button">
              F
            </a>
            <a className="btn btn-primary" href="#" role="button">
              S
            </a>
          </div>
        </div>
        <div class="input-group mb-3">
          <div class="input-group-prepend">
            <span class="input-group-text" id="basic-addon3">
              https://example.com/users/
            </span>
          </div>
          <input
            type="text"
            class="form-control"
            id="basic-url"
            aria-describedby="basic-addon3"
          />
        </div>
      </h5>
    </>
  )
}

export default ShiftTimming
