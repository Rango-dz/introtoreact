import React from 'react'
import { useQuery } from '@tanstack/react-query';
import fetchPet from './fetchPet';
import { useParams } from 'react-router-dom'
import Carousel from './Carousel';

export default function Details() {
  const { id } = useParams();

  const result = useQuery(['details', id], fetchPet);

  if (result.isError) {
    return <h2>Something Went Wrong</h2>
  }

  if (result.isLoading) {
    return (
      <div className='loading-pane'>
        <h2 className='loader'>😵</h2>
      </div>
    )
  }

  const pet = result.data.pets[0];
  return (
    <div className="details">
      <Carousel images={pet.images} />
      <div>
        <h2>{pet.name}</h2>
        <h3>{pet.breed} - {pet.animal}  - {pet.city} - {pet.state} </h3>
        <div>{pet.description}</div>
      </div>
    </div>
  )
}
