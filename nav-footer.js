/* nav-footer.js — injected on every page */

const NAV_HTML = `
<nav class="site-nav" id="siteNav">
  <a href="index.html" class="nav-logo">
    <img src="logo.png" alt="GYOU RAMEN logo"
         style="width:42px;height:42px;border-radius:50%;object-fit:cover;flex-shrink:0;">
    GYOU RAMEN
  </a>
  <ul class="nav-links">
    <li><a href="index.html">Home</a></li>
    <li><a href="about.html">About Us</a></li>
    <li><a href="menu.html">Menu</a></li>
    <li><a href="location.html">Locations</a></li>
    <li><a href="franchising.html">Franchising</a></li>
    <li><a href="contact.html">Contact</a></li>
  </ul>
  <a href="franchising.html#apply" class="nav-cta">Franchise Inquiry</a>
  <div class="nav-burger" id="burger">
    <span></span><span></span><span></span>
  </div>
</nav>
<div class="nav-mobile" id="mobileMenu">
  <a href="index.html">Home</a>
  <a href="about.html">About Us</a>
  <a href="menu.html">Menu</a>
  <a href="location.html">Locations</a>
  <a href="franchising.html">Franchising</a>
  <a href="contact.html">Contact</a>
  <a href="franchising.html#apply" class="mob-cta">Franchise Inquiry</a>
</div>`;

const FOOTER_HTML = `
<footer class="site-footer">
  <div class="footer-top">
    <div class="footer-brand">
      <span class="footer-logo">GYOU RAMEN</span>
      <p>Authentic Japanese ramen made with heart — born in Toronto, crafted for Canada.</p>
      <div class="footer-socials">
        <a href="https://instagram.com/gyouramen" target="_blank" title="Instagram">📸</a>
        <a href="tel:+13653149955" title="Phone">📞</a>
        <a href="mailto:support@gyouramen.com" title="Email">✉️</a>
      </div>
    </div>
    <div class="footer-col">
      <h4>Pages</h4>
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="about.html">About Us</a></li>
        <li><a href="menu.html">Menu</a></li>
        <li><a href="location.html">Locations</a></li>
        <li><a href="franchising.html">Franchising</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Menu</h4>
      <ul>
        <li><a href="menu.html#ramen">Ramen</a></li>
        <li><a href="menu.html#rice">Rice Bowls</a></li>
        <li><a href="menu.html#sides">Sides</a></li>
        <li><a href="menu.html#dessert">Dessert</a></li>
        <li><a href="menu.html#drinks">Drinks</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Contact</h4>
      <address>
        📍 630 Yonge St<br>Toronto, ON<br><br>
        📞 +1 (365) 314-9955<br><br>
        ✉️ support@gyouramen.com<br><br>
        📸 @gyouramen
      </address>
    </div>
  </div>
  <div class="footer-bottom" style="max-width:1200px;margin:0 auto;">
    <p>© 2025 GYOU RAMEN. All Rights Reserved. Toronto, Ontario, Canada.</p>
    <p style="color:rgba(255,255,255,.2);font-size:11px;">Authentic Japanese Ramen · Est. Toronto</p>
  </div>
</footer>`;

document.addEventListener('DOMContentLoaded', () => {
  // Inject nav
  document.body.insertAdjacentHTML('afterbegin', NAV_HTML);
  // Inject footer
  document.body.insertAdjacentHTML('beforeend', FOOTER_HTML);

  // Active nav link
  const page = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a, .nav-mobile a').forEach(a => {
    if (a.getAttribute('href') === page) a.classList.add('active');
  });

  // Scroll shadow
  const nav = document.getElementById('siteNav');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  });

  // Burger menu
  const burger = document.getElementById('burger');
  const mob = document.getElementById('mobileMenu');
  burger.addEventListener('click', () => mob.classList.toggle('open'));
});
