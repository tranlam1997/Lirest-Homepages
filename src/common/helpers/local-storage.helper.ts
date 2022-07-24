export const LocalStorage = {
  getSingleItem: (key: string) => {
    return localStorage.getItem(key)
  },

  getObjectItem: <T = any>(key: string): T => {
    return JSON.parse(localStorage.getItem(key) || '{}')
  },

  setSingleItem: (key: string, value: string) => {
    localStorage.setItem(key, value)
  },

  setObjectItem: (key: string, value: object) => {
    localStorage.setItem(key, JSON.stringify(value))
  },

  removeItem: (key: string) => {
    localStorage.removeItem(key)
  },
}
