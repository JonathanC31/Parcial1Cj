document.addEventListener('DOMContentLoaded', (event) => {
    const urlParams = new URLSearchParams(window.location.search);
    const course = urlParams.get('course');
    if (course) {
        document.getElementById('course').value = course;
    }
});