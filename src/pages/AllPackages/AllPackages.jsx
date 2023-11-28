import useTourPackages from "../../hooks/useTourPackages";
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const cardVariants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1 },
};

const AllPackages = () => {

    const [tours] = useTourPackages();
    console.log(tours);

    const addToWishlist = (id) => {
        console.log(id);
    }

    return (
        <div>
            <h2>Our Packages</h2>
            <div className="cards-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {tours?.map((tour, index) => (
                    <motion.div
                        key={index}
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
                            <Link to={`/tours/${tour?.id}`}>
                                <button className="btn btn-primary w-full">View Package</button>
                            </Link>
                        </div>
                    </motion.div>
                ))}
            </div>
            {/* All Packages Button */}
            {/* <Link to="/tours">
                <button>All Packages</button>
            </Link> */}
        </div>
        // <div>
        //     <h2 className="text-3xl">Total Packages: {tours?.length}</h2>
        //     <h2 className="text-3xl">Total Packages: {tours[0]?.name}</h2>
        // </div>
    );
};

export default AllPackages;
