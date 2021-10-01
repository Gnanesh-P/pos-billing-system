import React from 'react'
import { authRoles } from '../../auth/authRoles'

const billingRoutes = [
    {
        path: '/billing',
        component: React.lazy(() => import('./Billing')),
        auth: authRoles.sa,
    }
]

export default billingRoutes
