import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Currencies } from "../../interfaces/crypto";

type CryptoState = {
  currency: Currencies;
};

const initialState: CryptoState = {
  currency: Currencies.USD,
};

export const cryptoSlice = createSlice({
  name: "crypto",
  initialState,
  reducers: {
    changeCurrency: (state, action: PayloadAction<Currencies>) => {
      state.currency = action.payload;
    },
  },
});

export const { changeCurrency } = cryptoSlice.actions;

export default cryptoSlice.reducer;
