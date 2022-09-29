import React from "react";
import Page from "../../shared/components/Page/Page";
import CurrencyTable from "./CurrencyTable/CurrencyTable";

const Rates = () => {
  return (
    <Page pageTitle='Current Currency Rates'>
      <CurrencyTable/>
    </Page>
  );
};

export default Rates;