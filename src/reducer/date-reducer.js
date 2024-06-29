export const dateReducer = (state, action) => {
    let newState;
    switch (action.type) {
        case "OPEN_SEARCH_MODAL":
            newState = {
                ...state,
                isSearchModalOpen: !state.isSearchModalOpen
            }
            return newState;
        case "CHECK_IN":
            newState = {
                ...state,
                checkInDate: action.payload
            }
            return newState;
        case "CHECK_OUT":
            newState = {
                ...state,
                checkOutDate: action.payload
            }
            return newState;
        case "SET_DESTINATION":
            newState = {
                ...state,
                destination: action.payload
            }
            return newState;
        case "SET_GUESTS":
            newState = {
                ...state,
                guests: action.payload
            }
            return newState;
        default:
            return state;
    }
}