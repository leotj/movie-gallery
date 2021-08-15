import { DateFilterValue } from 'types/date-filter';

export function isInRange(date: Date, range: DateFilterValue): boolean {
  const dateInTime = date.getTime();
  const startDateInTime = range[0].getTime();
  const endDateInTime = range[1].getTime();
  console.log('dateInTime', dateInTime);
  console.log('startDateInTime', startDateInTime);
  console.log('endDateInTime', endDateInTime);
  return dateInTime >= startDateInTime && dateInTime <= endDateInTime;
}
