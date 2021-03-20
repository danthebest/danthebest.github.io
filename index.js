const theme = document.querySelector('#theme');
const portfolio = document.querySelector('#portfolio');

theme.addEventListener('click', () => {
	if (portfolio.classList.contains('dark')) {
		portfolio.classList.remove('dark');
	} else {
		portfolio.classList.add('dark');
	}
});