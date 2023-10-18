import React, { memo, useState } from "react";
import { ErrorIcon, ArrowRightIcon, ArrowLeftIcon } from "../../assets/icons";
import { Button } from "../index";
import moment from "moment-jalaali"

import {
  getCurrentMonthName,
  getDayMonthNames,
  returnWeekDays,
  isHoliday
} from '../../constants/months'
import "./styles.scss";

export const DatePicker = memo(({ onChange }: any) => {
  const [currentMoment, setCurrentMoment] = useState<any>(moment())
  const [selectedFromDate, setSelectedFromDate] = useState<any>(null)
  const [selectedToDate, setSelectedToDate] = useState<any>(null)
  const [selectingFrom, setSelectingFrom] = useState<Boolean>(true)
  const calendar = getCurrentMonthName(currentMoment)
  const weekDays = returnWeekDays('rtl');

  const handleDateChange = (day: any) => {
    if (selectingFrom) {
      if (selectedFromDate && day.getTime() === selectedFromDate.getTime()) {
        setSelectedFromDate(null);
        setSelectedToDate(null);
        setSelectingFrom(true);
      } else {
        setSelectedFromDate(day);
        setSelectingFrom(false);
      }
    } else {
      if (day > selectedFromDate) {
        if (selectedToDate && day.getTime() === selectedToDate.getTime()) {
          setSelectedToDate(null);
        } else {
          setSelectedToDate(day);
        }
      } else if (day === selectedFromDate) {
        setSelectedFromDate(null);
        setSelectedToDate(null);
        setSelectingFrom(true);
      } else {
        setSelectedToDate(null);
        setSelectingFrom(true);
      }
    }
  }

  const isBetween = (day: any) => {
    if (!selectedFromDate || !selectedToDate) {
      return false;
    }
    return day.isBetween(selectedFromDate, selectedToDate, 'day', '[]');
  };

  const convertToPersianNumber = (number: any) => {
    const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    return number.toString().replace(/\d/g, (digit: any) => persianDigits[digit]);
  }

  const convertToArabicNumber = (number: any) => {
    const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    return number.toString().replace(/\d/g, (digit: any) => persianDigits[digit]);
  }

  const createDayObjects = () => {
    const startOfMonth = calendar.start;
    const endOfMonth = calendar.end;
    const days = [];

    const startDayOfWeek = startOfMonth.day();
    const numEmptyPlaceholders = (startDayOfWeek + 1) % 7;

    for (let i = 0; i < numEmptyPlaceholders; i++) {
      days.push(null);
    }

    for (let day: any = moment(startOfMonth); day.isSameOrBefore(endOfMonth); day.add(1, 'day')) {
      const isPastDay = day.isBefore(new Date(), 'day');
      const isHolidays = isHoliday(day);
      const isCurrentDay = day.isSame(new Date(), 'day');
      const dayClassName = isPastDay ? 'past-day' : isHolidays ? 'holiday' : isCurrentDay ? 'current-day' : '';
      const isBetweenDates = isBetween(day);
      const betweenClass = isBetweenDates ? 'between-dates' : '';
      const isFromDate = selectedFromDate && day.isSame(selectedFromDate, 'day');
      const isToDate = selectedToDate && day.isSame(selectedToDate, 'day');
      const isBeforeFromDate = selectedFromDate && day.isBefore(selectedFromDate, 'day');

      days.push({
        date: day.toDate(),
        className: `flex border-rounded justify-content-center align-items-center calendar-day ${dayClassName} ${betweenClass} ${isFromDate ? 'from-date' : ''} ${isToDate ? 'to-date' : ''} ${isBeforeFromDate ? 'past-day' : ''}`,
        disabled: isPastDay,
      });
    }

    return days;
  };

  const dayObjects = createDayObjects();

  return (
    <div className="date-picker d-flex flex-column">
      <div className="calendar-header">
        <div className="calendar-header-section d-flex justify-content-between align-items-center">
          <Button
            icon={<ArrowLeftIcon fill="#aaacaf" />}
            title="ماه قبل"
            variant="btn btn-link calendar-nav-button text-light-gray fs-5"
            onClick={() => setCurrentMoment(currentMoment.clone().subtract(1, 'month'))}
          />
          <div className="text-center">
            <span className="calendar-month-year fs-2 fw-bolder">
              {`${calendar.rtl} ${convertToPersianNumber(calendar.year)}`}
            </span>
            <div className="d-flex flex-column align-items-center justify-content-center">
              <div className="d-flex ps-3 fs-6 text-detail">{calendar.ltr} {calendar.yearEn}</div>
              <div className="d-flex ps-3 fs-6 text-detail">{calendar.hijri} {convertToArabicNumber(calendar.eyarHijri)}</div>
            </div>
          </div>
          <Button
            title="ماه بعد"
            icon={<ArrowRightIcon fill="#000" />}
            variant="btn btn-link calendar-nav-button text-dark-gray fs-5 d-flex flex-row-reverse"
            onClick={() => setCurrentMoment(currentMoment.clone().add(1, 'month'))}
          />
        </div>
        <div className="calendar-days p-0 mb-0">
          {weekDays.map((day: any) => (
            <div key={day} className="day flex-fill text-center py-2">{day}</div>
          ))}
        </div>
      </div>
      <div className="calendar-days mb-5 justify-content-center align-items-center ">
        {dayObjects.map((dayObj, index) => {
          if (!dayObj) {
            return <div key={`empty-${index}`} className="empty-day"></div>;
          }

          return (
            <div
              id={dayObj.date.toISOString()}
              key={dayObj.date.toISOString()}
              className={dayObj.className}
              onClick={() => handleDateChange(dayObj.date)}
              aria-disabled={dayObj.disabled}
              data-toggle="tooltip"
              data-placement="top"
              title="Disabled tooltip"
            >
              <span className="d-none action-button">
                <ErrorIcon size="20" stroke="red" />
              </span>
              <span className="d-flex text-month">{calendar.rtl}</span>
              {convertToPersianNumber(moment(dayObj.date).jDate())}
              <span className="d-flex flex-row w-100 justify-content-between">
                <span className="d-none d-xl-block hijri-date pe-2">
                  {getDayMonthNames(dayObj.date) ? getDayMonthNames(dayObj.date).hijri : ''}
                </span>
                <span className="d-none d-xl-block hijri-date ps-2 text-align-start">{getDayMonthNames(dayObj.date) ? getDayMonthNames(dayObj.date).georgian : ''}</span>
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
});