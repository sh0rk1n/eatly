import React, { useState } from "react";
import { AppRouter } from "app/providers/router/AppRouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function App() {
  const [client] = useState<QueryClient>(
    new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
        },
      },
    }),
  );
  // TODO: !
  return (
    <QueryClientProvider client={client}>
      <AppRouter />
    </QueryClientProvider>
  );
}

export default App;
