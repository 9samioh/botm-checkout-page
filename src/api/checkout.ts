// creating a fake fetch request to test the UI since I don't have a real API

interface TestResponse {
  ok: boolean;
  json: () => Promise<any>;
}

export async function testFetch(bookIds: string[]): Promise<TestResponse> {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  //   return {
  //     ok: false,
  //     json: async () => ({
  //       error: "Unable to place order. Please try again.",
  //     }),
  //   };
  return {
    ok: true,
    json: async () => ({
      orderId: `botmOrder-${bookIds.toLocaleString}-${Date.now()}`,
      estimatedShipDate: new Date(Date.now() + 7 * 86400000).toISOString(),
    }),
  };
}
