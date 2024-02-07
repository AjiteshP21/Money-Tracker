document.addEventListener('DOMContentLoaded', function () {
    const expenseForm = document.getElementById('expense-form');
    const expenseList = document.getElementById('expense-list');
    const totalAmount = document.getElementById('total-amount');

    let total = 0;

    expenseForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const expenseNameInput = document.getElementById('expense-name');
        const expenseAmountInput = document.getElementById('expense-amount');

        const expenseName = expenseNameInput.value.trim();
        const expenseAmount = parseFloat(expenseAmountInput.value.trim());

        if (expenseName === '' || isNaN(expenseAmount)) {
            alert('Please enter a valid expense name and amount.');
            return;
        }
        
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
                    <td>${expenseName}</td>
                    <td>$${expenseAmount.toFixed(2)}</td>
                    <td>
                        <button class="remove-btn">Remove</button>
                    </td>
                `;
        expenseList.appendChild(newRow);

        total += expenseAmount;
        totalAmount.textContent = total.toFixed(2);

        expenseNameInput.value = '';
        expenseAmountInput.value = '';

        const removeButton = newRow.querySelector('.remove-btn');
        removeButton.addEventListener('click', function () {
            total -= expenseAmount;
            totalAmount.textContent = total.toFixed(2);
            newRow.remove();
        });
    });
});