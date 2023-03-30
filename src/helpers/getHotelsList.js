import hotelInstance from "../service/hotelAPI";

const today = new Date().getDate();
const tomorrow = new Date().getDate() + 1 === 32 ? 1 : new Date().getDate() + 1;
const month = new Date().getMonth() + 1;
const year = new Date().getFullYear();

export const getHotelsList = async (keyword) => {
  try {
    let coordinates;
    if (keyword) {
      const { data } = await hotelInstance.get(
        `/locations/v3/search?q=${keyword}`
      );
      coordinates = {
        latitude: Number(data.sr[0].coordinates.lat),
        longitude: Number(data.sr[0].coordinates.long),
      };
    } else {
      coordinates = { latitude: 40.712843, longitude: -74.005966 };
    }

    const config = {
      destination: {
        coordinates: coordinates,
      },
      checkInDate: {
        day: today,
        month: month,
        year: year,
      },
      checkOutDate: {
        day: tomorrow,
        month: month,
        year: year,
      },
      rooms: [{ adults: 1, children: [] }],
    };

    const hotelSearch = await hotelInstance.post("properties/v2/list", config);
    return hotelSearch.data.data.propertySearch.properties;
  } catch (error) {
    console.log(error);
  }
};
