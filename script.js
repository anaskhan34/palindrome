document.getElementById("btn").addEventListener("click", function () {
  let input = document.getElementById("inputValue").value;
  let result = document.querySelector(".checkValue");
  var reverse = ""

   if (input == "") {
        result.innerHTML = "Please enter some word!";
        result.style.color = "red";
        return;
    }

  for (i = input.length - 1; i >= 0; i--) {
    reverse = reverse + input[i]

    // console.log(input[i]);
    }

    if (input === reverse) {
        result.textContent = input + " is a palindrome 👍",result;
        result.style.color = "green";
    } else {
        result.textContent = input + " is not a palindrome. 👎", result ;
        result.style.color = "red";
    }

    document.getElementById("inputValue").value = "";
    // console.log(reverse)
  });

