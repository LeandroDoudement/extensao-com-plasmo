import { Storage } from "@plasmohq/storage"

export const storage = new Storage()

export const setStorage = async (key: string, value: any) => {
  let newValue = value
  if (typeof value === "object") {
    newValue = JSON.stringify(newValue)
  }
  await storage.set(key, newValue)
}

export const getStorage = async (key: string) => {
  const value = await storage.get(key)
  try {
    return JSON.parse(value)
  } catch (e) {
    return value
  }
}
