function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src =
		'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
}

testWebP(function (support) {
	if (support == true) {
		document.querySelector('body').classList.add('webp');
	} else {
		document.querySelector('body').classList.add('no-webp');
	}
});

document.addEventListener('DOMContentLoaded', () => {
	const makeLogo = () => {
		const body = document.querySelector('body');
		const logoWrapper = document.querySelector('.logo a');

		if (body.classList.contains('main-page-body')) {
			logoWrapper.innerHTML = `<img src="./img/logo_white.svg" alt="logo" />`;
		}
		if (body.classList.contains('roman-body')) {
			logoWrapper.innerHTML = `<img src="./img/logo_black.svg" alt="logo" />`;
		}
	};

	makeLogo();
});
