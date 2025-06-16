console.log("script is running")

function checkBrands(brandsToFilter) {
  const items = Array.from(document.querySelectorAll("div.feed-grid__item"))

  items.forEach((item) => {
    const brandName = item.querySelector("p[data-testid$='--description-title']")?.textContent
    console.log(brandName)

    if (brandsToFilter.includes(brandName)) {
      item.style.display = "none"
    }
  })
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log("Received in content script:", request.data)

  checkBrands(request.data)

  const observer = new MutationObserver(() => {
    checkBrands(request.data)
  })

  const observerOptions = {
    childList: true,
    subtree: true,
  }

  observer.observe(document.body, observerOptions)

  setTimeout(() => {
    observer.disconnect()
    console.log("observer has been disconnected!")
  }, 5000)
})
