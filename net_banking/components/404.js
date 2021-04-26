const Error404 = {

    render : async () => {
        const view =  /*html*/`
            <section class="wrapper404">
                <img src="https://www.dropbox.com/s/enjdoavngpv0sn0/404_2.jpeg?raw=1"/>
            </section>
        `
        return view
    }
    , after_render: async () => {
    }
}
export default Error404;