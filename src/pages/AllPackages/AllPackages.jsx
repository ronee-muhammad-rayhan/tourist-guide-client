import TourCard from "../../components/Shared/TourCard/TourCard";
import useTourPackages from "../../hooks/useTourPackages";

const AllPackages = () => {

    const [tours] = useTourPackages();
    console.log(tours);

    return (
        <div>
            <h2>Our Packages</h2>
            <div className="cards-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tours?.map((tour, index) => (
                    <TourCard key={index} tour={tour} />
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
