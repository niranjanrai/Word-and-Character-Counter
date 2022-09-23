let textbox = document.getElementById("textarea");

textbox.addEventListener("input", function () {
  // character counter
  let text = this.value;
  let char = text.length;
  console.log(char);
  document.getElementById("char").innerHTML = char;

  // word counter
  text = text.trim(); // remove empty space before and after in text array
  let words = text.split(" ");
  let cleanList = words.filter(function (elm) {
    return elm != "";
  });
  //   document.getElementById("word").innerHTML = words.length;
  document.getElementById("word").innerHTML = cleanList.length;
});
