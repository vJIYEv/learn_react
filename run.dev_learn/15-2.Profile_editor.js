'use client';

import { useState } from 'react';

export default function EditProfile() {
    const [viewmode, setViewmode] = useState(true);
    const [firstName, setFirstName] = useState('Jane');
    const [lastName, setLastName] = useState('Jacobs');

    function handleFirstNameChange(e) {
        setFirstName(e.target.value);
    }

    function handleLastNameChange(e) {
        setLastName(e.target.value);
    }

    return (
      <form>
        <label>
          First name:{' '}
          {viewmode ? <b>{firstName}</b> : 
          <input onChange={handleFirstNameChange} value={firstName} />}
        </label>
        <br />
        <label>
          Last name:{' '}
          {viewmode ? <b>{lastName}</b> : 
          <input onChange={handleLastNameChange} value={lastName}/>}
        </label>
        <br />
        <button
          onClick={(e) => {
            e.preventDefault();
            setViewmode(!viewmode);
          }}
          type="submit"
        >
          {viewmode ? "Edit" : "Save"} Profile
        </button>
        <p><i>Hello, {firstName} {lastName}!</i></p>
      </form>
    );
  }
  