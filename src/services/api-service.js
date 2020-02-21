// Endpoint
import config from '../config';

// Service
import TokenService from './token-service';
import IdleService from './idle-service';

const ApiService = {
  // Log user in session
  postLogin(credentials) {
    return fetch(`${config.API_ENDPOINT}/auth/login`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
    .then(res => 
      (!res.ok)
      ? res.json().then(e => Promise.reject(e))
      : res.json()
      )
    .then(res => {
      // Saves token
      TokenService.saveAuthToken(res.authToken);
      // Start idle timer when user is idle
      IdleService.regiserIdleTimerResets();
      // Start refresh timer when token expires
      TokenService.queueCallbackBeforeExpiry(() => {
        ApiService.postRefresh();
      });
      return res;
    });
  },
  // Refresh session
  postRefresh() {
    return fetch(`${config.API_ENDPOINT}/auth/refresh`, {
      method: 'POST',
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`
      }
    })
    .then(res => 
      (!res.ok)
      ? res.json().then(e => Promise.reject(e))
      : res.json()
      )
    .then(res => {
      // Do not need to start the idle timer as user is already logged in
      // Save token
      TokenService.saveAuthToken(res.authToken);
      // Start refresh timer
      TokenService.queueCallbackBeforeExpiry(() => {
        ApiService.postRefresh();
      });
      return res;
    })
    .catch(error => {
      console.log('Refresh token request error');
      console.error(error);
    });
  },
  // needs edit of the body
  getUserLogs() {
    return fetch(`${config.API_ENDPOINT}/logs`, {
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`
      }
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      );
  },
  // Register user
  postUser(newUser) {
    return fetch(`${config.API_ENDPOINT}/users`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(newUser)
    })
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      );
  },
  // Purge user account
  deleteUser(userId) {
    return fetch(`${config.API_ENDPOINT}/users/${userId}`, {
      method: 'DELETE',
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`
      }
    })
      .then(res =>
        (!res.ok)
          ? Promise.reject()
          : null
      );
  },
  // Edit user account
  patchUser(user) {
    return fetch(`${config.API_ENDPOINT}/users/${user.id}`, {
      method: 'PATCH',
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
        'content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })
      .then(res =>
        (!res.ok)
          ? Promise.reject()
          : null
      )
  },
  // Add log
  postLog(log) {
    return fetch(`${config.API_ENDPOINT}/logs`, {
      method: 'POST',
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`,
        'content-type': 'application/json'
      },
      body: JSON.stringify(log)
    })
      .then(res =>
        (!res.ok)
          ? Promise.reject()
          : res.json()
      );
  },
  // Remove log
  deleteLog(logId) {
    return fetch(`${config.API_ENDPOINT}/logs/${logId}`, {
      method: 'DELETE',
      headers: {
        'authorization': `bearer ${TokenService.getAuthToken()}`
      }
    })
      .then(res =>
        (!res.ok)
          ? Promise.reject()
          : null
      )
  },
  // Edit log
  patchLog(log) {
    return fetch(`${config.API_ENDPOINT}/logs/${log.id}`, {
      method: 'PATCH',
      headers: {
        'Authorization': `bearer ${TokenService.getAuthToken()}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(log)
    })
    .then( res => 
      (!res.ok)
      ? Promise.reject()
      : null
    );
  }
}

export default ApiService;
