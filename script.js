const passwords = {
    'shadow': 'secret1.html',
    'enigma': 'secret2.html',
    'phantom': 'secret3.html',
    'cipher': 'secret4.html'
};

const form = document.getElementById('passwordForm');
const passwordInput = document.getElementById('passwordInput');
const errorMessage = document.getElementById('errorMessage');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const enteredPassword = passwordInput.value.toLowerCase().trim();
    
    if (passwords[enteredPassword]) {
        errorMessage.textContent = 'ACCESS GRANTED...';
        errorMessage.style.color = '#00ff41';
        
        setTimeout(() => {
            window.location.href = passwords[enteredPassword];
        }, 1000);
    } else {
        errorMessage.textContent = 'ACCESS DENIED. INVALID CODE.';
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
