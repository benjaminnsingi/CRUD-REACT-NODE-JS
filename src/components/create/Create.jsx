import React from "react";

const Url = "http://localhost:3000/api/v2/users/"; 


const Create = () => {

    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [job, setJob] = useState("");
    const [age, setAge] = useState("");

    const navigate = useNavigate();

    const data = {
        lastname,
        email,
        job,
        age
    }


    const handleSubmit = (e) => {
       e.preventDefault();
       axios.post(Url, data).then(navigate("/")); 

    }


    return (
        <div className="container__create">
            <h2>Creation d'utilisateur</h2>
            <form onSubmit={handleSubmit}>
                 <input type="text" className="form-control" placeholder="Nom" onChange={e => {setLastname(e.target.value)}} value={lastname}/>
                 <input type="text"  className="form-control" placeholder="Adresse" onChange={e => {setEmail(e.target.value)}} value={email}/>
                 <input type="text" className="form-control"  placeholder="Salaire" onChange={e => {setJob(e.target.value)}} value={job}/>
                 <input type="text" className="form-control" placeholder="Métier" onChange={e => {setAge(e.target.value)}} value={age}/>
                 <button className="btn btn-primary">Sauvegarder</button>
            </form>
        </div>
    )
}

export default Create;