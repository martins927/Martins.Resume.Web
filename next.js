//Dark mode toggle
const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;

//check if user saved theme before
const savedTheme = localStorage.getItem('theme') || 'dark';
html.setAttribute('data-theme', savedTheme)
themeToggle.textContent = savedTheme === 'light'? '☀':'🌙'
if(savedTheme === 'light') {
    body.classList.add('light-mode');
    themeToggle.textContent = '☀';
}
//Toggle theme on click
themeToggle.addEventListener('click',()=>
{
   const currentTheme = html.getAttribute('data-theme');
   const newTheme = currentTheme === 'dark'? 'light':'dark'
   html.setAttribute('data-theme', newTheme);
   localStorage.setItem('theme', newTheme);
   themeToggle.textContent = newTheme === 'light'? '☀':'🌙'
});