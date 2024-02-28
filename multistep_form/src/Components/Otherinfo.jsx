import React from 'react'

function Otherinfo({formData, setFormData}) {
  return (
    <div className='other-info-container'>
        <input type='text' placeholder='Nationality...'
            value={formData.nationality}
            onChange={(event) =>
            setFormData({...formData, nationality: event.target.value})}
        />
        <input type='text' placeholder='Your Interests...'
            value={formData.interests}
            onChange={(event) =>
            setFormData({...formData, interests: event.target.value})}
        />
    </div>
  )
}

export default Otherinfo