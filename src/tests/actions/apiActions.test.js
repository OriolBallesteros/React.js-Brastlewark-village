import { setVillage } from '../../actions/apiActions';

const SET_VILLAGE = 'SET_VILLAGE';

describe('apiActions tests', () => {
    it('should generate village action object', () => {
        const village = 'foo';
        const action = setVillage(village);

        expect(action).toEqual({
            type: SET_VILLAGE,
            village
        })
    });

});
