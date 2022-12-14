const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {
	nav.classList.toggle('window-scroll', window.scrollY > 0);
});

const faqs = document.querySelectorAll('.faq');

faqs.forEach((faq) => {
	faq.addEventListener('click', () => {
		faq.classList.toggle('open');

		const icon = faq.querySelector('.faq__icon i');
		if (icon.className === 'fa-solid fa-plus') {
			icon.className = 'fa-solid fa-minus';
		} else {
			icon.className = 'fa-solid fa-plus';
		}
	});
});
var swiper = new Swiper('.mySwiper', {
	slidesPerView: 2,
	spaceBetween: 30,
	slidesPerGroup: 2,
	loop: true,
	loopFillGroupWithBlank: true,

	autoplay: {
		delay: 2500,
		disableOnInteraction: false,
	},
	pagination: {
		el: '.swiper-pagination',
		clickable: true,
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});

const menu = document.querySelector('.nav__menu');
const menuBtn = document.querySelector('#open-menu-btn');
const closeBtn = document.querySelector('#close-menu-btn');
menuBtn.addEventListener('click', () => {
	menu.style.display = 'flex';
	closeBtn.style.display = 'inline-block';
	menuBtn.style.display = 'none';
	menu.style.transition = --transition;
});

closeBtn.addEventListener('click', () => {
	menu.style.display = 'none';
	menuBtn.style.display = 'inline-block';
	closeBtn.style.display = 'none';
});
