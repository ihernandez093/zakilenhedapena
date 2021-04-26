const isAdminStaffOrClient = () => {
    let email = localStorage.getItem('email');
    const adminEmail = 'admin@crest.com';
    const staffEmail = 'staff@crest.com';
    if (email === adminEmail || email === staffEmail){
        if (email === adminEmail){
            return {
                status: 'Admin',
                email: email,
            }
        }else {
            return {
                status: 'Staff',
                email: email,
            }
        }
    }else{
        return {
            status: 'Client',
            email: email,
        }
    }
}

export default isAdminStaffOrClient;
