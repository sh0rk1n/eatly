import React, { useState } from "react";
import { AppRouter } from "app/providers/router/AppRouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Navbar } from "widgets/Navbar";

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
    <div className="app">
      <QueryClientProvider client={client}>
        <Navbar />
        <AppRouter />
      </QueryClientProvider>
    </div>
  );
}

export default App;
