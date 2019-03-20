const apiReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_VILLAGE':
            return {
                ...state,
                village: action.village
            };

        case 'SET_JOBS':
            return {
                ...state,
                professions: action.professions
            };

        case 'SET_HAIR':
            return {
                ...state,
                hair_colors: action.hair_colors
            };

        case 'SET_ERROR':
            return {
                ...state,
                error: action.error
            }

        default: 
            return state;
    };
};

export default apiReducer;