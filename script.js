const medicineList = [
    { name: "Paracetamol", category: "painkiller", description: "Relieves pain and fever" },
    { name: "Amoxicillin", category: "antibacterial", description: "Treats bacterial infections" },
    { name: "Ibuprofen", category: "painkiller", description: "Reduces inflammation and pain" },
    { name: "Vitamin C", category: "antiviral", description: "Boosts immunity and fights cold" },
    {name: "Lopromide",category:"painkiller",description:"relieves stomatch pain"},
    {name:"Halothane",category:"anesthetics",description:"inhalation"},
    {name:"Dexamethasone",category:"anti-allergics",description:"used to treat inflammation, severe allergies"},
    {name:"Diazepam",category:"anticonvulsants",description:"treats anxiety, seizures, muscles spasms"},
    {name:"Benzylpenicillin",category:"antibacterial",description:"treats bacterial infections of the eye, ear, prostate"},
    {name:"Clotrimazole",category:"antifungal",description:"treats tinea corporis, tinea cruris and tinea pedis"},
    {name:"Nystatin",category:"antifungal",description:"treats fungal or yeast infections on the skin"},
    {name:"Didanosine",category:"antiviral",description:"treats HIV virus"},
    {name:"Lamivudine",category:"antiviral",description:"treats Hepatitis B"},
    {name:"Telvas 40", category:"bloodpressure",description:"controls blood pressure"},
    {name:"Thyroid", category:"thyroxin",description:"controls thyroid gland"},
    // Add more medicine data as needed
];

const searchInput = document.getElementById("searchInput");
const filterSelect = document.getElementById("filterSelect");
const medicineListDiv = document.getElementById("medicineList");

function displayMedicineList() {
    medicineListDiv.innerHTML = "";
    const searchTerm = searchInput.value.toLowerCase();
    const selectedCategory = filterSelect.value;

    medicineList.forEach(medicine => {
        if (
            (selectedCategory === "" || medicine.category === selectedCategory) &&
            (searchTerm === "" || medicine.name.toLowerCase().includes(searchTerm))
        ) {
            const medicineDiv = document.createElement("div");
            medicineDiv.classList.add("medicine");
            medicineDiv.innerHTML = `
                <h3>${medicine.name}</h3>
                <p><strong>Category:</strong> ${medicine.category}</p>
                <p><strong>Description:</strong> ${medicine.description}</p>
            `;
            medicineListDiv.appendChild(medicineDiv);
        }
    });
}

searchInput.addEventListener("input", displayMedicineList);
filterSelect.addEventListener("change", displayMedicineList);

// Initial display of the medicine list
displayMedicineList();
