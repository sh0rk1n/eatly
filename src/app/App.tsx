import React, { useState } from "react";
import { AppRouter } from "app/providers/router/AppRouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@mui/material";
import theme from "shared/config/materialConfig/theme";
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
        <ThemeProvider theme={theme}>
          <Navbar />
          <AppRouter />
        </ThemeProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
