import React from "react";
import PropTypes from "prop-types";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Icon from "@material-ui/core/Icon";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import dashboardStyle from "assets/jss/material-dashboard-pro-react/views/dashboardStyle";
import { fetchForecast } from "utils/apiWeather.jsx";

class WeatherPanel extends React.Component {
  state = {
    weather: [
      { main: { temp: " " }, weather: { icon: " " } },
      { main: { temp: " " } },
      { main: { temp: " " } },
      { main: { temp: " " } }
    ]
  };
  componentDidMount() {
    fetchForecast().then(rep => {
      this.setState({ weather: rep });
    });
  }
  render() {
    const { classes } = this.props;
    const { weather } = this.state;
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={6} md={6} lg={3}>
            <Card>
              <CardHeader color="primary" stats icon>
                <CardIcon color="primary">
                  <Icon>brightness_5</Icon>
                </CardIcon>
                <p className={classes.cardCategory}>Lunes</p>
                <h3 className={classes.cardTitle}>
                  {weather[0].main.temp}
                  <small> ºC</small>
                </h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <Icon>wb_cloudy</Icon>
                  Probabilidad de lluvia: 20%
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={6} lg={3}>
            <Card>
              <CardHeader color="primary" stats icon>
                <CardIcon color="primary">
                  <Icon>brightness_5</Icon>
                </CardIcon>
                <p className={classes.cardCategory}>Martes</p>
                <h3 className={classes.cardTitle}>
                  {weather[1].main.temp}
                  <small> ºC</small>
                </h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <Icon>wb_cloudy</Icon>
                  Probabilidad de lluvia: 20%
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={6} lg={3}>
            <Card>
              <CardHeader color="primary" stats icon>
                <CardIcon color="primary">
                  <Icon>brightness_5</Icon>
                </CardIcon>
                <p className={classes.cardCategory}>Miércoles</p>
                <h3 className={classes.cardTitle}>
                  {weather[2].main.temp}
                  <small> ºC</small>
                </h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <Icon>wb_cloudy</Icon>
                  Probabilidad de lluvia: 30%
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={6} md={6} lg={3}>
            <Card>
              <CardHeader color="primary" stats icon>
                <CardIcon color="primary">
                  <Icon>brightness_5</Icon>
                </CardIcon>
                <p className={classes.cardCategory}>Jueves</p>
                <h3 className={classes.cardTitle}>
                  {weather[3].main.temp}
                  <small> ºC</small>
                </h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <Icon>wb_cloudy</Icon>
                  Probabilidad de lluvia: 40%
                </div>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

WeatherPanel.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(WeatherPanel);