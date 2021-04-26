
const CreateAdminStaff = {
    render : () => {
        const view =  /*html*/`
            <div class='accountFormWrapper'>
                <span>Change user type staff/admin/client</span>
                <form id='accountForm'>
                    <div class='formGroup'>
                        <label for='email'>Email</label>
                        <input type="text" id='email' name="email" />
                        <span id='firstName' class='hideError'></span>
                    </div>
                    <div class='formGroup'>
                        <label for='status'>Status</label>
                        <select id='status'>
                            <option>--select--</option>
                            <option>Admin</option>
                            <option>Staff</option>
                            <option>Client</option>
                        </select>
                    </div>
                    <a><input type="submit" class="submitButton" value='Change user type'/></a>
                </form>
            </div>
        `
        return view
    },
    after_render: async () => {}
  }
  
  export default CreateAdminStaff;
  