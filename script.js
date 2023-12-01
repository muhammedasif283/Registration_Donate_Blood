let userList = [];

function submitForm() {
    const name = document.getElementById('name').value;
    const address = document.getElementById('address').value;
    const bloodGroup = document.getElementById('bloodGroup').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const date = document.getElementById('date').value;

    if (name && address && bloodGroup && phoneNumber && date) {
        const user = { name, address, bloodGroup, phoneNumber, date };
        userList.push(user);
        displayUsers();
        clearForm();
    } else {
        alert('Please fill in all fields.');
    }
}

function displayUsers() {
    const userListElement = document.getElementById('userList');
    userListElement.innerHTML = '';

    userList.forEach((user, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span>${user.name} - ${user.bloodGroup}</span>
            <button onclick="editUser(${index})">EDIT</button>
            <button onclick="deleteUser(${index})">DELETE</button>
        `;
        userListElement.appendChild(listItem);
    });
}

function editUser(index) {
    const user = userList[index];
    document.getElementById('name').value = user.name;
    document.getElementById('address').value = user.address;
    document.getElementById('bloodGroup').value = user.bloodGroup;
    document.getElementById('phoneNumber').value = user.phoneNumber;
    document.getElementById('date').value = user.date;

    userList.splice(index, 1);
    displayUsers();
}

function deleteUser(index) {
    userList.splice(index, 1);
    displayUsers();
}

function clearForm() {
    document.getElementById('registrationForm').reset();
}

displayUsers();
