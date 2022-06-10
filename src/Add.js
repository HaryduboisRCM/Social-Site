import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import toastr from 'toastr';
import 'toastr/build/toastr.min.css';



function Add(props) {
  const [formValues, changeFormValues] = useState({
    id: "",
    description: "",
    testpiece:""
   
  });
  const handleChange = (event) => {
    const newState = { ...formValues };
    if (event.target.name === "completed") {
      newState[event.target.name] = formValues.completed;
    } else {
      newState[event.target.name] = event.target.value;
    }
    changeFormValues(newState);
  };
  const submitHandler = (event) => {
    console.log(event);
    event.preventDefault();
    props.onSubmit(formValues.id, formValues.description, formValues.completed, formValues.testpiece);
    toastr["success"]("Post added", "Success")
    changeFormValues({
      id: "",
      description: "",
      testpiece:""
    });
  };

  return (
    <div>
      <Form onSubmit={(event) => submitHandler(event)}>
        <Form.Group controlId="taskID">
          <Form.Label> User Name</Form.Label>
          <Form.Control
            name="id"
            type="text"
            value={formValues.id}
            onChange={(event) => handleChange(event)}
          />
        </Form.Group>

        <Form.Group controlId="taskDescription">
          <Form.Label> Post</Form.Label>
          <Form.Control
            name="description"
            type="text"
            value={formValues.description}
            onChange={(event) => handleChange(event)}
          />
        </Form.Group>

    {/*   <Form.Group controlId="testPiece">
          <Form.Label> Test</Form.Label>
          <Form.Control
            name="testpiece"
            type="text"
            value={formValues.testpiece}
            onChange={(event) => handleChange(event)}
          />
  </Form.Group> */}

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
export default Add;
