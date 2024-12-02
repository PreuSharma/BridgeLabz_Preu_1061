const employees = [
    {name:"Alice",salary:50000},
    {name:"Bob",salary:40000},
    {name:"Charlie",salary:60000},
    {name:"David",salary:30000},
    {name:"Eva",salary:70000}
];

function processEmployees(salaryThreshold) {
    const filtered = employees.filter(emp => emp.salary > salaryThreshold);
    const updated = filtered.map(emp => ({
        name: emp.name,
        updatedSalary: emp.salary * 1.10
    }));
    const total = updated.reduce((sum, emp) => sum + emp.updatedSalary, 0);

    console.log("Filtered:", filtered);
    console.log("Updated:", updated);
    console.log("Total Salary:", total);
}

processEmployees(40000);
