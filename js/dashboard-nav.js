document.addEventListener('DOMContentLoaded', () => {
    const openLogoutModal = document.getElementById('open-logout-modal');
    const closeLogoutModal = document.getElementById('logout-close-btn');
    const timesButton = document.getElementById('logout-times-button');
    const logoutModal = document.getElementById('logout-modal')

    openLogoutModal.addEventListener('click', () => {
        logoutModal.style.display = 'flex';
    });

    closeLogoutModal.addEventListener('click', () => {
        logoutModal.style.display = 'none';
    });

    timesButton.addEventListener('click', () => {
        logoutModal.style.display = 'none';
    });


});