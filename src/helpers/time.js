export const formatSecond = (second) => {
  let hour = parseInt(second / 3600);
  let minute = parseInt((second % 3600) / 60);
  let _second = parseInt(second % 60);
  minute = minute < 10 ? '0' + minute : _second;
  _second = _second < 10 ? '0' + _second : _second;
  if (second >= 3600) {
    return `${hour}:${minute}:${_second}`;
  }
  return `${minute}:${_second}`;
};
