import React from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Edit = () => {

    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [job, setJob] = useState("");
    const [age, setAge] = useState("");

    const { id } = useParams();

    useEffect(() => {
        axios.get(`http://localhost:3000/api/v2/users/${id}`).then((response) => {
          setLastname(response.data.lastname);
          setEmail(response.data.email);
          setJob(response.data.job);
          setAge(response.data.age)
        });
      }, []);
    
    const navigate = useNavigate();

    const data = {
        lastname: lastname,
        email: email,
        job: job,
        age: age
    };

    const Update = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:3000/api/v2/users/${id}`, data).then(navigate("/"));
      }

    return (
        <div>
            <h1>Modifier l'utilisateur</h1>
        <form>
            <input
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            className="form-control"
            type="text"
            placeholder="Nom complet"
            />
            <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            type="email"
            placeholder="Email"
            />
            <input
            value={job}
            onChange={(e) => setJob(e.target.value)}
            className="form-control"
            type="text"
            placeholder="Votre Job"
            />
            <button
            className="btn btn-primary"
            type="submit"
            onClick={Update}
            >
                Sauvegarder
            </button>
        </form>
        </div>
    )
}

export default Edit;