import TokenService from './token-service'
import config from '../config';


const hayrApiService = {

    
//Auth

    loginAuth() {
        return fetch(`${config.API_ENDPOINT}/auth/login`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                'authorization': `basic ${TokenService.getAuthToken()}`,
            },
        })
    },
    
    
//User Endpoints
    makeNewUser(userName, eMail, password, name='' ) {
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
            .then(res => {
                if (!res.ok)
                    return res.json().then(e => Promise.reject(e))
                return res.json()
                })
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
    postEntry(reflection, mood_pleasant, mood_energy, entry_share) {
        let reqBody = JSON.stringify({
            reflection: reflection,
            mood_pleasant: mood_pleasant,
            mood_energy: mood_energy,
            entry_share: entry_share,
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

    patchUpdatedEntry(entryId, entryInfo) {
        let newShareType = entryInfo
        
        console.log('changing to:', newShareType)

        return fetch(`${config.API_ENDPOINT}/entry/${entryId}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                'authorization': `basic ${TokenService.getAuthToken()}`,
            },
            body: JSON.stringify({entry_share: newShareType})
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