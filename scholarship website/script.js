// Dummy scholarship data
const scholarships = [
    { name: "National Merit Scholarship", eligibility: "High School Students" },
    { name: "Women in STEM Scholarship", eligibility: "Female students in STEM fields" },
    { name: "Need-Based Scholarship", eligibility: "Low-income families" },
    { name: "Athletic Scholarship", eligibility: "Student-athletes" },
    { name: "Merit-Based Scholarship", eligibility: "High GPA students" },
    { name: "Research Scholarship", eligibility: "Postgraduate research students" },
];

// Function to search scholarships
function searchScholarships() {
    const searchTerm = document.getElementById("search-bar").value.toLowerCase();
    const resultsList = document.getElementById("results-list");

    // Clear previous results
    resultsList.innerHTML = "";

    // Filter scholarships based on search term
    const results = scholarships.filter(scholarship =>
        scholarship.name.toLowerCase().includes(searchTerm) ||
        scholarship.eligibility.toLowerCase().includes(searchTerm)
    );

    // Display results
    if (results.length > 0) {
        results.forEach(scholarship => {
            const listItem = document.createElement("li");
            listItem.textContent = `${scholarship.name} - ${scholarship.eligibility}`;
            resultsList.appendChild(listItem);
        });
    } else {
        const noResultItem = document.createElement("li");
        noResultItem.textContent = "No scholarships found. Try different keywords.";
        resultsList.appendChild(noResultItem);
    }
}
