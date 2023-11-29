import axiosSecure from ".";

// Fetch all tours from db
export const getAllTours = async () => {
  const { data } = await axiosSecure("/tours");
  return data;
};
// Fetch all tours for tour-guide
export const getTourGuideTours = async (email) => {
  const { data } = await axiosSecure(`/tours/${email}`);
  return data;
};
// Fetch single tour data from db
export const getTour = async (id) => {
  const { data } = await axiosSecure(`/tours/${id}`);
  return data;
};
// Save a tour data in db
export const addTour = async (tourData) => {
  const { data } = await axiosSecure.post(`/tours`, tourData);
  return data;
};
// Delete a tour
export const deleteTour = async (id) => {
  const { data } = await axiosSecure.delete(`/tours/${id}`);
  return data;
};
// update a room
export const updateTour = async (tourData, id) => {
  const { data } = await axiosSecure.put(`/tours/${id}`, tourData);
  return data;
};
