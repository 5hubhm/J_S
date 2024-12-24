// Global variables
let classifier;
let isModelLoaded = false;

// DOM Elements
const dom = {
    modelStatus: document.getElementById('model-status'),
    imageInput: document.getElementById('image-input'),
    previewSection: document.querySelector('.preview-section'),
    previewImage: document.getElementById('preview-image'),
    loadingSpinner: document.getElementById('loading-spinner'),
    predictions: document.getElementById('predictions'),
    resetButton: document.getElementById('reset-button'),
    uploadButton: document.querySelector('.upload-button'),
};

// Initialize MobileNet classifier
const initializeModel = async () => {
    try {
        classifier = await ml5.imageClassifier('MobileNet');
        isModelLoaded = true;
        updateStatus('MobileNet model loaded successfully!', 'success');
    } catch {
        updateStatus('Error loading model. Please refresh the page.', 'error');
    }
};

// Update status message
const updateStatus = (message, type) => {
    dom.modelStatus.textContent = message;
    dom.modelStatus.style.backgroundColor = type === 'success' ? '#d4edba' : '#f8d7da';
    dom.modelStatus.style.color = type === 'success' ? '#155730' : '#721c24';
};

// Handle image upload
const handleImageUpload = ({ target: { files } }) => {
    const file = files[0];
    if (!file || !file.type.startsWith('image/')) {
        alert('Please upload a valid image file.');
        return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
        dom.previewImage.src = e.target.result;
        dom.previewSection.classList.remove('hidden');
        dom.loadingSpinner.classList.remove('hidden');
        dom.predictions.innerHTML = '';

        dom.previewImage.onload = () => isModelLoaded ? classifyImage() : alert('Model is not loaded yet.');
    };
    reader.readAsDataURL(file);
};

// Classify the uploaded image
const classifyImage = async () => {
    try {
        const results = await classifier.classify(dom.previewImage);
        displayResults(results);
    } catch {
        dom.predictions.innerHTML = '<p class="error">Error classifying image. Please try again.</p>';
    } finally {
        dom.loadingSpinner.classList.add('hidden');
    }
};

// Display classification results
const displayResults = (results) => {
    dom.predictions.innerHTML = results.map(({ label, confidence }) => `
        <div class="prediction-item">
            <span>${label}</span>
            <span>${(confidence * 100).toFixed(2)}%</span>
        </div>
    `).join('');
};

// Reset the form
dom.resetButton.addEventListener('click', () => {
    dom.imageInput.value = '';
    dom.previewSection.classList.add('hidden');
    dom.predictions.innerHTML = '';
});

// Drag and drop support
['dragover', 'dragleave', 'drop'].forEach((event) =>
    dom.uploadButton.addEventListener(event, (e) => {
        e.preventDefault();
        if (event === 'drop') handleImageUpload({ target: { files: e.dataTransfer.files } });
    })
);

// Initialize model and attach event listeners
initializeModel();
dom.imageInput.addEventListener('change', handleImageUpload);
