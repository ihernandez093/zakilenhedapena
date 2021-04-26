const appModal = () => {
  // Get the modals
  let deactivateModal = document.getElementById('deactivateModal');
  let deleteModal = document.getElementById('deleteModal');
  let creditDebitModal = document.getElementById('creditDebitModal');

  // Get the buttons that opens the modal
  let deactivateButton = document.getElementById("deactivateBtn");
  let deleteBtn = document.getElementById("deleteButton");
  let creditDebitBtn = document.getElementById("creditDebitBtn");

  if(deactivateButton){
    deactivateButton.addEventListener('click', () => {
      deactivateModal.style.display = "block";
    })
  }
 
  if(deleteBtn){
    deleteBtn.addEventListener('click', () => {
      deleteModal.style.display = "block";
    })
  }
   
  if(creditDebitBtn){
    creditDebitBtn.addEventListener('click', () => {
      creditDebitModal.style.display = "block";
    })
  }
  
  // When the user clicks on the button, open the modal 
  // all buttons that have class close
  let closeButtons = document.querySelectorAll('.close');

  // When the user clicks on <span> (x), close the modal
  // we have a two buttons doing the work of closing the modal
  for (let node of closeButtons){
    node.addEventListener('click', () => {
      deactivateModal.style.display = "none";
      deleteModal.style.display = "none";
      creditDebitModal.style.display = "none";
    })
  }
  

  // When the user clicks anywhere outside of the modal, close it
  window.addEventListener('click', (event) => {
    if (event.target === deactivateModal) {
      deactivateModal.style.display = "none";
    }else if (event.target === deleteModal){
      deleteModal.style.display = "none";
    }else if (event.target === creditDebitModal){
      creditDebitModal.style.display = "none";
    }
  }) 
}

window.addEventListener('load', appModal);
window.addEventListener('hashchange', appModal);