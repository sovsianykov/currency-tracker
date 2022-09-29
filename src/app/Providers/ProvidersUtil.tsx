import React, { FunctionComponent } from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../../store/store";


interface Props {
  children: JSX.Element[]
}


const ProvidersUtil:FunctionComponent<Props> = ({children}) => {
  return (
    <Provider store={store}>
        <BrowserRouter>
          {children}
        </BrowserRouter>
    </Provider>
  );
};

export default ProvidersUtil;
