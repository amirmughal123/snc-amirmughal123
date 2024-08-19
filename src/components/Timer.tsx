import classNames from "classnames";
import { FunctionComponent, PropsWithChildren } from "react";

type TimerProps = { currentTime: Date | undefined };

export const Timer: FunctionComponent<PropsWithChildren<TimerProps>> = ({
  currentTime,
}) => {
  const formatDate = () => {
    if (!currentTime) return;

    // Extract date components
    const day = currentTime.getDate();
    const month = currentTime.getMonth() + 1; // Months are zero-indexed
    const year = currentTime.getFullYear();

    // Extract time components
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const seconds = currentTime.getSeconds();

    // Pad single-digit day, month, hours, minutes, and seconds with leading zeros
    const formattedDay = day < 10 ? `0${day}` : day;
    const formattedMonth = month < 10 ? `0${month}` : month;
    const formattedHours = hours < 10 ? `0${hours}` : hours;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;

    return `${formattedDay}-${formattedMonth}-${year} : ${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  };

  return (
    <div
      className={classNames(
        "mb-5 pb-5 pt-5 pr-10 pl-10 text-sm text-blue-800 rounded-lg bg-blue-50",
      )}
      role="alert"
    >
      {formatDate()}
    </div>
  );
};
