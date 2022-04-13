import { ThemeProvider } from "styled-components/native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useFonts } from "expo-font";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { ToastProvider } from "react-native-toast-notifications";
import { LogBox } from "react-native";

import { theme } from "./theme/theme";
import { store } from "./redux/store";

import { Navigation } from "./navigation/index";

const queryClientConfig: any = {
  defaultOptions: {
    queries: {
      retry: 2,
      staleTime: 1000 * 30, // 30 seconds
      cacheTime: 1000 * 30, //30 seconds
      refetchOnMount: "always",
      refetchOnWindowFocus: "always",
      refetchOnReconnect: "always",
      refetchInterval: 1000 * 30, //30 seconds
      refetchIntervalInBackground: false,
      suspense: false,
    },
    mutations: {
      retry: 2,
    },
  },
};

const queryClient = new QueryClient(queryClientConfig);

export default function App() {
  LogBox.ignoreLogs([
    `Warning: Each child in a list should have a unique "key" prop.`,
  ]);

  const [loaded] = useFonts({
    MontserratBold: require("./assets/fonts/Montserrat-Bold.ttf"),
    MontserratRegular: require("./assets/fonts/Montserrat-Regular.ttf"),
    MontserratLight: require("./assets/fonts/Montserrat-Light.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <ToastProvider offsetBottom={45} textStyle={{ fontSize: 15 }}>
            <ThemeProvider theme={theme}>
              <Navigation />
              <StatusBar />
            </ThemeProvider>
          </ToastProvider>
        </Provider>
      </QueryClientProvider>
    </SafeAreaProvider>
  );
}
