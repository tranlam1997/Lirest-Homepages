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

  updateObjectItem: (key: string, data: Record<string, any>) => {
    const currentValue = LocalStorage.getObjectItem(key)
    Object.keys(data).forEach((key) => {
      currentValue[key] = data[key]
    })
    console.log('🚀 ~ file: local-storage.helper.ts ~ line 20 ~ currentValue', currentValue)
    LocalStorage.setObjectItem(key, currentValue)
  },

  removeItem: (key: string) => {
    localStorage.removeItem(key)
  },
}
