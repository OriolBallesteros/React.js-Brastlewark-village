
const filterHabitants = (data, { hair, genre, profession }) => {
    let wishedHabitants = [];
    const genreFromId = id => id % 2 === 0 ? 'Female' : 'Male';

    data.forEach(habitant => {
        if (habitant.hair_color === hair && genreFromId(habitant.id) === genre) {
            habitant.professions.forEach(prof => {
                if (prof === profession) {
                    wishedHabitants.push(habitant);
                }
            });
        }
    });

    return wishedHabitants;
};

export default filterHabitants;