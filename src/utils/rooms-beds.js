export const getHotelByRoomsAndBeds = (hotels, noOfBathrooms, noOfBeds, noOfBedrooms) => {
    if (noOfBathrooms === "Any" && noOfBedrooms === "Any" && noOfBeds === "Any")
        return hotels

    const filteredHotel = hotels.filter(({ numberOfBathrooms, numberOfBedrooms, numberOfBeds }) =>
        numberOfBathrooms === noOfBathrooms ||
        numberOfBedrooms === noOfBedrooms ||
        numberOfBeds === noOfBeds
    )
    return filteredHotel
}