import React from 'react'

function Personalinfo({formData, setFormData}) {
  return (
    <div className='personal-info-container'>
        <input type='text' placeholder='Firsname...'
            value={formData.firstname}
            onChange={(event) =>
            setFormData({...formData, firstname: event.target.value})}
        />
        <input type='text' placeholder='Lastname...'
            value={formData.lastname}
            onChange={(event) =>
            setFormData({...formData, lastname: event.target.value})}
        />
        <input type='text' placeholder='Username...'
            value={formData.username}
            onChange={(event) =>
            setFormData({...formData, username: event.target.value})}
        />
    </div>
  )
}

export default Personalinfo