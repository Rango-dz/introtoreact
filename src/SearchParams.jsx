import React, {useState } from "react";
import Results from "./Results";
import { useQuery } from "@tanstack/react-query";
import fetchSearch from "./fetchSearch";
import useBreadList from "./useBreadList";
const ANIMALS = ["bird", "cat", "dog", "rabbit", "reptile"];

const SearchParams = () => { 
  const [searchParams, setSearchParams] = useState({
    animal: "",
    location: "",
    breed: ""
  })
  const [animal, setAnimal] = useState("");
  const [breeds] = useBreadList(animal);


  const results = useQuery(["pets", searchParams], fetchSearch);
  const pets = results?.data?.pets ?? [];

    
  return (
    <div className="search-params">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const formData = new FormData(e.target);
          console.log(formData.get("animal"));
          const obj = {
            animal: formData.get("animal") ?? "",
            breed: formData.get("breed") ?? "",
            location: formData.get("location") ?? "",
          };
          setSearchParams(obj);
        }}
      >
        <label htmlFor="location">
          Location
          <input
            id="location"
            name="location"
            placeholder="Location"
          />
        </label>

        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            name="animal"
          >
            <option />
            {ANIMALS.map((animal) => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="breed">
          Breed
          <select
            disabled={!breeds.length}
            id="breed"
            name="breed"
          >
            <option />
            {breeds.map((breed) => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>

        <button>Submit</button>
      </form>
        <Results pets={pets} />
    </div>
    );
    
  };
  

export default SearchParams;