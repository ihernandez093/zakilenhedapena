import isAdminStaffOrClient from '../Utils.js';
import ClientSearchForm from '../adminDashboard/accountSearchForm.js';

export const NavBar = {
    render : () => {
        const view =  /*html*/`
        <div class='navBar'>
            <div>${isAdminStaffOrClient().status !== 'Client'? ClientSearchForm.render() : ''}</div>
            <div class='navProfileWrapper'>
                <img src="https://www.dropbox.com/s/vbc0rkbz8qq5wyv/patrick.jpg?raw=1"/>
                <span>${isAdminStaffOrClient().email}</span>
            </div>
        </div>
        `
        return view
    },
    after_render: async () => {}
  }
  
  export default NavBar;
  