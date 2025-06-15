export const saveAuthToLocalStorage = (state: any) => {
  localStorage.setItem('auth', JSON.stringify(state));
};

export const getAuthFromLocalStorage = () => {
  const state = localStorage.getItem('auth');
  return state ? JSON.parse(state) : null;
};

export const clearAuthFromLocalStorage = () => {
  localStorage.removeItem('auth');
};
