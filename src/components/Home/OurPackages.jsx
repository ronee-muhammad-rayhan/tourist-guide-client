import { Link } from "react-router-dom";
import useTourPackages from "../../hooks/useTourPackages";
import TourCard from "../Shared/TourCard/TourCard";

const OurPackages = () => {

    const [tours] = useTourPackages();

    return (
        <div className="flex flex-col justify-center items-center">
            <div className="cards-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    tours.slice(0, 3).map((tour, i) => {
                        return (
                            <TourCard key={i} tour={tour} />
                        )
                    })
                }
            </div>
            <Link to={`/tours`}><button className="btn btn-primary">See All Tour Packages</button></Link>
        </div>
    );
};

export default OurPackages;