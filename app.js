const header = document.querySelector('.site-header');
const progress = document.getElementById('scrollProgress');
const menuToggle = document.getElementById('menuToggle');
const mobileNav = document.getElementById('mobileNav');
const reveals = document.querySelectorAll('.reveal');

document.getElementById('year').textContent = new Date().getFullYear();

const onScroll = () => {
  header.classList.toggle('scrolled', window.scrollY > 12);
  const max = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = max > 0 ? `${(window.scrollY / max) * 100}%` : '0%';
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

menuToggle.addEventListener('click', () => {
  const open = mobileNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
});
mobileNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  mobileNav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
}));

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
reveals.forEach(el => observer.observe(el));