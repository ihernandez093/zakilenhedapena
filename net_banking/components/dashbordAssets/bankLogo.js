
const BankLogo = {
    render : () => {
        const view =  /*html*/`
        <div class='bankLogoWrapper'>
            <i class="fas fa-university fa-2x"></i>
            <h2>Crest Bank</h2>
        </div>
        `
        return view
    },
    after_render: async () => {}
  }
  
  export default BankLogo;
  