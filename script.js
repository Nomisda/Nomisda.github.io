const passwords = {
    '389': 'chellterra.html',
    'weristderdieb': 'Nr2.html',
    'beta': 'beta.html',
    'costia': 'costia.html',
    'danilo': 'danilo.html',
};

const form = document.getElementById('passwordForm');
const passwordInput = document.getElementById('passwordInput');
const errorMessage = document.getElementById('errorMessage');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const enteredPassword = passwordInput.value.toLowerCase().trim();
    
    if (passwords[enteredPassword]) {
        errorMessage.textContent = 'Sauber';
        errorMessage.style.color = '#00ff41';
        
        setTimeout(() => {
            window.location.href = passwords[enteredPassword];
        }, 1000);
    } else {
        errorMessage.textContent = 'Versuche es nochmal';
        errorMessage.style.color = '#ff0040';
        passwordInput.value = '';
        passwordInput.classList.add('shake');
        
        setTimeout(() => {
            passwordInput.classList.remove('shake');
        }, 500);
        
        setTimeout(() => {
            errorMessage.textContent = '';
        }, 3000);
    }
});

passwordInput.addEventListener('input', () => {
    errorMessage.textContent = '';
});
