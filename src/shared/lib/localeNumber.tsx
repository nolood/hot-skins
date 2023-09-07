const LocaleNumbers = ({
  currencyIcon,
  number,
}: {
  currencyIcon?: boolean;
  number: number | string;
}) => {
  const locale = localStorage.getItem('locale') || 'ru';
  const formatNumber = (number: number) => {
    const formatter = new Intl.NumberFormat(locale, {
      minimumFractionDigits: 2,
    });
    return formatter.format(number);
  };

  const formatCurrency = (number: number) => {
    const formatter = new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: 'RUB',
      minimumFractionDigits: 2,
    });
    return formatter.format(number);
  };

  return <div>{currencyIcon ? formatCurrency(Number(number)) : formatNumber(Number(number))}</div>;
};

export default LocaleNumbers;
