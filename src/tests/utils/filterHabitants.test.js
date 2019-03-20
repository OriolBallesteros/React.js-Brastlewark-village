import filterHabitants from '../../utils/filterHabitants';
import { dummyData } from '../dummyData';

describe('filterHabitants function test', () => {
    it('should filter habitants due to given inputs', ()=>{
        const filters = { 
            hair: dummyData[0].hair_color, 
            genre: 'Female', 
            profession: dummyData[0].professions[0] }

        const habitant = filterHabitants(dummyData, filters)

        expect(habitant[0]).toEqual(dummyData[0]);
    });
});