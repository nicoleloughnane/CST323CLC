import { createApp } from "vue";
import App from "./App.vue";
import "./index.css";
import router from "./router";
import * as Sentry from "@sentry/vue";

const app = createApp(App);

app.use(router);

Sentry.init({
  app,
  dsn: "https://ab9cac46d1654e888a6617eac694c628@o4504958259036160.ingest.sentry.io/4504958260936704",
  integrations: [
    new Sentry.BrowserTracing({
      routingInstrumentation: Sentry.vueRouterInstrumentation(router),
      tracePropagationTargets: [
        "localhost",
        "https://arin-nicole-clc.herokuapp.com/",
        /^\//,
      ],
    }),
  ],
  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,
});

app.mount("#app");
