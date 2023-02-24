chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "copy-page-content",
    title: "Copy Page Content",
    contexts: ["page"]
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "copy-page-content") {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: () => {
        const pageContent = document.body.innerText;
        navigator.clipboard.writeText(pageContent)
          .then(() => console.log("Page content copied to clipboard"))
          .catch((error) => console.error("Error copying page content to clipboard:", error));
      }
    });
  }
});

//to copy the text with the whole code then use document.documentElement.outerHTML.
//Thank you
//made by Akshat Sanvaliya
//for AskMeOffers