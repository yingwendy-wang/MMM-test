document.addEventListener('DOMContentLoaded', (event) => {
    // Set default view to option 1
    document.querySelector('#iframe1').style.display = 'block';
    document.querySelector('#option1 .toggle-button').innerText = 'On';
});

function toggleIframe(optionNumber) {
    const iframeContainer = document.querySelector(`#iframe${optionNumber}`);
    const toggleButton = document.querySelector(`#option${optionNumber} .toggle-button`);
    
    if (iframeContainer.style.display === 'none' || iframeContainer.style.display === '') {
        iframeContainer.style.display = 'block';
        toggleButton.innerText = 'On';
    } else {
        iframeContainer.style.display = 'none';
        toggleButton.innerText = 'Off';
    }
}
