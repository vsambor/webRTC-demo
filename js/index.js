document.addEventListener('DOMContentLoaded', () => {
    const video = document.querySelector('#me');

    if (navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(stream => video.srcObject = stream)
            .catch(err => console.log('Something went wrong: ' + err))
    }
});