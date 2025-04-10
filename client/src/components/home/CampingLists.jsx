import { listCamping } from "@/api/camping";
import { useEffect, useState } from "react";
import CampingCard from "../card/CampingCard";

const CampingLists = () => {
  const [campings, setCampings] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await listCamping();
      setCampings(res.data.result);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(campings);

  return (
    <section className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
      {campings.map((item) => {
        return <CampingCard key={item.id} camping={item} />;
      })}
    </section>
  );
};
export default CampingLists;
