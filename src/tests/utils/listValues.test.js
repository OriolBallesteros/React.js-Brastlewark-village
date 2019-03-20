import { listAllJobs, listAllHairs } from '../../utils/listValues';
import {dummyData} from '../dummyData';

describe('listValue test', () => {
    it('should list all professions of given objects', () => {
        const list = listAllJobs(dummyData);

        expect(list).toEqual(["Metalworker", "Woodcarver", 
            "Brewer","Medic", "Cook",
            "Baker", "Carpenter", "Farmer"]);
    });

    it('should list all hairs color of given objects', () => {
        const list = listAllHairs(dummyData);

        expect(list).toEqual(["Pink", "Green", "Red"]);
    });

});