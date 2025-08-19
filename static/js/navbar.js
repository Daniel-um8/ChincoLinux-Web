window.addEventListener("scroll", () => {
    const header = document.querySelector(".header1");
    header.classList.toggle("scrolled", window.scrollY > 50);
});

//   (function(){
//     const header = document.querySelector('.header1');
//     const btn = document.querySelector('.nav-toggle');
//     const menu = document.getElementById('primary-nav');

//     if (!btn || !menu || !header) return;

//     btn.addEventListener('click', () => {
//       const expanded = btn.getAttribute('aria-expanded') === 'true';
//       btn.setAttribute('aria-expanded', String(!expanded));
//       header.classList.toggle('open');
//     });

//     // Cerrar al hacer clic en un enlace (opcional)
//     menu.querySelectorAll('a[href^="#"]').forEach(a=>{
//       a.addEventListener('click', ()=>{
//         btn.setAttribute('aria-expanded', 'false');
//         header.classList.remove('open');
//       });
//     });

//     // Cerrar al redimensionar a desktop (opcional)
//     window.addEventListener('resize', () => {
//       if (window.innerWidth > 900) {
//         btn.setAttribute('aria-expanded', 'false');
//         header.classList.remove('open');
//       }
//     });
//   })();

