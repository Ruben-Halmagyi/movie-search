export const storeCache = (key: string, value: any) => {
    localStorage.setItem(key, JSON.stringify(value));
  };
  
export const retrieveCache = (key: string): any => {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  };