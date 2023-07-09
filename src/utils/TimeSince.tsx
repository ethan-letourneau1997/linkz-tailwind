import React from "react";

interface TimeSinceProps {
  dateTime: string;
}

export const TimeSince: React.FC<TimeSinceProps> = ({ dateTime }) => {
  const currentDate = new Date();
  const providedDate = new Date(dateTime);

  const timeDifference = currentDate.getTime() - providedDate.getTime();
  const minutesSince = Math.floor(timeDifference / (1000 * 60));
  const hoursSince = Math.floor(timeDifference / (1000 * 60 * 60));
  const daysSince = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  if (minutesSince < 60) {
    return <span>{`${minutesSince} min ago`}</span>;
  }
  if (hoursSince < 24) {
    return <span>{`${hoursSince} hr ago`}</span>;
  }
  if (daysSince < 2) {
    return <span>{`${daysSince} day ago`}</span>;
  }
  return <span>{`${daysSince} days ago`}</span>;
};

export { TimeSince as DefaultTimeSince }; // Add a named export
