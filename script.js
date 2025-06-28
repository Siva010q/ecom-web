// Show popup after 5 seconds
setTimeout(function() {
  // Check if user has dismissed the popup before (using localStorage)
  const popupDismissed = localStorage.getItem('popupDismissed');
  const lastDismissed = localStorage.getItem('lastDismissed');
  const sevenDays = 7 * 24 * 60 * 60 * 1000; // 7 days in milliseconds
  
  // If never dismissed or dismissed more than 7 days ago, show popup
  if (!popupDismissed || (lastDismissed && (Date.now() - lastDismissed) > sevenDays)) {
    document.getElementById('loginPopup').style.display = 'block';
  }
}, 5000);

// Close button functionality
document.getElementById('closePopup').addEventListener('click', function() {
  document.getElementById('loginPopup').style.display = 'none';
  // Remember that user dismissed the popup
  localStorage.setItem('popupDismissed', 'true');
  localStorage.setItem('lastDismissed', Date.now());
});

// Google login function (placeholder - implement actual auth later)
function loginWithGoogle() {
  alert('Redirecting to Google login...');
  // In a real app, use Firebase Auth or similar here
  document.getElementById('loginPopup').style.display = 'none';
  localStorage.setItem('popupDismissed', 'true');
  localStorage.setItem('lastDismissed', Date.now());
}