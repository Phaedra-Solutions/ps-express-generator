exports.timeout = function longTimeFunction(timeAllowedInSeconds) {
  function getCurrentTime() {
      return new Date().getTime() / 1000;
  }

  const startTime = getCurrentTime();
  let stopLoop = false;
  let currentTime;

  while(1 && !stopLoop) {  //infinite loop
      currentTime = Math.round(getCurrentTime() - startTime);

      if (currentTime >= timeAllowedInSeconds) {
          stopLoop = true;
      }
  }
};