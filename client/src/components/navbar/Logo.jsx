import { Link } from "react-router";
import { Button } from "../ui/button";
import RentKubPic from "../../../public/RentKubPic.png"


const Logo = () => {
  return (
    <Button asChild variant>
      <Link to="/">
      <img className="h-10 w-10" src="RentKubPic.png" alt="RentKub" />
      </Link>
    </Button>
  );
};
export default Logo;
