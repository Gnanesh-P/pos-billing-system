import React, { Component } from 'react'
import BillingTable from '../billing/shared/BillingTable'
import styles from './Invoice.module.scss'
import InvoiceTable from './InvoiceTable'
import Document from './Document'
import Page from './Page'
import Download from './DownloadPDF'
import { initialInvoice, initialProductLine } from './data/initialData';
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";
// import uuidv4 from 'uuid/v4'

class Invoice extends Component {



  locale = 'en-US'
  currency = 'USD'

  state = {
    taxRate: 100.00,
    lineItems: [
      {
        id: 'initial',      // react-beautiful-dnd unique key
        name: '',
        description: '',
        quantity: 0,
        price: 0.00,
      },
    ]
  }

  handleInvoiceChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  handleLineItemChange = (elementIndex) => (event) => {
    let lineItems = this.state.lineItems.map((item, i) => {
      if (elementIndex !== i) return item
      return {...item, [event.target.name]: event.target.value}
    })
    this.setState({lineItems})
  }

  handleAddLineItem = (event) => {
    this.setState({
      // use optimistic uuid for drag drop; in a production app this could be a database id
      lineItems: this.state.lineItems.concat(
        [{ id: 101, name: '', description: '', quantity: 0, price: 0.00 }]
      )
    })
  }

  handleRemoveLineItem = (elementIndex) => (event) => {
    this.setState({
      lineItems: this.state.lineItems.filter((item, i) => {
        return elementIndex !== i
      })
    })
  }

  handleReorderLineItems = (newLineItems) => {
    this.setState({
      lineItems: newLineItems,
    })
  }

  handleFocusSelect = (event) => {
    event.target.select()
  }

  handlePayButtonClick = () => {
    alert('Not implemented')
  }

  formatCurrency = (amount) => {
    return (new Intl.NumberFormat(this.locale, {
      style: 'currency',
      currency: this.currency,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(amount))
  }

  calcTaxAmount = (c) => {
    return c * (this.state.taxRate / 100)
  }

  calcLineItemsTotal = () => {
    return this.state.lineItems.reduce((prev, cur) => (prev + (cur.quantity * cur.price)), 0)
  }

  calcTaxTotal = () => {
    return this.calcLineItemsTotal() * (this.state.taxRate / 100)
  }

  calcGrandTotal = () => {
    return this.calcLineItemsTotal() + this.calcTaxTotal()
  }
 
  render = () => {
    return (
<Document pdfMode={true}>
<Page className="invoice-wrapper" pdfMode={true}>
{<Download data={initialInvoice}/>}

<div className={styles.invoice}>
        {/* <div className={styles.brand}>
          <img src="https://via.placeholder.com/150x50.png?text=logo" alt="Logo" className={styles.logo} />
        </div> */}
        <h2 style={{textAlign:"center"}}>Invoice</h2>

        <div className={styles.addresses}>
          <div className={styles.from}>
            <strong>Billing Company</strong><br />
              111 XXXX<br />
              India , Chennai &nbsp;A1B2C3<br />
              6383279328
          </div>
          <div>
            <div className={`${styles.valueTable} ${styles.to}`}>
              <div className={styles.row}>
                <div className={styles.label}>Customer #</div>
                <div className={styles.value}>123456</div>
              </div>
              <div className={styles.row}>
                <div className={styles.label}>Invoice #</div>
                <div className={styles.value}>123456</div>
              </div>
              <div className={styles.row}>
                <div className={styles.label}>Date</div>
                <div className={`${styles.value} ${styles.date}`}>2019-01-01</div>
              </div>
            </div>
          </div>
        </div>
      <InvoiceTable/>
    

        <div className={styles.totalContainer}>
          <form>
            <div className={styles.valueTable}>
              <div className={styles.row}>
              
              </div>
            </div>
          </form>
          <form>
            <div className={styles.valueTable}>
              <div className={styles.row}>
                <div className={styles.label}>Subtotal</div>
                <div className={`${styles.value} ${styles.currency}`}>{this.formatCurrency(this.calcLineItemsTotal())}</div>
              </div>
              <div className={styles.row}>
                <div className={styles.label}>Tax ({this.state.taxRate}%)</div>
                <div className={`${styles.value} ${styles.currency}`}>{this.formatCurrency(this.calcTaxTotal())}</div>
              </div>
              <div className={styles.row}>
                <div className={styles.label}>Total Due</div>
                <div className={`${styles.value} ${styles.currency}`}>{this.formatCurrency(this.calcGrandTotal())}</div>
              </div>
            </div>
          </form>
        </div>

        <div className={styles.pay}>
          <button className={styles.payNow} onClick={this.handlePayButtonClick}>Pay Now</button>
        </div>

        <div className={styles.footer}>
          <div className={styles.comments}>
            <h4>Notes</h4>
          <p>This is autogenerated pdf</p>
          </div>
          <div className={styles.closing}>
            <div>Welcome again</div>
          </div>
        </div>

      </div>
      </Page>
      </Document>

    )
  }

}

export default Invoice
