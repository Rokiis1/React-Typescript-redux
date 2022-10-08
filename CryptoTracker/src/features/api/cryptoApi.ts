import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { BitcoinData } from "../../interfaces/crypto";

const BASE_URL = "https://blockchain.info" as string;

export const bitcoinApi = createApi({
  reducerPath: "bitcoinApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getBitcoinData: builder.query<BitcoinData, undefined>({
      query: () => "/ticker",
    }),
  }),
});

export const { useGetBitcoinDataQuery } = bitcoinApi;
