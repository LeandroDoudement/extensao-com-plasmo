import { HISTORY_KEY } from "~constants"
import { getStorage, setStorage } from "~storage"

export {}

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    title: 'Search Youtube for "%s"',
    contexts: ["selection"],
    id: "youtube-search"
  })
})

chrome.contextMenus.onClicked.addListener(async (info, tab) => {
  if (info.menuItemId === "youtube-search") {
    const previousValues = await getStorage(HISTORY_KEY)
    const newValues = previousValues
      ? [...previousValues, info.selectionText]
      : [info.selectionText]

    await setStorage(HISTORY_KEY, newValues)

    chrome.tabs.create({
      url: `https://www.youtube.com/results?search_query=${info.selectionText}`
    })
  }
})
