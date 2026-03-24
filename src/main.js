// Local dev preview only — the shell imports TaskWidget directly via Module Federation
import { createApp } from "vue";
import TaskWidget from "./TaskWidget.vue";
createApp(TaskWidget).mount("#app");
