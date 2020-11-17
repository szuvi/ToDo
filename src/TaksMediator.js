export const mediator = (function IIFE() {
  let tasks = {};

  function subscribe(eventName, callback) {
    if (!tasks[eventName]) {
      tasks[eventName] = [];
    }
    tasks[eventName].push(callback);
    const index = tasks[eventName].length - 1;
    return function unsubscribe() {
      tasks[eventName].splice[(index, 1)];
    };
  }

  function emit(eventName, data = null) {
    tasks[eventName].forEach((callback) => {
      callback(data);
    });
  }

  return { subscribe, emit };
})();
