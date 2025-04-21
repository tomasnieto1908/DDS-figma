document.addEventListener('DOMContentLoaded', function() {
    // Manejo del formulario de contacto
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
      const inputs = contactForm.querySelectorAll('input, textarea');
      const clearButtons = contactForm.querySelectorAll('.clear-button');
      
      // Mostrar/ocultar botones de limpiar
      inputs.forEach(input => {
        input.addEventListener('input', function() {
          const clearButton = this.parentElement.querySelector('.clear-button');
          if (this.value.length > 0) {
            clearButton.style.display = 'block';
          } else {
            clearButton.style.display = 'none';
          }
        });
      });
      
      // Funcionalidad de los botones de limpiar
      clearButtons.forEach(button => {
        button.addEventListener('click', function() {
          const inputId = this.getAttribute('data-input');
          const input = document.getElementById(inputId);
          input.value = '';
          this.style.display = 'none';
        });
      });
      
      // Envío del formulario
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = {
          nombre: document.getElementById('nombre').value,
          email: document.getElementById('email').value,
          mensaje: document.getElementById('mensaje').value
        };
        
        console.log('Datos del formulario:', formData);
        
        // Aquí iría el código para enviar los datos a un servidor
        alert('Formulario enviado con éxito');
        
        // Limpiar formulario
        contactForm.reset();
        clearButtons.forEach(button => {
          button.style.display = 'none';
        });
      });
    }
    
    // Botones de comprar
    const buyButtons = document.querySelectorAll('.btn-comprar');
    buyButtons.forEach(button => {
      button.addEventListener('click', function() {
        const productName = this.closest('.product-item').querySelector('.product-info:first-child p:last-child').textContent;
        alert(`Has añadido "${productName}" al carrito`);
      });
    });
  });