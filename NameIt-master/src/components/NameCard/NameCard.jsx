import React from 'react'
import './NameCard.css'

const nameCheapurl="https://www.namecheap.com/domains/registration/results/?domain=%27%3B"

function NameCard({suggestedname}) {
  return (
    <a   target="_blank" className="card-link" href={`${nameCheapurl}${suggestedname}`}>
      <div className='result-name-card'>
              <p className='result-name'>{suggestedname}</p> 
      </div>
      </a>
  )
}

export default NameCard;