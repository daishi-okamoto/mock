async function fetchEmployeeList() {
    const loginId = document.getElementById('loginId').value;
    const response = await fetch(`http://localhost:8000/employees?login_id=${loginId}`);
    const data = await response.json();

    const employeeTableBody = document.querySelector('#employeeTable tbody');
    employeeTableBody.innerHTML = '';

    if (data.employees && data.employees.length > 0) {
        data.employees.forEach(employee => {
            const row = document.createElement('tr');
            const nameCell = document.createElement('td');
            nameCell.textContent = employee.name;
            const positionCell = document.createElement('td');
            positionCell.textContent = employee.position;
            const idCell = document.createElement('td');
            idCell.textContent = employee.id;
            row.appendChild(nameCell);
            row.appendChild(positionCell);
            row.appendChild(idCell);
            employeeTableBody.appendChild(row);
        });
    } else {
        const row = document.createElement('tr');
        const cell = document.createElement('td');
        cell.colSpan = 3;
        cell.textContent = '該当する従業者が見つかりません。';
        row.appendChild(cell);
        employeeTableBody.appendChild(row);
    }
}
