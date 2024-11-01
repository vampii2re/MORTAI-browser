document.getElementById('goButton').addEventListener('click', function() {
    const urlInput = document.getElementById('url').value;
    const webView = document.getElementById('webView');
    
    if (isValidUrl(urlInput)) {
        webView.src = urlInput;
        webView.onload = function() {
            // Page loaded successfully
        };
        webView.onerror = function() {
            alert('Failed to load the page. The website might be blocking iframe loading.');
        };
    } else {
        alert('Please enter a valid URL starting with http:// or https://');
    }
});