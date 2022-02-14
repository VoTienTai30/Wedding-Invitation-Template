let open = document.querySelector('.rsvp-container input');
open.addEventListener('click', function () {
    let form = document.querySelector('.form-container');
    form.style.display = 'block';
})

let close = document.querySelectorAll('.btn');
for (let i = 0; i < close.length; i++) {
    close[i].addEventListener('click', function () {
        let form = document.querySelector('.form-container');
        form.style.display = 'none';
    })
}
