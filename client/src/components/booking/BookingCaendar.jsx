import { Calendar } from "@/components/ui/calendar";
import { useEffect, useState } from "react";
import useBookingStore from "@/store/booking-store.jsx";

const defaultSelected = {
  form: undefined,
  to: undefined,
};

const BookingCaendar = () => {
  const [range, setRange] = useState(defaultSelected);

  useEffect(() => {
    useBookingStore.setState({
      range,
    });
  }, [range]);

  return (
    <>
      <Calendar
        mode="range"
        selected={range}
        onSelect={setRange}
        // disabled={}
        className="rounded-md border"
      />
    </>
  );
};
export default BookingCaendar;
