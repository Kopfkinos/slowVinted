document.addEventListener("DOMContentLoaded", function () {
  const enableButton = document.querySelector("#enable-button")
  enableButton.addEventListener("click", () => {
    console.log(enableButton.textContent)
    if (enableButton.textContent === "ENABLE") {
      enableButton.textContent = "DISABLE"
      enableButton.classList.add("enabled")
    } else {
      enableButton.textContent = "ENABLE"
      enableButton.classList.remove("enabled")
    }
  })

  const brandCheckboxes = document.querySelectorAll("input[type=checkbox]")

  let brandsToFilter = []

  brandCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      brandsToFilter = Array.from(brandCheckboxes)
        .filter((i) => i.checked)
        .map((i) => i.value)
      console.log(brandsToFilter)
      if (brandsToFilter.includes("Shein")) {
        brandsToFilter.push("Shein Curve")
      }
      chrome.runtime.sendMessage({
        data: brandsToFilter,
      })
    })
  })
})
