import AdminBlackTheme from '../components/adminDashboard/AdminBlackTheme.js';
import NavBar from '../components/clientDashboard/navbar.js';
import ModalComponent from '../components/modal/modalComponent.js';
import CreditDebitAccount from '../components/adminDashboard/creditDebit.js';

const AdminDashboard = {
    render : async (data) => {
        const view =  /*html*/`
            <div class='dashWrapper'>
                <div class='dashBackTheme'>${AdminBlackTheme.render()}</div>
                <div class='dashLightTheme'>
                    ${ModalComponent.render('deactivateModal', 'Deactivate user account', 'Deactivate user account', 'warning')}
                    ${ModalComponent.render('deleteModal', 'Delete account', 'Delete user account')}
                    ${ModalComponent.render('creditDebitModal', 'Credit / Debit user account', CreditDebitAccount.render(), 'success')}
                    ${NavBar.render()}
                    <div class='contentArea'>
                        ${data}
                    </div>
                </div>
            </div>
        `
        return view
    },
    after_render: async () => {}
        
}

export default AdminDashboard;
