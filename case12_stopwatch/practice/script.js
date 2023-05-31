(function () {
  "use strict";

  const get = (target) => {
    return document.querySelector(target);
  };

  class Stopwatch {
    start() {}
    stop() {}
    reset() {}
  }

  const $startButton = get("timer_button.start");
  console.log($startButton);
  const stopwatch = new Stopwatch();
})();
