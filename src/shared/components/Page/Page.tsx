import React, { FunctionComponent } from "react";
import { Box, Container, Theme } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
// @ts-ignore
import bg from "../../../assets/img/bg_brown.jpg";

interface PageProps {
  children?: JSX.Element | JSX.Element[];
  pageTitle?: string;
  centered?: boolean;
  background?: boolean;
  rowDirection?: boolean;
  withoutBg?:boolean;
}
interface StyleProps {
  centered?: boolean;
  rowDirection?: boolean;
  withoutBg?:boolean;
}

const useStyles = makeStyles<Theme, StyleProps>((theme) => ({
  root: {
    minHeight: "100vh",
    maxWidth: 1600,
    padding: 0,
    display: "flex",
    flexDirection: (styleProps) => (styleProps.rowDirection ? "row" : "column"),
    alignItems: (styleProps) => (styleProps.centered ? "center" : "flex-start"),
    background: ({withoutBg})=> withoutBg ? "transparent": `url(${bg}) center center/cover`,
  },
  titleBlock: {
    margin: "0 auto",
    padding: theme.spacing(2),
    fontSize: 20,
    letterSpacing: ".1rem",
    fontWeight: 600,
  },
}));

const Page: FunctionComponent<PageProps> = ({
  children,
  pageTitle,
  centered,
  rowDirection,
  withoutBg,
}) => {
  const stylePops = {
    centered,
    rowDirection,
    withoutBg
  };
  const classes = useStyles(stylePops);

  return (
    <Container className={classes.root}>
       <Box sx={{width:"100%",height: 80}}/>
      {pageTitle && <Box className={classes.titleBlock}>{pageTitle}</Box>}
      {children}
    </Container>
  );
};

export default Page;