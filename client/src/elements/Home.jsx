import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Home() {
    const [data, setData] = useState([])
    const [deleted, setDeleted] = useState(true)

    useEffect(() => {
        if (deleted) {
            setDeleted(false)
            axios.get('/students')
                .then((res) => {
                    setData(res.data)
                })
                .catch((err) => console.log(err))
        }
    }, [deleted])

    function handleDelete(id) {
        axios.delete(`/delete/${id}`)
            .then(() => {
                setDeleted(true)
            })
            .catch((err) => console.log(err))
    }

    return (
        <>
            <style>{`
                .container {
                    min-height: 100vh;
                    padding: 20px;
                    background: linear-gradient(135deg, #4facfe, #00f2fe);
                    font-family: Arial, sans-serif;
                }

                h3 {
                    color: white;
                    text-align: center;
                }

                .top-bar {
                    display: flex;
                    justify-content: flex-end;
                    margin-bottom: 20px;
                }

                .add-btn {
                    background: #28a745;
                    color: white;
                    padding: 8px 15px;
                    border-radius: 5px;
                    text-decoration: none;
                }

                .add-btn:hover {
                    background: #218838;
                }

                table {
                    width: 100%;
                    border-collapse: collapse;
                    background: white;
                    border-radius: 10px;
                    overflow: hidden;
                    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
                }

                th, td {
                    padding: 12px;
                    text-align: center;
                }

                th {
                    background: #343a40;
                    color: white;
                }

                tr:nth-child(even) {
                    background: #f2f2f2;
                }

                .action-btn {
                    padding: 5px 10px;
                    margin: 2px;
                    border: none;
                    border-radius: 5px;
                    cursor: pointer;
                    text-decoration: none;
                    color: white;
                    font-size: 14px;
                }

                .read {
                    background: #17a2b8;
                }

                .edit {
                    background: #ffc107;
                    color: black;
                }

                .delete {
                    background: #dc3545;
                }

                .action-btn:hover {
                    opacity: 0.8;
                }
            `}</style>

            <div className="container">
                <h3>Students</h3>

                <div className="top-bar">
                    <Link className="add-btn" to="/create">Add Student</Link>
                </div>

                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Age</th>
                            <th>Gender</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((student) => (
                                <tr key={student.id}>
                                    <td>{student.id}</td>
                                    <td>{student.name}</td>
                                    <td>{student.email}</td>
                                    <td>{student.age}</td>
                                    <td>{student.gender}</td>
                                    <td>
                                        <Link className="action-btn read" to={`/read/${student.id}`}>Read</Link>
                                        <Link className="action-btn edit" to={`/edit/${student.id}`}>Edit</Link>
                                        <button 
                                            onClick={() => handleDelete(student.id)} 
                                            className="action-btn delete"
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Home