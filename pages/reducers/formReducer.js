const formReducer = (state, action) => {
    switch (action.type) {
        case 'set_title':
        case 'set_client':
        case 'set_location':
        case 'set_locations':
        case 'set_experience':
        case 'set_employment_type':
        case 'set_min':
        case 'set_max':
        case 'set_pay_type':
        case 'set_contract':
            return { ...state, [action.field]: action.payload }
        case 'set_cb':
            return { ...state, [action.field]: action.payload === 'yes' ? true : false }
        default:
            console.log('Unknown action.')
    }
}

export default formReducer