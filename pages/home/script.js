document.addEventListener("DOMContentLoaded", function () {
    // window.onload = displayRandomTip;

    // Function to update reviews section
    async function updateReviewsSection() {
        const reviews = async function fetchGoogleReviews() {

            return [
                {
                    "name": "Sangeeta Mhadeshwar",
                    "profile": "https://lh3.googleusercontent.com/a/ACg8ocJ711VWKdd5PVIedjFMRSi1bVCv-zSS-JRvCzDhGmuYk4S8kg=s128-c0x00000000-cc-rp-mo",
                    "rating": 5,
                    "relative_time_description": "2 months ago",
                    "review": "It's very good experience to associate with Sarita madam. It's really helpful vastu change she has made at very minimum cost."
                },
                {
                    "name": "amruta jaitpal",
                    "profile": "https://lh3.googleusercontent.com/a-/ALV-UjUbbtyOBW2WnoM2PNSstZCTQTNG8HhuprTn5UTx27V7Q1DTtBGd=s128-c0x00000000-cc-rp-mo",
                    "rating": 5,
                    "relative_time_description": "2 months ago",
                    "review": "I have consulted Sarita Vastu and got very good and positive results."
                }
            ]
        }

        const reviewListElement = document.getElementById('review-list');
        const indicatorsElement = document.getElementById('carousel-indicators');
        reviewListElement.innerHTML = '';
        indicatorsElement.innerHTML = '';

        reviews.forEach((review, index) => {
            const reviewElement = document.createElement('div');
            reviewElement.classList.add('carousel-item');
            if (index === 0) reviewElement.classList.add('active');

            const profileImage = review.profile ? `<img src="${review.profile}" alt="${review.name}" style="width: 50px; height: 50px; border-radius: 50%;">` : `<i class="bi bi-person-circle" style="font-size: 50px;"></i>`;

            // Create star ratings with Bootstrap icons
            let stars = '';
            for (let i = 0; i < 5; i++) {
                stars += i < review.rating ? '<i class="bi bi-star-fill"></i>' : '<i class="bi bi-star"></i>';
            }

            reviewElement.innerHTML = `
                <div class="review-card">
                    <div style="display:flex; flex-direction: row; align-items:center">
                        ${profileImage}
                        <div style="margin-left: 10px;">
                            <h4>${review.name}</h4>
                            <p style='width:fit-content'>${stars}</p>
                        </div>
                    </div>
                    <p style="text-align:justify">${review?.review?.length > 0 ? '“' + review.review + '”' : ''}</p>
                </div>
            `;
            reviewListElement.appendChild(reviewElement);

            const indicatorElement = document.createElement('li');
            indicatorElement.setAttribute('data-target', '#carouselReviews');
            indicatorElement.setAttribute('data-slide-to', index);
            if (index === 0) indicatorElement.classList.add('active');
            indicatorsElement.appendChild(indicatorElement);
        });

        // Automatically rotate reviews every 3 seconds
        $('.carousel').carousel({
            interval: 3000
        });
    }

    updateReviewsSection();
});

let cards = [
    'serviceCard1',
    'serviceCard2',
    'serviceCard3',
    'serviceCard4'
];

function toggleCard(cardId) {
    for (let i = 0; i < cards.length; i++) {
        const card = document.getElementById(cards[i]);
        if (cards[i] == cardId) {
            card.classList.toggle('expanded');
            card.classList.toggle('collapsed');
        } else {
            card.classList.remove('expanded');
            card.classList.add('collapsed');
        }
    }
}

function scrollToFooter() {
    document.getElementById('footer').scrollIntoView({ behavior: 'smooth' });
    highlightContactInfo();
}

function highlightContactInfo() {
    var contactInfo = document.getElementById('contact-info');
    contactInfo.classList.add('highlight');
    setTimeout(function () {
        contactInfo.classList.remove('highlight');
    }, 3000);
}

// Check if text overflows and show expand icon if needed
document.addEventListener('DOMContentLoaded', function () {
    console.log('Here..........');

    const cards = document.querySelectorAll('.service-card');
    cards.forEach(card => {
        const text = card.querySelector('.card-text');
        const icon = card.querySelector('.expand-icon');
        if (text.scrollHeight > text.clientHeight) {
            icon.style.display = 'block';
        }
    });
});


document.querySelectorAll('.service-card').forEach(card => {
    const icon = card.querySelector('.expand-icon');

    icon.addEventListener('click', () => {
        card.classList.toggle('expanded');
        card.classList.toggle('collapsed');
    });
});
