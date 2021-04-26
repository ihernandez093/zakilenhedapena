import Auth from './layouts/auth.js';
import Login from './components/auth/login.js';
import SignUp from './components/auth/signup.js';
import Utils from './utils.js';
import Error404 from './components/404.js';
import ClientDashboard from './layouts/clientDashboard.js';
import AccountHistory from './components/clientDashboard/accountHistory.js';
import NewAccount from './components/clientDashboard/newAccount.js';
import AdminDashboard from './layouts/adminDashboard.js';
import AccountsList from './components/adminDashboard/accountsList.js';
import AccountDetails from './components/adminDashboard/accountDetails.js';
import CreateAdminStaff from './components/adminDashboard/admin&staff.js';
import UserAccountsList from './components/clientDashboard/userAccountsList.js';

// List of supported routes. Any url other than these routes will throw a 404 error
const routes = {
    '/'             : 'login'
    ,'/signup'       : 'signup'
    ,'/dashboard'    : 'profile'
    ,'/account'       : 'account'
    ,'/accountlist'   : 'accountList'
    ,'/createstaffadmin': 'staff&admin'
    ,'/accountdetails' : 'accountDetails'
    ,'/useraccountdetails': 'useraccountdetails'
};

const router = async () => {
    let container = document.getElementById('root');

    // Get the parsed URl from the addressbar
    let request = Utils.parseRequestURL()

    // Parse the URL and if it has an id part, change it with the string ":id"
    let parsedURL = (request.resource ? '/' + request.resource : '/') + (request.id ? '/:id' : '') + (request.verb ? '/' + request.verb : '')
    
    // Get the page from our hash of supported routes.
    // If the parsed URL is not in our list of supported routes, select the 404 page instead
    let page = routes[parsedURL] ? routes[parsedURL] : Error404

    if (page === 'login' || page === 'signup'){
        if (page === 'login'){
            container.innerHTML = await Auth.render(Login.render())
            await Auth.after_render()
            document.getElementById('lightTheme').classList.remove('lightThemeSignup');
            document.getElementById('lightTheme').classList.add('lightThemeLogin');
        }else{
            container.innerHTML = await Auth.render(SignUp.render())
            await Auth.after_render()

            document.getElementById('lightTheme').classList.remove('lightThemeLogin');
            document.getElementById('lightTheme').classList.add('lightThemeSignup');
        }

    }else if (page === 'profile' || page === 'account' || page === 'useraccountdetails') {
        if (page === 'profile'){
            container.innerHTML = await ClientDashboard.render(UserAccountsList.render())
            await ClientDashboard.after_render()
        }else if(page === 'account') {
            container.innerHTML = await ClientDashboard.render(NewAccount.render())
            await ClientDashboard.after_render()
        }else{
            container.innerHTML = await ClientDashboard.render(AccountHistory.render())
            await ClientDashboard.after_render()
        }
    }else if (page === 'accountList' || page === 'staff&admin' || page === 'accountDetails') {
        if (page === 'accountList'){
            container.innerHTML = await AdminDashboard.render(AccountsList.render())
            await AdminDashboard.after_render()
        }else if(page === 'staff&admin'){
            container.innerHTML = await AdminDashboard.render(CreateAdminStaff.render())
            await AdminDashboard.after_render()
        }else {
            container.innerHTML = await AdminDashboard.render(AccountDetails.render())
            await AdminDashboard.after_render()
        }
    }
    else {
        container.innerHTML = await page.render();
        await page.after_render();
    }
    

}
// listen onLoad
window.addEventListener('load', router);
// Listen on hash change:
window.addEventListener('hashchange', router);

