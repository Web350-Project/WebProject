
document.addEventListener('DOMContentLoaded', () => {
    const signOutButton = document.querySelector('#signout-btn');  // Replace with your actual ID/class
    signOutButton.addEventListener('click', handleSignOut);

});

/**
 * Handles the sign out process
 * @param {Event} event - 
 */
function handleSignOut(event) {
    event.preventDefault();
    
    localStorage.removeItem('loggedStudent');

    alert('You have been signed out successfully!');
    
    window.location.href = 'login.html';  
}