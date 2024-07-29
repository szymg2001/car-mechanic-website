import React from "react";

export type IconType = {
  iconName: string;
  iconSVG: React.ReactNode;
};

export function getIcon(value: string): IconType {
  let index = Icons.findIndex((el) => el.iconName === value);

  if (index > -1) return Icons[index];
  return Icons[0];
}

export const Icons: IconType[] = [
  {
    iconName: "default",
    iconSVG: (
      <svg
        className="icon-svg w-6 h-6 text-gray-800 dark:text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 13V8m0 8h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>
    ),
  },
  {
    iconName: "phone",
    iconSVG: (
      <svg
        className="icon-svg w-6 h-6 text-gray-800 dark:text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M18.427 14.768 17.2 13.542a1.733 1.733 0 0 0-2.45 0l-.613.613a1.732 1.732 0 0 1-2.45 0l-1.838-1.84a1.735 1.735 0 0 1 0-2.452l.612-.613a1.735 1.735 0 0 0 0-2.452L9.237 5.572a1.6 1.6 0 0 0-2.45 0c-3.223 3.2-1.702 6.896 1.519 10.117 3.22 3.221 6.914 4.745 10.12 1.535a1.601 1.601 0 0 0 0-2.456Z"
        />
      </svg>
    ),
  },
  {
    iconName: "location",
    iconSVG: (
      <svg
        className="icon-svg w-6 h-6 text-gray-800 dark:text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
        />
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M17.8 13.938h-.011a7 7 0 1 0-11.464.144h-.016l.14.171c.1.127.2.251.3.371L12 21l5.13-6.248c.194-.209.374-.429.54-.659l.13-.155Z"
        />
      </svg>
    ),
  },
  {
    iconName: "mail",
    iconSVG: (
      <svg
        className="icon-svg w-6 h-6 text-gray-800 dark:text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-width="2"
          d="m3.5 5.5 7.893 6.036a1 1 0 0 0 1.214 0L20.5 5.5M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"
        />
      </svg>
    ),
  },
  {
    iconName: "car",
    iconSVG: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 64 64"
        xmlSpace="preserve"
        style={{
          fillRule: "evenodd",
          clipRule: "evenodd",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeMiterlimit: 2,
        }}
      >
        <path
          d="M44.075 16.488A2.023 2.023 0 0 0 42.124 15H21.876c-.911 0-1.71.609-1.951 1.488L15.667 32h32.666l-4.258-15.512zM52.907 38a6.59 6.59 0 0 0-.379-1.346l-1.353-3.382A2.023 2.023 0 0 0 49.297 32H14.703c-.827 0-1.571.504-1.878 1.272l-1.353 3.382A6.586 6.586 0 0 0 11 39.103v4.873c0 1.118.906 2.024 2.024 2.024H36"
          style={{
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "3px",
          }}
        />
        <path
          d="M11.583 37.583h4.323c.926 0 1.772.523 2.186 1.351l1.075 2.149M16 30.583s-1.691-3.5-3.833-3.5M48.333 30.583s1.691-3.5 3.834-3.5M21.5 46.5h-7v3.68A1.824 1.824 0 0 0 16.32 52h3.36a1.824 1.824 0 0 0 1.82-1.82V46.5zM56 41a3 3 0 0 0-3-3H43a3 3 0 0 0-3 3v7.051a7.5 7.5 0 0 0 4.425 6.841L48 56.5l3.575-1.608A7.5 7.5 0 0 0 56 48.051V41z"
          style={{
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "3px",
          }}
        />
        <path
          d="m44.75 46.748 2.5 2 4-3.5"
          style={{
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "3px",
          }}
        />
      </svg>
    ),
  },
  {
    iconName: "clock",
    iconSVG: (
      <svg
        className="w-6 h-6 text-gray-800 dark:text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M12 8v4l3 3m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
        />
      </svg>
    ),
  },
  {
    iconName: "blocks",
    iconSVG: (
      <svg
        className="w-6 h-6 text-gray-800 dark:text-white"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M9.143 4H4.857A.857.857 0 0 0 4 4.857v4.286c0 .473.384.857.857.857h4.286A.857.857 0 0 0 10 9.143V4.857A.857.857 0 0 0 9.143 4Zm10 0h-4.286a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286A.857.857 0 0 0 20 9.143V4.857A.857.857 0 0 0 19.143 4Zm-10 10H4.857a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286a.857.857 0 0 0 .857-.857v-4.286A.857.857 0 0 0 9.143 14Zm10 0h-4.286a.857.857 0 0 0-.857.857v4.286c0 .473.384.857.857.857h4.286a.857.857 0 0 0 .857-.857v-4.286a.857.857 0 0 0-.857-.857Z"
        />
      </svg>
    ),
  },
];
