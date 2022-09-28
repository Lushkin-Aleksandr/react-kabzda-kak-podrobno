
export const CLOSE_OPTIONS = 'CLOSE-OPTIONS'
export const OPEN_OPTIONS = 'OPEN-OPTIONS'

export type StateType = {
    isOpen: boolean
}

export type ActionType = {
    type: string
}

export const selectReducer = (state: StateType, action: ActionType): StateType => {

    switch (action.type) {
        case CLOSE_OPTIONS:
            return {
                ...state,
                isOpen: false
            }
        case OPEN_OPTIONS:
            return {
                ...state,
                isOpen: true
            }
        default:
            return state;
    }
}