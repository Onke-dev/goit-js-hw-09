const MAIN_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const textarea = document.querySelector('textarea');

const formData =
{
    email: "",
    message: ""
};

form.addEventListener('input', (event) => {
    formData[event.target.name] = event.target.value;
    localStorage.setItem(MAIN_KEY, JSON.stringify(formData));
    
})

document.addEventListener('DOMContentLoaded', () => {
    const zip = localStorage.getItem(MAIN_KEY);
    try {
        const data = JSON.parse(zip) || {};
        formData.email = data.email || '';
        formData.message = data.message || '';


        form.elements.email.value = formData.email;
        form.elements.email.value = formData.email;
    } catch {}
})


form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (formData.email === "" || formData.message === "") {
        return alert('Fill please all fields');
    } 
    console.log(formData);
    
    localStorage.removeItem(MAIN_KEY);
    formData.email = "";
    formData.message = "";
    form.reset();
})
