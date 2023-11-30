import { motion } from "framer-motion";
import Categories from "../Categories/Categories";

const TourType = () => {
    return (
        <div>
            Tour Type Section
            <motion.div
                initial={{ opacity: 0.6 }}
                whileHover={{
                    scale: 1.2,
                    transition: { duration: 1 },
                }}
                whileTap={{ scale: 0.9 }}
                whileInView={{ opacity: 1 }}

                className="bg-red-600 w-10 h-10 rounded-[20px]"
            >

            </motion.div>

            <Categories />
        </div>
    );
};

export default TourType;