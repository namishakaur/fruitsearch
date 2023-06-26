const input = document.querySelector("#fruit");
const suggestions = document.querySelector(".suggestions ul");

const fruit = [
  "Apple",
  "Apricot",
  "Avocado 🥑",
  "Banana",
  "Bilberry",
  "Blackberry",
  "Blackcurrant",
  "Blueberry",
  "Boysenberry",
  "Currant",
  "Cherry",
  "Coconut",
  "Cranberry",
  "Cucumber",
  "Custard apple",
  "Damson",
  "Date",
  "Dragonfruit",
  "Durian",
  "Elderberry",
  "Feijoa",
  "Fig",
  "Gooseberry",
  "Grape",
  "Raisin",
  "Grapefruit",
  "Guava",
  "Honeyberry",
  "Huckleberry",
  "Jabuticaba",
  "Jackfruit",
  "Jambul",
  "Juniper berry",
  "Kiwifruit",
  "Kumquat",
  "Lemon",
  "Lime",
  "Loquat",
  "Longan",
  "Lychee",
  "Mango",
  "Mangosteen",
  "Marionberry",
  "Melon",
  "Cantaloupe",
  "Honeydew",
  "Watermelon",
  "Miracle fruit",
  "Mulberry",
  "Nectarine",
  "Nance",
  "Olive",
  "Orange",
  "Clementine",
  "Mandarine",
  "Tangerine",
  "Papaya",
  "Passionfruit",
  "Peach",
  "Pear",
  "Persimmon",
  "Plantain",
  "Plum",
  "Pineapple",
  "Pomegranate",
  "Pomelo",
  "Quince",
  "Raspberry",
  "Salmonberry",
  "Rambutan",
  "Redcurrant",
  "Salak",
  "Satsuma",
  "Soursop",
  "Star fruit",
  "Strawberry",
  "Tamarillo",
  "Tamarind",
  "Yuzu",
];

function search(str) {
  let results = [];
  results = fruit.filter((fruit) =>
    fruit.toLowerCase().includes(str.toLowerCase())
  );
  // TODO

  return results;
}

function searchHandler(e) {
  // TODO
  const searchQuery = input.value.trim();
  clearSuggestions();
  if (searchQuery) {
    const results = search(searchQuery);
    showSuggestions(results);
  }
}

function showSuggestions(results, inputVal) {
  // TODO
  results.forEach((val) => {
    const newSuggestion = document.createElement("li");
    newSuggestion.innerText = val;
    console.log(newSuggestion);
    suggestions.append(newSuggestion);
  });
}

function useSuggestion(e) {
  // TODO
  const selected = e.target.innerText;
  input.value = selected;
  clearSuggestions();
}
function clearSuggestions() {
  suggestions.innerHTML = "";
}

input.addEventListener("input", searchHandler);
suggestions.addEventListener("click", useSuggestion);
