document.getElementById("check-btn").addEventListener("click", function() {
    const inputValue = document.getElementById("text-input").value.toLowerCase().replace(/[^a-z0-9]/g, ''); // Remove non-alphanumeric characters and convert to lowercase
    const resultElement = document.getElementById("result");
    
    if (inputValue.length === 0) {
      alert("Please input a value");
      return;
    }
    
    const isPalindrome = checkPalindrome(inputValue);
    
    if (isPalindrome) {
      resultElement.textContent = inputValue + " is a palindrome";
    } else {
      resultElement.textContent = inputValue + " is not a palindrome";
    }});

  function checkPalindrome(str) {
    const len = str.length;
    for (let i = 0; i < len / 2; i++) {
      if (str[i] !== str[len - 1 - i]) {
        return false;
      }
    }
    return true;
  }