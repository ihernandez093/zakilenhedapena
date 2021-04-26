const Auth = {
    render : async (form) => {
        const view =  /*html*/`
            <div class="topWrapper">
                <div class="triangle-left"></div>
                <div class="circle"></div>
                <div class="container">
                    <div class="blackTheme">
                        <span class="bankIcon">
                        <i class="fas fa-university fa-4x"></i>
                        </span>
                        <h2>Crest Bank</h2>
                        <p>With you in every step</p>
                    </div>
                    <div id="lightTheme">${form}</div>
                    
                </div>
            </div>
        `
        return view
    },
    after_render: async () => {}
        
}

export default Auth;
