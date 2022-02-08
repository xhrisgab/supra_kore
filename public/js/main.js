
function deleteArticle(x){
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
            fetch('/view/'+x ,{method: 'DELETE'})
                .then((respuesta)=>{
                    console.log(respuesta);
                })
                .catch(err=>{console.log(err);})
            Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
            ).then(result =>{
                if(result.isConfirmed){
                    window.location.href='/view';
                }
            })
        }
      })
};
/*
function articleAdded(){
  var valor = document.getElementById("validationCustom01").value;
  Swal.fire({
    icon: 'success',
    title: 'The Article '+valor+'has been added!',
  })
}*/

(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })();