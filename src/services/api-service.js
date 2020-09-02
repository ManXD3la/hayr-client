import TokenService from './token-service'
import config from '../config';


const hayrApiService = {

    
//Auth

    loginAuth() {
        return fetch(`${config.API_ENDPOINT}/auth`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `basic ${TokenService.getAuthToken()}`,
            },
        })
    },
    
    
//User Endpoints
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
    
    getUserInfo(userName) {
        return fetch(`${config.API_ENDPOINT}/user/${userName}`, {
            headers: {
                'content-type': 'application/json',
                'authorization': `basic ${TokenService.getAuthToken()}`,
            },
        })
        .then(res => {
            if (!res.ok)
                return res.json().then(e => Promise.reject(e))
            return res.json()
            })
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
    postEntry(reflection, mood_pleasant, mood_energy) {
        let reqBody = JSON.stringify({
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
        .then(res => {
            if (!res.ok)
                return res.json().then(e => Promise.reject(e))
            return res.json()
            })
    },

    getJournalInfo() {
        return fetch(`${config.API_ENDPOINT}/entry`, {
            headers: {
                'authorization': `basic ${TokenService.getAuthToken()}`,
            },
        })
        .then(res => {
            if (!res.ok)
                return res.json().then(e => Promise.reject(e))
            return res.json()
            })
    },

    getPublicEntries() {
        return fetch(`${config.API_ENDPOINT}/entry/public`, {
            headers: {
                'content-type': 'application/json',
                'authorization': `basic ${TokenService.getAuthToken()}`,
            },
        })
        .then(res => {
            if (!res.ok)
                return res.json().then(e => Promise.reject(e))
            return res.json()
            })
    },

    getEntry(entryId) {
        return fetch(`${config.API_ENDPOINT}/entry/${entryId}`, {
            headers: {
                'content-type': 'application/json',
                'authorization': `basic ${TokenService.getAuthToken()}`,
            },
        })
        .then(res => {
            if (!res.ok)
                return res.json().then(e => Promise.reject(e))
            return res.json()
            })
    },

    getSimilarEntries(entryId) {
        return fetch(`${config.API_ENDPOINT}/entry/${entryId}/community`, {
            headers: {
                'content-type': 'application/json',
                'authorization': `basic ${TokenService.getAuthToken()}`,
            },
        })
        .then(res => {
            if (!res.ok)
                return res.json().then(e => Promise.reject(e))
            return res.json()
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
        .then(res => {
            if (!res.ok)
                return res.json().then(e => Promise.reject(e))
            return res.json()
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