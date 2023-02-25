import {  useState } from 'react'
import Axios from 'axios';

export function AgeGame() {

    const [name, setName] = useState()
    const [age, setAge] = useState()

    const fetchData = () => {
        Axios.get(`https://api.agify.io/?name=${name}`).then((res) => {
            console.log(res.data)
            console.log(res.data.age)

            setAge(res.data.name + "`s sould has " + res.data.age)
        })
    }


    return (
        <div>
            <input placeholder='Ex. Pedro..' onChange={(event) => {
                setName(event.target.value)
            }} /><br></br>


            <button onClick={fetchData}>Predict Age</button>

            <h1>Predicted Age is {name} </h1>
            {age}
        </div>
    );
}