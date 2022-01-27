let invoices = [
    {
      name: "Santa Monica",
      number: 1995,
      amount: "$10,800",
      due: "12/05/1995"
    },
    {
      name: "Stankonia",
      number: 2000,
      amount: "$8,000",
      due: "10/31/2000"
    },
    {
      name: "Ocean Avenue",
      number: 2003,
      amount: "$9,500",
      due: "07/22/2003"
    },
    {
      name: "Tubthumper",
      number: 1997,
      amount: "$14,000",
      due: "09/01/1997"
    },
    {
      name: "Wide Open Spaces",
      number: 1998,
      amount: "$4,600",
      due: "01/27/2998"
    },
    {
        name: "Vinoteca Garganta de Lata",
        number: 1200,
        amount: "$41,000",
        due: "15/03/2019"
      },
      {
        name: "Rotisería El Pollo Viudo",
        number: 1999,
        amount: "$10,800",
        due: "09/07/2003"
      },
      {
        name: "Mi Gordo Bello Spa",
        number: 2020,
        amount: "$9,600",
        due: "09/23/2098"
      }
  ];
  
  export function getInvoices() {
    return invoices;
  }
  export function getInvoice(number){
      return invoices.find(invoice => invoice.number === number)
  }

  export function deleteInvoice(number){
    invoices = invoices.filter(invoice => invoice.number !== number)
  }