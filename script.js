// script.js

// DOM Elements
const searchBarInput = document.querySelector('.searchBar input');
const searchBtn = document.querySelector('.searchBtn');
const headerLinks = document.querySelectorAll('.headerLinks a');

// Event Listener for Search Button
searchBtn.addEventListener('click', () => {
  const query = searchBarInput.value.trim();
  if (query) {
    alert(`Searching for: ${query}`);
    // Implement search functionality if needed
  } else {
    alert('Please enter a search term.');
  }
});

// Smooth Scroll for Header Links
headerLinks.forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const targetId = link.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth'
      });
    }
  });
});

// Toggle Active Class for Navigation Links
headerLinks.forEach(link => {
  link.addEventListener('click', () => {
    headerLinks.forEach(item => item.classList.remove('active'));
    link.classList.add('active');
  });
});

// Example Dynamic Content Update
document.addEventListener('DOMContentLoaded', () => {
  const slogan = document.querySelector('.slogan');
  const phrases = ['best gaming site ever!', 'your ultimate gaming portal', 'experience the thrill of gaming'];
  let phraseIndex = 0;

  setInterval(() => {
    slogan.textContent = phrases[phraseIndex];
    phraseIndex = (phraseIndex + 1) % phrases.length;
  }, 3000); // Change phrase every 3 seconds
});

// Back-to-Top Button (optional)
const backToTopButton = document.createElement('button');
backToTopButton.textContent = '↑';
backToTopButton.classList.add('back-to-top');
backToTopButton.style.position = 'fixed';
backToTopButton.style.bottom = '20px';
backToTopButton.style.right = '20px';
backToTopButton.style.display = 'none';
backToTopButton.style.padding = '10px';
backToTopButton.style.borderRadius = '50%';
backToTopButton.style.backgroundColor = '#ffb400';
backToTopButton.style.color = '#121212';
backToTopButton.style.fontWeight = 'bold';
backToTopButton.style.cursor = 'pointer';
document.body.appendChild(backToTopButton);

// Show/Hide Back-to-Top Button
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTopButton.style.display = 'block';
  } else {
    backToTopButton.style.display = 'none';
  }
});

// Scroll Back to Top on Button Click
backToTopButton.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
