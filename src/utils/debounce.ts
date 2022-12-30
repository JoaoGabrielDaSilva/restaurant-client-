export const debounce = (func: Function, delay = 500) => {
  let timer: NodeJS.Timeout | null = null;
  const fn = function (...args: unknown[]) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      func.apply(fn, args);
    }, delay);
  };

  return fn;
};
