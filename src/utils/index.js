exports.timeout = function longTimeFunction(timeAllowedInSeconds) {
  function getCurrentTime() {
      return new Date().getTime() / 1000;
  }

  const startTime = getCurrentTime();
  let stopLoop = false;
  let currentTime;

  while(1 && !stopLoop) {  //infinite loop
      //your code here, for example:
      // console.log(Math.random());

      currentTime = Math.round(getCurrentTime() - startTime);

      if (currentTime >= timeAllowedInSeconds) {
          stopLoop = true;
      }
  }
};