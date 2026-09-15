function previewImage(input) {
    if (input.files && input.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const label = input.closest('.upload-box');
            const preview = label.querySelector('.photo-preview');
            const placeholder = label.querySelector('.photo-placeholder');
            preview.src = e.target.result;
            preview.style.display = 'block';
            placeholder.style.display = 'none';
        }
        reader.readAsDataURL(input.files[0]);
    }
}

function changeTemplate() {
    const selector = document.getElementById('templateSelect');
    const container = document.getElementById('cards-container');
    
    // Remove existing template classes
    container.classList.remove('template-1', 'template-2');
    
    // Add new template class
    container.classList.add(selector.value);
}

function addCardPair() {
    const container = document.getElementById('cards-container');
    const firstPair = container.querySelector('.card-pair');
    const newPair = firstPair.cloneNode(true);
    
    // Clear text inputs
    const inputs = newPair.querySelectorAll('input[type="text"]');
    inputs.forEach(input => input.value = '');
    
    // Clear checkboxes
    const checkboxes = newPair.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(cb => cb.checked = false);
    
    // Reset image preview
    const previews = newPair.querySelectorAll('.photo-preview');
    previews.forEach(p => {
        p.src = '';
        p.style.display = 'none';
    });
    const placeholders = newPair.querySelectorAll('.photo-placeholder');
    placeholders.forEach(p => p.style.display = 'flex');

    // Make sure the new file input doesn't trigger the same file if cloned
    const fileInputs = newPair.querySelectorAll('input[type="file"]');
    fileInputs.forEach(fi => fi.value = '');
    
    container.appendChild(newPair);
}

// Customization Logic
let isBold = false;
let isItalic = false;

function updateTextStyle() {
    const color = document.getElementById('textColor').value;
    document.documentElement.style.setProperty('--input-color', color);
}

function toggleStyle(styleType) {
    if (styleType === 'bold') {
        isBold = !isBold;
        document.documentElement.style.setProperty('--input-weight', isBold ? 'bold' : 'normal');
        document.getElementById('btnBold').classList.toggle('active', isBold);
    } else if (styleType === 'italic') {
        isItalic = !isItalic;
        document.documentElement.style.setProperty('--input-style', isItalic ? 'italic' : 'normal');
        document.getElementById('btnItalic').classList.toggle('active', isItalic);
    }
}
