export {}

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    title: 'Search Youtube for "%s"',
    contexts: ["selection"],
    id: "youtube-search"
  })
})

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "youtube-search") {
    chrome.tabs.create({
      url: `https://www.youtube.com/results?search_query=${info.selectionText}`
    })
  }
})
