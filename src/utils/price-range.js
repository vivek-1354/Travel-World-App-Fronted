export const getHotelByPrice = (hotels, priceRange) => {
    return hotels.filter(hotel => hotel.price >= priceRange[0] && hotel.price <= priceRange[1])

}