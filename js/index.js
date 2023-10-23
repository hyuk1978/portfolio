document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href').substring(1); 
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

const downIcon = document.querySelector('.down_icon');
downIcon.addEventListener('click', function() {
    const aboutSection = document.getElementById('about_me');
    if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
});

// 스크롤 이벤트
window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    const aboutSection = document.getElementById('about');
    const aboutSectionRect = aboutSection.getBoundingClientRect();
    
    if (aboutSectionRect.bottom <= 0) {
        document.getElementById('header').classList.add('header_bgc_white');
        document.getElementById('header').classList.remove('header_bgc_black');
    } else {
        document.getElementById('header').classList.add('header_bgc_black');
        document.getElementById('header').classList.remove('header_bgc_white');
    }
});