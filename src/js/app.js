// Добавление класса webp или noWebp
import { isWebp } from "./modules/functions.js";
isWebp();


const upArrow = document.querySelector('.up-arrow');
let scroll;

window.addEventListener('scroll', () => {
	scroll = window.pageYOffset;
	scroll < 500 ? upArrow.classList.add('none') : upArrow.classList.remove('none');
})

let width = window.innerWidth;
if (width <= 992) {
	const navLinks = document.querySelectorAll('.nav-link');
	const offset = document.querySelector('#navbarOffcanvasLg');

	navLinks.forEach(val => {
		val.addEventListener('click', (e) => {
			e.preventDefault();
			bootstrap.Offcanvas.getInstance('#navbarOffcanvasLg').hide();
			offset.addEventListener('hide.bs.offcanvas', () => {

			})


			let toObject = val.getAttribute("href");
			let obj = document.querySelector(toObject);
			setTimeout(() => {				
				obj.scrollIntoView();
			}, 1000);
		})
	})
}