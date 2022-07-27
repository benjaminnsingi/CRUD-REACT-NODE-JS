import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const URL = "http://localhost:3000/api/v2/users/";

const List = () => {

    const [users, setUsers] = useState("");


  const loadUsers = () => {
    axios.get("http://localhost:3000/api/v2/users/").then((res) => {
      setUsers(res.users);
    });
  }

    useEffect(() => {
        axios.get(URL).then((response) => {
            setUsers(response.data),
            loadUsers();
        })
    }, [])

    return (
        <div className="container__list">
            <h2>Liste des utilisateurs</h2>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Nom</th>
                        <th scope="col">Email</th>
                        <th scope="col">Job</th>
                        <th scope="col">Age</th>
                    </tr>
                </thead>
                <tbody>
                {
                    
                    users.map((user, index) => (
                    <tr key={index}>
                        <th scope="row">{user.lastname}</th>
                        <td>{user.email}</td>
                        <td>{user.job}</td>
                        <td>{user.age}</td>
                        <td>
                            <Link to={`/users/${users.id}`}>Modifier</Link>
                            <Link
                            onClick={()=>deleteUser(users.id)}
                            to={"#"}
                            className="btn btn-danger"
                          >
                            Supprimer
                          </Link>
                        </td>
                    </tr>
                    ))
                }
                </tbody>

             </table>
        </div>
    )
}

export default List;