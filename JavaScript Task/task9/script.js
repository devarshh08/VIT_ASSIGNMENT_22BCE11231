document.addEventListener("DOMContentLoaded", function () {
    
    const form = document.getElementById("registrationForm");
    if (form) {
        form.addEventListener("submit", function (event) {
            event.preventDefault();

            let name = document.getElementById("name").value.trim();
            let email = document.getElementById("email").value.trim();
            let contact = document.getElementById("contact").value.trim();
            let address = document.getElementById("address").value.trim();

            let user = { name, email, contact, address };

            let users = JSON.parse(localStorage.getItem("users")) || [];

            users.push(user);

            localStorage.setItem("users", JSON.stringify(users));

            form.reset();

            alert("User registered successfully!");
        });
    }

    const userTable = document.getElementById("userTable");
    if (userTable) {
        let users = JSON.parse(localStorage.getItem("users")) || [];

        users.forEach(user => {
            let row = document.createElement("tr");
            row.innerHTML = `
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.contact}</td>
                <td>${user.address}</td>
            `;
            userTable.appendChild(row);
        });
    }
});
