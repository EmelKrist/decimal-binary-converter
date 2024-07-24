const decInput = document.getElementById("dec-inp");
const binInput = document.getElementById("bin-inp");
const errorMsg = document.getElementById("error-msg");

/**
 * Listener of the decimal number input field.
 */
decInput.addEventListener("input", () => {
  let decValue = parseInt(decInput.value);
  binInput.value = decValue.toString(2);
});

/**
 * Listener of the binary number input field.
 */
binInput.addEventListener("input", () => {
  let binValue = binInput.value;
  if (isValidBin(binValue)) {
    decInput.value = parseInt(binValue, 2);
    errorMsg.textContent = "";
  } else {
    errorMsg.textContent = "Please enter an valid binary input";
  }
});

/**
 * Method to check if the binary number is valid.
 * @param {String} binValue binary value
 * @returns true|false
 */
const isValidBin = (binValue) => {
  for (let i = 0; i < binValue.length; i++) {
    if (binValue[i] != "0" && binValue[i] != "1") return false;
  }
  return true;
};
