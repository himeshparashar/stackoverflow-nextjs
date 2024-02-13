import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getTimestamp = (createdAt: Date): string => {
  const now = new Date();
  const createdDate = new Date(createdAt);

  const timeDifference = (now.getTime() - createdDate.getTime()) / 1000; // Cast to number
  const seconds = Math.floor(timeDifference);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  if (years > 0) {
    return `${years} year${years > 1 ? "s" : ""} ago`;
  } else if (months > 0) {
    return `${months} month${months > 1 ? "s" : ""} ago`;
  } else if (weeks > 0) {
    return `${weeks} week${weeks > 1 ? "s" : ""} ago`;
  } else if (days > 0) {
    return `${days} day${days > 1 ? "s" : ""} ago`;
  } else if (hours > 0) {
    return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  } else if (minutes > 0) {
    return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
  } else {
    return `${seconds} second${seconds !== 1 ? "s" : ""} ago`;
  }
};

export const formatBigNumber = (inputNumber: number): string => {
  let formattedNumber: string;
  let divisor: number;

  if (inputNumber >= 1000000) {
    formattedNumber = (inputNumber / 1000000).toFixed(2);
    divisor = 1000000;
  } else if (inputNumber >= 1000) {
    formattedNumber = (inputNumber / 1000).toFixed(2);
    divisor = 1000;
  } else {
    formattedNumber = Number(inputNumber).toFixed(2);
    divisor = 1;
  }

  // Remove trailing zeros and decimal point if not needed
  formattedNumber = formattedNumber.replace(/\.?0*$/, "");

  // Add the appropriate extension
  formattedNumber += divisor === 1000000 ? "M" : divisor === 1000 ? "K" : "";

  // Update inputNumber by dividing it by the divisor
  inputNumber /= divisor;
  return formattedNumber;
};
