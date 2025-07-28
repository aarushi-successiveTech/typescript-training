"use client";
import { useState, useMemo } from "react";

interface Employee {
  name: string;
  salary: number;
}

const employeeList = [
  { name: "Aryan", salary: 2000 },
  { name: "Piyush", salary: 5000 },
  { name: "Preeti", salary: 6000 },
];

export const EmployeeSalary = () => {
  const [employee, setEmployee] = useState<Employee[]>(employeeList);

  const averageSalary = useMemo(() => {
    const total = employee.reduce((sum, emp) => sum + emp.salary, 0);
    return (total / employee.length).toFixed(2);
  }, [employee]);

  const update = () => {
    const updated = employee.map((emp) => ({
      ...emp,
      salary: Math.floor(Math.random() * 200 * 200),
    }));
    setEmployee(updated);
  };

  return (
    <div>
      <h2>Employee Salaries: </h2>
      <ul>
        {employee.map((emp, index) => (
          <li key={index}>
            {emp.name} : {emp.salary}
          </li>
        ))}
      </ul>
      <h3>Average salary: {averageSalary}</h3>
      <button onClick={update}>Update Salary</button>
    </div>
  );
};
