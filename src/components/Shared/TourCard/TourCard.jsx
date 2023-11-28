import { Link } from "react-router-dom";
import { motion } from 'framer-motion';

const cardVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1 },
};

const TourCard = ({ tour }) => {

    const addToWishlist = (id) => {
        console.log(id);
    }

    return (
        <div>
            <motion.div
                key={tour?._id}
                // key={index}
                className="card"
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                transition={{ duration: 0.5 }}
            >
                <div className="max-w-lg p-4 shadow-md dark:bg-gray-900 dark:text-gray-100">
                    <div className="space-y-4">
                        {/* Spot photo with heart icon */}
                        <div className="space-y-2 relative">
                            <img src={tour?.image || "https://source.unsplash.com/random/480x360/?4"} alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                            <button className="absolute top-0 right-3" onClick={() => addToWishlist(tour?._id)}>❤️</button>
                        </div>
                        {/* Tour Type, Trip Title, Price */}
                        <div className="space-y-2">
                            <div className="flex items-center text-xs">
                                <span>{tour?.type || 'Tour Type'}</span>
                            </div>
                            <a rel="noopener noreferrer" href="#" className="block">
                                <h3 className="text-xl font-semibold dark:text-violet-400">{tour?.name}</h3>
                            </a>
                            <p className="leadi dark:text-gray-400">Price: ${tour?.price}</p>
                        </div>
                    </div>
                    {/* View tour Button */}
                    <Link to={`/tours/${tour?._id}`}>
                        <button className="btn btn-primary w-full">View Package</button>
                    </Link>
                </div>
            </motion.div>
        </div>
    );
};

export default TourCard;