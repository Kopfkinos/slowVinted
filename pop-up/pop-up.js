const brandBox1 = document.getElementById("brand1")

console.log("hey girl")

brandBox1.addEventListener("change", function () {
  if (this.checked) {
    console.log("shein checked")
  } else {
    console.log("shein not checked")
  }
})
