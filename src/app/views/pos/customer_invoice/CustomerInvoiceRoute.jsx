import React from 'react'
import { authRoles } from '../../../auth/authRoles'

const CustomerInvoiceRoute = [
    {
        path: '/customerinvoice',
        component: React.lazy(() => import('./CustomerInvoicePage')),
        auth: authRoles.sa,
    }
]

export default CustomerInvoiceRoute
