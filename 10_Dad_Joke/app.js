const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

// using async/await
async function generateJoke() {
	const config = {
		headers: { Accept: 'application/json' },
	};
	const res = await fetch('http://icanhazdadjoke.com', config);
	const data = await res.json();
	jokeEl.textContent = data.joke;
}

//using then()
// function generateJoke() {
// 	const config = {
// 		headers: { Accept: 'application/json' },
// 	};
// 	fetch('http://icanhazdadjoke.com', config).then(res => res.json()).then(data=>{
// 		jokeEl.textContent = data.joke;
//     })
// }

jokeBtn.addEventListener('click', generateJoke);
generateJoke();
