const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

function swtichTheme(event) {
  console.log(event.target.checked);
  if (event.target.checked) {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
  }
}

toggleSwitch.addEventListener('change', swtichTheme);
