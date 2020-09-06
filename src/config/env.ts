declare global {
  interface Window {
    ENV: {
      APP_ENV: string;
      API_URL: string;
    };
  }
}

export type Envs = "localhost" | "production";

export const APP_ENV = process.env.NODE_ENV || "localhost";
export const API_URL =
  APP_ENV !== "production"
    ? "http://localhost:1337/"
    : "https://secure-wave-51758.herokuapp.com/";
