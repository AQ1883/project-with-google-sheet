fetch("https://opensheet.elk.sh/1D4gfAqMfJbhYE6xkpb7ki42fiPg4Leob5o9NbmCDaPE/Sheet1")
  .then(response => response.json())
  .then(data => {
    const product = data[0];
    document.getElementById("title").textContent = product.title;
    document.getElementById("description").textContent = product.description;
    document.getElementById("imgg").src = product.image;
    document.getElementById("ctaBtn").textContent = product.buttonText;
    document.getElementById("title2").textContent = product.title2;
    document.getElementById("description2").textContent = product.description2;
    document.getElementById("imgg2").src = product.image2;
    document.getElementById("ctaBtn2").textContent = product.buttonText2;
  })
  .catch(error => {
    console.error("فشل في تحميل البيانات:", error);
  });
