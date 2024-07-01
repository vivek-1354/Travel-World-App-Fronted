export const getHotelsByFreeCancel = (hotels, value) => {
    return hotels.filter(hotel => hotel.isCancelable === value)
}