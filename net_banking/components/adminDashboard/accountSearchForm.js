export const ClientSearchForm = {
    render : () => {
        let view =  /*html*/`
        <form class="accountSearchForm">
            <input type="text" placeholder="Enter account name..." name="accountName" />
            <button type="submit" class="searchButton"><i class="fas fa-search"></i> Search</button>
        </form>
        `
        return view
    },
    after_render: async () => {}
  }
  
  export default ClientSearchForm;
  