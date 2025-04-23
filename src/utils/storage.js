// Get data from localStorage
export const getStorageData = (key) => {
    try {
      const data = localStorage.getItem(key);
      return JSON.parse(data);
    } catch (err) {
      console.error(err);
      return null;
    }
  };
  
  // Set data to localStorage
  export const setDataToStorage = (key, value) => {
    try {
      const data = JSON.stringify(value);
      localStorage.setItem(key, data);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };
  
  // Remove item from localStorage
  export const removeDataFromStorage = (key) => {
    try {
      localStorage.removeItem(key);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };
  
  // Clear all localStorage
  export const clearStorage = () => {
    try {
      localStorage.clear();
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  };
  