import { useState } from "react";

function DetailsForm({ students, setStudents }) {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    function handleSubmit(event) {

        //* This line prevents the default form submission behavior.
        //* Without this, the page will refresh when the form is submitted.
        event.preventDefault();

        //* Creating a new student object with the provided name and email.
        const newStudent = {
            id: students.length + 1,
            name: name,
            email: email
        };

        //* Updating the array of students by adding the new student object.
        setStudents([...students, newStudent]);

        //* Clearing the form fields after submitting the student data.
        setName("");
        setEmail("");
    }

    return (
        <div className="form-container">
            <form className="details-form" onSubmit={e => handleSubmit(e)} >
                <label htmlFor="name">Name:</label>
                <input
                    type="text" 
                    id="name" 
                    name="name" 
                    required 
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                />

                <label htmlFor="email">Email:</label>
                <input
                    type="email" 
                    id="email" 
                    name="email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />

                <button type="submit" style={{marginTop: "20px"}}>Submit</button>
            </form>
        </div>
    )
}

export default DetailsForm;