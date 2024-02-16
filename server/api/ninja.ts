export default defineEventHandler(async (event) => {
  //handle query params
  //const { name } = getQuery(event);

  //handle post data
  // const { age } = await readBody(event);

  // Define an interface representing the structure of the API response
  interface CurrencyApiResponse {
    data: any;
  }

  const response = await fetch(
    "https://api.currencyapi.com/v3/latest?apikey=cur_live_SRAGxJZlkY2nz3fvwgmnggSEJQeeRvzfrDJDLwOU"
  );

  // Parse the JSON response and use the defined interface
  const { data }: CurrencyApiResponse = await response.json();

  return data;
});
