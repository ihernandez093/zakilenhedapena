import AccountHistory from '../clientDashboard/accountHistory.js';
import AccountNavBar from './accountNavBar.js';

const AccountDetails = {
    render : () => {
        let view =  /*html*/`
            ${AccountNavBar.render()}
            ${AccountHistory.render()}
        `
        return view
    },
    after_render: async () => {}
  }
  
  export default AccountDetails;
