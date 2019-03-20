import apiReducer from '../../reducer/apiReducer';

const SET_VILLAGE = 'SET_VILLAGE';
const SET_JOBS = 'SET_JOBS';
const SET_HAIR = 'SET_HAIR';

describe('apiReducer tests', () => {
    it('should set up state village property as passed data', () => {
        const action = {type: SET_VILLAGE, village: 'foo'}
        const state = apiReducer(undefined, action);

        expect(state).toEqual({
            village: action.village
        });
    });

    it('should set up state professions property as passed data', () => {
        const action = {type: SET_JOBS, professions: 'foo'}
        const state = apiReducer(undefined, action);

        expect(state).toEqual({
            professions: action.professions
        });
    });

    it('should set up state hair_colors property as passed data', () => {
        const action = {type: SET_HAIR, hair_colors: 'foo'}
        const state = apiReducer(undefined, action);

        expect(state).toEqual({
            hair_colors: action.hair_colors
        });
    });
});