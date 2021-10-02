import React from 'react'
import { authRoles } from '../../auth/authRoles'

const InvoiceRoutes = [
    {
        path: '/invoice',
        component: React.lazy(() => import('./InvoicePage')),
        auth: authRoles.sa,
    }
]

export default InvoiceRoutes
