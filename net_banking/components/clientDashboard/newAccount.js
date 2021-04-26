
export const NewAccount = {
    render : () => {
        const view =  /*html*/`
            <div class='accountFormWrapper clientAccountFormWrapper'>
                <span>Create a bank account</span>
                <form id='accountForm'>
                    <div class='formGroup'>
                        <label for='type'>Account type</label>
                        <select id='type'>
                            <option>--select--</option>
                            <option id='current'>Current</option>
                            <option id='savings'>Savings</option>
                        </select>
                    </div>
                    <a><input type="submit" class="submitButton" value='Create Account'/></a>
                </form>
            </div>
        `
        return view
    },
    after_render: async () => {}
  }
  
  export default NewAccount;
  