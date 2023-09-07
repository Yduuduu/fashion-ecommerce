// 오늘 날짜 표기(0000.00.00.)
export const getFormattedDate = (): string => {
  const date = new Date();

  const year = date.getFullYear().toString();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  return `${year}.${month}.${day}.`;
};
