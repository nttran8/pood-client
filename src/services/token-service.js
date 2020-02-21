import config from '../config';
import jwtDecode from 'jwt-decode';

let _timeoutId;
const _TEN_SECONDS_IN_MS = 10000;

const TokenService = {
  saveAuthToken(token) {
    window.localStorage.setItem(config.TOKEN_KEY, token);
  },
  getAuthToken() {
    return window.localStorage.getItem(config.TOKEN_KEY);
  },
  clearAuthToken() {
    console.info('Removing token');
    window.localStorage.removeItem(config.TOKEN_KEY);
  },
  hasAuthToken() {
    return !!TokenService.getAuthToken();
  },
  makeBasicAuthToken(userName, password) {
    return window.btoa(`${userName}:${password}`);
  },
  parseJwt(jwt) {
    return jwtDecode(jwt);
  },
  readJwtToken() {
    return TokenService.parseJwt(TokenService.getAuthToken());
  },
  _getMsUntilExpiry(payload) {
    // Calculate when the JWT will expire
    return (payload.exp * 1000) - Date.now();
  },
  queueCallbackBeforeExpiry(callback) {
    // Get the time when token expires
    const msUntilExpiry = TokenService._getMsUntilExpiry(
      TokenService.readJwtToken()
    );
    // Get refresh token 10 seconds before token expires
    _timeoutId = setTimeout(callback, msUntilExpiry - _TEN_SECONDS_IN_MS);
  },
  clearCallbackBeforeExpiry() {
    clearTimeout(_timeoutId);
  },
};

export default TokenService;