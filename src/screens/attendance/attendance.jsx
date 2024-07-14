// Attendance.js
import React, { useEffect, useState } from "react";
import Modal from "../../components/modal/modal";
import "./attendance.css";

const Attendance = () => {
  const [studentName, setStudentName] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("Present");
  const [attendanceRecords, setAttendanceRecords] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (studentName && date) {
      const newRecord = { studentName, date, status };
      setAttendanceRecords([...attendanceRecords, newRecord]);
      setStatus("Present");

      if (status === "Present") {
        setIsModalOpen(true);
      }
    }
  };
  useEffect(() => {
    if (!isModalOpen) {
      setDate("");
      setStudentName("");
    }
  }, [isModalOpen]);

  return (
    <div className="attendance-container">
      <h2>Mark Attendance</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Student Name:</label>
          <input
            type="text"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Date:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Status:</label>
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="Present">Present</option>
            <option value="Absent">Absent</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
      <div className="attendance-records">
        <h3>Attendance Records</h3>
        <ul>
          {attendanceRecords.map((record, index) => (
            <li key={index}>
              {record.date} - {record.studentName}: {record.status}
            </li>
          ))}
        </ul>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h3>Attendance Marked</h3>
        <p>Attendance has been marked as present for {date}.</p>
        <button onClick={() => setIsModalOpen(false)}>Close</button>
      </Modal>
    </div>
  );
};

export default Attendance;
