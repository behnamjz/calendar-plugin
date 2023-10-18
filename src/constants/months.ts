import momentJalaali from 'moment-jalaali'
import holidays from './holidays'

const monthNames: any = {
  ltr: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  rtl: [
    "فروردین",
    "اردیبهشت",
    "خرداد",
    "تیر",
    "مرداد",
    "شهریور",
    "مهر",
    "آبان",
    "آذر",
    "دی",
    "بهمن",
    "اسفند",
  ],
  hijri: [
    "محرم",
    "صفر",
    "ربیع اول",
    "ربیع ثانی",
    "جمالی اول",
    "جمالی ثانی",
    "رجب",
    "شعبان",
    "رمضان",
    "شوال",
    "ذیقعده",
    "ذیحجه",
  ],
};

const weekDays: any = {
  ltr: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  rtl: ["شنبه", "یکشنبه", "دوشنبه", "سه شنبه", "چهارشنبه", "پنجشنبه", "جمعه"],
};

const monthList: any = {
  ltr: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  rtl: [
    "فروردین",
    "اردیبهشت",
    "خرداد",
    "تیر",
    "مرداد",
    "شهریور",
    "مهر",
    "آبان",
    "آذر",
    "دی",
    "بهمن",
    "اسفند",
  ],
  hijri: [
    "محرم",
    "صفر",
    "ر-اول",
    "ر-ثانی",
    "ج-اول",
    "ج-ثانی",
    "رجب",
    "شعبان",
    "رمضان",
    "شوال",
    "ذیقعده",
    "ذیحجه",
  ],
};

export const fullMonths = {
  ltr: {
    en: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    fa: [
      "ژانویه",
      "فوریه",
      "مارس",
      "آوریل",
      "می",
      "ژوئن",
      "جولای",
      "آگوست",
      "سپتامبر",
      "اکتبر",
      "نوامبر",
      "دسامبر",
    ],
  },
  rtl: {
    fa: [
      "فروردین",
      "اردیبهشت",
      "خرداد",
      "تیر",
      "مرداد",
      "شهریور",
      "مهر",
      "آبان",
      "آذر",
      "دی",
      "بهمن",
      "اسفند",
    ],
    en: [
      "Farvardi",
      "Ordibehesht",
      "Khordad",
      "Tir",
      "Mordad",
      "Shahrivar",
      "Mehr",
      "Aban",
      "Azar",
      "Dey",
      "Bahman",
      "Esfand",
    ],
  },
};


export function getCurrentMonthName(date: Date) {
  const currentGregorianDate = new Date(date);

  // Hijri Date //
  const options: any = {
    month: '2-digit',
    day: 'numeric',
    year: 'numeric',
    calendar: 'islamic-umalqura'
  };
  const dateFormat = Intl.DateTimeFormat('ar', options);
  const formattedDate = dateFormat.format(date);
  const [, month, year, era]: any = formattedDate.split(/[/\s]+/);
  const convertedMonth = convertArabicNumbersToEn(month)
  const monthIndex = parseInt(convertedMonth, 10) > 0 ? parseInt(convertedMonth, 10) - 1 : 11;
  const monthNamesHijri = `${monthNames.hijri[monthIndex - 1]} - ${monthNames.hijri[monthIndex] ? monthNames.hijri[monthIndex] : monthNames.hijri[0]}`;

  // Shamsi Date //
  const currentShamsiDate = momentJalaali(currentGregorianDate).format('jYYYY jMM jDD');
  const shamsiDateMoment = momentJalaali(currentShamsiDate, 'jYYYY jMM jDD');
  const startOfMonth = shamsiDateMoment.clone().startOf('jMonth');
  const endOfMonth = shamsiDateMoment.clone().endOf('jMonth');
  const currentShamsiYear = shamsiDateMoment.jYear();
  const currentShamsiMonth = shamsiDateMoment.jMonth();
  const monthNamesRTL = monthNames.rtl[currentShamsiMonth];

  // Georgian Date //
  const monthNamesLTR = `${monthNames.ltr[currentGregorianDate.getMonth()]} - ${monthNames.ltr[currentGregorianDate.getMonth() + 1]}`;
  const yearEn = currentGregorianDate.getFullYear();

  return {
    start: startOfMonth,
    end: endOfMonth,
    year: currentShamsiYear,
    eyarHijri: year,
    yearEn: yearEn,
    ltr: monthNamesLTR,
    rtl: monthNamesRTL,
    hijri: monthNamesHijri
  };
}

export function isHoliday(date: Date) {
  const options: any = {
    month: '2-digit',
    day: '2-digit',
    calendar: 'islamic-umalqura'
  };
  const dateFormat = Intl.DateTimeFormat('ar', options);
  const formattedHijriDate = dateFormat.format(date);
  const [hijriDay, hijriMonth] = formattedHijriDate.split('/');
  const cleanedHijriDay = hijriDay.replace(/\D/g, '')
  const cleanedHijriMonth = hijriMonth.replace(/\D/g, '')
  const formattedHijri = `${cleanedHijriMonth}/${cleanedHijriDay}`
  const shamsiDayOfYear = momentJalaali(date).jDayOfYear();

  const dayy = new Date(date);
  const isFriday = dayy.getDay() === 5

  const events = holidays.filter(item => {
    if (item.fday && item.fday === formattedHijri) {
      return (item.isLunar && item.holiday);
    }
    if (item.day && item.day === shamsiDayOfYear) {
      return item.holiday;
    }
    if (isFriday) {
      return true
    }
    return false;
  })

  return events.length > 0 ? events : null
}

export function convertArabicNumbersToEn(value: string) {
  const arabicToEnglishMap: Record<string, string> = {
    '٠': '0',
    '١': '1',
    '٢': '2',
    '٣': '3',
    '٤': '4',
    '٥': '5',
    '٦': '6',
    '٧': '7',
    '٨': '8',
    '٩': '9',
  };

  const convertedValue = value.replace(/[٠-٩]/g, (match) => arabicToEnglishMap[match] || match);
  return convertedValue;
}

export function getDayMonthNames(date: Date) {
  const currentGregorianDate = new Date(date);
  // Hijri Date //
  const options: any = {
    month: '2-digit',
    day: 'numeric',
    year: 'numeric',
    calendar: 'islamic-umalqura'
  };
  const dateFormat = Intl.DateTimeFormat('ar', options);
  const formattedDate = dateFormat.format(currentGregorianDate);
  const [day, month]: any = formattedDate.split(/[/\s]+/)
  const convertedMonth = parseInt(convertArabicNumbersToEn(month))
  const monthNamesHijri = monthNames.hijri[convertedMonth - 1];
  const hijriDay = `${day} ${monthNamesHijri}`;

  // Georgian Date //
  const dayEn = currentGregorianDate.getDate()
  const monthEn = currentGregorianDate.toLocaleDateString('en-US', { month: 'short' })

  const georgianDay = `${dayEn} ${monthEn}`

  return {
    hijri: hijriDay,
    georgian: georgianDay,
  };
};

export const returnWeekDays = (direction: string) => {
  return weekDays[direction];
};
