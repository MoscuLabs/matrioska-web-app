/* eslint-disable */
import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import Security from "@material-ui/icons/Security";
import Home from "@material-ui/icons/Home";
import Storage from "@material-ui/icons/Storage";

// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import SnackbarContent from "components/Snackbar/SnackbarContent.jsx";
import Snackbar from "components/Snackbar/Snackbar.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
Storage
const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0",
      fontWeight: "bold",
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  },
  Beige: {
    color: "#F3E9CB",
  }
};

class Votar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tl: false,
      tc: false,
      tr: false,
      bl: false,
      bc: false,
      br: false
    };
  }
  // to stop the warning of calling setState of unmounted component
  componentWillUnmount() {
    var id = window.setTimeout(null, 0);
    while (id--) {
      window.clearTimeout(id);
    }
  }
  showNotification(place) {
    var x = [];
    x[place] = true;
    this.setState(x);
    this.alertTimeout = setTimeout(
      function() {
        x[place] = false;
        this.setState(x);
      }.bind(this),
      6000
    );
  }
  render() {
    const { classes } = this.props;
    return (
      <Card>
        <CardHeader color="primary">
          <h4 className={classes.cardTitleWhite}>Categorías de Propuestas</h4>
          <p className={classes.cardCategoryWhite}>
              Selecciona una categoría en la cual votar.
          </p>
        </CardHeader>
        <CardBody>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <center>
              <br />
              <SnackbarContent
                message={"Comunidad"}
                icon={Home}
              />
              <SnackbarContent
                message={"Seguridad"}
                icon={Security}
              />
              <SnackbarContent 
                message={
                  "Administración"
                }
                icon={Storage}
              />
              </center>
            </GridItem>

          </GridContainer>
          <br />
          <br />

          {/* <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={6} style={{ textAlign: "center" }}>
              <h5>
                Notifications Places
                <small>Click to view notifications</small>
              </h5>
            </GridItem>
          </GridContainer>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={10} lg={8}>
              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <Button
                    fullWidth
                    color="primary"
                    onClick={() => this.showNotification("tl")}
                  >
                    Top Left
                  </Button>
                  <Snackbar
                    place="tl"
                    color="info"
                    icon={AddAlert}
                    message="Welcome to MATERIAL DASHBOARD React - a beautiful freebie for every web developer."
                    open={this.state.tl}
                    closeNotification={() => this.setState({ tl: false })}
                    close
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <Button
                    fullWidth
                    color="primary"
                    onClick={() => this.showNotification("tc")}
                  >
                    Top Center
                  </Button>
                  <Snackbar
                    place="tc"
                    color="info"
                    icon={AddAlert}
                    message="Welcome to MATERIAL DASHBOARD React - a beautiful freebie for every web developer."
                    open={this.state.tc}
                    closeNotification={() => this.setState({ tc: false })}
                    close
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <Button
                    fullWidth
                    color="primary"
                    onClick={() => this.showNotification("tr")}
                  >
                    Top Right
                  </Button>
                  <Snackbar
                    place="tr"
                    color="info"
                    icon={AddAlert}
                    message="Welcome to MATERIAL DASHBOARD React - a beautiful freebie for every web developer."
                    open={this.state.tr}
                    closeNotification={() => this.setState({ tr: false })}
                    close
                  />
                </GridItem>
              </GridContainer>
            </GridItem>
          </GridContainer>
          <GridContainer justify={"center"}>
            <GridItem xs={12} sm={12} md={10} lg={8}>
              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <Button
                    fullWidth
                    color="primary"
                    onClick={() => this.showNotification("bl")}
                  >
                    Bottom Left
                  </Button>
                  <Snackbar
                    place="bl"
                    color="info"
                    icon={AddAlert}
                    message="Welcome to MATERIAL DASHBOARD React - a beautiful freebie for every web developer."
                    open={this.state.bl}
                    closeNotification={() => this.setState({ bl: false })}
                    close
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <Button
                    fullWidth
                    color="primary"
                    onClick={() => this.showNotification("bc")}
                  >
                    Bottom Center
                  </Button>
                  <Snackbar
                    place="bc"
                    color="info"
                    icon={AddAlert}
                    message="Welcome to MATERIAL DASHBOARD React - a beautiful freebie for every web developer."
                    open={this.state.bc}
                    closeNotification={() => this.setState({ bc: false })}
                    close
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <Button
                    fullWidth
                    color="primary"
                    onClick={() => this.showNotification("br")}
                  >
                    Bottom Right
                  </Button>
                  <Snackbar
                    place="br"
                    color="info"
                    icon={AddAlert}
                    message="Welcome to MATERIAL DASHBOARD React - a beautiful freebie for every web developer."
                    open={this.state.br}
                    closeNotification={() => this.setState({ br: false })}
                    close
                  />
                </GridItem>
              </GridContainer>
            </GridItem>
          </GridContainer> */}
        </CardBody>
      </Card>
    );
  }
}

export default withStyles(styles)(Votar);
