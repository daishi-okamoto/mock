async function fetchContractList() {
    const loginId = document.getElementById('loginId').value;
    const response = await fetch(`http://localhost:8000/contracts?login_id=${loginId}`);
    const data = await response.json();

    const contractTableBody = document.querySelector('#contractTable tbody');
    contractTableBody.innerHTML = '';

    if (data.contracts && data.contracts.length > 0) {
        data.contracts.forEach(contracts => {
            const row = document.createElement('tr');
            const nameCell = document.createElement('td');
            nameCell.textContent = contracts.name;
            const policyNumCell = document.createElement('td');
            policyNumCell.textContent = contracts.policyNum;
            const planCell = document.createElement('td');
            planCell.textContent = contracts.plan;
            const joinDateCell = document.createElement('td');
            joinDateCell.textContent = contracts.joinDate;
            const coverOneCell = document.createElement('td');
            coverOneCell.textContent = contracts.coverOne;
            const coverTwoCell = document.createElement('td');
            coverTwoCell.textContent = contracts.coverTwo;
            const coverThreeCell = document.createElement('td');
            coverThreeCell.textContent = contracts.coverThree;
            row.appendChild(nameCell);
            row.appendChild(policyNumCell);
            row.appendChild(planCell);
            row.appendChild(joinDateCell);
            row.appendChild(coverOneCell);
            row.appendChild(coverTwoCell);
            row.appendChild(coverThreeCell);
            contractTableBody.appendChild(row);
        });
    } else {
        const row = document.createElement('tr');
        const cell = document.createElement('td');
        cell.colSpan = 7;
        cell.textContent = '該当するクライアントが見つかりません。';
        row.appendChild(cell);
        contractTableBody.appendChild(row);
    }
}