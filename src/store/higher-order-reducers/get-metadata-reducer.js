export default ({ baseType }) => {
    const REQUEST = `${baseType}_REQUEST`
    const SUCCESS = `${baseType}_SUCCESS`
    const ERROR = `${baseType}_ERROR`

    const INITIAL_STATE = {
        data: null,
        error: null,
        loading: false,
        lastError: null,
        lastFetch: null,
    }

    return (state = INITIAL_STATE, action) => {
        switch (action.type) {
            case REQUEST:
                return { ...state, loading: true }
            case SUCCESS:
                return {
                    ...state,
                    data: action.payload,
                    error: null,
                    loading: false
                    // lastFetch: Date.now(),
                    // lastError: null,
                }
            case ERROR:
                return {
                    ...state,
                    lastError: Date.now(),
                    error: action.error,
                    loading: false
                }
            default:
                return state
        }
    }
}
