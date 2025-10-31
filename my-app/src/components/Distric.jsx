import React,{useState} from 'react';

function Distric() {
    const [distric, setDistric]= useState('');
    const [subdistric, setsubDistric]= useState('');
    const subdistrics={
        PurbaMedinipur : ['Tamluk','Haldia','Kontai'],
        PashimMedinipur :['Kharagpur','Medinipur'],
        Kolkata:['South Kolkata', 'North Kolkata']

    };
    const handeldistricChange=(event)=>{
        setDistric (event.target.value);
        setsubDistric('');
    };
    const handelsubdistricChange=(event)=>{
        setsubDistric (event.target.value);
    };


  return (
    <div className="App">
        <h1><u>Districs & SubDistrics</u></h1>
        <select value={distric} onChange={handeldistricChange}>
            <option>-- Choose Distric --</option>
            <option value="PurbaMedinipur">Purba Medinipur</option>
            <option value="pashimMedinipur">Pashim Medinipur</option>
            <option value="Kolkata">Kolkata</option>
        </select>
        {distric &&(
            <select value={subdistric} onChange={handelsubdistricChange}>
                <option>-- choose SubDistric --</option>
                {subdistrics[distric].map((subdistric,index)=>(
                    <option key={index} value={subdistric}>{subdistric}</option>
                ))}
            </select>
        )}
        {distric && subdistric &&(
            <h3>You Selected: {distric} = {subdistric}</h3>
        )}

      
    </div>
  )
}

export default Distric
