document.addEventListener('DOMContentLoaded', function() {
    // category filter interactivity
    const adventureFilter = document.getElementById('adventure');
    const relaxationFilter = document.getElementById('relaxation');

    // handles filter clicks
    function handleFilterClick(element) {
        // if filter is already active (has bigger size), make it normal
        if(element.style.transform === 'scale(1.1)') {
            element.style.transform = 'scale(1.0)';
            element.style.backgroundColor = '#4CAF50';
        } else {
            // makes filter bigger when clicked
            element.style.transform = 'scale(1.1)';
            element.style.backgroundColor = '#45a049';
        }
    }

    // click events to filters
    adventureFilter.addEventListener('click', function() {
        handleFilterClick(this);
    });

    relaxationFilter.addEventListener('click', function() {
        handleFilterClick(this);
    });

    // hhotspot gnformation show/hide
    const spot1 = document.getElementById('spot1');
    const spot2 = document.getElementById('spot2');

    function toggleHotspotInfo(hotspot, text) {
        // check if info box already exists
        let infoBox = hotspot.querySelector('.info-box');
        
        if (!infoBox) {
            // create info box if it doesn't exist
            infoBox = document.createElement('div');
            infoBox.className = 'info-box';
            infoBox.style.backgroundColor = 'white';
            infoBox.style.padding = '10px';
            infoBox.style.borderRadius = '5px';
            infoBox.style.marginTop = '10px';
            infoBox.innerHTML = text;
            hotspot.appendChild(infoBox);
        } else {
            infoBox.remove();
        }
    }

    spot1.addEventListener('click', function() {
        toggleHotspotInfo(this, 'Visit our historic museum!<br>Open daily 9 AM - 5 PM');
    });

    spot2.addEventListener('click', function() {
        toggleHotspotInfo(this, 'Explore our shopping district!<br>Most stores open 10 AM - 9 PM');
    });

    // simple Scroll Animation
    const sections = document.querySelectorAll('section');

    // function to check if element is in view
    function isInView(element) {
        const position = element.getBoundingClientRect();
        return position.top < window.innerHeight && position.bottom >= 0;
    }

    // function to add animation to sections
    function animateSections() {
        sections.forEach(section => {
            if (isInView(section)) {
                section.style.opacity = '1';
                section.style.transform = 'translateY(0)';
            }
        });
    }

    // add scroll event listener
    window.addEventListener('scroll', animateSections);

    animateSections();
});