import React from 'react'

function JobInformation(props) {
  return (
    <>
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="lookingFor">Looking For</label>
            <span className="text-danger">*</span>
            <input
              type="text"
              className="form-control"
              id="lookingFor"
              name="lookingFor"
              value={props.model.lookingFor}
              onChange={props.handleChange}
            />
            {props.validation.vallookingFor}
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="experience">Experience:</label>
            <span className="text-danger">*</span>

            <input
              type="text"
              className="form-control"
              id="experience"
              name="experience"
              value={props.model.experience}
              onChange={props.handleChange}
            />
            {props.validation.valexperience}
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="education">Education:</label>
            <input
              type="text"
              className="form-control"
              id="education"
              name="education"
              value={props.model.education}
              onChange={props.handleChange}
            />
          </div>
        </div>
        <div className="col-md-12">
          <div className="form-group">
            <label htmlFor="skills">Skills:</label>
            <input
              type="text"
              className="form-control"
              id="skills"
              name="skills"
              value={props.model.skills}
              onChange={props.handleChange}
            />
          </div>
        </div>
        <div className="col-md-12">
          <div className="form-group">
            <label htmlFor="usr">Description:</label>
            <textarea
              cols={3}
              rows={3}
              className="form-control"
              id="description"
              name="description"
              value={props.model.description}
              onChange={props.handleChange}
            ></textarea>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label htmlFor="image">Image</label>
            <input
              type="file"
              className="form-control"
              id="image"
              name="image"
              value={props.model.image}
              onChange={props.handleChange}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default JobInformation
