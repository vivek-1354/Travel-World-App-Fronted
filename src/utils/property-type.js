export const getHotelsByPropertyType = (hotels, propertyType) => {
    if (propertyType === "Any") return hotels
    return hotels.filter(hotel => hotel.propertyType === propertyType)
}