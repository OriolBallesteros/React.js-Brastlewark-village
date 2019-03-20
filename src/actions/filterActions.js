import filterHabitants from '../utils/filterHabitants';

const SET_SELECTED_PROFESSION = 'SET_SELECTED_PROFESSION';
const SET_SELECTED_HAIR = 'SET_SELECTED_HAIR';
const SET_SELECTED_GENRE = 'SET_SELECTED_GENRE';
const SET_HABITANTS = 'SET_HABITANTS';

export const setSelectedProfession = profession => ({
    type: SET_SELECTED_PROFESSION,
    profession
});

export const setSelectedHair = hair => ({
    type: SET_SELECTED_HAIR,
    hair
});

export const setSelectedGenre = genre => ({
    type: SET_SELECTED_GENRE,
    genre
});

export const setFilteredHabitants = (village, selected ) => ({
    type: SET_HABITANTS,
    filteredHabitants: filterHabitants(village, selected)
});
