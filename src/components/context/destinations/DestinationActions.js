export const getDestinationsStart = () => ({
    type : "GET_DESTINATIONS_START"
})
export const getDestinationsSuccess = (destinations) => ({
    type : "GET_DESTINATIONS_SUCCESS",
    payload : destinations
})
export const getDestinationsFail = () => ({
    type : "GET_DESTINATIONS_FAIL"
})

// upload destination

export const createDestinationStart = () => ({
    type : "CREATE_DESTINATION_START"
})
export const createDestinationSuccess = (destination) => ({
    type : "CREATE_DESTINATION_SUCCESS",
    payload : destination
})
export const createDestinationFail = () => ({
    type : "CREATE_DESTINATION_FAIL"
})

// delete destination

export const deleteDestinationStart = () => ({
    type : "DELETE_DESTINATION_START"
})
export const deleteDestinationSuccess = (id) => ({
    type : "DELETE_DESTINATION_SUCCESS",
    payload : id
})
export const deleteDestinationFail = () => ({
    type : "DELETE_DESTINATION_FAIL"
})