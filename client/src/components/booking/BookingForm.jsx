import useBookingStore from "@/store/booking-store";

const BookingForm = () => {
  const bookingUser = useBookingStore();
  console.log(bookingUser);
  return <div>BookingForm</div>;
};
export default BookingForm;
