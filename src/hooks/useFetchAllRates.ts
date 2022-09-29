import { useAppDispatch, useAppSelector } from "./redux";
import { useEffect } from "react";
import { fetchCurrency } from "../store/thunks";
import { RootState } from "../store/store";


export const useFetchAllRates = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchCurrency());
  }, [dispatch]);
  const { data, isLoading } = useAppSelector(
    (state: RootState) => state.currencyReducer.rates
  );

  return {data, isLoading }
}