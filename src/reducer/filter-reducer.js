export const filterReducer = (state, action) => {
    switch (action.type) {
        case 'HANDAL_MODAL_OPEN':
            return { ...state, isFilterModalOpen: !state.isFilterModalOpen } // 合并新的过滤器状态
        default:
            return state
    }
}