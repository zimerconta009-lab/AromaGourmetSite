// scripts.js — lightweight helpers: lazy loading, reveal on scroll, CTA tracking, accessible behaviors
document.addEventListener('DOMContentLoaded', function(){
  // Lazy images (data-src)
  const lazyImages = [].slice.call(document.querySelectorAll('img.lazy'));
  if('IntersectionObserver' in window){
    let imgObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove('lazy');
          observer.unobserve(img);
        }
      });
    }, {rootMargin: '200px 0px'});
    lazyImages.forEach(img => imgObserver.observe(img));
  } else {
    // fallback: load all
    lazyImages.forEach(img => img.src = img.dataset.src);
  }

  // Reveal on scroll (fade + translateY)
  const reveals = document.querySelectorAll('.section, .card, .testimonial, .masonry-item');
  if('IntersectionObserver' in window){
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if(e.isIntersecting){
          e.target.style.transition = 'opacity 420ms var(--transition-fast), transform 420ms var(--transition-fast)';
          e.target.style.opacity = 1;
          e.target.style.transform = 'translateY(0)';
          revealObserver.unobserve(e.target);
        }
      });
    }, {threshold: 0.08});
    reveals.forEach(r => {
      r.style.opacity = 0;
      r.style.transform = 'translateY(30px)';
      revealObserver.observe(r);
    });
  } else {
    reveals.forEach(r => { r.style.opacity = 1; r.style.transform = 'none'; });
  }

  // CTA click tracking (simple)
  const ctas = document.querySelectorAll('a[href*="wa.me"]');
  ctas.forEach(a => a.addEventListener('click', function(){ try{ if(window.dataLayer) window.dataLayer.push({event:'click_whatsapp'}); }catch(e){} }));

  // Smooth scroll for internal anchors for browsers that support it
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', function(e){
      const target = document.querySelector(this.getAttribute('href'));
      if(target){
        e.preventDefault();
        target.scrollIntoView({behavior:'smooth', block:'start'});
        target.focus({preventScroll:true});
      }
    });
  });
});
