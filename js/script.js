const fetchDataButton = document.getElementById("fetch-data");
const main = document.querySelector(".main");
const getData = () => {
  fetch("https://akademia108.pl/api/ajax/get-post.php")
    .then((response) => response.json())
    .then((data) => {
      const preview = document.createElement("div");
      const line = document.createElement("hr");
      preview.innerHTML = `<p>Post-id:${data.id}</p><p>UserId:${data.userId}</p>
      <p>Title:${data.title}</p> <p> Body:${data.body}>`;
      main.appendChild(preview);
      main.appendChild(line);
    });
};
fetchDataButton.addEventListener("click", getData);
