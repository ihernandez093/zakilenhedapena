import BankLogo from '../dashbordAssets/bankLogo.js';
import ProfilePicture from '../dashbordAssets/profilePic.js';
export const BlackTheme = {
    render : () => {
        const view =  /*html*/`
            ${BankLogo.render()}

            ${ProfilePicture.render()}

            <div class='navigation'>
                <a href='#/dashboard' class='navWrapper' id='profile'>
                    <i class="far fa-user-circle fa-2x"></i>
                    <span>Profile</span>
                </a>
                <a href='#/account' class='navWrapper' id='profile'>
                    <i class="fas fa-plus fa-2x"></i>
                    <span>Account</span>
                </a>
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
  
  export default BlackTheme;
  