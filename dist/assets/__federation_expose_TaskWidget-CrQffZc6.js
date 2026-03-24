import { importShared } from './__federation_fn_import-D_yqrOin.js';

const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

const {vModelText:_vModelText,withKeys:_withKeys,createElementVNode:_createElementVNode,withDirectives:_withDirectives,toDisplayString:_toDisplayString,createTextVNode:_createTextVNode,renderList:_renderList,Fragment:_Fragment,openBlock:_openBlock,createElementBlock:_createElementBlock,normalizeClass:_normalizeClass,createCommentVNode:_createCommentVNode} = await importShared('vue');


const _hoisted_1 = { class: "task-mfe" };
const _hoisted_2 = { class: "v-input-row" };
const _hoisted_3 = { class: "v-stats" };
const _hoisted_4 = { class: "task-list" };
const _hoisted_5 = ["onClick"];
const _hoisted_6 = { class: "t-label" };
const _hoisted_7 = ["onClick"];
const _hoisted_8 = {
  key: 0,
  class: "empty"
};

const {ref,computed} = await importShared('vue');



const _sfc_main = {
  __name: 'TaskWidget',
  setup(__props) {

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

return (_ctx, _cache) => {
  return (_openBlock(), _createElementBlock("div", _hoisted_1, [
    _createElementVNode("div", _hoisted_2, [
      _withDirectives(_createElementVNode("input", {
        "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => ((newTask).value = $event)),
        class: "v-input",
        placeholder: "Add a task...",
        onKeyup: _withKeys(addTask, ["enter"])
      }, null, 544), [
        [_vModelText, newTask.value]
      ]),
      _createElementVNode("button", {
        class: "v-btn",
        onClick: addTask
      }, "+ Add")
    ]),
    _createElementVNode("div", _hoisted_3, [
      _createElementVNode("span", null, [
        _createElementVNode("b", null, _toDisplayString(done.value), 1),
        _cache[1] || (_cache[1] = _createTextVNode(" done", -1))
      ]),
      _createElementVNode("span", null, [
        _createElementVNode("b", null, _toDisplayString(tasks.value.length), 1),
        _cache[2] || (_cache[2] = _createTextVNode(" total", -1))
      ])
    ]),
    _createElementVNode("div", _hoisted_4, [
      (_openBlock(true), _createElementBlock(_Fragment, null, _renderList(tasks.value, (t) => {
        return (_openBlock(), _createElementBlock("div", {
          key: t.id,
          class: _normalizeClass(["task-item", { done: t.done }])
        }, [
          _createElementVNode("div", {
            class: "t-check",
            onClick: $event => (t.done = !t.done)
          }, _toDisplayString(t.done ? "✓" : ""), 9, _hoisted_5),
          _createElementVNode("span", _hoisted_6, _toDisplayString(t.text), 1),
          _createElementVNode("span", {
            class: "t-del",
            onClick: $event => (remove(t.id))
          }, "×", 8, _hoisted_7)
        ], 2))
      }), 128)),
      (!tasks.value.length)
        ? (_openBlock(), _createElementBlock("div", _hoisted_8, "// no tasks yet"))
        : _createCommentVNode("", true)
    ])
  ]))
}
}

};
const TaskWidget = /*#__PURE__*/_export_sfc(_sfc_main, [['__scopeId',"data-v-1778c381"]]);

export { TaskWidget as default };
