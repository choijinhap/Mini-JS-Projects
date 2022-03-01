const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

fill.addEventListener('dragstart', dragStart);
// fill.addEventListener('dragstart', () => {
// 	this.classList.add('hold');
// });
fill.addEventListener('dragend', dragEnd);
for (const empty of empties) {
	empty.addEventListener('dragover', dragOver);
	empty.addEventListener('dragenter', dragEnter);
	empty.addEventListener('dragleave', dragLeave);
	empty.addEventListener('drop', dragDrop);
}

function dragStart() {
	this.classList.add('hold');
	setTimeout(() => (this.className = 'invisible'), 0);
}
// const dragStart = () => {
//     this.classList.add('hold');
// };
function dragEnd() {
	this.classList.remove('hold');
	this.classList.add('fill');
}
function dragOver(e) {
	e.preventDefault();
}
function dragEnter(e) {
	this.classList.add('hovered');
	// e.target.append(fill);
}
function dragLeave() {
	this.classList.remove('hovered');
}
function dragDrop() {
	this.append(fill);
}
