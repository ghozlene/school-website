const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
	nav.classList.toggle('window-scroll', window.scrollY > 0);
});
