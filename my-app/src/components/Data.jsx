import React,{useState} from 'react'

function Data() {
    const[company,setCompany]=useState('');
    

    
    const companies={
        jio:[
            {Name:'jiophone' ,data: '1.5GB', price:123},
            { Name:'jiofiber' ,data:"1000GB",price: 9999}
            ],
        aritel:[
            {Name:'aritelPhone',data:'2GB',price:160},
            { Name:'aritelfiber',data:'2900GB',price:13456}
        ],
        vi:[{ Name:'viPhone',data:'3GB',price:180},
            { Name:'vifiber',data:'78000GB',price:45678}
        ]
    };
    
  return (
    <div className='App'>
        <h2>Select a Company</h2>
      <select onChange={(e) => setCompany(e.target.value)}>
        <option value="">--Select--</option>
        {Object.keys(companies).map((c, index) => (
          <option key={index} value={c}>{c}</option>
        ))}
      </select>
        {company && (
        <div>
          <h3>Plans for {company.toUpperCase()}</h3>
          {companies[company].map((plan, index) => (
            <p key={index}>
              {plan.name} — {plan.data} — ₹{plan.price}
            </p>
          ))}
        </div>
      )}

      
    </div>
  )
}

export default Data
