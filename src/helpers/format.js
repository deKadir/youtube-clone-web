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
export const maxString = (string, chars) => {
  return string.length > chars ? `${string.slice(0, chars - 3)}...` : string;
};

export const elapsedTime = (createdAt) => {
  const [year, month, day] = createdAt.split(/-|T/).map((e) => parseInt(e));
  const date = new Date();
  const [cYear, cMonth, cDay] = [
    date.getFullYear(),
    date.getMonth() + 1,
    date.getDate(),
  ];
  const elapsedDays =
    (cYear - year) * 365 + (cMonth - month) * 30 + (cDay + 1 - day);

  if (elapsedDays > 365) {
    const elapsedYear = parseInt(elapsedDays / 365);
    return elapsedYear + ' ' + (elapsedYear > 1 ? 'years' : 'year');
  }
  return elapsedDays + ' ' + (elapsedDays > 1 ? 'days' : 'day');
};

export const formatNumber = (number) => {
  let num = parseInt(number);
  if (num >= 1000000) {
    return `${(num / 1000000).toFixed(1)}M`;
  }
  if (num >= 1000) {
    return `${(num / 1000).toFixed(1)}K`;
  }
  return number;
};
