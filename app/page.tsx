"use client";
import { Button } from "@/components/Button";
import { Selector } from "@/components/Selector";
import { ChangeEvent, useState } from "react";
import { fetchDogs } from "./actions";
import DogGallery from "@/components/DogGallery";

const DogsPage = () => {
  const [numberOfDogs, setNumberOfDogs] = useState(1);
  const [dogsImages, setDogsImages] = useState([]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNumberOfDogs(Number(e.currentTarget.value));
  };
  const handleFetch = async () => {
    setDogsImages(await fetchDogs(numberOfDogs));
  };

  return (
    <div className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 py-2 min-h-screen">
      <Selector
        labelText="How many dogs do you want to fetch ?"
        value={numberOfDogs}
        handleChange={handleChange}
      />
      <Button buttonText="Fetch" handleClick={handleFetch} />
      <DogGallery dogImages={dogsImages} />
    </div>
  );
};

export default DogsPage;
