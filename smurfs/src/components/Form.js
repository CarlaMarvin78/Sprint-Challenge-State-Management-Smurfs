import React, {useState} from 'react';

export default function ({addSmurf}) {
    const [smurf, setSmurf] = useState({});
    const handleChange = function(event){
        const updatedSmurf = { ...smurf, [event.target.name]: event.target.value };
    setSmurf(updatedSmurf);
    }
    const handleSubmit = function(event){
        event.preventDefault();
        console.log(smurf);
        addSmurf(smurf);
        setSmurf({});
    }
    return (<form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Smurf Name" value={smurf.name} onChange={handleChange} />
        <input type="number" name="age" placeholder="Age" value={smurf.age} onChange={handleChange} />
        <input type="text" name="height" placeholder="Height" value={smurf.height} onChange={handleChange} />        

<button type="submit">
Add Smurf
</button>
    </form>)
}