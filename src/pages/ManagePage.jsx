import { useState } from "react";
import DetailsForm from "../components/form.jsx";

export default function ManagePage() {
  const [students, setStudents] = useState([]);

  function getUsers() {

    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "GET"
    })
    .then((response) => response.json())
    .then((data) => {
      console.log(data)

      setStudents(data)
    })
  }

  function deleteStudent(id) {
    // Filtering the student list
    let studentListWithoutTheDeletedStudent = students.filter(student => student.id != id)

    // Updating the students array with the new list
    setStudents(studentListWithoutTheDeletedStudent)
  }

  return (
    <main className="manage-main">
      <section className="form-section">
        <h1 className="section-heading">Insert New Student</h1>
        <DetailsForm students={students} setStudents={setStudents} />
      </section>

      <button onClick={getUsers}>Get users</button>

      <section className="student-list-section">
        <h1 className="section-heading">List of all available students</h1>
        {students.length === 0 ? (
          <div className="no-users">No users available.</div>
        ) : (
          <table className="student-table">
            <thead>
              <tr className="table-header">
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {students.map((student) => (
                <tr key={student.id}>
                  <td>{student.id}</td>
                  <td>{student.name}</td>
                  <td>{student.email}</td>
                  <td>
                    {/* Actions */}
                    <button className="delete-button" onClick={() => deleteStudent(student.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>
    </main>
  );
}
