import BankLogo from '../dashbordAssets/bankLogo.js';
import ProfilePicture from '../dashbordAssets/profilePic.js';
import isAdminStaffOrClient from '../Utils.js';

const CreateAccount = {
    render : () => {
        const view = /*html*/`
            <a href='#/createstaffadmin' class='navWrapper' id='profile'>
                <i class="fas fa-plus fa-2x"></i>
                <span>Account</span>
            </a>
        `
        return view
    },
    after_render: async () => {}
}

const AdminBlackTheme = {
    render : () => {
        const view =  /*html*/`
            ${BankLogo.render()}

            ${ProfilePicture.render()}
            
            <div class='navigation'>
                <a href='#/accountList' class='navWrapper' id='profile'>
                    <i class="fas fa-users fa-2x"></i>
                    <span>Account List</span>
                </a>
                ${isAdminStaffOrClient().status === 'Admin' ? (CreateAccount.render()): ''}
                
                <a href='#/' class='navWrapper'>
                    <i class="fas fa-sign-out-alt fa-2x"></i>
                    <span>Logout</span>
                </a>
            </div>
        `
        return view
    },
    after_render: async () => {}
  }
  
  export default AdminBlackTheme;
  