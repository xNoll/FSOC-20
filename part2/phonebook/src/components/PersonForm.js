import React from "react";

const PersonForm = (props) => {
  return (
    <div>
      <form  onSubmit={props.addPerson}>
        <h3 >Add a New Contact</h3>
        <div >
          <label >
            Name:<br/>
          </label>
          <input
            id="name"
            onChange={props.handleNameChange}
            value={props.nameValue}
          />
        </div>
        <div >
          <label >
            Phone: <br/>
          </label>
          <input
            id="phone"
            onChange={props.handlePhoneChange}
            value={props.phoneValue}
          />
        </div>
        <div >
          <button type="submit">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default PersonForm;