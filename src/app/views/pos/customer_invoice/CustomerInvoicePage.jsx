import React, { Fragment } from 'react'
import { Grid, Card, Button } from '@material-ui/core'
import { useTheme } from '@material-ui/styles'
import CustomerTable from './CustomerTable'

const Billing = () => {
    const theme = useTheme()

    return (
        <Fragment>
            <div className="analytics m-sm-30 mt-6">
                <Grid container spacing={3}>
                   
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <CustomerTable />
                    </Grid>
                </Grid>
            </div>
        </Fragment>
    )
}

export default Billing
