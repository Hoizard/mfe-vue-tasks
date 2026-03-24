<template>
  <div class="task-mfe">
    <div class="v-input-row">
      <input
        v-model="newTask"
        class="v-input"
        placeholder="Add a task..."
        @keyup.enter="addTask"
      />
      <button class="v-btn" @click="addTask">+ Add</button>
    </div>

    <div class="v-stats">
      <span
        ><b>{{ done }}</b> done</span
      >
      <span
        ><b>{{ tasks.length }}</b> total</span
      >
    </div>

    <div class="task-list">
      <div
        v-for="t in tasks"
        :key="t.id"
        class="task-item"
        :class="{ done: t.done }"
      >
        <div class="t-check" @click="t.done = !t.done">
          {{ t.done ? "✓" : "" }}
        </div>
        <span class="t-label">{{ t.text }}</span>
        <span class="t-del" @click="remove(t.id)">×</span>
      </div>
      <div v-if="!tasks.length" class="empty">// no tasks yet</div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const newTask = ref("");
const tasks = ref([
  { id: 1, text: "Deploy to AWS with Docker", done: false },
  { id: 2, text: "Set up GitHub Actions CI/CD", done: true },
  { id: 3, text: "Add Prometheus monitoring", done: false },
]);
let nextId = 4;

const done = computed(() => tasks.value.filter((t) => t.done).length);

function addTask() {
  const text = newTask.value.trim();
  if (!text) return;
  tasks.value.unshift({ id: nextId++, text, done: false });
  newTask.value = "";
}

function remove(id) {
  tasks.value = tasks.value.filter((t) => t.id !== id);
}
</script>

<style scoped>
.task-mfe {
  font-family: "DM Sans", sans-serif;
}
.v-input-row {
  display: flex;
  gap: 6px;
  margin-bottom: 10px;
}
.v-input {
  flex: 1;
  padding: 7px 10px;
  border-radius: 6px;
  border: 1px solid #e8e6e0;
  font-size: 13px;
  background: #fafaf8;
  outline: none;
}
.v-input:focus {
  border-color: #42b883;
}
.v-btn {
  padding: 7px 12px;
  border-radius: 6px;
  cursor: pointer;
  background: rgba(66, 184, 131, 0.1);
  color: #2d8a5e;
  border: 1px solid rgba(66, 184, 131, 0.3);
  font-size: 12px;
  font-weight: 500;
  white-space: nowrap;
}
.v-btn:hover {
  background: rgba(66, 184, 131, 0.2);
}
.v-stats {
  font-size: 12px;
  color: #7a7870;
  margin-bottom: 8px;
  display: flex;
  gap: 12px;
}
.v-stats b {
  color: #42b883;
}
.task-list {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.task-item {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 7px 10px;
  border-radius: 6px;
  border: 1px solid #f0ede8;
  background: #fafaf8;
  font-size: 13px;
  animation: fadeIn 0.2s ease;
}
.task-item.done {
  opacity: 0.4;
}
.task-item.done .t-label {
  text-decoration: line-through;
}
.t-check {
  width: 14px;
  height: 14px;
  border-radius: 3px;
  border: 1px solid rgba(66, 184, 131, 0.5);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 9px;
  color: #42b883;
  flex-shrink: 0;
}
.task-item.done .t-check {
  background: rgba(66, 184, 131, 0.15);
}
.t-label {
  flex: 1;
}
.t-del {
  color: #b0ada6;
  cursor: pointer;
  font-size: 16px;
  padding: 0 2px;
}
.t-del:hover {
  color: #dd0031;
}
.empty {
  font-size: 12px;
  color: #b0ada6;
  text-align: center;
  padding: 1rem 0;
}
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-4px);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
</style>
