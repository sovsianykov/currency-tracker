import React, { FunctionComponent } from "react";
import { Box, Theme } from "@mui/material";
// @ts-ignore
import bg from "../../../assets/img/bg_brown.jpg";
import { makeStyles } from "@material-ui/styles";

interface PageProps {
  children?: JSX.Element | JSX.Element[];
  pageTitle?: string;
  centered?: boolean;
  background?: boolean;
  rowDirection?: boolean;
  withoutBg?:boolean;
}
interface StyleProps {
  rowDirection?: boolean;
  withoutBg?:boolean;
}

const useStyles = makeStyles<Theme, StyleProps>(() => ({
  root: {
    minHeight: "100vh",
    maxWidth: 1600,
    margin:"0 auto",
    padding: 0,
    display: "flex",
    flexDirection:  "column",
    alignItems:  "center" ,

    background: ({withoutBg})=> withoutBg ? "transparent": `url(${bg}) center center/cover`,
  },
  titleBlock: {
    margin: "0 auto",
    padding: 10,
    fontSize: 20,
    letterSpacing: ".1rem",
    fontWeight: 600,
  },
}));

const Page: FunctionComponent<PageProps> = ({
  children,
  pageTitle,
  withoutBg,
}) => {
  const stylePops = {
    withoutBg
  };
  const classes = useStyles(stylePops);

  return (
    <Box className={classes.root}>
       <Box sx={{width:"100%",height: 80}}/>
      {pageTitle && <Box className={classes.titleBlock}>{pageTitle}</Box>}
      {children}
    </Box>
  );
};

export default Page;
