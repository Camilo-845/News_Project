export const UserKey = "ActualityUser";
export const TokenKey = "ActualityToken";
export const UserIdKey = "ActualityUser";

export const persistLocalStore = (key, data) => {
  localStorage.setItem(key, JSON.stringify({ ...data }));
};

export const clearLocalStore = (key) => {
  localStorage.removeItem(key);
};