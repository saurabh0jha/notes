/**
 * proper debounce should have following features:
 * 1. should return a function
 * 2. should not execute if called before current wait expires
 * 3. should extend the wait if the function is called before current wait expires
 * 4. should be able to work with the this context of the callback function
 * 5. should save the last arguments when current wait is active and next execution should be called with the saved arguments
 *
 * Follow ups:
 * 1. Leading and trailing debounce
 * 2. implement useDebounceHook
 */

function debounce(func, wait) {
  let timeoutID = null;
  let savedArgs;
  return function (...args) {
    savedArgs = args;

    timeoutID ? clearTimeout(timeoutID) : null;

    timeoutID = setTimeout(() => {
      func.apply(this, savedArgs);
      timeoutID = null;
    }, wait);
  };
}

module.exports = {
  debounce,
};
