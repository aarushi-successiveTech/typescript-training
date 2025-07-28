"use client";
import { useMemo, useState } from "react";

export const StudentList = () => {
  const [student, setStudent] = useState<string[]>([
    "Aarushi",
    "Eklavya",
    "Akhil",
  ]);
  const [newStudent, setNewStudent] = useState<string>("");

  const displayList = useMemo(() => {
    return student.map((student, index) => <li key={index}>{student}</li>);
  }, [student]);

  return (
    <div>
      <h2>Student List : </h2>
      <ul>{displayList}</ul>

      <input
        type="text"
        value={newStudent}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setNewStudent(e.target.value)
        }
        placeholder="Enter new student name: "
        style={{ width: "300px", height: "35px", fontSize: "16px" }}
      ></input>

      <button
        style={{
          padding: "7px 15px",
          fontSize: "16px",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={() =>
          newStudent.trim() &&
          (setStudent([...student, newStudent.trim()]), setNewStudent(""))
        }
      >
        Add Student
      </button>
    </div>
  );
};
