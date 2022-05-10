function getData() {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(function (res) {
            return res.json();
        }).then(function (data) {
            let dataDiv = document.querySelector("#dataDiv");
            dataDiv.innerHTML = "";
            for (let i = 0; i < data.length; i++) {
                let hako = data[i];
                dataDiv.innerHTML += "<p>" + hako.userId + ": " + hako.title + "</p>";
            };
        })
};