import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <table className="custom-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th className="larger-row">Email</th>
            <th className="larger-row">Nationality</th>
          </tr>
        </thead>
        <tbody>
          {data?.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>{row.first_name}</td>
              <td>{row.last_name}</td>
              <td>{row.email}</td>
              <td>{row.nationality}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default App;
