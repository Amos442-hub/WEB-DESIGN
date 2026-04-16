// Smooth scrolling for nav links
document.querySelectorAll('a[href^=\"#\"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Portfolio lightbox - Enhanced gallery with downloads for ALL categories
const items = document.querySelectorAll('.item');
const modal = document.getElementById('lightbox');
const modalImg = document.getElementById('modal-img');
const caption = document.querySelector('.modal-caption');
const closeBtn = document.querySelector('.close');

// Portfolio data - ALL categories now have galleries with downloads
const portfolioData = [
  // 1. Posters (index 0) - gallery of 3 posters
  { 
    img: 'https://images.unsplash.com/photo-1469362102473-8622cfb973cd?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=2070&amp;q=80', 
    desc: 'Professional Poster Designs - Download Available', 
    type: 'gallery', 
    category: 'Posters',
    gallery: [
      'https://images.unsplash.com/photo-1469362102473-8622cfb973cd?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80',
      'https://images.unsplash.com/photo-1558618047-ebc62e360cfd?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80',
      'https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80'
    ]
  },
  // 2. Banners (index 1) - gallery of 3 banners  
  { 
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=2070&amp;q=80', 
    desc: 'Professional Banner Designs - Download Available', 
    type: 'gallery', 
    category: 'Banners',
    gallery: [
      'https://images.unsplash.com/photo-1516321310764-8a2380f891c5?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80',
      'https://images.unsplash.com/photo-1618477460355-3c52b4f3e34e?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80', 
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80'
    ]
  },
  // 3. Logos (index 2) - gallery of 3 logos
  { 
    img: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=2074&amp;q=80', 
    desc: 'Premium Logo Designs - Download Available', 
    type: 'gallery', 
    category: 'Logos',
    gallery: [
      'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80',
      'https://images.unsplash.com/photo-1685439119588-f4dde81eae9f?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80',
      'https://images.unsplash.com/photo-1571160437664-f1c2635a032f?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80'
    ]
  },
  // 4. Logos 2 (index 3) - gallery of 3 more logos
  { 
    img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=1965&amp;q=80', 
    desc: 'Logo Design Collection - Download Available', 
    type: 'gallery', 
    category: 'Logos',
    gallery: [
      'https://images.unsplash.com/photo-1571160437664-f1c2635a032f?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80',
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80'
    ]
  },
  // 5. Video Editing (index 4) - replaced one Brand Identity
  { 
    img: 'https://images.unsplash.com/photo-1549488230-109a9c9f2fbb?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=2071&amp;q=80', 
    desc: 'Video Editing Portfolio - Thumbnails & Previews', 
    type: 'gallery', 
    category: 'Video Editing',
    gallery: [
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80',
      'https://images.unsplash.com/photo-1616464021709-b8b80649f9ec?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80'
    ]
  },
  // 6. Brand Identity (reduced to 1, index 5)
  { 
    img: 'https://images.unsplash.com/photo-1464923889450-eda88eb607c9?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=2070&amp;q=80', 
    desc: 'Brand Identity Package - Download Available', 
    type: 'gallery', 
    category: 'Brand Identity',
    gallery: [
      'https://images.unsplash.com/photo-1549488230-109a9c9f2fbb?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80',
      'https://images.unsplash.com/photo-1464923889450-eda88eb607c9?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1200&amp;q=80'
    ]
  }
];

// Show gallery modal for ALL portfolio items
items.forEach((item, index) => {
  item.addEventListener('click', () => {
    const data = portfolioData[index];
    showPortfolioGallery(data.gallery, data.desc, data.category);
  });
});

function showPortfolioGallery(images, title, category) {
  caption.innerHTML = `
    <h3>${title}</h3>
    <p style="text-align: center; color: var(--golden); margin-bottom: 2rem; font-weight: bold;">${category} by KimGraphixs</p>
    <div class="banner-gallery">
      ${images.map((imgSrc, i) => `
        <div class="banner-item">
          <img src="${imgSrc}" alt="${category} ${i+1}">
          <div class="banner-actions">
            <a href="${imgSrc}" download="kimgraphixs-${category.toLowerCase()}-${i+1}.jpg" class="download-btn">
              <i class="fas fa-download"></i> Download ${category} ${i+1}
            </a>
          </div>
        </div>
      `).join('')}
    </div>
  `;
  modalImg.style.display = 'none';
  modal.style.display = 'block';
}

// Close modal
closeBtn.addEventListener('click', closeModal);
modal.addEventListener('click', (e) => {
  if (e.target === modal) closeModal();
});

function closeModal() {
  modal.style.display = 'none';
  modalImg.style.display = 'block';
  caption.innerHTML = '';
}

// Contact form
const form = document.getElementById('contact-form');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = form.querySelector('input[type="text"]').value;
    const email = form.querySelector('input[type="email"]').value;
    const message = form.querySelector('textarea').value;
    
    if (name && email && message) {
      alert(`Thank you ${name}! Message sent to Amos Kimtai (KimGraphixs). Reply soon via WhatsApp!`);
      form.reset();
    } else {
      alert('Please fill all fields.');
    }
  });
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 100) {
    header.style.background = 'rgba(31, 41, 55, 0.98)';
  } else {
    header.style.background = 'rgba(31, 41, 55, 0.95)';
  }
});

