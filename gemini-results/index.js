document.addEventListener("DOMContentLoaded", function () {
  const originalImage = document.getElementById("original-image");
  const geminiNewVersionPreview = document.getElementById("gemini-preview-1.5");
  const geminiPreview = document.getElementById("gemini-preview-1.0");
  const imageOptionsContainer = document.getElementById("image-options");
  const prevButton = document.getElementById("prev-button");
  const nextButton = document.getElementById("next-button");
  const promptNodeOldGemini = document.getElementById("prompt-gemini-1.0");
  const promptNodeNewGemini = document.getElementById("prompt-gemini-1.5");



  let currentIndex = 0;

  // Image data - Add more images as needed
  const imageData = [
    "attachment-viewer-new-1",
    "attachment-viewer-new-2",
    "attachment-viewer-new-3",
    "attachment-viewer-new-4",
    "out-of-office-agent-new-1",
    "out-of-office-agent-new-2",
    "out-of-office-agent-new-3",
    "out-of-office-agent-new-4",
    "shopify-new-1",
    "shopify-new-2",
    "shopify-new-3",
    "shopify-new-4",
    'test-new-1',
    'test-new-2',
    'test-new-3',
    'test-new-4',
    "test-image-calender-new-1",
    "test-image-calender-new-2",
    "test-image-calender-new-3",
    "test-image-calender-new-4",
    "pagerduty-new-1",
    "pagerduty-new-2",
    "pagerduty-new-3",
    "pagerduty-new-4",
    "out-of-office-new-1",
    "out-of-office-new-2",
    "out-of-office-new-3",
    "out-of-office-new-4",
    // Add more images here
  ];

  // Function to initialize the list of image options
  function initializeImageOptions() {
    imageData.forEach(function (imageName) {
      const option = document.createElement("li");
      option.setAttribute("data-image", imageName);
      option.textContent = imageName;
      option.addEventListener("click", function () {
        currentIndex = imageData.indexOf(imageName);
        showImageByIndex(currentIndex);
      });
      imageOptionsContainer.appendChild(option);
    });
  }

  // Function to update the image previews based on the selected index
  function updatePreviews(imageName) {
    originalImage.src = `./data/design-images/${imageName}.png`;
    geminiPreview.src = `./data/gemini-1.0-June-20-2024/${imageName}.html`;
    geminiNewVersionPreview.src = `./data/gemini-1.5-June-20-2024/${imageName}.html`;

    fetch(`./data/gemini-1.0-prompt-June-20-2024/${imageName}.txt`)
      .then((res) => res.text())
      .then((text) => {
        console.log({ text });
        promptNodeOldGemini.innerText = text;
      })
      .catch((e) => console.error(e));

      fetch(`./data/gemini-1.5-prompt-June-20-2024/${imageName}.txt`)
      .then((res) => res.text())
      .then((text) => {
        console.log({ text });
        promptNodeNewGemini.innerText = text;
      })
      .catch((e) => console.error(e));
  }

  // Function to highlight the currently selected image option
  function highlightCurrentOption() {
    const imageOptions = document.querySelectorAll("#image-options li");
    imageOptions.forEach(function (option, index) {
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
  prevButton.addEventListener("click", function () {
    currentIndex = (currentIndex - 1 + imageData.length) % imageData.length;
    showImageByIndex(currentIndex);
  });

  nextButton.addEventListener("click", function () {
    currentIndex = (currentIndex + 1) % imageData.length;
    showImageByIndex(currentIndex);
  });

  // Initialize image options
  initializeImageOptions();

  // Initial update with the default selected image
  showImageByIndex(currentIndex);
});
