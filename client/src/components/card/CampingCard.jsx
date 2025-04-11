import { motion } from "motion/react"
import { Link } from "react-router";

const CampingCard = ({ camping }) => {
  console.log(camping);
  return (
    <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5 }}
    >
      <Link to={`user/camping/${camping.id}`}>
      <article className="hover:scale-105 hover:duration-300 shadow-md p-2 rounded-md">
      <div className="h-[300px] rounded-md mb-2 overflow-hidden">
        <img
          src={camping.secure_url}
          alt={camping.title}
          className="w-full h-full object-cover rounded-md"
        />
      </div>

      <div>
        <h3 className="text-md font-semibold mb-2">{camping.title}</h3>
      </div>

      <p className="text-gray-700 text-sm mb-2">{camping.description}</p>

      <div className="flex justify-between items-center">
        <p className="font-semibold text-lg">฿THA {camping.price}</p>
        <p>
          {camping.lat.toFixed(4)}, {camping.lng.toFixed(4)}
        </p>
      </div>
    </article>
    </Link>
    </motion.div>
  );
};
export default CampingCard;
