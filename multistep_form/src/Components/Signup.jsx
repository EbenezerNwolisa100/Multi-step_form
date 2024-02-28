import React from 'react'

function Signup({formData, setFormData}) {
  return (
    <div className='sign-up-container'>
        <input type='email' placeholder='Email...' 
            value={formData.email}
            onChange={(event) =>
            setFormData({...formData, email: event.target.value})}
        />
        <input type='password' placeholder='Password...'
            value={formData.password}
            onChange={(event) =>
            setFormData({...formData, password: event.target.value})}
        />
        <input type='password' placeholder='Confirm Password...'
            value={formData.confirmpassword}
            onChange={(event) =>
            setFormData({...formData, confirmpassword: event.target.value})}
        />
    </div>
  )
}

export default Signup