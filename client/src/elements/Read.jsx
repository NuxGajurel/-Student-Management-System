import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function Read() {
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`/get_student/${id}`)
      .then((res) => {
        setData(Array.isArray(res.data) ? res.data : []);
      })
      .catch((err) => console.log(err));
  }, [id]);

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

        .card {
          background: white;
          padding: 25px;
          border-radius: 10px;
          width: 350px;
          box-shadow: 0 8px 20px rgba(0,0,0,0.2);
        }

        .card h2 {
          text-align: center;
          margin-bottom: 20px;
        }

        .info {
          margin-bottom: 10px;
          padding: 8px;
          border-bottom: 1px solid #eee;
        }

        .info b {
          color: #333;
        }

        .back-btn {
          display: block;
          text-align: center;
          margin-top: 15px;
          padding: 8px;
          background: #28a745;
          color: white;
          text-decoration: none;
          border-radius: 5px;
        }

        .back-btn:hover {
          background: #218838;
        }
      `}</style>

      <div className="container">
        {data.map((student) => (
          <div className="card" key={student.id}>
            <h2>Student {student.id}</h2>

            <div className="info">
              <b>ID:</b> {student.id}
            </div>
            <div className="info">
              <b>Name:</b> {student.name}
            </div>
            <div className="info">
              <b>Email:</b> {student.email}
            </div>
            <div className="info">
              <b>Age:</b> {student.age}
            </div>
            <div className="info">
              <b>Gender:</b> {student.gender}
            </div>

            <Link to="/" className="back-btn">Back</Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default Read;