document.addEventListener('DOMContentLoaded', ()=> {
  // Fade-in elements
  document.querySelectorAll('.fade-in').forEach((el, i)=> {
    el.style.animationDelay = (i*120) + 'ms';
  });

  // Simple SPA-like preloader for navigation between pages (uses data-push links)
  const links = document.querySelectorAll('a[data-push]');
  links.forEach(a=>{
    a.addEventListener('click', (e)=>{
      e.preventDefault();
      const href = a.getAttribute('href');
      document.body.style.opacity = 0;
      setTimeout(()=> window.location = href, 260);
    });
  });

  // back to visible
  setTimeout(()=> document.body.style.transition = 'opacity .26s', 10);
  document.body.style.opacity = 1;
});
