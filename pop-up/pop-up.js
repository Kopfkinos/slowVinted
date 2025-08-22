document.addEventListener("DOMContentLoaded", function () {
  const brandCheckboxes = document.querySelectorAll("input[type=checkbox]")
  let enabled = false

  let brandsToFilter = []

  brandCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      brandsToFilter = Array.from(brandCheckboxes)
        .filter((i) => i.checked)
        .map((i) => i.value)
      if (brandsToFilter.includes("Shein")) {
        brandsToFilter.push("Shein Curve")
      }
      if (enabled) {
        chrome.runtime.sendMessage({
          data: brandsToFilter,
        })
      }
    })
  })
  const enableButton = document.querySelector("#enable-button")
  enableButton.addEventListener("click", () => {
    console.log(enableButton.textContent)
    if (enableButton.textContent === "ENABLE") {
      enableButton.textContent = "DISABLE"
      enableButton.classList.add("enabled")
      enabled = true
      chrome.runtime.sendMessage({
        data: brandsToFilter,
      })
    } else {
      enableButton.textContent = "ENABLE"
      enableButton.classList.remove("enabled")
      enabled = false
      brandsToFilter = []
      chrome.runtime.sendMessage({
        data: brandsToFilter,
      })
    }
  })
})
