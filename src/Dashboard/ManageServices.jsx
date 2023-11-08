import { useLoaderData } from "react-router-dom";
import AddServiceCard from "./AddServiceCard";
import { useState } from "react";


const ManageServices = () => {
  const loadedAddeds = useLoaderData();
  const [addeds, setAddeds] = useState(loadedAddeds);

  return (
    <div className="grid grid-cols-3 gap-6 p-8">
      {addeds.map((added) => (
        <AddServiceCard
          key={added._id}
          added={added}
          addeds={addeds}
          setAddeds={setAddeds}
        />
      ))}
    </div>
  );
};


export default ManageServices;