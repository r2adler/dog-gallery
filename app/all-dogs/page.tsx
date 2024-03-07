import DogGallery from "@/components/DogGallery";
import { fetchDogs } from "../actions";

const MAX_DOGS = 50;

export const AllDogs = async () => {
  const dogs = await fetchDogs(MAX_DOGS);

  return (
    <div className="flex flex-col items-center justify-center bg-white dark:bg-gray-800 py-2 min-h-screen">
      AllDogs
      <DogGallery dogImages={dogs} />
    </div>
  );
};

export default AllDogs;
