// import { useEffect, useState } from "react";

import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useBookings = () => {
  const axiosSecure = useAxiosSecure();

  const {
    data: bookings = [],
    isPending: loading,
    refetch,
  } = useQuery({
    queryKey: ["bookings"],
    queryFn: async () => {
      const res = await axiosSecure.get("/bookings");
      return res.data;
    },
  });

  return [bookings, loading, refetch];
};

export default useBookings;
