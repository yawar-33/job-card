import React, { useState } from 'react'
import { JobData } from '../utilities/JobsData'
import AddNewJob from './JobCard/AddNewJob'
function JobTable() {
  const [showPopup, setshowPopup] = useState(false)
  const [obj, setObj] = useState({})
  const [data, setData] = useState(JobData)
  const openPopup = (id) => {
    let NewList = data.filter((row) => {
      return row.id === id
    })
    setshowPopup(true)
    setObj(NewList[0])
  }

  const handleClose = () => {
    setshowPopup(false)
    setObj({})
  }

  const handleSave = (obj) => {
    obj.id = data[0].id + 1
    let NewList = [...data]
    NewList = NewList.concat(obj)
    setData(NewList)
    handleClose()
  }
  let popup = ''
  if (showPopup) {
    popup = (
      <AddNewJob
        obj={obj}
        onClose={handleClose}
        onSave={(obj) => handleSave(obj)}
      />
    )
  }
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-10">
                {' '}
                <h4>List of All Jobs Posted</h4>
              </div>
              <div className="col-md-2">
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => openPopup(0)}
                >
                  Add New
                </button>
              </div>
            </div>

            <div className="table-responsive">
              <table className="table table-striped">
                <thead>
                  <th>Job Title</th>
                  <th>Career Level</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </thead>
                <tbody>
                  {data &&
                    data.map((row) => {
                      return (
                        <tr>
                          <td>{row.lookingFor}</td>
                          <td>{row.careerLevel}</td>
                          <td>
                            <button
                              type="button"
                              class="btn btn-primary"
                              onClick={() => openPopup(row.id)}
                            >
                              Edit
                            </button>
                          </td>
                          <td>
                            <i className="fa fa-trash"></i>
                          </td>
                        </tr>
                      )
                    })}
                </tbody>
              </table>

              <div className="clearfix"></div>
            </div>
          </div>
        </div>
      </div>
      {popup}
    </>
  )
}

export default JobTable
