document.getElementById('resultButton').addEventListener('click', function() {
  const periodInput = document.getElementById('periodInput').value;

  if (periodInput.length === 5) {
    // Show loading animation and blur background
    const loadingAnimation = document.getElementById('loadingAnimation');
    loadingAnimation.style.display = 'flex';

    // Simulate a 10-second delay
    setTimeout(function() {
      // Hide loading animation
      loadingAnimation.style.display = 'none';

      // Generate a random result: BIGGG or SMALL
      const result = Math.random() < 0.5 ? 'BIGGG' : 'SMALL';
      document.getElementById('resultOutput').value = result;
      document.getElementById('resultOutput').style.textShadow = "0 0 10px #00ffcc, 0 0 20px #00ffcc";
      document.getElementById('resultOutput').style.color = result === 'BIGGG' ? '#00ffcc' : '#ff4c4c';
    }, 10000);
  } else {
    alert('Please enter a valid 5-digit period.');
  }
});