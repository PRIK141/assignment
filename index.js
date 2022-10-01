//selecting image-desc element from dom (html)
var imageDesc = document.querySelector("#image-desc");
//selecting app element from dom (html)
var app = document.querySelector("#app");

//function to load data from local file

function fetchData() {
  //fetch api
  fetch("data.json")
    .then((response) => response.json())
    .then((data) => {
      app.innerHTML =
        "<ul>" + data &&
        data.length > 0 &&
        data
          .map(function (item) {
            var itemObj = JSON.stringify(item);
            return (
              `<li onclick="displayImage(${JSON.stringify(itemObj)
                .split('"')
                .join("&quot;")}
                )">` +
              item.entity +
              "</li>"
            );
          })
          .join("") + "</ul>";
    });
}

fetchData();

function displayImage(item) {
  var imageList = document.querySelector("#imageList");
  const parsedObj = JSON.parse(item);
  const imageArray = parsedObj.images;
  imageList.innerHTML =
    "<ul>" + imageArray &&
    imageArray.length > 0 &&
    imageArray
      .map(function (image, index) {
        return `<img src='${image}' class='image' onclick="displayDesc('${index}',${JSON.stringify(item).split('"').join("&quot;")})"/>`;
      })
      .join("") + "</ul>";
}

function displayDesc(index, item) {
  const parsedObj = JSON.parse(item);
  imageDesc.innerHTML = `<h1>${parsedObj.desc[index]}</h1>`;
}
