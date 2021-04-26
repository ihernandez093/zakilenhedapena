export const ModalComponent = {
    render : (deactivateModal, modalHeader, modalBody, color='danger') => {
        const view =  /*html*/`
        <!-- The Modal -->
        <div id=${deactivateModal} class="modal">
            <!-- Modal content -->
            <div class="modal-content">
                <div class="modal-header">
                    <span class="close" id='x'>&times;</span>
                    <h2>${modalHeader}</h2>
                </div>
                <div class="modal-body">
                    <p>${modalBody}</p>
                </div>
                <div class="modal-footer">
                    <button class='modalButton ${color}'>Confirm</button>
                    <button class='close modalButton closeButton'>Close</button>
                </div>
            </div>
        </div>
        `
        return view
    },
    after_render: async () => {}
  }
  
  export default ModalComponent;