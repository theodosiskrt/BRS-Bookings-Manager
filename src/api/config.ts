import importedAxios from "axios";

const SERVER_URLS = import.meta.env;
const baseURL = SERVER_URLS.VITE_MY_API_URL || "http://localhost:3000/";

importedAxios.defaults.baseURL = baseURL;
importedAxios.defaults.headers.common["Content-Type"] = "application/json";

function combineUrl(url: string): string {
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  return baseURL.replace(/\/$/, "") + (url.startsWith("/") ? url : "/" + url);
}

const axios = {
  ...importedAxios,
  get: (url: string, ...args: any[]) =>
    importedAxios.get(combineUrl(url), ...args),
  post: (url: string, ...args: any[]) =>
    importedAxios.post(combineUrl(url), ...args),
  put: (url: string, ...args: any[]) =>
    importedAxios.put(combineUrl(url), ...args),
  delete: (url: string, ...args: any[]) =>
    importedAxios.delete(combineUrl(url), ...args),
  patch: (url: string, ...args: any[]) =>
    importedAxios.patch(combineUrl(url), ...args),
};

export default axios;
