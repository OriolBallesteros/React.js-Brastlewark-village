const filterReducer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_HABITANTS':
            return {
                ...state,
                filteredHabitants: action.filteredHabitants
            };

        case 'SET_SELECTED_PROFESSION':
            return {
                ...state,
                selected: {
                    ...state.selected,
                    profession: action.profession
                }
            };

        case 'SET_SELECTED_HAIR':
            return {
                ...state,
                selected: {
                    ...state.selected,
                    hair: action.hair
                }
            };

        case 'SET_SELECTED_GENRE':
            return {
                ...state,
                selected: {
                    ...state.selected,
                    genre: action.genre
                }
            };

        default:
            return state;
    };
};

export default filterReducer;