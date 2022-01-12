import React, { useState, useEffect } from "react";
import { Button } from "primereact/button";
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `el numero va en ${count}`;
  });

  return (
    <div>
      <div>
        <p>{count}</p>
        <Button
          onClick={() => setCount(count + 1)}
          icon="pi pi-check"
          className="p-button-rounded p-button-outlined"
        />
        <Button
          onClick={() => setCount(count - 1)}
          icon="pi pi-times"
          className="p-button-rounded p-button-danger p-button-outlined"
        />
      </div>

      <div>
        <PersonaDatos />
      </div>
    </div>
  );
}

const PersonaDatos = () => {
  const [equipo, setEquipo] = useState([]);
  useEffect(() => {
    optenerDatos();
  }, []);

  const optenerDatos = async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await data.json();
    setEquipo(users);
  };
  return (
    <div>
      <h1>datos</h1>
      <ul>
        {equipo.map((item) => (
          <li key={item.id}>
            {item.name} - {item.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
