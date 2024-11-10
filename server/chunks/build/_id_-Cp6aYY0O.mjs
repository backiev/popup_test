import { useSSRContext, defineComponent, mergeProps, withCtx, createTextVNode, toDisplayString, unref, createVNode, openBlock, createBlock, Fragment, renderList, withAsyncContext, ref, createCommentVNode, computed, toValue, reactive, shallowRef, toRef, getCurrentInstance, onServerPrefetch } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderSlot, ssrRenderList, ssrRenderComponent, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _export_sfc, b as useRoute, f as fetchDefaults, d as useRuntimeConfig, n as navigateTo, u as useNuxtApp, a as asyncDataDefaults, c as createError } from './server.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-DI3ShbbE.mjs';
import { x as hash } from '../_/nitro.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:url';
import 'node:path';

const _imports_0$1 = "data:image/svg+xml,%3csvg%20width='36'%20height='36'%20viewBox='0%200%2036%2036'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M34%202L2%2034M2%202L34%2034'%20stroke='%23F3F3F3'%20stroke-width='3'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e";
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "Popup",
  __ssrInlineRender: true,
  props: {
    status: {},
    visible: { type: Boolean }
  },
  emits: ["closePopup", "endTransition"],
  setup(__props, { emit: __emit }) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["popup-wrapper", { "is-visible": _ctx.visible }]
      }, _attrs))}><div class="popup"><div class="popup-close"><img${ssrRenderAttr("src", _imports_0$1)} alt="\u041A\u043D\u043E\u043F\u043A\u0430 \u0437\u0430\u043A\u0440\u044B\u0442\u0438\u044F"></div><div class="popup-container">`);
      if (_ctx.status === "success") {
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      } else {
        _push(`<!---->`);
      }
      if (_ctx.status === "error") {
        _push(`<div>404 not found</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Popup.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "link",
  __ssrInlineRender: true,
  props: {
    href: {},
    active: { type: Boolean }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<a${ssrRenderAttrs(mergeProps({
        href: _ctx.href ? _ctx.href : "#",
        class: ["link", { active: _ctx.active }]
      }, _attrs))} data-v-6eb6ee8d>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</a>`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/link.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["__scopeId", "data-v-6eb6ee8d"]]);
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Breadcrumbs",
  __ssrInlineRender: true,
  props: {
    breadCrumbs: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UiLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "breadcrumbs" }, _attrs))}><!--[-->`);
      ssrRenderList(_ctx.breadCrumbs, (item) => {
        _push(`<div class="breadcrumbs-item">`);
        _push(ssrRenderComponent(_component_UiLink, {
          active: item.active
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(item.title)}`);
            } else {
              return [
                createTextVNode(toDisplayString(item.title), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Breadcrumbs.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "pin",
  __ssrInlineRender: true,
  props: {
    color: {},
    icon: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["pin", { red: _ctx.color === "red", blue: _ctx.color === "blue" }]
      }, _attrs))} data-v-e1e7dee2><div class="pin-icon" data-v-e1e7dee2></div><div class="pin-title" data-v-e1e7dee2>`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/pin.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-e1e7dee2"]]);
const _imports_0 = "data:image/svg+xml,%3csvg%20width='22'%20height='14'%20viewBox='0%200%2022%2014'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M0.825717%206.98084L20.7801%206.98084M20.7801%206.98084L14.536%2012.9617M20.7801%206.98084L14.5851%201'%20stroke='%23CA2250'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e";
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "NewsBlock",
  __ssrInlineRender: true,
  props: {
    nextNews: {}
  },
  setup(__props) {
    var _a;
    const props = __props;
    const newsPins = (_a = props.nextNews) == null ? void 0 : _a.tags;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_UiPin = __nuxt_component_2;
      _push(ssrRenderComponent(_component_NuxtLink, mergeProps({
        to: { name: "news-id", params: { id: _ctx.nextNews.code } },
        class: "block-wrapper"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="block" data-v-498d44ca${_scopeId}><div class="block-img" data-v-498d44ca${_scopeId}><div class="block-img-date" data-v-498d44ca${_scopeId}><span data-v-498d44ca${_scopeId}>${ssrInterpolate(_ctx.nextNews.date.split("-").join("."))}</span></div><div class="block-img-bg" style="${ssrRenderStyle({ backgroundImage: `url(${_ctx.nextNews.picture})` })}" data-v-498d44ca${_scopeId}></div></div><div class="block-content" data-v-498d44ca${_scopeId}><div class="block-title title" data-v-498d44ca${_scopeId}>${ssrInterpolate(_ctx.nextNews.title)}</div><div class="block-pins" data-v-498d44ca${_scopeId}><!--[-->`);
            ssrRenderList(unref(newsPins), (pin) => {
              _push2(ssrRenderComponent(_component_UiPin, {
                color: pin.values[0].color,
                icon: pin.values[0].src ? pin.values[0].src : ""
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(pin.values[0].name)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(pin.values[0].name), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></div></div></div><div class="block-arrow" data-v-498d44ca${_scopeId}><img${ssrRenderAttr("src", _imports_0)} alt="" data-v-498d44ca${_scopeId}></div>`);
          } else {
            return [
              createVNode("div", { class: "block" }, [
                createVNode("div", { class: "block-img" }, [
                  createVNode("div", { class: "block-img-date" }, [
                    createVNode("span", null, toDisplayString(_ctx.nextNews.date.split("-").join(".")), 1)
                  ]),
                  createVNode("div", {
                    class: "block-img-bg",
                    style: { backgroundImage: `url(${_ctx.nextNews.picture})` }
                  }, null, 4)
                ]),
                createVNode("div", { class: "block-content" }, [
                  createVNode("div", { class: "block-title title" }, toDisplayString(_ctx.nextNews.title), 1),
                  createVNode("div", { class: "block-pins" }, [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(newsPins), (pin) => {
                      return openBlock(), createBlock(_component_UiPin, {
                        color: pin.values[0].color,
                        icon: pin.values[0].src ? pin.values[0].src : ""
                      }, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(pin.values[0].name), 1)
                        ]),
                        _: 2
                      }, 1032, ["color", "icon"]);
                    }), 256))
                  ])
                ])
              ]),
              createVNode("div", { class: "block-arrow" }, [
                createVNode("img", {
                  src: _imports_0,
                  alt: ""
                })
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/NewsBlock.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-498d44ca"]]);
function useRequestEvent(nuxtApp = useNuxtApp()) {
  var _a;
  return (_a = nuxtApp.ssrContext) == null ? void 0 : _a.event;
}
function useRequestFetch() {
  var _a;
  return ((_a = useRequestEvent()) == null ? void 0 : _a.$fetch) || globalThis.$fetch;
}
const isDefer = (dedupe) => dedupe === "defer" || dedupe === false;
function useAsyncData(...args) {
  var _a2, _b2, _c, _d, _e, _f, _g, _h;
  var _b;
  const autoKey = typeof args[args.length - 1] === "string" ? args.pop() : void 0;
  if (typeof args[0] !== "string") {
    args.unshift(autoKey);
  }
  let [key, _handler, options = {}] = args;
  if (typeof key !== "string") {
    throw new TypeError("[nuxt] [asyncData] key must be a string.");
  }
  if (typeof _handler !== "function") {
    throw new TypeError("[nuxt] [asyncData] handler must be a function.");
  }
  const nuxtApp = useNuxtApp();
  const handler = _handler ;
  const getDefault = () => asyncDataDefaults.value;
  const getDefaultCachedData = () => nuxtApp.isHydrating ? nuxtApp.payload.data[key] : nuxtApp.static.data[key];
  options.server = (_a2 = options.server) != null ? _a2 : true;
  options.default = (_b2 = options.default) != null ? _b2 : getDefault;
  options.getCachedData = (_c = options.getCachedData) != null ? _c : getDefaultCachedData;
  options.lazy = (_d = options.lazy) != null ? _d : false;
  options.immediate = (_e = options.immediate) != null ? _e : true;
  options.deep = (_f = options.deep) != null ? _f : asyncDataDefaults.deep;
  options.dedupe = (_g = options.dedupe) != null ? _g : "cancel";
  const initialCachedData = options.getCachedData(key, nuxtApp);
  const hasCachedData = initialCachedData != null;
  if (!nuxtApp._asyncData[key] || !options.immediate) {
    (_h = (_b = nuxtApp.payload._errors)[key]) != null ? _h : _b[key] = asyncDataDefaults.errorValue;
    const _ref = options.deep ? ref : shallowRef;
    nuxtApp._asyncData[key] = {
      data: _ref(hasCachedData ? initialCachedData : options.default()),
      pending: ref(!hasCachedData),
      error: toRef(nuxtApp.payload._errors, key),
      status: ref("idle"),
      _default: options.default
    };
  }
  const asyncData = { ...nuxtApp._asyncData[key] };
  delete asyncData._default;
  asyncData.refresh = asyncData.execute = (opts = {}) => {
    var _a3;
    if (nuxtApp._asyncDataPromises[key]) {
      if (isDefer((_a3 = opts.dedupe) != null ? _a3 : options.dedupe)) {
        return nuxtApp._asyncDataPromises[key];
      }
      nuxtApp._asyncDataPromises[key].cancelled = true;
    }
    if (opts._initial || nuxtApp.isHydrating && opts._initial !== false) {
      const cachedData = opts._initial ? initialCachedData : options.getCachedData(key, nuxtApp);
      if (cachedData != null) {
        return Promise.resolve(cachedData);
      }
    }
    asyncData.pending.value = true;
    asyncData.status.value = "pending";
    const promise = new Promise(
      (resolve, reject) => {
        try {
          resolve(handler(nuxtApp));
        } catch (err) {
          reject(err);
        }
      }
    ).then(async (_result) => {
      if (promise.cancelled) {
        return nuxtApp._asyncDataPromises[key];
      }
      let result = _result;
      if (options.transform) {
        result = await options.transform(_result);
      }
      if (options.pick) {
        result = pick(result, options.pick);
      }
      nuxtApp.payload.data[key] = result;
      asyncData.data.value = result;
      asyncData.error.value = asyncDataDefaults.errorValue;
      asyncData.status.value = "success";
    }).catch((error) => {
      if (promise.cancelled) {
        return nuxtApp._asyncDataPromises[key];
      }
      asyncData.error.value = createError(error);
      asyncData.data.value = unref(options.default());
      asyncData.status.value = "error";
    }).finally(() => {
      if (promise.cancelled) {
        return;
      }
      asyncData.pending.value = false;
      delete nuxtApp._asyncDataPromises[key];
    });
    nuxtApp._asyncDataPromises[key] = promise;
    return nuxtApp._asyncDataPromises[key];
  };
  asyncData.clear = () => clearNuxtDataByKey(nuxtApp, key);
  const initialFetch = () => asyncData.refresh({ _initial: true });
  const fetchOnServer = options.server !== false && nuxtApp.payload.serverRendered;
  if (fetchOnServer && options.immediate) {
    const promise = initialFetch();
    if (getCurrentInstance()) {
      onServerPrefetch(() => promise);
    } else {
      nuxtApp.hook("app:created", async () => {
        await promise;
      });
    }
  }
  const asyncDataPromise = Promise.resolve(nuxtApp._asyncDataPromises[key]).then(() => asyncData);
  Object.assign(asyncDataPromise, asyncData);
  return asyncDataPromise;
}
function clearNuxtDataByKey(nuxtApp, key) {
  if (key in nuxtApp.payload.data) {
    nuxtApp.payload.data[key] = void 0;
  }
  if (key in nuxtApp.payload._errors) {
    nuxtApp.payload._errors[key] = asyncDataDefaults.errorValue;
  }
  if (nuxtApp._asyncData[key]) {
    nuxtApp._asyncData[key].data.value = void 0;
    nuxtApp._asyncData[key].error.value = asyncDataDefaults.errorValue;
    nuxtApp._asyncData[key].pending.value = false;
    nuxtApp._asyncData[key].status.value = "idle";
  }
  if (key in nuxtApp._asyncDataPromises) {
    if (nuxtApp._asyncDataPromises[key]) {
      nuxtApp._asyncDataPromises[key].cancelled = true;
    }
    nuxtApp._asyncDataPromises[key] = void 0;
  }
}
function pick(obj, keys) {
  const newObj = {};
  for (const key of keys) {
    newObj[key] = obj[key];
  }
  return newObj;
}
function useFetch(request, arg1, arg2) {
  const [opts = {}, autoKey] = [{}, arg1];
  const _request = computed(() => toValue(request));
  const _key = opts.key || hash([autoKey, typeof _request.value === "string" ? _request.value : "", ...generateOptionSegments(opts)]);
  if (!_key || typeof _key !== "string") {
    throw new TypeError("[nuxt] [useFetch] key must be a string: " + _key);
  }
  if (!request) {
    throw new Error("[nuxt] [useFetch] request is missing.");
  }
  const key = _key === autoKey ? "$f" + _key : _key;
  if (!opts.baseURL && typeof _request.value === "string" && (_request.value[0] === "/" && _request.value[1] === "/")) {
    throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');
  }
  const {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick: pick2,
    watch,
    immediate,
    getCachedData,
    deep,
    dedupe,
    ...fetchOptions
  } = opts;
  const _fetchOptions = reactive({
    ...fetchDefaults,
    ...fetchOptions,
    cache: typeof opts.cache === "boolean" ? void 0 : opts.cache
  });
  const _asyncDataOptions = {
    server,
    lazy,
    default: defaultFn,
    transform,
    pick: pick2,
    immediate,
    getCachedData,
    deep,
    dedupe,
    watch: watch === false ? [] : [_fetchOptions, _request, ...watch || []]
  };
  let controller;
  const asyncData = useAsyncData(key, () => {
    var _a;
    (_a = controller == null ? void 0 : controller.abort) == null ? void 0 : _a.call(controller, new DOMException("Request aborted as another request to the same endpoint was initiated.", "AbortError"));
    controller = typeof AbortController !== "undefined" ? new AbortController() : {};
    const timeoutLength = toValue(opts.timeout);
    let timeoutId;
    if (timeoutLength) {
      timeoutId = setTimeout(() => controller.abort(new DOMException("Request aborted due to timeout.", "AbortError")), timeoutLength);
      controller.signal.onabort = () => clearTimeout(timeoutId);
    }
    let _$fetch = opts.$fetch || globalThis.$fetch;
    if (!opts.$fetch) {
      const isLocalFetch = typeof _request.value === "string" && _request.value[0] === "/" && (!toValue(opts.baseURL) || toValue(opts.baseURL)[0] === "/");
      if (isLocalFetch) {
        _$fetch = useRequestFetch();
      }
    }
    return _$fetch(_request.value, { signal: controller.signal, ..._fetchOptions }).finally(() => {
      clearTimeout(timeoutId);
    });
  }, _asyncDataOptions);
  return asyncData;
}
function generateOptionSegments(opts) {
  var _a;
  const segments = [
    ((_a = toValue(opts.method)) == null ? void 0 : _a.toUpperCase()) || "GET",
    toValue(opts.baseURL)
  ];
  for (const _obj of [opts.params || opts.query]) {
    const obj = toValue(_obj);
    if (!obj) {
      continue;
    }
    const unwrapped = {};
    for (const [key, value] of Object.entries(obj)) {
      unwrapped[toValue(key)] = toValue(value);
    }
    segments.push(unwrapped);
  }
  return segments;
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[id]",
  __ssrInlineRender: true,
  async setup(__props) {
    var _a;
    let __temp, __restore;
    const route = useRoute();
    const config = useRuntimeConfig();
    const { data, status, error, refresh } = ([__temp, __restore] = withAsyncContext(() => useFetch(`${config.public.api_news}/${route.params.id}`, "$8trGHJDeE0")), __temp = await __temp, __restore(), __temp);
    const news = (_a = data.value) == null ? void 0 : _a.data.result;
    const nextNews = news == null ? void 0 : news.next;
    const newsPins = news == null ? void 0 : news.tags;
    const isVisible = ref(false);
    let isClosing = false;
    const breadCrumbs = [
      {
        id: 0,
        title: "\u0413\u043B\u0430\u0432\u043D\u0430\u044F",
        active: false
      },
      {
        id: 1,
        title: "\u041D\u043E\u0432\u043E\u0441\u0442\u0438",
        active: false
      },
      {
        id: 2,
        title: (news == null ? void 0 : news.title) ? news.title : "",
        active: true
      }
    ];
    const handleClosePopup = () => {
      isVisible.value = false;
      isClosing = true;
    };
    const handleTransitionEnd = () => {
      if (isClosing) {
        navigateTo("/news/");
        isClosing = false;
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Popup = _sfc_main$5;
      const _component_Breadcrumbs = _sfc_main$3;
      const _component_UiPin = __nuxt_component_2;
      const _component_NewsBlock = __nuxt_component_3;
      _push(ssrRenderComponent(_component_Popup, mergeProps({
        status: unref(status),
        visible: unref(isVisible),
        onClosePopup: handleClosePopup,
        onEndTransition: handleTransitionEnd
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b;
          if (_push2) {
            _push2(`<div class="news" data-v-0cf7f416${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Breadcrumbs, { breadCrumbs }, null, _parent2, _scopeId));
            _push2(`<div class="news-pins" data-v-0cf7f416${_scopeId}><!--[-->`);
            ssrRenderList(unref(newsPins), (pin) => {
              _push2(ssrRenderComponent(_component_UiPin, {
                color: pin.values[0].color,
                icon: pin.values[0].src ? pin.values[0].src : ""
              }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(`${ssrInterpolate(pin.values[0].name)}`);
                  } else {
                    return [
                      createTextVNode(toDisplayString(pin.values[0].name), 1)
                    ];
                  }
                }),
                _: 2
              }, _parent2, _scopeId));
            });
            _push2(`<!--]--></div><div class="title news-title" data-v-0cf7f416${_scopeId}>${ssrInterpolate((_a2 = unref(news)) == null ? void 0 : _a2.title)}</div></div>`);
            if (unref(nextNews)) {
              _push2(`<div class="news-next" data-v-0cf7f416${_scopeId}><div class="title" data-v-0cf7f416${_scopeId}>\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0430\u044F \u0441\u0442\u0430\u0442\u044C\u044F</div>`);
              _push2(ssrRenderComponent(_component_NewsBlock, { "next-news": unref(nextNews) }, null, _parent2, _scopeId));
              _push2(`</div>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              createVNode("div", { class: "news" }, [
                createVNode(_component_Breadcrumbs, { breadCrumbs }),
                createVNode("div", { class: "news-pins" }, [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(newsPins), (pin) => {
                    return openBlock(), createBlock(_component_UiPin, {
                      color: pin.values[0].color,
                      icon: pin.values[0].src ? pin.values[0].src : ""
                    }, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(pin.values[0].name), 1)
                      ]),
                      _: 2
                    }, 1032, ["color", "icon"]);
                  }), 256))
                ]),
                createVNode("div", { class: "title news-title" }, toDisplayString((_b = unref(news)) == null ? void 0 : _b.title), 1)
              ]),
              unref(nextNews) ? (openBlock(), createBlock("div", {
                key: 0,
                class: "news-next"
              }, [
                createVNode("div", { class: "title" }, "\u0421\u043B\u0435\u0434\u0443\u044E\u0449\u0430\u044F \u0441\u0442\u0430\u0442\u044C\u044F"),
                createVNode(_component_NewsBlock, { "next-news": unref(nextNews) }, null, 8, ["next-news"])
              ])) : createCommentVNode("", true)
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/news/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-0cf7f416"]]);

export { _id_ as default };
//# sourceMappingURL=_id_-Cp6aYY0O.mjs.map
