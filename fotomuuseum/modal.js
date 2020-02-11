window.onclick = function(event) {
    if (event.target && event.target.className.includes('modal')) {
        const modal = event.target;
        modal.style.display = "none";
    }
};