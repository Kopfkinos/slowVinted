document.addEventListener("DOMContentLoaded", function () {
  console.log("hey diva")

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
