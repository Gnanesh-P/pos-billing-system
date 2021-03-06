import React, { Fragment } from 'react'
import { Grid, Card } from '@material-ui/core'
import DoughnutChart from './shared/Doughnut'
import StatCards from './shared/StatCards'
import TopSellingTable from './shared/TopSellingTable'
import RowCards from './shared/RowCards'
import StatCards2 from './shared/StatCards2'
import UpgradeCard from './shared/UpgradeCard'
import Campaigns from './shared/Campaigns'
import { useTheme } from '@material-ui/styles'

const Analytics = () => {
    const theme = useTheme()

    return (
        <Fragment>
            <div className="analytics m-sm-30 mt-6">
                <Grid container spacing={3}>
                    <Grid item lg={8} md={8} sm={12} xs={12}>
                        <StatCards />
                        <StatCards2 />

                        {/* Top Selling Products */}


                        {/* <h4 className="card-title text-muted mb-4">
                            Ongoing Projects
                        </h4>
                        <RowCards /> */}
                    </Grid>

                    <Grid item lg={4} md={4} sm={12} xs={12}>
                        <Card className="px-6 py-4 mb-6">
                            <div className="card-title">Top selling Products</div>
                            <div className="card-subtitle">Last 30 days</div>
                            <DoughnutChart
                                height="300px"
                                color={[
                                    theme.palette.primary.dark,
                                    theme.palette.primary.main,
                                    theme.palette.primary.light,
                                ]}
                            />
                        </Card>

                    </Grid>
                    <Grid item lg={12} md={12} sm={12} xs={12}>
                        <TopSellingTable />
                    </Grid>
                </Grid>
            </div>
        </Fragment>
    )
}

export default Analytics
