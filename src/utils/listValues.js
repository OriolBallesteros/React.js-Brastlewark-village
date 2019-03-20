const listAllJobs = (data) => {
    const arr = [];
    //console.log('listAllJobs ', data);
    data.map((habitant) => {
        return habitant.professions.map((prof) => {
            return arr.push(prof);
        });
    });

    const jobsUnique = [...new Set(arr)];
    //console.log(jobsUnique);
    return jobsUnique;
};

const listAllHairs = (data) => {
    const allHair = [];

    data.map((habitant) => {
        return allHair.push(habitant.hair_color);
    });

    const listHair = [...new Set(allHair)];
    //console.log(listHair);
    return listHair;
};

/*
const listAllAges = (data) => {
    const allAges = [];
    data.map(habitant => {
        return allAges.push(habitant.age);
    });

    const listAges = [...new Set(allAges)];
    console.log('ages ',listAges);
    return listAges;
};


const listAllHeight = data => {
    const all = [];
    data.map(habitant => {
        return all.push(habitant.height);
    });

    const list = [...new Set(all)];
    console.log('heights ',list);
    return list;
}

const listAllWeight = data => {
    const all = [];
    data.map(habitant => {
        return all.push(habitant.weight);
    });

    const list = [...new Set(all)];
    console.log('weights ', list);
    return list;
}
*/

export { listAllJobs, listAllHairs };