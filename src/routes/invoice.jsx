import { useParams, useNavigate } from "react-router-dom"
import { getInvoice, deleteInvoice } from "../data"
import {Button} from '../styled/Button'
export default function Invoice(){
    const navigate = useNavigate()
    const params = useParams()
    const invoice = getInvoice(parseInt(params.invoiceId))

    return (
        <main style={{ padding: "1rem" }}>
        <h2>Total Due: {invoice.amount}</h2>
        <p>
          {invoice.name}: {invoice.number}
        </p>
        <p>Due Date: {invoice.due}</p>
        
            <Button
            onClick={()=> {
                deleteInvoice(invoice.number);
                navigate("/invoices")
            }}
            >delete</Button>
        
      </main>
    )
}