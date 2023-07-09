// ./src/stories/Button.js

import React, { useMemo } from "react";
import {
  IBM_Plex_Sans,
  Inter,
  Open_Sans,
  Roboto,
  Noto_Sans,
} from "next/font/google";

const plex_sans = IBM_Plex_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const inter = Noto_Sans({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

const getSizeClasses = (size: string) => {
  switch (size) {
    case "small": {
      return "px-4 py-2.5";
    }
    case "large": {
      return "px-6 py-3";
    }
    default: {
      return "px-5 py-2.5";
    }
  }
};

const getModeClasses = (isPrimary: boolean) =>
  isPrimary
    ? "text-white bg-blue-500 border-blue-500 hover:bg-blue-600 hover:border-blue-600 dark:text-zinc-900 dark:bg-zinc-100 dark:border-zinc-100 dark:hover:bg-zinc-200 dark:hover:border-zinc-200 "
    : "text-blue-500  bg-transparent border-blue-500  dark:text-white dark:border-white hover:bg-blue-500 hover:text-zinc-100 hover:border-blue-500 dark:hover:bg-zinc-100 dark:hover:text-black";

const BASE_BUTTON_CLASSES =
  "cursor-pointer rounded-full border-2 font-semibold leading-none inline-block font-mono";

/**
 * Props for component
 */
interface buttonProps {
  label: string;
  primary: boolean;
  size: string;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = "medium",
  label,
  ...props
}: buttonProps) => {
  const computedClasses = useMemo(() => {
    const modeClass = getModeClasses(primary);
    const sizeClass = getSizeClasses(size);

    return [modeClass, sizeClass].join(" ");
  }, [primary, size]);

  return (
    <button
      type="button"
      className={`${BASE_BUTTON_CLASSES} ${computedClasses} ${inter.className}`}
      {...props}
    >
      {label}
    </button>
  );
};
