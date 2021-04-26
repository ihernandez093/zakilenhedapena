
const AccountHistory = {
    render : () => {
        const view =  /*html*/`
        <div class='accountHistoryWrapper'>
            <div class='accountProfile'>
                <img src="https://www.dropbox.com/s/vbc0rkbz8qq5wyv/patrick.jpg?raw=1"/>
                <div class='profileNames'>
                    <span><b>Email:</b>dr.kimpatrick@gmail.com</span>
                    <span><b>Account NO:</b> #37746646646</span>
                </div>
            </div>
            <span class='accountHeader'>Account history</span>
            <table id="customerTable">
                <thead>
                    <tr id='theadCustomer'>
                        <th class='hideTableElement'>Transaction#</th>
                        <th class='hideTableElement'>Transaction type</th>
                        <th>Account Number</th>
                        <th>Amount</th>
                        <th>Closing Balance</th>
                        <th class='hideTableElement'>Cachier</th>
                        <th class='hideTableElement'>Date</th>
                        <th class='hideTableElement'>Time</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class='hideTableElement'>13245333</td>
                        <td class='hideTableElement'>Deposit</td>
                        <td>2345674333</td>
                        <td>120000</td>
                        <td>1300000</td>
                        <td class='hideTableElement'>Alex</td>
                        <td class='hideTableElement'>29-03-2019</td>
                        <td class='hideTableElement'>1:33 PM</td>
                    </tr>
                    <tr>
                        <td class='hideTableElement'>13245333</td>
                        <td class='hideTableElement'>Credit</td>
                        <td>2345674333</td>
                        <td>180000</td>
                        <td>1300000</td>
                        <td class='hideTableElement'>Kenedy</td>
                        <td class='hideTableElement'>29-03-2019</td>
                        <td class='hideTableElement'>1:33 PM</td>
                    </tr>
                    <tr>
                        <td class='hideTableElement'>13245333</td>
                        <td class='hideTableElement'>Deposit</td>
                        <td>2345674333</td>
                        <td>120000</td>
                        <td>1300000</td>
                        <td class='hideTableElement'>Patrick</td>
                        <td class='hideTableElement'>29-03-2019</td>
                        <td class='hideTableElement'>1:33 PM</td>
                    </tr>
                    <tr>
                        <td class='hideTableElement'>13245333</td>
                        <td class='hideTableElement'>Credit</td>
                        <td>2345674333</td>
                        <td>320000</td>
                        <td>1800000</td>
                        <td class='hideTableElement'>Andrew</td>
                        <td class='hideTableElement'>29-03-2019</td>
                        <td class='hideTableElement'>1:33 PM</td>
                    </tr>
                    <tr>
                        <td class='hideTableElement'>13245333</td>
                        <td class='hideTableElement'>Deposit</td>
                        <td>2345674333</td>
                        <td>120000</td>
                        <td>1300000</td>
                        <td class='hideTableElement'>Frank</td>
                        <td class='hideTableElement'>29-03-2019</td>
                        <td class='hideTableElement'>1:33 PM</td>
                    </tr>
                    <tr>
                        <td class='hideTableElement'>13245333</td>
                        <td class='hideTableElement'>Credit</td>
                        <td>2345674333</td>
                        <td>20000</td>
                        <td>1700000</td>
                        <td class='hideTableElement'>Patrick</td>
                        <td class='hideTableElement'>29-03-2019</td>
                        <td class='hideTableElement'>1:33 PM</td>
                    </tr> 
                </tbody>     
        </table>
        </div>
        `
        return view
    },
    after_render: async () => {}
  }
  
  export default AccountHistory;
  