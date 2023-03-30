import hotelInstance from "../service/hotelAPI";
export const getHotelInfo = async (id) => {
  const { data } = await hotelInstance.post("properties/v2/detail", {
    propertyId: id,
  });
  return data.data.propertyInfo;
};
