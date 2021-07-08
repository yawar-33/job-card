import React, { Component } from 'react'

import JobInformation from './JobInformation'
import CandidateType from './CandidateType'
import ShiftTimming from './ShiftTimming'
export default class AddNewJob extends Component {
  constructor(props) {
    super(props)

    this.initModel = {
      lookingFor: '',
      experience: '',
      education: '',
      skills: '',
      description: '',
      image: '',
      hourlyRate: '',
      expectedStartDate: '',
      careerLevel: 'Entry',
      equipmentSpecification: '',
      gender: 'Male',
      sundayStTime: '',
      mondayStTime: '',
      sundayEnTime: '',
      mondayEnTime: '',
      tuesStTime: '',
      tuesEnTime: '',
      wedStTime: '',
      wedEnTime: '',
      thusStTime: '',
      thusEnTime: '',
      friEnTime: '',
      friStTime: '',
      saturStTime: '',
      saturEnTime: '',
    }
    this.initValidateModel = {
      vallookingFor: '',
      valexperience: '',
      valhourlyRate: '',
      valSameTime: '',

      isvalid: false,
    }
    this.state = {
      editID: this.props.id,
      step: 1,
      initModel: this.props.obj !== undefined ? this.props.obj : this.initModel,
      initValidateModel: this.initValidateModel,
      day1: '',
      day2: '',
    }
  }

  dayClick = (value) => {
    if (this.state.day1 === '') {
      this.setState({ day1: value })
    } else if (this.state.day2 === '') {
      this.setState({ day2: value })
    }
  }
  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({
      initModel: {
        ...this.state.initModel,
        [name]: value,
      },
    })
  }
  handleNumericCheck(event) {
    if (event.charCode >= 48 && event.charCode <= 57) {
      return true
    } else {
      event.preventDefault()
      return false
    }
  }
  Stepper = () => {
    switch (this.state.step) {
      case 1:
        return (
          <JobInformation
            model={this.state.initModel}
            handleChange={(e) => this.handleChange(e)}
            validation={this.state.initValidateModel}
          />
        )
      case 2:
        return (
          <CandidateType
            model={this.state.initModel}
            handleChange={(e) => this.handleChange(e)}
            validation={this.state.initValidateModel}
            KeyPressHandle={(event) => this.handleNumericCheck(event)}
          />
        )
      case 3:
        return (
          <ShiftTimming
            model={this.state.initModel}
            handleChange={(e) => this.handleChange(e)}
            validation={this.state.initValidateModel}
            day1={this.state.day1}
            day2={this.state.day2}
            dayHandler={(value) => this.dayClick(value)}
          />
        )
    }
  }
  validateStep = () => {
    let valModel = { ...this.state.initValidateModel }
    if (this.state.step === 1) {
      if (this.state.initModel.lookingFor === '') {
        valModel.vallookingFor = (
          <div className="invalid-feedback" style={{ display: 'block' }}>
            Enter Job Title
          </div>
        )
        valModel.isvalid = true
      } else {
        valModel.vallookingFor = ''
        valModel.isvalid = false
      }
      if (this.state.initModel.experience === '') {
        valModel.valexperience = (
          <div className="invalid-feedback" style={{ display: 'block' }}>
            Enter Experience
          </div>
        )
        valModel.isvalid = true
      } else {
        valModel.valexperience = ''
        valModel.isvalid = false
      }
      this.setState({
        initValidateModel: valModel,
      })
      if (valModel.isvalid) {
        return true
      }
    }

    if (this.state.step === 2) {
      if (this.state.initModel.hourlyRate === '') {
        valModel.valhourlyRate = (
          <div className="invalid-feedback" style={{ display: 'block' }}>
            Enter Hours
          </div>
        )
        valModel.isvalid = true
      } else if (
        this.state.initModel.hourlyRate !== '' &&
        this.state.initModel.hourlyRate < 10
      ) {
        valModel.valhourlyRate = (
          <div className="invalid-feedback" style={{ display: 'block' }}>
            Value Should be greater then 10
          </div>
        )
        valModel.isvalid = true
      } else {
        valModel.valhourlyRate = ''
        valModel.isvalid = false
      }

      this.setState({
        initValidateModel: valModel,
      })
      if (valModel.isvalid) {
        return true
      }
    }

    if (this.state.step === 3) {
      if (this.state.day1 === '' || this.state.day2 === '') {
        valModel.valSameTime = (
          <div className="invalid-feedback" style={{ display: 'block' }}>
            Select at least 2 days
          </div>
        )
        valModel.isvalid = true
      } else {
        valModel.valSameTime = ''
        valModel.isvalid = false
      }
      this.setState({
        initValidateModel: valModel,
      })
      if (valModel.isvalid) {
        return true
      }
      if (this.state.day1 === 'M' || this.state.day2 === 'M') {
        if (
          this.state.initModel.mondayEnTime === '' ||
          this.state.initModel.mondayStTime === ''
        ) {
          valModel.valSameTime = (
            <div className="invalid-feedback" style={{ display: 'block' }}>
              Select at least 2 days
            </div>
          )
          valModel.isvalid = true
        } else {
          valModel.valSameTime = ''
          valModel.isvalid = false
        }
      }

      if (this.state.day1 === 'T' || this.state.day2 === 'T') {
        if (
          this.state.initModel.tuesEnTime === '' ||
          this.state.initModel.tuesStTime === ''
        ) {
          valModel.valSameTime = (
            <div className="invalid-feedback" style={{ display: 'block' }}>
              Select at least 2 days
            </div>
          )
          valModel.isvalid = true
        } else {
          valModel.valSameTime = ''
          valModel.isvalid = false
        }
      }

      if (this.state.day1 === 'W' || this.state.day2 === 'W') {
        if (
          this.state.initModel.wedEnTime === '' ||
          this.state.initModel.wedStTime === ''
        ) {
          valModel.valSameTime = (
            <div className="invalid-feedback" style={{ display: 'block' }}>
              Select at least 2 days
            </div>
          )
          valModel.isvalid = true
        } else {
          valModel.valSameTime = ''
          valModel.isvalid = false
        }
      }
      if (this.state.day1 === 'Tu' || this.state.day2 === 'Tu') {
        if (
          this.state.initModel.thusEnTime === '' ||
          this.state.initModel.thusStTime === ''
        ) {
          valModel.valSameTime = (
            <div className="invalid-feedback" style={{ display: 'block' }}>
              Select at least 2 days
            </div>
          )
          valModel.isvalid = true
        } else {
          valModel.valSameTime = ''
          valModel.isvalid = false
        }
      }
      if (this.state.day1 === 'F' || this.state.day2 === 'F') {
        if (
          this.state.initModel.friEnTime === '' ||
          this.state.initModel.friStTime === ''
        ) {
          valModel.valSameTime = (
            <div className="invalid-feedback" style={{ display: 'block' }}>
              Select at least 2 days
            </div>
          )
          valModel.isvalid = true
        } else {
          valModel.valSameTime = ''
          valModel.isvalid = false
        }
      }

      this.setState({
        initValidateModel: valModel,
      })
      if (valModel.isvalid) {
        return true
      }
    }
  }

  save = () => {
    let validation = this.validateStep()
    if (validation) return
    this.props.onSave(this.state.initModel)
  }
  handleNext = () => {
    let validation = this.validateStep()
    if (validation) return
    this.setState({
      step: this.state.step + 1,
    })
  }
  handlePrev = () => {
    this.setState({
      step: this.state.step - 1,
    })
  }
  render() {
    return (
      <>
        <div
          className={
            this.state.editID === -1
              ? 'modal fade'
              : 'modal fade show bd-example-modal-lg'
          }
          style={{
            display: this.state.editID === -1 ? 'none' : 'block',
          }}
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h5
                  className="modal-title"
                  id="exampleModalLabel"
                  style={{ color: '#006AB3' }}
                >
                  Create A Job Post
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                  onClick={this.props.onClose}
                ></button>
              </div>
              <div className="modal-body">
                <p>Step {this.state.step} of 3</p>
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className={
                        this.state.step === 1
                          ? 'nav-link active active-tab'
                          : 'nav-link '
                      }
                      id="home-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#home"
                      type="button"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                    >
                      Job Information
                    </button>
                  </li>
                  <li
                    className="nav-item "
                    role="presentation"
                    //   style="background-color: #DEE2E6;border-radius: 34px 0px 0px 31px;"
                  >
                    <button
                      className={
                        this.state.step === 2
                          ? 'nav-link active active-tab'
                          : 'nav-link disabled'
                      }
                      id="profile-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#profile"
                      type="button"
                      role="tab"
                      aria-controls="profile"
                      aria-selected="false"
                    >
                      Candidate Type
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className={
                        this.state.step === 3
                          ? 'nav-link active active-tab'
                          : 'nav-link disabled'
                      }
                      id="contact-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#contact"
                      type="button"
                      role="tab"
                      aria-controls="contact"
                      aria-selected="false"
                    >
                      Shift Time
                    </button>
                  </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                  {this.Stepper()}
                </div>
              </div>
              <div className="modal-footer" style={{ display: 'block' }}>
                {this.state.step > 1 ? (
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    data-bs-dismiss="modal"
                    onClick={() => this.handlePrev()}
                    style={{ float: 'left' }}
                  >
                    Previous
                  </button>
                ) : null}

                {this.state.step < 3 ? (
                  <button
                    type="button"
                    className="btn btn-primary"
                    style={{ float: 'right', backgroundColor: '#006BB3' }}
                    onClick={() => this.handleNext()}
                  >
                    Next
                  </button>
                ) : (
                  <button
                    type="button"
                    className="btn btn-primary"
                    style={{ float: 'right', backgroundColor: '#006BB3' }}
                    onClick={() => this.save()}
                  >
                    Save
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </>
    )
  }
}
