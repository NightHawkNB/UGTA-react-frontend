import { useState } from "react";

function DetailsForm() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    return (
        <div className="form-container">
            <form className="details-form"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                    maxWidth: "400px",
                    margin: "0 auto",
                    border: "1px solid #ccc",
                    padding: "20px",
                }}
            >
                <label htmlFor="name">Name:</label>
                <input
                    type="text" 
                    id="name" 
                    name="name" 
                    required 
                    onChange={(e) => setName(e.target.value)}
                />

                <label htmlFor="email">Email:</label>
                <input
                    type="email" 
                    id="email" 
                    name="email"
                    required
                    onChange={(e) => setEmail(e.target.value)}
                />

                <button type="submit" style={{marginTop: "20px"}}>Submit</button>
            </form>

            <div>
                Name : {name ? name : "Not-set"} <br />
                Email : {email ? email : "Not-set"}
            </div>
        </div>
    )
}

export default DetailsForm;