import filterReducer from '../../reducer/filterReducer';

const SET_HABITANTS = 'SET_HABITANTS';
const SET_SELECTED_PROFESSION = 'SET_SELECTED_PROFESSION';
const SET_SELECTED_HAIR = 'SET_SELECTED_HAIR';
const SET_SELECTED_GENRE = 'SET_SELECTED_GENRE';

describe('filterReducer tests', () => {
    it('should set up filteredHabitants property as passed data', ()=>{
        const action = {type: SET_HABITANTS, filteredHabitants: 'foo'};
        const state = filterReducer(undefined, action);

        expect(state).toEqual({
            filteredHabitants: action.filteredHabitants
        });
    });

    it('should set up selected.profession property as passed data', ()=>{
        const action = {type: SET_SELECTED_HAIR, hair: 'foo'};
        const state = filterReducer(undefined, action);

        expect(state).toEqual({
            selected: {
                hair: action.hair
            }
        });
    });

    it('should set up selected.profession property as passed data', ()=>{
        const action = {type: SET_SELECTED_GENRE, genre: 'foo'};
        const state = filterReducer(undefined, action);

        expect(state).toEqual({
            selected: {
                genre: action.genre
            }
        });
    });

});