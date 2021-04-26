export const CreditDebitAccount = {
    render : (deactivateModal, modalHeader, modalBody) => {
        const view =  /*html*/`
        <div class='transactWrapper'>
            <form id='accountForm'>
                <div class='formGroup'>
                    <label for='status'>Transaction type</label>
                    <select id='status'>
                        <option>--select--</option>
                        <option>Credit</option>
                        <option>Debit</option>
                    </select>
                </div>
                <div class='formGroup'>
                    <label for='number'>Amount</label>
                    <input type="number" id='number' name="number" />
                </div>
            </form>
        </div>
        `
        return view
    },
    after_render: async () => {}
  }
  
  export default CreditDebitAccount;