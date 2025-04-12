import { readCamping } from "@/api/camping";
import BookingContainer from "@/components/booking/BookingContainer";
import Breadcrums from "@/components/campings/Breadcrums";
import Description from "@/components/campings/Description";
import ImageContainer from "@/components/campings/imageContainer";
import Mainmap from "@/components/map/Mainmap";
import { useEffect, useState } from "react";
import { useParams } from "react-router";

function CampingDetail() {
  const [camping, setCamping] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetchCampingDetail(id);
  }, []);

  const fetchCampingDetail = async (id) => {
    try {
      const res = await readCamping(id);
      setCamping(res.data.result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {/* Breadcrums */}
      <Breadcrums name={camping.title} />
      {/* Header */}
      <header className="flex items-center justify-between p-4 mt-2 border-gray-300">
        {/* Title */}
        <h1 className="font-bold text-4xl">{camping.title}</h1>
        {/* ShareButton */}
        <div className="flex items-center gap-2">
          <p>Share</p>
          <p>Fovorite</p>
        </div>
        {/* FavoriteButton */}
      </header>
      {/* Image */}
      <ImageContainer image={camping.secure_url} name={camping.name} />
      {/* Description & Map */}


      <section className="lg:grid lg:grid-cols-12 gap-x-12 mt-12">
      <div className="lg:col-span-8">
        <Description text={camping.description} />

        {camping.lat && <Mainmap Location={[camping.lat, camping.lng]} />}
      </div>
      {/* Calendar */}
      <div className="lg:col-span-4 flex flex-col items-center justify-center">
        <BookingContainer 
        campingId={camping.id}
        price={camping.price}
        bookings={[]}
        />
      </div>
      </section>
      
    </div>
  );
}
export default CampingDetail;
