async function fetchClientList() {
    const loginId = document.getElementById('loginId').value;
    const response = await fetch(`http://localhost:8000/clients?login_id=${loginId}`);
    const data = await response.json();

    const clientTableBody = document.querySelector('#clientTable tbody');
    clientTableBody.innerHTML = '';

    if (data.clients && data.clients.length > 0) {
        data.clients.forEach(client => {
            const row = document.createElement('tr');
            const nameCell = document.createElement('td');
            nameCell.textContent = client.name;
            const c_idCell = document.createElement('td');
            c_idCell.textContent = client.c_id;
            const planCell = document.createElement('td');
            planCell.textContent = client.plan;
            row.appendChild(nameCell);
            row.appendChild(c_idCell);
            row.appendChild(planCell);
            clientTableBody.appendChild(row);
        });
    } else {
        const row = document.createElement('tr');
        const cell = document.createElement('td');
        cell.colSpan = 3;
        cell.textContent = '該当するクライアントが見つかりません。';
        row.appendChild(cell);
        clientTableBody.appendChild(row);
    }
}
