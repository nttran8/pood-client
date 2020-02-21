let _timeoutId;
let _idleCallback = null;
let _notIdleEvents = ['mousedown', 'mousemove', 'keypress', 'scroll', 'touchstart' ];
let _TEN_MINUTES_IN_MS = 10 * 60 * 1000;

const IdleService = {
  setIdleCallback(idleCallback) {
    // Call when user goes idle
    _idleCallback = idleCallback;
  },
  // Reset timer when there's interactions
  resetIdleTimer(ev) {
    // Remove any timeouts as the user just interacted
    clearTimeout(_timeoutId);
    // Set idle time to 10 min
    _timeoutId = setTimeout(_idleCallback, _TEN_MINUTES_IN_MS);
  },
  regiserIdleTimerResets() {
    // Restart idle timer
    _notIdleEvents.forEach(event =>
      document.addEventListener(event, IdleService.resetIdleTimer, true)
    );
  },
  unRegisterIdleResets() {
    // Remove any timeout
    clearTimeout(_timeoutId);
    _notIdleEvents.forEach(event =>
      document.removeEventListener(event, IdleService.resetIdleTimer, true)
    );
  },
};

export default IdleService;