import { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";
import daisyui from "daisyui";

const config: Config = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          'from': { opacity: '0' },
          'to': { opacity: '1' }
        },
        scaleIn: {
          'from': { transform: 'scale(0)', opacity: '0' },
          'to': { transform: 'scale(1)', opacity: '1' }
        }
      },
      animation: {
        'fade-in': 'fadeIn 0.4s ease-out forwards',
        'scale-in': 'scaleIn 0.1s ease-out forwards'
      }
    },
  },

  daisyui: {
    themes: [
      {
        forest: {
          primary: "#138a57",
          "primary-content": "#eefbf3",
          secondary: "#13468a",
          accent: "#dc8a1e",
          neutral: "#274236",
          "neutral-content": "#fafcfa",
          "base-100": "#fdfffd",
          "base-200": "#f4f5f5",
          "base-300": "#dadddd",
          info: "#264236",
          success: "#3ba452",
          warning: "#eab308",
          error: "#f44336",
        },
        sunkist: {
          primary: "#ff7700",
          "primary-content": "#fff9ec",
          secondary: "#e28c00",
          accent: "#c7ef83",
          neutral: "#3d1d00",
          "neutral-content": "#edebe7",
          "base-100": "#fffefc",
          "base-200": "#f6f5f3",
          "base-300": "#c4bcad",
          info: "#3d1d00",
          success: "#829e38",
          warning: "#ff8e00",
          error: "#f44336",
        },
        glacier: {
          primary: "#0dbfa8",
          "primary-content": "#ffffff",
          secondary: "#314add",
          accent: "#dd31a0",
          neutral: "#0f2f2a",
          "neutral-content": "#eaeaea",
          "base-100": "#fafafa",
          "base-200": "#f0f0f0",
          "base-300": "#d1d5db",
          info: "#09352e",
          success: "#39b46a",
          warning: "#b6a432",
          error: "#f44336",
        },
        pacific: {
          primary: "#20acd7",
          "primary-content": "#edfbfe",
          secondary: "#886478",
          accent: "#dd31a0",
          neutral: "#2d2b49",
          "neutral-content": "#e7eaf8",
          "base-100": "#ffffff",
          "base-200": "#f3f7f9",
          "base-300": "#d0e1e7",
          info: "#2d2b49",
          success: "#41b179",
          warning: "#bfa141",
          error: "#f44336",
        },
        atlantis: {
          primary: "#7bce1c",
          "primary-content": "#152405",
          secondary: "#d9a70c",
          accent: "#be4559",
          neutral: "#241b2d",
          "neutral-content": "#ebe7f8",
          "base-100": "#fdfefe",
          "base-200": "#f0fbf4",
          "base-300": "#bbd4cc",
          info: "#241b2d",
          success: "#5cb744",
          warning: "#d9a70c",
          error: "#f44336",
        },
        amaranth: {
          primary: "#d52943",
          "primary-content": "#fef2f2",
          secondary: "#c46e6d",
          accent: "#ca957b",
          neutral: "#232327",
          "neutral-content": "#f5f5f6",
          "base-100": "#ffffff",
          "base-200": "#f1f5f9",
          "base-300": "#cdced4",
          info: "#232327",
          success: "#72a75d",
          warning: "#ef9725",
          error: "#f44336",
        },
        butter: {
          primary: "#fcbf04",
          "primary-content": "#7b420c",
          secondary: "#a74157",
          accent: "#b0949e",
          neutral: "#36252a",
          "neutral-content": "#f8f3f6",
          "base-100": "#ffffff",
          "base-200": "#f8f7f7",
          "base-300": "#cdced4",
          info: "#201e27",
          success: "#80b43c",
          warning: "#fda404",
          error: "#f44336",
        },
      },
    ],
  },
  plugins: [typography, daisyui],
};

export default config;
