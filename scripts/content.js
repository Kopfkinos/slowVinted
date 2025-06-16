chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log("Received in content script:", request.data)
})

function checkBrands(brandsToFilter) {
  const items = Array.from(document.querySelectorAll("div.feed-grid__item"))

  items.forEach((item) => {
    const brandName = item.querySelector("p[data-testid$='--description-title']")?.textContent
    console.log(brandName)

    if (brandName === "Shein" || brandName === "Shein Curve" || brandName === "Primark") {
      item.style.display = "none"
    }
  })
}

checkBrands()

const observer = new MutationObserver(() => {
  checkBrands()
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
