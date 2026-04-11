"use client";

import React, { useState } from "react";

interface CalendarPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectDates: (dates: Date[]) => void;
  selectedDates: Date[];
}

const CalendarPopup: React.FC<CalendarPopupProps> = ({
  isOpen,
  onClose,
  onSelectDates,
  selectedDates,
}) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [localSelectedDates, setLocalSelectedDates] = useState<Date[]>(selectedDates);

  if (!isOpen) return null;

  const daysInMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth() + 1,
    0
  ).getDate();

  const firstDayOfMonth = new Date(
    currentMonth.getFullYear(),
    currentMonth.getMonth(),
    1
  ).getDay();

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1));
  };

  const handleDateClick = (day: number) => {
    const clickedDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    
    if (clickedDate < new Date(new Date().setHours(0, 0, 0, 0))) return;

    const isSelected = localSelectedDates.some(
      (d) => d.toDateString() === clickedDate.toDateString()
    );

    if (isSelected) {
      setLocalSelectedDates(
        localSelectedDates.filter((d) => d.toDateString() !== clickedDate.toDateString())
      );
    } else if (localSelectedDates.length < 3) {
      setLocalSelectedDates([...localSelectedDates, clickedDate]);
    }
  };

  const handleConfirm = () => {
    onSelectDates(localSelectedDates);
    onClose();
  };

  const isDateSelected = (day: number) => {
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    return localSelectedDates.some((d) => d.toDateString() === date.toDateString());
  };

  const isDateDisabled = (day: number) => {
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    return date < new Date(new Date().setHours(0, 0, 0, 0));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full animate-scale-in border border-cream-200">
        <div className="p-6 border-b border-cream-200 flex justify-between items-center bg-cream-50 rounded-t-2xl">
          <h3 className="text-xl font-heading font-bold text-brand-800">
            Select Preferred Dates
          </h3>
          <button
            onClick={onClose}
            aria-label="Close calendar"
            className="p-2 hover:bg-white rounded-full transition-colors"
            id="calendar-close-button"
          >
            <svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-6">
          <p className="text-sm text-slate-600 mb-4">
            Please select up to 3 preferred installation dates.
          </p>

          <div className="flex items-center justify-between mb-4">
            <button
              onClick={handlePrevMonth}
              aria-label="Previous month"
              className="p-2 hover:bg-cream-50 rounded-full transition-colors"
            >
              <svg className="w-5 h-5 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <h4 className="font-semibold text-brand-800">
              {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
            </h4>
            <button
              onClick={handleNextMonth}
              aria-label="Next month"
              className="p-2 hover:bg-cream-50 rounded-full transition-colors"
            >
              <svg className="w-5 h-5 text-brand-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div className="grid grid-cols-7 gap-1 mb-4">
            {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((day) => (
              <div
                key={day}
                className="text-center text-xs font-semibold text-slate-500 py-2"
              >
                {day}
              </div>
            ))}
            
            {Array.from({ length: firstDayOfMonth }).map((_, index) => (
              <div key={`empty-${index}`} />
            ))}
            
            {Array.from({ length: daysInMonth }).map((_, index) => {
              const day = index + 1;
              const selected = isDateSelected(day);
              const disabled = isDateDisabled(day);
              const dateLabel = `${monthNames[currentMonth.getMonth()]} ${day}`;
              
              return (
                <button
                  key={day}
                  onClick={() => handleDateClick(day)}
                  disabled={disabled}
                  aria-label={`Select ${dateLabel}`}
                  aria-pressed={selected ? "true" : "false"}
                  className={`
                    aspect-square flex items-center justify-center rounded-lg text-sm font-medium transition-all relative
                    ${disabled ? "text-slate-300 cursor-not-allowed" : "hover:bg-brand-50"}
                    ${selected ? "bg-brand-500 text-white shadow-md" : "text-slate-700"}
                  `}
                >
                  {day}
                </button>
              );
            })}
          </div>

          {localSelectedDates.length > 0 && (
            <div className="mb-4 p-4 bg-brand-50 rounded-lg border border-brand-100">
              <p className="text-sm font-semibold text-brand-700 mb-2">Selected Dates:</p>
              <div className="flex flex-wrap gap-2">
                {localSelectedDates
                  .sort((a, b) => a.getTime() - b.getTime())
                  .map((date, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-3 py-1 bg-white rounded-full text-sm font-medium text-brand-700 shadow-sm border border-brand-100"
                    >
                      {date.toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  ))}
              </div>
            </div>
          )}

          <div className="flex space-x-3">
            <button
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-slate-300 text-slate-700 rounded-lg hover:bg-cream-50 transition-colors font-medium"
            >
              Cancel
            </button>
            <button
              onClick={handleConfirm}
              disabled={localSelectedDates.length === 0}
              className="flex-1 px-4 py-2 bg-brand-500 text-white rounded-lg hover:bg-brand-600 transition-colors font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
              id="calendar-confirm-button"
            >
              Confirm ({localSelectedDates.length}/3)
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarPopup;