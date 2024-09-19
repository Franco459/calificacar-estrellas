
let ratingStar = document.querySelectorAll('.rating-star');
let dataSelectedRate
ratingStar.forEach((item, index) => {
    item.addEventListener('click', () => {
        ratingStar.forEach((item, index) => {
            item.classList.remove('rated');
            item.classList.add('no-to-rated');
        });
        for (let i = 0; i <= index; i++) {
            ratingStar[i].classList.remove('no-to-rated');
            ratingStar[i].classList.add('rated');
        }

        dataSelectedRate = item.dataset.id;
        item.parentElement.dataset.selectedRate = dataSelectedRate;
        item.parentElement.querySelector('.rating-text span').innerText = dataSelectedRate;
    });

    item.addEventListener('mouseover', () => {
        ratingStar.forEach((item, index) => {
            item.classList.remove('to-hover');
        });
        for (let i = 0; i <= index; i++) {
            ratingStar[i].classList.add('to-hover');
        }

        dataSelectedRate = parseInt(item.dataset.id);
        console.log(dataSelectedRate);
        updateRatingText(dataSelectedRate, item);

    });

    item.addEventListener('mouseout', () => {
        ratingStar.forEach((item, index) => {
            item.classList.remove('to-hover');
        });

        dataSelectedRate = parseInt(item.dataset.id);
        console.log(dataSelectedRate);
        updateRatingText(dataSelectedRate);

    });
});

function updateRatingText(rate) {
    let ratingText;
    switch (rate) {
        case 1:
            ratingText = "Muy malo";
            break;
        case 2:
            ratingText = "Malo";
            break;
        case 3:
            ratingText = "Regular";
            break;
        case 4:
            ratingText = "Bueno";
            break;
        case 5:
            ratingText = "Excelente";
            break;
        default:
            ratingText = "Sin calificación";
            break;
    }
    document.getElementById('textCalificacion').innerText = ratingText;
    document.getElementById('divContainer').classList.add("pointer-events-none");

}