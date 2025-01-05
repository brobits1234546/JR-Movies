$(document).ready(() => {
    $('#hamburger-menu').click(() => {
        $('#hamburger-menu').toggleClass('active')
        $('#nav-menu').toggleClass('active')
    })

    // setting owl carousel

    let navText = ["<i class='bx bx-chevron-left'></i>", "<i class='bx bx-chevron-right'></i>"]

    $('#hero-carousel').owlCarousel({
        items: 1,
        dots: false,
        loop: true,
        nav:true,
        navText: navText,
        autoplay: true,
        autoplayHoverPause: true
    })

    $('#top-movies-slide').owlCarousel({
        items: 2,
        dots: false,
        loop: true,
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            500: {
                items: 3
            },
            1280: {
                items: 4
            },
            1600: {
                items: 6
            }
        }
    })

    $('.movies-slide').owlCarousel({
        items: 2,
        dots: false,
        nav:true,
        navText: navText,
        margin: 15,
        responsive: {
            500: {
                items: 2
            },
            1280: {
                items: 4
            },
            1600: {
                items: 6
            }
        }
    })
})
// 
// Get elements
const profileLink = document.getElementById('profile-link');
const profileDropdown = document.getElementById('profile-dropdown');

// Toggle dropdown visibility
profileLink.addEventListener('click', function(event) {
    event.preventDefault();
    profileDropdown.style.display = profileDropdown.style.display === 'block' ? 'none' : 'block';
});

// Close dropdown if clicked outside
window.addEventListener('click', function(event) {
    if (!event.target.closest('.profile-container')) {
        profileDropdown.style.display = 'none';
    }
});
// 
// Function to toggle the search box visibility
function toggleSearch() {
    const searchBox = document.getElementById('search-box');
    searchBox.style.display = searchBox.style.display === 'block' ? 'none' : 'block';
}

// Function to handle search action
function searchMovie() {
    const query = document.getElementById('search-input').value;
    if (query) {
        alert(`Searching for: ${query}`);
        // Implement actual search logic here
    } else {
        alert('Please enter a movie name');
    }
}

// Close the search box if clicked outside
document.addEventListener('click', function(event) {
    const searchBox = document.getElementById('search-box');
    const searchContainer = document.querySelector('.search-container');
    
    // Check if the click is outside the search box and the search icon
    if (!searchContainer.contains(event.target)) {
        searchBox.style.display = 'none';
    }
});
