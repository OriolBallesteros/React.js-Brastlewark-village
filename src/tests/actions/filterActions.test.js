import { setSelectedProfession, setSelectedHair, setSelectedGenre, setFilteredHabitants } from '../../actions/filterActions';
import { dummyData } from '../dummyData';

const SET_SELECTED_PROFESSION = 'SET_SELECTED_PROFESSION';
const SET_SELECTED_HAIR = 'SET_SELECTED_HAIR';
const SET_SELECTED_GENRE = 'SET_SELECTED_GENRE';
const SET_HABITANTS = 'SET_HABITANTS';

describe('filterActions tests', () => {
    it('should generate selected profession action object', () => {
        const profession = 'tester';
        const action = setSelectedProfession(profession);

        expect(action).toEqual({
            type: SET_SELECTED_PROFESSION,
            profession
        })
    });

    it('should generate selected hair action object', () => {
        const hair = 'green'
        const action = setSelectedHair(hair);

        expect(action).toEqual({
            type: SET_SELECTED_HAIR,
            hair
        })
    });

    it('should generate selected genre action object', () => {
        const genre = 'male/female';
        const action = setSelectedGenre(genre);
        
        expect(action).toEqual({
            type: SET_SELECTED_GENRE,
            genre
        })
    });

    it('should generate correct type of filtered habitants action object', () => {
        const selected = {
            hair: dummyData[0].hair_color,
            genre: 'Female',
            profession: dummyData[0].professions
        };
        const action = setFilteredHabitants(dummyData, selected);

        expect(action.type).toEqual(SET_HABITANTS);
    });
});