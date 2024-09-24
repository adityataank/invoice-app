import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(inputs);
}

export const formatAmount = (amount) => {
  if (amount) {
    return new Intl.NumberFormat("hi-IN", {
      style: "currency",
      currency: "INR",
    }).format(amount);
  }
};
