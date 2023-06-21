import moment from 'moment';
import 'moment/locale/es';

export const getTimeAgo = (specificDate) => {
  const currentDate = moment();
  const difference = currentDate.diff(moment(specificDate));
  const duration = moment.duration(difference);

  const days = duration.days();
  const hours = duration.hours();
  const minutes = duration.minutes();
  const seconds = duration.seconds();

  let result = '';

  if (days > 0) {
    result += `${days} day(s) `;
  }

  if (hours > 0) {
    result += `${hours} hour(s) `;
  }

  if (minutes > 0) {
    result += `${minutes} minute(s) `;
  }

  if (seconds > 0) {
    result += `${seconds} second(s) `;
  }

  if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
    result = 'just now';
  } else {
    result += 'ago';
  }

  return result.trim();
};
