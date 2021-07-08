import React from 'react'

import { careerLevel, gender } from '../../utilities/JobsData'
function CandidateType(props) {
  return (
    <>
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="hourlyRate">HourlyRate</label>
            <span className="text-danger">*</span>
            <input
              type="text"
              className="form-control"
              id="hourlyRate"
              name="hourlyRate"
              value={props.model.hourlyRate}
              onChange={props.handleChange}
              onKeyPress={props.KeyPressHandle}
            />
            {props.validation.valhourlyRate}
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="experience">Expected Start Date</label>
            <input
              type="date"
              className="form-control"
              id="expectedStartDate"
              name="expectedStartDate"
              value={props.model.expectedStartDate}
              onChange={props.handleChange}
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="experience">Career Level</label>
            <select
              className="form-control"
              id="careerLevel"
              name="careerLevel"
              value={props.model.careerLevel}
              onChange={props.handleChange}
            >
              {careerLevel.map((row) => {
                return (
                  <option key={row.value} value={row.value}>
                    {row.display}
                  </option>
                )
              })}
            </select>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="experience">Gender</label>

            <select
              className="form-control"
              id="gender"
              name="gender"
              value={props.model.gender}
              onChange={props.handleChange}
            >
              {gender.map((row) => {
                return (
                  <option key={row.value} value={row.value}>
                    {row.display}
                  </option>
                )
              })}
            </select>
          </div>
        </div>
        <div className="col-md-12">
          <div className="form-group">
            <label htmlFor="equipmentSpecification">Equipment</label>
            <textarea
              cols={3}
              rows={3}
              className="form-control"
              id="equipmentSpecification"
              name="equipmentSpecification"
              value={props.model.equipmentSpecification}
              onChange={props.handleChange}
            ></textarea>
          </div>
        </div>
      </div>
    </>
  )
}

export default CandidateType
