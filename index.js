"use strict";

const textarea = document.querySelector("#textid");
const characterCount = document.querySelector("#c-count");
const wordCount = document.querySelector("#word-count");
const longestWord = document.querySelector("#longest-word");

textarea.addEventListener("input", count);

function count() {
  //character counter
  const character = textarea.value.split(" ").join("");
  characterCount.innerText = character.length;
  //word counter
  const word = textarea.value.split(" ");
  //filtering emty string
  const wordCounts = word.filter((e) => e);
  wordCount.innerText = wordCounts.length;
  //find the longest word
  const long_str = textarea.value.split(" ");
  long_str.sort((a, b) => b.length - a.length);
  longestWord.textContent = long_str[0];
}
