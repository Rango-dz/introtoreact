import React from 'react'
import Pet from './Pet'

export default function results({ pets }) {


  return (
    <div className='search'>
      {!pets.length ? (
        <h1>No pets Found</h1>
      ) : (
        pets.map(pet => {
          return <Pet
            name={pet.name}
            animal={pet.animal}
            breed={pet.breed}
            images={pet.images}
            location={`${pet.city}, ${pet.state}`}
            id={pet.id}
            key={pet.id} />
        })
      )
      }


    </div>
  )
}
