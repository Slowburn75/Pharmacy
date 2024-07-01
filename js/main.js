function toggleAnswer(element) {
    const answer = element.nextElementSibling;
    const icon = element.querySelector('i');
  
    if (answer.style.display === 'block') {
      answer.style.display = 'none';
      icon.style.transform = 'rotate(0deg)';
    } else {
      answer.style.display = 'block';
      icon.style.transform = 'rotate(90deg)';
    }
  }

  document.getElementById('prescriptionForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const formData = new FormData();
    const fileField = document.getElementById('prescriptionFile');
  
    formData.append('prescriptionFile', fileField.files[0]);
  
    fetch('/upload-endpoint', { // Replace with your backend endpoint
      method: 'POST',
      body: formData
    })
    .then(response => response.json())
    .then(result => {
      alert('File uploaded successfully!');
    })
    .catch(error => {
      alert('File upload failed!');
      console.error('Error:', error);
    });
  });
  

  document.getElementById('prescriptionFile').addEventListener('change',function (event){
    const fileField = document.getElementById('prescriptionFile');
    const filelabel = document.getElementById('prescriptionfilelabel');
    if(fileField.files[0]){
        filelabel.innerHTML=fileField.files[0].name
    }
    else{
        filelabel.innerHTML='Select file'   
    }
  })


//function for searching 
function searchProducts(){
  const input = document.getElementById('searchInput').ariaValueMax.toLowerCase();
  const products = document.querySelectorAll('.product');
  products.forEach(product=>{
    const productName = product.querySelector('h3').textContent.toLowerCase();
    if(productName.includes(input)){
      product.style.display = 'block';
    } else{
      product.style.display = 'none';
    }
  });
}