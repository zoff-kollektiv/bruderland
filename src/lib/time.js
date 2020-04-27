/* eslint-disable import/prefer-default-export */

export const formatCurrentTime = (time) => {
  if (time < 60) {
    // show seconds
    const seconds = parseInt(time, 10);

    return `0:${seconds < 10 ? `0${seconds}` : seconds} min`;
  }

  if (time > 60) {
    const minutes = parseInt(time / 60, 10);
    const seconds = parseInt(time - minutes * 60, 10);

    return `${minutes < 10 ? `0${minutes}` : minutes}:${
      seconds < 10 ? `0${seconds}` : seconds
    } min`;
  }

  return time;
};
