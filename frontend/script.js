document.getElementById("userForm").addEventListener("submit", async function (event) {
    event.preventDefault();
    
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    const response = await fetch("http://localhost:3000/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email }),
    });

    if (response.ok) {
        cargarUsuarios();
        document.getElementById("userForm").reset();
    }
});

async function cargarUsuarios() {
    const response = await fetch("http://localhost:3000/users");
    const users = await response.json();
    
    const userList = document.getElementById("userList");
    userList.innerHTML = "";
    
    users.forEach(user => {
        const li = document.createElement("li");
        li.textContent = `${user.name} - ${user.email}`;
        userList.appendChild(li);
    });
}

cargarUsuarios();
