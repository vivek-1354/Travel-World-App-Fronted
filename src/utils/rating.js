export const getHotelsByRatings = (hotels, star) => {
    if (star === "Any") return hotels
    return hotels.filter(hotel => hotel.rating >= star && hotel.rating < star + 1)
}