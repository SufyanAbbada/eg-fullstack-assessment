import { toast } from "react-toastify";

export const userOperations = {
  setItem(key: string, value: string): void {
    try {
      localStorage.setItem(key, value);
    } catch (error: any) {
      toast.error(error.message);
    }
  },

  getItem(key: string): string | null {
    try {
      return localStorage.getItem(key);
    } catch (error: any) {
      toast.error(error.message);
      return null;
    }
  },

  clearStorage(): void {
    try {
      localStorage.clear();
    } catch (error: any) {
      toast.error(error.message);
    }
  },

  isAllChecksPassed(): boolean {
    if (
      localStorage.getItem("name") !== "" &&
      localStorage.getItem("name") != null &&
      localStorage.getItem("email") !== "" &&
      localStorage.getItem("email") != null
    ) {
      return true;
    } else return false;
  },
};
