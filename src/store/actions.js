import hotelInstance from "../service/hotelAPI";
const today = new Date().getDate();
const tomorrow = new Date().getDate() + 1;
const month = new Date().getMonth() + 1;
const year = new Date().getFullYear();

export async function searchHotels({ commit }, keyword) {
  try {
    const { data } = await hotelInstance.get(
      `locations/search?query=${keyword}`
    );
    const locationId = data.trackingID;
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
    const hotels = hotelSearch.data.data.propertySearch.properties;
    commit("setSearchedHotels", hotels);
  } catch (error) {
    console.log(error);
  }
}
