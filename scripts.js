document.addEventListener('DOMContentLoaded', function () {
    // Handle clicks on related video thumbnails
    document.querySelectorAll('.list-group-item').forEach(function (item) {
        item.addEventListener('click', function (e) {
            e.preventDefault();
            const videoSrc = this.getAttribute('data-video-src');
            const videoTitle = this.getAttribute('data-video-title');
            const videoDescription = this.getAttribute('data-video-description');

            // Update video player source
            const videoPlayer = document.querySelector('.embed-responsive-item');
            videoPlayer.src = videoSrc;

            // Update video title and description
            document.querySelector('#video-title').textContent = videoTitle;
            document.querySelector('#video-description').textContent = videoDescription;
        });
    });

    // Initialize Bootstrap carousel
    $('#menuCarousel').carousel({
        interval: 2000
    });
});

// Change the main video when a thumbnail is clicked
document.querySelectorAll('.list-group-item').forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault();
        const videoSrc = this.getAttribute('data-video-src');
        const videoTitle = this.getAttribute('data-video-title');
        const videoDescription = this.getAttribute('data-video-description');
        
        document.querySelector('.embed-responsive-item').src = videoSrc;
        document.getElementById('video-title').textContent = videoTitle;
        document.getElementById('video-description').textContent = videoDescription;
    });
});

// Initialize Bootstrap Carousel
$('.carousel').carousel();
