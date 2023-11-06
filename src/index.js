import "./index.scss";

const sounds = [
  { id: 1, title: "Rain" },
  { id: 2, title: "Summer" },
  { id: 3, title: "Winter" },
];

const root = document.querySelector("#sounds-list");

function renderItem(item) {
  const li = document.createElement("li");
  li.textContent = item.title;
  root.append(li);
}

sounds.forEach(renderItem);
