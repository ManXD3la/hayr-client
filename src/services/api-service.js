import TokenService from './token-service'
import config from '../config';


const hayrApiService = {

    makeNewUser(name, userName, eMail, password) {
        let reqBody = JSON.stringify({
            name: name,
            user_name: userName,
            email: eMail,
            password: password
        })
        console.log(reqBody)
        return fetch(`${config.API_ENDPOINT}/user`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: reqBody
        })
        .then(console.log('successful submission'))
        .catch(console.error)
    },
    

    //User Endpoints

    //
    
    getUserInfo(userName) {
        return fetch(`${config.API_ENDPOINT}/user/${userName}`, {
            headers: {
                'content-type': 'application/json',
                'authorization': `basic ${TokenService.getAuthToken()}`,
            },
        })
        .then(userName => console.log(userName))
    },

//updateUserInfo

    deleteUserAcct(userName) {
        return fetch(`${config.API_ENDPOINT}/user/${userName}`, {
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                'authorization': `basic ${TokenService.getAuthToken()}`,
            },
        })
    },

    // Entries
    postEntry(userId, reflection, mood_pleasant, mood_energy) {
        let reqBody = JSON.stringify({
            userId: userId,
            refelction: reflection,
            mood_pleasant: mood_pleasant,
            mood_energy: mood_energy
        })

        return fetch(`${config.API_ENDPOINT}/entry`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `basic ${TokenService.getAuthToken()}`,
            },
            body: reqBody
        })
    },

    getJournalInfo() {
        return fetch(`${config.API_ENDPOINT}/entry`, {
            headers: {
                'content-type': 'application/json',
                'authorization': `basic ${TokenService.getAuthToken()}`,
            },
        })
        .then(entries => console.log(entries))
    },

    getPublicEntries() {
        return fetch(`${config.API_ENDPOINT}/entry/public`, {
            headers: {
                'content-type': 'application/json',
                'authorization': `basic ${TokenService.getAuthToken()}`,
            },
        })
    },

    getEntry(entryId) {
        return fetch(`${config.API_ENDPOINT}/entry/${entryId}`, {
            headers: {
                'content-type': 'application/json',
                'authorization': `basic ${TokenService.getAuthToken()}`,
            },
        })
    },

    getSimilarEntries(entryId) {
        return fetch(`${config.API_ENDPOINT}/entry/${entryId}/community`, {
            headers: {
                'content-type': 'application/json',
                'authorization': `basic ${TokenService.getAuthToken()}`,
            },
        })
    },

    patchUpdatedEntry(entryId, entryInfoToUpdate) {
        return fetch(`${config.API_ENDPOINT}/entry`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                'authorization': `basic ${TokenService.getAuthToken()}`,
            },
            body: entryInfoToUpdate
        })
    },

    deleteEntry(entryId) {
        return fetch(`${config.API_ENDPOINT}/entry/${entryId}`, {
            method: 'DELETE',
            headers: {
                'authorization': `basic ${TokenService.getAuthToken()}`,
            },
        })
    }

}
export default hayrApiService;