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
            <div className="cards-container">
                {tours?.map((tour, index) => (
                    <motion.div
                        key={index}
                        className="card"
                        variants={cardVariants}
                        initial="hidden"
                        animate="visible"
                        transition={{ duration: 0.5 }}
                    >
                        {/* Spot photo with heart icon */}
                        <img src={tour?.photo || "https://images.prothomalo.com/prothomalo-english/import/media/2019/07/11/74bfcc523b223bd0a7c0710f15c7ce6f-Sundarbans.jpg?w=1200&h=675&auto=format%2Ccompress&fit=max"} alt="tour" />
                        <button onClick={() => addToWishlist(tour?._id)}>❤️</button>
                        {/* Tour Type, Trip Title, Price */}
                        <p>Tour Type: {tour?.tourType}</p>
                        <h3>{tour?.name}</h3>
                        <p>Price: {tour?.price}</p>
                        {/* View tour Button */}
                        <Link to={`/tours/${tour?.id}`}>
                            <button>View Package</button>
                        </Link>
                    </motion.div>
                ))}
            </div>
            {/* All Packages Button */}
            <Link to="/tours">
                <button>All Packages</button>
            </Link>
        </div>
        // <div>
        //     <h2 className="text-3xl">Total Packages: {tours?.length}</h2>
        //     <h2 className="text-3xl">Total Packages: {tours[0]?.name}</h2>
        // </div>
    );
};

export default AllPackages;
