import dbService from './dbService';

const appService = () => {
    let db;
    
    function init() {
        db = dbService.getDB();
    } 

    function getExercises() {
        return db.collection('exercise').get()
            .then(snapshot => {
                const retVal = [];
                snapshot.forEach((doc) => {
                    retVal.push(doc.data());
                });
                return retVal;
            })
            .catch((err) => {
                console.log('Error getting documents', err);
            });
    }

    function saveExercise(payload) {
        return db.collection('exercise').add({
            ...payload
        });
    }

    return {
        init,
        getExercises,
        saveExercise
    }
}

const instance = appService();

export default instance;
