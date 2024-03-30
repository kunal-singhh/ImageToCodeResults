document.addEventListener("DOMContentLoaded", function() {
  const originalImage = document.getElementById("original-image");
  const googleVisionPreview = document.getElementById("google-vision-preview");
  const geminiPreview = document.getElementById("gemini-preview");
  const imageOptionsContainer = document.getElementById("image-options");
  const prevButton = document.getElementById("prev-button");
  const nextButton = document.getElementById("next-button");

  let currentIndex = 0;

  // Image data - Add more images as needed
  const imageData = [
    "attachment-viewer",
    "clone-ticket",
    "form_charge",
    "linkedjiras",
    "mailchimp",
    "out-of-office",
    "out-of-office-agent",
    "pagerduty",
    "shopify",
    "shopify-modal",
    "team-viewer",
    'test',
    "test-image-calender",
    "test-image-multi-button",
    "test-image-scroll"
    // Add more images here
  ];

  // Function to initialize the list of image options
  function initializeImageOptions() {
    imageData.forEach(function(imageName) {
      const option = document.createElement("li");
      option.setAttribute("data-image", imageName);
      option.textContent = imageName;
      option.addEventListener("click", function() {
        currentIndex = imageData.indexOf(imageName);
        showImageByIndex(currentIndex);
      });
      imageOptionsContainer.appendChild(option);
    });
  }

  // Function to update the image previews based on the selected index
  function updatePreviews(imageName) {
    originalImage.src = `./data/design-images/${imageName}.png`;
    googleVisionPreview.src = `./data/prod-gen/${imageName}.html`;
    geminiPreview.src = `./data/gemini-gen/${imageName}.html`;
  }

  // Function to highlight the currently selected image option
  function highlightCurrentOption() {
    const imageOptions = document.querySelectorAll("#image-options li");
    imageOptions.forEach(function(option, index) {
      if (index === currentIndex) {
        option.classList.add("active");
      } else {
        option.classList.remove("active");
      }
    });
  }

  // Function to show image by index
  function showImageByIndex(index) {
    const selectedImage = imageData[index];
    updatePreviews(selectedImage);
    highlightCurrentOption();
  }

  // Event listeners for navigation buttons
  prevButton.addEventListener("click", function() {
    currentIndex = (currentIndex - 1 + imageData.length) % imageData.length;
    showImageByIndex(currentIndex);
  });

  nextButton.addEventListener("click", function() {
    currentIndex = (currentIndex + 1) % imageData.length;
    showImageByIndex(currentIndex);
  });

  // Initialize image options
  initializeImageOptions();

  // Initial update with the default selected image
  showImageByIndex(currentIndex);
});
