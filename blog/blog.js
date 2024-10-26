const articles = [
	{
	  id: 1,
	  title: 'Septimus Heap Book One: Magyk',
	  date: 'July 5, 2022',
	  description:
		'If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.',
	  imgSrc: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg',
	  imgAlt: 'Book cover for Septimus Heap 1',
	  ages: '10-14',
	  genre: 'Fantasy',
	  stars:   
   '⭐⭐⭐⭐'
	},
	{
	  id: 2,
	  title: 'Magnus Chase Book One: Sword of Summer',
	  date: 'December 12, 2021',
	  description:
		'The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.',
	  imgSrc:
		'https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300',
	  imgAlt: 'Book cover for Magnus Chase 1',
	  ages: '12-16',
	  genre: 'Fantasy',
	  stars:   
   '⭐⭐⭐⭐'
	}
  ];
  
  const library = document.querySelector('.library');
  
  function createArticleElement(article) {
	const articleElement = document.createElement('div');
	articleElement.classList.add('article');
    bookImage = document.createElement('div');
	bookImage.classList.add('book_image');
	const image = document.createElement('img');
	image.classList.add('images');
	image.setAttribute('src', article.imgSrc);
	image.setAttribute('alt', article.imgAlt);
	bookImage.appendChild(image);
	const description = document.createElement('div');
	description.classList.add('discription');
	articleElement.appendChild(description);
	const title = document.createElement('h2');
	title.classList.add('title');
	title.textContent = article.title;
	const date = document.createElement('h3');
	date.classList.add('date');
	date.textContent = article.date;
	const ages = document.createElement('h4');
	ages.classList.add('ages');
	ages.textContent = article.ages;
	const genre = document.createElement('h5');
	genre.classList.add('genre');
	genre.textContent = article.genre;
	const rating = document.createElement('h6');
	rating.classList.add('rating');
	rating.textContent = article.stars;
	const summary = document.createElement('p');
	library.appendChild(articleElement);
  }

  window.addEventListener('DOMContentLoaded', () => {
	articles.forEach(article => {
	  createArticleElement(article);
	});
  });