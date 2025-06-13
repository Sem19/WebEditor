export const getCookie = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
};

export const setExpToken = (token) => {
  const now = new Date();
  now.setMinutes(now.getMinutes() + 55); // Add 55 minutes
  const expires = now.toUTCString();
  document.cookie = `token=${token}; expires=${expires}; path=/; Secure; SameSite=Strict`;
};
