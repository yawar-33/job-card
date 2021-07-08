import React from 'react'

function ShiftTimming(props) {
  return (
    <>
      <h5 className="modal-title" id="exampleModalLabel">
        Schedule Working Day and Shift Timming
      </h5>
      <div className="row">
        <div className="col-md-12">
          <div className="form-group">
            <button className="btn btn-primary spacing" type="submit" disabled>
              S
            </button>
            <button
              className="btn btn-primary spacing"
              type="submit"
              onClick={() => props.dayHandler('M')}
            >
              M
            </button>
            <button
              className="btn btn-primary spacing"
              type="submit"
              onClick={() => props.dayHandler('T')}
            >
              T
            </button>
            <button
              className="btn btn-primary spacing"
              type="submit"
              onClick={() => props.dayHandler('W')}
            >
              W
            </button>
            <button
              className="btn btn-primary spacing"
              type="submit"
              onClick={() => props.dayHandler('Tu')}
            >
              T
            </button>
            <button
              className="btn btn-primary spacing"
              type="submit"
              onClick={() => props.dayHandler('F')}
            >
              F
            </button>{' '}
            <button className="btn btn-primary spacing" type="submit" disabled>
              S
            </button>
          </div>
        </div>

        <div className="col-md-6 my-1">
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text">Sunday</div>
            </div>

            <input
              type="text"
              className="form-control"
              id="sundayStTime"
              placeholder="9:00AM"
              disabled={true}
              name="sundayStTime"
              value={props.model.sundayStTime}
              onChange={props.handleChange}
            />
            <input
              type="text"
              className="form-control"
              id="sundayEnTime"
              placeholder="5:00PM"
              disabled={true}
              name="sundayEnTime"
              value={props.model.sundayEnTime}
              onChange={props.handleChange}
            />
          </div>
        </div>
        <div className="col-md-6 my-1">
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text">Monday</div>
            </div>

            <input
              disabled={props.day1 === 'M' || props.day2 === 'M' ? false : true}
              type="text"
              className="form-control"
              id="mondayStTime"
              placeholder="9:00AM"
              name="mondayStTime"
              value={props.model.mondayStTime}
              onChange={props.handleChange}
            />

            <input
              disabled={props.day1 === 'M' || props.day2 === 'M' ? false : true}
              type="text"
              className="form-control"
              id="mondayEnTime"
              placeholder="5:00PM"
              name="mondayEnTime"
              value={props.model.mondayEnTime}
              onChange={props.handleChange}
            />
            {props.validation.valSameTime}
          </div>
        </div>
        <div className="col-md-6 my-1">
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text">Tuesday</div>
            </div>
            <input
              disabled={props.day1 === 'T' || props.day2 === 'T' ? false : true}
              type="text"
              className="form-control"
              id="tuesStTime"
              placeholder="9:00AM"
              name="tuesStTime"
              value={props.model.tuesStTime}
              onChange={props.handleChange}
            />
            <input
              disabled={props.day1 === 'T' || props.day2 === 'T' ? false : true}
              type="text"
              className="form-control"
              id="tuesEnTime"
              placeholder="5:00PM"
              name="tuesEnTime"
              value={props.model.tuesEnTime}
              onChange={props.handleChange}
            />
          </div>
        </div>

        <div className="col-md-6 my-1">
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text">Wednesday</div>
            </div>
            <input
              disabled={props.day1 === 'W' || props.day2 === 'W' ? false : true}
              type="text"
              className="form-control"
              id="wedStTime"
              placeholder="9:00AM"
              name="wedStTime"
              value={props.model.wedStTime}
              onChange={props.handleChange}
            />
            <input
              disabled={props.day1 === 'W' || props.day2 === 'W' ? false : true}
              type="text"
              className="form-control"
              id="wedEnTime"
              placeholder="5:00PM"
              name="wedEnTime"
              value={props.model.wedEnTime}
              onChange={props.handleChange}
            />
          </div>
        </div>

        <div className="col-md-6 my-1">
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text">Thusday</div>
            </div>
            <input
              disabled={
                props.day1 === 'Tu' || props.day2 === 'Tu' ? false : true
              }
              type="text"
              className="form-control"
              id="thusStTime"
              placeholder="9:00AM"
              name="thusStTime"
              value={props.model.thusStTime}
              onChange={props.handleChange}
            />
            <input
              disabled={
                props.day1 === 'Tu' || props.day2 === 'Tu' ? false : true
              }
              type="text"
              className="form-control"
              id="thusEnTime"
              placeholder="5:00PM"
              name="thusEnTime"
              value={props.model.thusEnTime}
              onChange={props.handleChange}
            />
          </div>
        </div>
        <div className="col-md-6 my-1">
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text">Friday</div>
            </div>
            <input
              disabled={props.day1 === 'F' || props.day2 === 'F' ? false : true}
              type="text"
              className="form-control"
              id="friStTime"
              placeholder="9:00AM"
              name="friStTime"
              value={props.model.friStTime}
              onChange={props.handleChange}
            />
            <input
              disabled={props.day1 === 'F' || props.day2 === 'F' ? false : true}
              type="text"
              className="form-control"
              id="friEnTime"
              placeholder="5:00PM"
              name="friEnTime"
              value={props.model.friEnTime}
              onChange={props.handleChange}
            />
          </div>
        </div>
        <div className="col-md-6 my-1">
          <div className="input-group">
            <div className="input-group-prepend">
              <div className="input-group-text">Saturday</div>
            </div>
            <input
              type="text"
              className="form-control"
              id="saturStTime"
              placeholder="9:00AM"
              disabled={true}
              name="saturStTime"
              value={props.model.saturStTime}
              onChange={props.handleChange}
            />
            <input
              type="text"
              className="form-control"
              id="saturEnTime"
              placeholder="5:00PM"
              disabled={true}
              name="saturEnTime"
              value={props.model.saturEnTime}
              onChange={props.handleChange}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default ShiftTimming
