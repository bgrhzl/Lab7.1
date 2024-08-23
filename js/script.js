// Contact list array
let contacts = [
    { name: "Maxwell Wright", phone: "(0191) 719 6495", email: "agent1.@cctb.ca" },
    { name: "Tom MacDonalds", phone: "(0191) 777 6495", email: "agent2.@cctb.ca" },
    { name: "Helen Richards", phone: "(0191) 0800 1111", email: "agent3.@cctb.ca" }
];

// Function to update the contact list display
function updateContactList() {
    const contactListElement = document.querySelector('.list-group');
    contactListElement.innerHTML = '';

    contacts.forEach((contact, index) => {
        const listItem = document.createElement('li');
        listItem.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');

        const contactText = document.createElement('span');
        contactText.textContent = `${contact.name} / ${contact.phone} / ${contact.email}`;

        const deleteButton = document.createElement('button');
        deleteButton.classList.add('btn', 'btn-danger', 'btn-sm');
        deleteButton.innerHTML = '<i class="fas fa-trash"></i>';

        // Add event listener to the delete button
        deleteButton.addEventListener('click', () => {
            deleteContact(index);
        });

        listItem.appendChild(contactText);
        listItem.appendChild(deleteButton);
        contactListElement.appendChild(listItem);
    });
}

// Function to delete a contact
function deleteContact(index) {
    contacts.splice(index, 1); // Remove the contact from the array
    updateContactList(); // Update the displayed contact list
}

// Function to handle adding a new contact
function addContact() {
    let continueAdding;

    do {
        let newName = prompt("Enter name:");
        let newPhone = prompt("Enter phone number:");
        let newEmail = prompt("Enter email address:");

        // Validate input
        if (!newName || newName.trim() === "") {
            alert("Name cannot be empty.");
            continue; // Skip the rest of the loop and start again
        }
        if (!newPhone || isNaN(newPhone) || newPhone.trim() === "") {
            alert("Phone number must contain only digits.");
            continue; // Skip the rest of the loop and start again
        }
        if (!newEmail || !newEmail.includes("@") || newEmail.trim() === "") {
            alert("Invalid email format.");
            continue; // Skip the rest of the loop and start again
        }

        // Add new contact to the array
        contacts.push({
            name: newName.trim(),
            phone: newPhone.trim(),
            email: newEmail.trim()
        });

        // Update the displayed contact list
        updateContactList();

        alert("New contact added successfully!");

        // Ask if the user wants to add another contact
        continueAdding = confirm("Do you want to add another contact?");

    } while (continueAdding);
}

// Event listener for the "Add Contact" button
document.getElementById('sign-out').addEventListener('click', addContact);

// Initial display of contacts
updateContactList();