import isAdminStaffOrClient from '../Utils.js';

const TransactButton = {
    render: () => {
        let view = /*html*/`
            <button id="creditDebitBtn">Credit / Debit</button>
        `
        return view
    },
    after_render: async () => {}
}

const AccountStatus = {
    render: () => {
        let view = /*html*/`
            <button id="deactivateBtn">Deactivate acount</button>
        `
        return view
    },
    after_render: async () => {}
}

const AccountNavBar = {
    render : () => {
        let view =  /*html*/`
        <div class='accountNavWrapper'>
            ${isAdminStaffOrClient().status === 'Staff' ? (TransactButton.render()): ''}
            ${isAdminStaffOrClient().status === 'Admin' ? (AccountStatus.render()): ''}
            <button id='deleteButton'>Delete account</button>
        </div>
        `
        return view
    },
    after_render: async () => {}
  }
  
  export default AccountNavBar;
