function formatDate(dateString: string, language: boolean): string {
  const dateArray = dateString.split('/');
  const year = parseInt(dateArray[2]);
  const month = parseInt(dateArray[1]) - 1;
  const day = parseInt(dateArray[0]);
  const date = new Date(Date.UTC(year, month, day));
  const options: Intl.DateTimeFormatOptions = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  };
  const locale: string = language ? 'ar-EG' : 'en';
  return date.toLocaleDateString(locale, options);
}

export default formatDate;
