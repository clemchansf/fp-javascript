export const compose =
  f =>
  g =>
  (...args) =>
    f(g(...args));

export const pipe =
  f =>
  g =>
  (...args) =>
    g(f(...args));

export const or =
  f =>
  g =>
  (...args) =>
    f(...args) || g(...args);

export const and =
  f =>
  g =>
  (...args) =>
    f(...args) && g(...args);
