"use client";
import { useEffect, useState } from "react";

export default function Home() {
  console.log("Hello World");
  return (
    <main className="flex">
      <h1 className="font-bold">Hello World</h1>
      <Usuarios />
      <AddUser />
    </main>
  );
}
function Usuarios() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <div>
      <h1>Usuarios</h1>
      {data &&
        data.data.map((usuario) => {
          return (
            <div className="flex flex-row p-2" key={usuario.id}>
              <div>{usuario.name}</div>
              <div>{usuario.email}</div>
            </div>
          );
        })}
    </div>
  );
}

function AddUser() {
  const [data, setData] = useState(null);
  //  useEffect(() => {
  //   fetch('/api/users', {
  //     method: 'POST',
  //     body: JSON.stringify({name:'test',email:'abc@def.com', password:'123456', profile:'admin'}),
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setData(data);
  // });
  // }, []);
  const handleSave = (e) => {
    e.preventDefault();
    console.log("save", e);
    

  };

  return (
    <div>
      <h1>Add User</h1>
      <form action="/api/users" method="post">
        <div>
          <input type="text" name="name" />
          <label htmlFor="name">Name</label>
        </div>
        <div>
          <input type="text" name="email" />
          <label htmlFor="email">Email</label>
        </div>
        <div>
          <input type="text" name="password" />
          <label htmlFor="password">Password</label>
        </div>
        <div>
          <input type="text" name="profile" />
          <label htmlFor="profile">Profile</label>
        </div>

        <input type="submit" value="Guardar" />
      </form>
    </div>
  );
}
