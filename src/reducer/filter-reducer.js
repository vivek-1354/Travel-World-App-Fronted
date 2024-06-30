export const filterReducer = (state, action) => {
    switch (action.type) {
        case 'HANDAL_MODAL_OPEN':
            return { ...state, isFilterModalOpen: !state.isFilterModalOpen } // 合并新的过滤器状态
        case 'MINIMUM_PRICE':
            return {
                ...state,
                priceRange: [
                    Math.min(
                        action.payload.newValue[0],
                        action.payload.priceRange[1] - action.payload.minDifference
                    ),
                    action.payload.priceRange[1]
                ]
            }
        case 'MAXIMUM_PRICE':
            return {
                ...state,
                priceRange: [
                    action.payload.priceRange[0],
                    Math.max(
                        action.payload.newValue[1],
                        action.payload.priceRange[0] + action.payload.minDifference
                    )
                ]
            }
        default:
            return state
    }
}