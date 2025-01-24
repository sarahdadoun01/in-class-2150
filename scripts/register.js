import './../scss/register.scss';

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('registerform'); // listen for this element that contains this id

    if(form) { // if in this form...is submitted
        form.addEventListener('submit', (e) => { // when submit button is clicked
        e.preventDefault(); // avoid reloading the page
        alert('Success!'); // alert to client 
        })
    }
});