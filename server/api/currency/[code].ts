interface CurrencyApiResponse {
  data: any;
}

export default defineEventHandler(async (event) => {
  const { code }: { code?: string } = event.context.params ?? {};

  const { currencyKey } = useRuntimeConfig();

  const uri: string = `https://api.currencyapi.com/v3/latest?currencies=${code}&apikey=${currencyKey}`;

  const response = await fetch(uri);
  const { data }: CurrencyApiResponse = await response.json();

  return data;
});
