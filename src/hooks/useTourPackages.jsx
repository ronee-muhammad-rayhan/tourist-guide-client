// import { useEffect, useState } from "react";

import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useTourPackages = () => {
    const axiosPublic = useAxiosPublic();

    const { data: tours = [], isPending: loading, refetch } = useQuery({
        queryKey: ['tourPackages'],
        queryFn: async () => {
            const res = await axiosPublic.get('/tours');
            return res.data;
        }
    })

    return [tours, loading, refetch]
}

export default useTourPackages;