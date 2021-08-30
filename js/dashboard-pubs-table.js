document.addEventListener('DOMContentLoaded', () => {

    const pubStatus = document.querySelectorAll('.pub-status');

    pubStatus.forEach( button => {
        button.addEventListener('click', () => {
            if ( button.className === 'dashboard-table-off pub-status' || button.className === 'pub-status dashboard-table-off' ) {
                button.classList.remove('dashboard-table-off');
                button.classList.add('dashboard-table-on');
                button.innerText = 'ON';
            } else {
                button.classList.remove('dashboard-table-on');
                button.classList.add('dashboard-table-off');
                button.innerText = 'OFF';
            }
        })
    });

    const actionsButton = document.querySelectorAll('.dashboard-table-icon');
    const actionsMenu = document.querySelectorAll('.dashboard-actions-menu');

    for ( let i = 0; i < actionsButton.length; i++ ) {
        actionsButton[i].onclick = () => {
            if ( actionsMenu[i].style.display === 'none' || actionsMenu[i].style.display === '') {
                actionsMenu[i].style.display = 'block';
            } else {
                actionsMenu[i].style.display = 'none';
            }
        };
    }

    const deletePubButton = document.querySelectorAll('.dashboard-delete-pub');

    for ( let i = 0; i < actionsMenu.length; i++ ) {
        deletePubButton[i].onclick = () => {
            deletePubButton[i].parentElement.parentElement.parentElement.remove()
        };
    }

});