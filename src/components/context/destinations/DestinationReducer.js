const DestinationReducer = (state, action) => {
    switch (action.type){
        case "GET_DESTINATIONS_START":
        return {
            destinations : [],
            isFetching : true,
            error : false
        }
        case "GET_DESTINATIONS_SUCCESS":
        return {
            destinations : action.payload,
            isFetching : false,
            error : false
        }
        case "GET_DESTINATIONS_FAIL":
        return {
            destinations : [],
            isFetching : false,
            error : true
        }
        case "DELETE_DESTINATION_START":
        return {
            ...state,
            isFetching : true,
            error : false
        }
        case "DELETE_DESTINATION_SUCCESS":
        return {
            destinations : state.destinations.filter(destination => destination._id !== action.payload),
            isFetching : false,
            error : false
        }
        case "DELETE_DESTINATION_FAIL":
        return {
            ...state,
            isFetching : false,
            error : true
        }
        case "CREATE_DESTINATION_START":
        return {
            ...state,
            isFetching : true,
            error : false
        }
        case "CREATE_DESTINATION_SUCCESS":
        return {
            destination : [...state.destinations, action.payload],
            isFetching : false,
            error : false
        }
        case "CREATE_DESTINATION_FAIL":
        return {
            ...state,
            isFetching : false,
            error : true
        }
        default :
        return {...state}
    }
}

export default DestinationReducer