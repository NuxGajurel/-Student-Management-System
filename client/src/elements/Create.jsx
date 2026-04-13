import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

function Create() {
    const [values, setValues] = useState({
        name: '',
        email: '',
        age: '',
        gender: ''
    })

    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault()

        axios.post('/add_user', values)
            .then((res) => {
                console.log(res)
                navigate('/')
            })
            .catch((err) => console.log(err))
    }

    return (
        <>
            <style>{`
                .container {
                    height: 100vh;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    background: linear-gradient(135deg, #4facfe, #00f2fe);
                    font-family: Arial, sans-serif;
                }

                .form-box {
                    background: white;
                    padding: 30px;
                    border-radius: 10px;
                    width: 350px;
                    box-shadow: 0 8px 20px rgba(0,0,0,0.2);
                }

                .header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 20px;
                }

                .home-btn {
                    text-decoration: none;
                    background: #28a745;
                    color: white;
                    padding: 6px 12px;
                    border-radius: 5px;
                    font-size: 14px;
                }

                .home-btn:hover {
                    background: #218838;
                }

                .input-group {
                    display: flex;
                    flex-direction: column;
                    margin-bottom: 15px;
                }

                .input-group label {
                    margin-bottom: 5px;
                    font-weight: bold;
                }

                .input-group input {
                    padding: 8px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    outline: none;
                }

                .input-group input:focus {
                    border-color: #4facfe;
                }

                .submit-btn {
                    width: 100%;
                    padding: 10px;
                    border: none;
                    background: #28a745;
                    color: white;
                    font-size: 16px;
                    border-radius: 5px;
                    cursor: pointer;
                }

                .submit-btn:hover {
                    background: #218838;
                }
            `}</style>

            <div className="container">
                <div className="form-box">
                    <div className="header">
                        <h2>Add Student</h2>
                        <Link to="/" className="home-btn">Home</Link>
                    </div>

                    <form onSubmit={handleSubmit}>
                        <div className="input-group">
                            <label>Name</label>
                            <input 
                                type="text" 
                                required 
                                onChange={(e) => setValues({ ...values, name: e.target.value })} 
                            />
                        </div>

                        <div className="input-group">
                            <label>Email</label>
                            <input 
                                type="email" 
                                required 
                                onChange={(e) => setValues({ ...values, email: e.target.value })} 
                            />
                        </div>

                        <div className="input-group">
                            <label>Gender</label>
                            <input 
                                type="text" 
                                required 
                                onChange={(e) => setValues({ ...values, gender: e.target.value })} 
                            />
                        </div>

                        <div className="input-group">
                            <label>Age</label>
                            <input 
                                type="number" 
                                required 
                                onChange={(e) => setValues({ ...values, age: e.target.value })} 
                            />
                        </div>

                        <button type="submit" className="submit-btn">Save</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Create