import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";

function Edit() {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`/read/${id}`) 
      .then((res) => {
        setData(Array.isArray(res.data) ? res.data : []);
      })
      .catch((err) => console.log(err));
  }, [id]);

  function handleSubmit(e) {
    e.preventDefault();

    axios
      .put(`/update/${id}`, data[0]) 
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <style>{`
        .container {
          min-height: 100vh;
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

        .form-box h2 {
          text-align: center;
          margin-bottom: 15px;
        }

        .back-btn {
          display: inline-block;
          margin-bottom: 15px;
          text-decoration: none;
          background: #28a745;
          color: white;
          padding: 6px 12px;
          border-radius: 5px;
        }

        .back-btn:hover {
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
          background: #ffc107;
          color: black;
          font-size: 16px;
          border-radius: 5px;
          cursor: pointer;
        }

        .submit-btn:hover {
          opacity: 0.9;
        }
      `}</style>

      <div className="container">
        {data.map((student) => (
          <div className="form-box" key={student.id}>
            <Link to="/" className="back-btn">Back</Link>
            <h2>Edit Student</h2>

            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <label>Name</label>
                <input
                  type="text"
                  value={student.name}
                  required
                  onChange={(e) =>
                    setData([{ ...data[0], name: e.target.value }])
                  }
                />
              </div>

              <div className="input-group">
                <label>Email</label>
                <input
                  type="email"
                  value={student.email}
                  required
                  onChange={(e) =>
                    setData([{ ...data[0], email: e.target.value }])
                  }
                />
              </div>

              <div className="input-group">
                <label>Gender</label>
                <input
                  type="text"
                  value={student.gender}
                  required
                  onChange={(e) =>
                    setData([{ ...data[0], gender: e.target.value }])
                  }
                />
              </div>

              <div className="input-group">
                <label>Age</label>
                <input
                  type="number"
                  value={student.age}
                  required
                  onChange={(e) =>
                    setData([{ ...data[0], age: e.target.value }])
                  }
                />
              </div>

              <button type="submit" className="submit-btn">
                Update
              </button>
            </form>
          </div>
        ))}
      </div>
    </>
  );
}

export default Edit;