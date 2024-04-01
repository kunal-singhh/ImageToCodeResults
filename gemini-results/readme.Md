## Steps to check gemini results

1. Add the data folder in the rootwith the following structure

```
data
  - design-images
    - image1.jpg
    - image2.jpg
    - ...
  - prod-gen
    - image1.html
    - image2.html
    - ...
  - gemini-gen
    - image1.html
    - image2.html

```


2. Add the image names in the `index.js` at 


```javascript
const imageData = [
  "out-of-office",
  "shopify",
  'test'
  // Add more images here
];
```


3. Commit and check either of the 2 URLs
  - [https://kunal-singhh.github.io/ImageToCodeResults/gemini-results/](https://kunal-singhh.github.io/ImageToCodeResults/gemini-results/) 
  - [https://image-to-code-results.vercel.app/](https://image-to-code-results.vercel.app/)


4. Check by locally runnning the index.html file
```bash
npx http-server -p 3002
```
This will open a server on port 3002 and you can access the page by navigating to `http://localhost:3002/gemini-results/index.html`


![data/preview.png](data/preview.png)

