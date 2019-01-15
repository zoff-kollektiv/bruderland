export const formatDuration = time => {
  let durationFormatted = `${Math.round((time / 60) * 100) / 100} min`;

  durationFormatted = durationFormatted.replace('.', ':');

  return durationFormatted;
};

export const formatCurrentTime = time => {
  if (time < 60) {
    // show seconds
    const seconds = parseInt(time, 10);

    return `0:${seconds < 10 ? `0${seconds}` : seconds} min`;
  }

  if (time > 60) {
    const minutes = parseInt(time / 60, 10);
    let seconds = parseInt(`${time}`.substring(1), 10);

    if (minutes > 99) {
      seconds = parseInt(`${time}`.substring(2), 10);
    }

    return `${minutes < 10 ? `0${minutes}` : minutes}:${
      seconds < 10 ? `0${seconds}` : seconds
    } min`;
  }

  return time;
};
