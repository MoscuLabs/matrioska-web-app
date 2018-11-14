import React from "react";
import PropTypes from "prop-types";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import EvStation from "@material-ui/icons/EvStation";
import Info from "@material-ui/icons/Info";
import Security from "@material-ui/icons/Security";
import Gavel from "@material-ui/icons/Gavel";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import NavPills from "components/NavPills/NavPills.jsx";

import dashboardStyle from "assets/jss/material-dashboard-pro-react/views/dashboardStyle";
import { Timeline } from 'react-twitter-widgets'

class Boards extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <NavPills
              color="warning"
              alignCenter
              tabs={[
                {
                  tabButton: "Avisos Generales",
                  tabIcon: Info,
                  tabContent: (
                    <Card>
                      <CardHeader>
                        <h4 className={classes.cardTitle}>
                          Últimas noticias en Zapopan
                        </h4>
                        <p className={classes.cardCategory}>
                          (...)
                        </p>
                      </CardHeader>
                      <Timeline
                            dataSource={{
                              sourceType: 'profile',
                              screenName: 'PoliciaZapopan'
                            }}
                            options={{
                              username: 'PoliciaZapopan',
                              height: '400'
                            }}
                            onLoad={() => console.log('Timeline is loaded!')}
                        />
                    </Card>
                  )
                },
                {
                  tabButton: "Policía",
                  tabIcon: Security,
                  tabContent: (
                    <Card>
                      <CardHeader>
                        <h4 className={classes.cardTitle}>
                          Location of the product
                        </h4>
                        <p className={classes.cardCategory}>
                          More information here
                        </p>
                      </CardHeader>
                      <CardBody>
                        Efficiently unleash cross-media information without
                        cross-media value. Quickly maximize timely deliverables
                        for real-time schemas.
                        <br />
                        <br />
                        Dramatically maintain clicks-and-mortar solutions
                        without functional solutions.
                      </CardBody>
                    </Card>
                  )
                },
                {
                  tabButton: "Servicios Públicos",
                  tabIcon: EvStation,
                  tabContent: (
                    <Card>
                      <CardHeader>
                        <h4 className={classes.cardTitle}>
                          Legal info of the product
                        </h4>
                        <p className={classes.cardCategory}>
                          More information here
                        </p>
                      </CardHeader>
                      <CardBody>
                        Completely synergize resource taxing relationships via
                        premier niche markets. Professionally cultivate
                        one-to-one customer service with robust ideas.
                        <br />
                        <br />
                        Dynamically innovate resource-leveling customer service
                        for state of the art customer service.
                      </CardBody>
                    </Card>
                  )
                },
                {
                  tabButton: "Gobierno",
                  tabIcon: Gavel,
                  tabContent: (
                    <Card>
                      <CardHeader>
                        <h4 className={classes.cardTitle}>Help center</h4>
                        <p className={classes.cardCategory}>
                          More information here
                        </p>
                      </CardHeader>
                      <CardBody>
                        From the seamless transition of glass and metal to the
                        streamlined profile, every detail was carefully
                        considered to enhance your experience. So while its
                        display is larger, the phone feels just right.
                        <br />
                        <br />
                        Another Text. The first thing you notice when you hold
                        the phone is how great it feels in your hand. The cover
                        glass curves down around the sides to meet the anodized
                        aluminum enclosure in a remarkable, simplified design.
                      </CardBody>
                    </Card>
                  )
                }
              ]}
            />
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

Boards.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Boards);