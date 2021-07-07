import React, { Component } from 'react'

import JobInformation from './JobInformation'
import CandidateType from './CandidateType'
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
    }
    this.initValidateModel = {
      vallookingFor: '',
      valexperience: '',
      isvalid: false,
    }
    this.state = {
      editID: this.props.obj.id,
      step: 1,
      initModel: this.props.obj.id > 0 ? this.props.obj : this.initModel,
      initValidateModel: this.initValidateModel,
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
          />
        )
      case 3:
        return 'test2'
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
    console.log('State', this.state)
    return (
      <>
        <div
          className={
            this.state.editID === -1 ? 'modal fade' : 'modal fade show'
          }
          style={{
            display: this.state.editID === -1 ? 'none' : 'block',
          }}
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
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
                    onClick={() => this.props.onSave(this.state.initModel)}
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
