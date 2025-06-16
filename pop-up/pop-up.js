document.addEventListener("DOMContentLoaded", function () {
  console.log("hey diva")

  const brandCheckboxes = document.querySelectorAll("input[type=checkbox]")

  console.log(brandCheckboxes)

  let brandsToFilter = []

  brandCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      brandsToFilter = Array.from(brandCheckboxes)
        .filter((i) => i.checked)
        .map((i) => i.value)
      console.log(brandsToFilter)
      chrome.runtime.sendMessage({
        data: brandsToFilter,
      })
    })
  })
})
