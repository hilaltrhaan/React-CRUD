import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label, Input } from 'reactstrap';



function CreateTask({ modal, toggle, save, users }) {
  const [taskName, setTaskName] = useState('');
  const [description, setDescription] = useState('');
  const [userId, setUserId] = useState();


  const handleChange = (e) => {
    const { name, value } = e.target

    if (name === 'taskName') {
      setTaskName(value);
    } else {
      setDescription(value);
    }
  }
  const handleSave = () => {
    let taskObj = {};
    taskObj["Name"] = taskName;
    taskObj["description"] = description;
    taskObj["userId"] = parseInt(userId);
    save(taskObj);
  }

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Create Task</ModalHeader>
      <ModalBody>
        <form>

          <div className='form-group'>

            <Label className="label" for="exampleSelect">Assigned user</Label>
            <Input type="select" name="selectUserId" id="exampleSelect" value={userId} onChange={e => {
              console.log(e.target.value)
              setUserId(e.target.value)
            }}>
              <option hidden>Select a user</option>
              {users.map((user) => {
                return <option value={user.id}>{user.username}</option>
              })}


            </Input>
          </div>

          <div className='form-group'>
            <label className="label">Task Name</label>
            <input
              type="text"
              className='form-control'
              value={taskName}
              name='taskName'
              onChange={handleChange}
            />
          </div>

          <div className='form-group'>
            <label className="label">Description</label>
            <textarea
              rows="5"
              className='form-control'
              value={description}
              name='description'
              onChange={handleChange}
            />
          </div>
        </form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleSave}>Create</Button>{' '}
        <Button color="secondary" onClick={toggle}>Cancel</Button>
      </ModalFooter>
    </Modal>
  )
}

export default CreateTask;