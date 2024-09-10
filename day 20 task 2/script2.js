fetch("cats.json")
    .then(function (response) {
        return response.json();

    })
    .then(function (cats) {
        let placeholder = document.querySelector("#data-output");
        let out = "";
        for (let cat of cats) {
            out += `
                <tr>
                <td><img src='${cat.url}'></td>
                <td>${cat.id}</td>
                <td>${cat.height}</td>
                <td>${cat.width}</td>
                
                </tr>
             `;
        }
        placeholder.innerHTML = out;
    })