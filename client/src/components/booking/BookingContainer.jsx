import { useEffect } from "react";
import BookingCaendar from "./BookingCaendar";
import BookingForm from "./BookingForm";
import useBookingStore from "@/store/booking-store.jsx";

const BookingContainer = ({ campingId, price, bookings }) => {
  useEffect(() => {
    useBookingStore.setState({
      campingId,
      price,
      bookings,
    });
  }, [campingId]);

  return (
    <div className="flex flex-col mb-8">
      <BookingCaendar />
      <BookingForm />
    </div>
  );
};
export default BookingContainer;
