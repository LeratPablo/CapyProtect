const boxes = document.querySelectorAll('.info');

window.addEventListener('scroll', checkBoxes);
window.addEventListener('load', checkBoxes);

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4;
    
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;
        if (boxTop < triggerBottom) {
            box.classList.add('show');
        }
    });
}