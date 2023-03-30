import hotelInstance from "../service/hotelAPI";

const today = new Date().getDate();
const tomorrow = new Date().getDate() + 1 === 32 ? 1 : new Date().getDate() + 1;
const month = new Date().getMonth() + 1;
const year = new Date().getFullYear();

export const getHotelsList = async (keyword) => {
  try {
    let locationId;
    if (keyword) {
      const { data } = await hotelInstance.get(
        `locations/search?query=${keyword}`
      );
      locationId = data.trackingID;
    } else {
      locationId = "228d3ad890ba4cb2b48050ec9b2c8035";
    }

    const config = {
      destination: {
        regionId: locationId,
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
