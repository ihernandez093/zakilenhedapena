
const AccountsList = {
    render : () => {
        const view =  /*html*/`
        <div class='accountListWrapper'>
            <span class='accountListHeader'>User accounts</span>
            <table id="customerTable">
                <thead>
                    <tr>
                        <th>#</th>
                        <th class='hideTableElement'>Register Date</th>
                        <th>Account Number</th>
                        <th class='hideTableElement'>Account Name</th>
                        <th class='hideTableElement'>Phone Number</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td class='hideTableElement'>22nd/03/2019</td>
                        <td>#94846585884766</td>
                        <td class='hideTableElement'>Kimanje Patrick</td>
                        <td class='hideTableElement'>+256 750461002</td>
                        <td><a><button onclick="window.location.href='#/accountdetails'" class="submitButton accountButton"/>View</a></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td class='hideTableElement'>22nd/03/2019</td>
                        <td class='hideTableElement'>#94846585884766</td>
                        <td>Kimanje Patrick</td>
                        <td class='hideTableElement'>+256 750461002</td>
                        <td><a><button onclick="window.location.href='#/accountdetails'" class="submitButton accountButton"/>View</a></td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td class='hideTableElement'>22nd/03/2019</td>
                        <td>#94846585884766</td>
                        <td class='hideTableElement'>Kimanje Patrick</td>
                        <td class='hideTableElement'>+256 750461002</td>
                        <td><a><button onclick="window.location.href='#/accountdetails'" class="submitButton accountButton"/>View</a></td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td class='hideTableElement'>22nd/03/2019</td>
                        <td>#94846585884766</td>
                        <td class='hideTableElement'>Kimanje Patrick</td>
                        <td class='hideTableElement'>+256 750461002</td>
                        <td><a><button onclick="window.location.href='#/accountdetails'" class="submitButton accountButton"/>View</a></td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td class='hideTableElement'>22nd/03/2019</td>
                        <td>#94846585884766</td>
                        <td class='hideTableElement'>Kimanje Patrick</td>
                        <td class='hideTableElement'>+256 750461002</td>
                        <td><a><button onclick="window.location.href='#/accountdetails'" class="submitButton accountButton"/>View</a></td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td class='hideTableElement'>22nd/03/2019</td>
                        <td>#94846585884766</td>
                        <td class='hideTableElement'>Kimanje Patrick</td>
                        <td class='hideTableElement'>+256 750461002</td>
                        <td><a><button onclick="window.location.href='#/accountdetails'" class="submitButton accountButton"/>View</a></td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td class='hideTableElement'>22nd/03/2019</td>
                        <td>#94846585884766</td>
                        <td class='hideTableElement'>Kimanje Patrick</td>
                        <td class='hideTableElement'>+256 750461002</td>
                        <td><a><button onclick="window.location.href='#/accountdetails'" class="submitButton accountButton"/>View</a></td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td class='hideTableElement'>22nd/03/2019</td>
                        <td>#94846585884766</td>
                        <td class='hideTableElement'>Kimanje Patrick</td>
                        <td class='hideTableElement'>+256 750461002</td>
                        <td><a><button onclick="window.location.href='#/accountdetails'" class="submitButton accountButton"/>View</a></td>
                    </tr>
                    <tr>
                        <td>9</td>
                        <td class='hideTableElement'>22nd/03/2019</td>
                        <td>#94846585884766</td>
                        <td class='hideTableElement'>Kimanje Patrick</td>
                        <td class='hideTableElement'>+256 750461002</td>
                        <td><a><button onclick="window.location.href='#/accountdetails'" class="submitButton accountButton"/>View</a></td>
                    </tr>
                    <tr>
                        <td>10</td>
                        <td class='hideTableElement'>22nd/03/2019</td>
                        <td>#94846585884766</td>
                        <td class='hideTableElement'>Kimanje Patrick</td>
                        <td class='hideTableElement'>+256 750461002</td>
                        <td><a><button onclick="window.location.href='#/accountdetails'" class="submitButton accountButton"/>View</a></td>
                    </tr>
                    <tr>
                        <td>11</td>
                        <td class='hideTableElement'>22nd/03/2019</td>
                        <td>#94846585884766</td>
                        <td class='hideTableElement'>Kimanje Patrick</td>
                        <td class='hideTableElement'>+256 750461002</td>
                        <td><a><button onclick="window.location.href='#/accountdetails'" class="submitButton accountButton"/>View</a></td>
                    </tr>
                    
                </tbody>     
        </table>
        </div>
        `
        return view
    },
    after_render: async () => {}
  }
  
  export default AccountsList;
  