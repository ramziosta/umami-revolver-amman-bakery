module.exports = {

"[project]/app/ui/card.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "Card": (()=>Card),
    "CardContent": (()=>CardContent),
    "CardDescription": (()=>CardDescription),
    "CardFooter": (()=>CardFooter),
    "CardHeader": (()=>CardHeader),
    "CardTitle": (()=>CardTitle)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/lib/utils.ts [app-ssr] (ecmascript)");
;
;
;
const Card = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("rounded-lg border bg-card text-card-foreground shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/app/ui/card.tsx",
        lineNumber: 9,
        columnNumber: 3
    }, this));
Card.displayName = "Card";
const CardHeader = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-1.5 p-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/app/ui/card.tsx",
        lineNumber: 24,
        columnNumber: 3
    }, this));
CardHeader.displayName = "CardHeader";
const CardTitle = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-2xl font-semibold leading-none tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/app/ui/card.tsx",
        lineNumber: 36,
        columnNumber: 3
    }, this));
CardTitle.displayName = "CardTitle";
const CardDescription = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/app/ui/card.tsx",
        lineNumber: 51,
        columnNumber: 3
    }, this));
CardDescription.displayName = "CardDescription";
const CardContent = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/app/ui/card.tsx",
        lineNumber: 63,
        columnNumber: 3
    }, this));
CardContent.displayName = "CardContent";
const CardFooter = /*#__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.forwardRef(({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("flex items-center p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/app/ui/card.tsx",
        lineNumber: 71,
        columnNumber: 3
    }, this));
CardFooter.displayName = "CardFooter";
;
}}),
"[project]/app/assets/brioche.jpeg [app-ssr] (static)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
__turbopack_export_value__("/_next/static/media/brioche.9d18baa0.jpeg");}}),
"[project]/app/assets/brioche.jpeg.mjs { IMAGE => \"[project]/app/assets/brioche.jpeg [app-ssr] (static)\" } [app-ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$brioche$2e$jpeg__$5b$app$2d$ssr$5d$__$28$static$29$__ = __turbopack_import__("[project]/app/assets/brioche.jpeg [app-ssr] (static)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$brioche$2e$jpeg__$5b$app$2d$ssr$5d$__$28$static$29$__["default"],
    width: 1006,
    height: 709,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAGAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwCHTPENxfRxwsuHkIDv6r0x+VcNPD8s99Edc66cNtWf/9k=",
    blurWidth: 8,
    blurHeight: 6
};
}}),
"[project]/app/assets/specialty-cakes.png [app-ssr] (static)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
__turbopack_export_value__("/_next/static/media/specialty-cakes.b12ffd02.png");}}),
"[project]/app/assets/specialty-cakes.png.mjs { IMAGE => \"[project]/app/assets/specialty-cakes.png [app-ssr] (static)\" } [app-ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$specialty$2d$cakes$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__ = __turbopack_import__("[project]/app/assets/specialty-cakes.png [app-ssr] (static)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$specialty$2d$cakes$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__["default"],
    width: 580,
    height: 414,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAAyUlEQVR42gWAT0vCUADA34cqCKJLdTCJIHKDyEKrB1pva6BmDsQCSZxeZDqZIogg/jl5UNCLIAiiMDz4gX4idsGBxaBDLasomwn+PyVewWY+bLEPAsR2uaCXz1CI6aSjGj/xR0of74wdm/W4iZh0XKpmnG4xj29b1HMpGhkDL2XQLtqIru8jtTscUzL4SzKtKDz1hKGFSSfeEKN+n0jomuyrjvt1z8x55lfeoqIP5CwLsVpv+E5K9NAV4fMTIpen3FycoWIvNGsuR8+MdmmtRd9KAAAAAElFTkSuQmCC",
    blurWidth: 8,
    blurHeight: 6
};
}}),
"[project]/app/assets/mille-crepe-cake.jpg [app-ssr] (static)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
__turbopack_export_value__("/_next/static/media/mille-crepe-cake.fbfab21d.jpg");}}),
"[project]/app/assets/mille-crepe-cake.jpg.mjs { IMAGE => \"[project]/app/assets/mille-crepe-cake.jpg [app-ssr] (static)\" } [app-ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$mille$2d$crepe$2d$cake$2e$jpg__$5b$app$2d$ssr$5d$__$28$static$29$__ = __turbopack_import__("[project]/app/assets/mille-crepe-cake.jpg [app-ssr] (static)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$mille$2d$crepe$2d$cake$2e$jpg__$5b$app$2d$ssr$5d$__$28$static$29$__["default"],
    width: 700,
    height: 467,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAFAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDpNOSe51IXDXLBGOfLA4xtHHWsldyubSso2P/Z",
    blurWidth: 8,
    blurHeight: 5
};
}}),
"[project]/app/assets/bamboloni.jpg [app-ssr] (static)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
__turbopack_export_value__("/_next/static/media/bamboloni.64b14cdb.jpg");}}),
"[project]/app/assets/bamboloni.jpg.mjs { IMAGE => \"[project]/app/assets/bamboloni.jpg [app-ssr] (static)\" } [app-ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$bamboloni$2e$jpg__$5b$app$2d$ssr$5d$__$28$static$29$__ = __turbopack_import__("[project]/app/assets/bamboloni.jpg [app-ssr] (static)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$bamboloni$2e$jpg__$5b$app$2d$ssr$5d$__$28$static$29$__["default"],
    width: 780,
    height: 438,
    blurDataURL: "data:image/webp;base64,UklGRtYAAABXRUJQVlA4TMoAAAAvB8AAAM1VICICHggACQAAAAAW6AAYAIMxAAAMAAAAAwAAAAAAGAAAMBgAAAAMjHgYbJjhYAAAAHggwCYAAAAA5x8pyI8CQgCAICEBAAAAAAAAAAAAAAAAAAAAAAAABAEAANwjH3ggACQAAAAA59/2xgwbBgAAAAAAAAAAAAAAAAAAAAAAAAAAAACAwUDAehrvVmQci74Sn3Aq+ItgUG8s21sE2stMs+fdyhqjvkPoRJD45j8ZmiRuVDtyEh1JGQisx37PbY0rmO8C",
    blurWidth: 8,
    blurHeight: 4
};
}}),
"[project]/app/assets/choux.jpg [app-ssr] (static)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
__turbopack_export_value__("/_next/static/media/choux.b4cd9160.jpg");}}),
"[project]/app/assets/choux.jpg.mjs { IMAGE => \"[project]/app/assets/choux.jpg [app-ssr] (static)\" } [app-ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$choux$2e$jpg__$5b$app$2d$ssr$5d$__$28$static$29$__ = __turbopack_import__("[project]/app/assets/choux.jpg [app-ssr] (static)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$choux$2e$jpg__$5b$app$2d$ssr$5d$__$28$static$29$__["default"],
    width: 2247,
    height: 1263,
    blurDataURL: "data:image/webp;base64,UklGRtcAAABXRUJQVlA4TMsAAAAvB8AAAM1VICICHggACQAAAIA208D/ADCYDQMAAAAAAAAAAGAAAAAAAAAAAAAYAAMexuzxxgAAAMADATYBAAAAOP9XAAFB8CgCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAVIF+mdwDATYBAAAAOH+dHAn5AUgVAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAJYUgAgoDwyxXFINLH7H816sOr8JlrlEt4snVJn7mgNl/HzAhAHe0kImv4Nc/RG0CBPU7M8VbGrGd2uHETjEwA=",
    blurWidth: 8,
    blurHeight: 4
};
}}),
"[project]/app/assets/tiramisu.jpg [app-ssr] (static)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
__turbopack_export_value__("/_next/static/media/tiramisu.3cc23410.jpg");}}),
"[project]/app/assets/tiramisu.jpg.mjs { IMAGE => \"[project]/app/assets/tiramisu.jpg [app-ssr] (static)\" } [app-ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$tiramisu$2e$jpg__$5b$app$2d$ssr$5d$__$28$static$29$__ = __turbopack_import__("[project]/app/assets/tiramisu.jpg [app-ssr] (static)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$tiramisu$2e$jpg__$5b$app$2d$ssr$5d$__$28$static$29$__["default"],
    width: 550,
    height: 289,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAEAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDDNykGhK0NnbRvL8rOEJOMe5Ncjpxbuzfmex//2Q==",
    blurWidth: 8,
    blurHeight: 4
};
}}),
"[project]/app/assets/galette.jpg [app-ssr] (static)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
__turbopack_export_value__("/_next/static/media/galette.86207f1d.jpg");}}),
"[project]/app/assets/galette.jpg.mjs { IMAGE => \"[project]/app/assets/galette.jpg [app-ssr] (static)\" } [app-ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$galette$2e$jpg__$5b$app$2d$ssr$5d$__$28$static$29$__ = __turbopack_import__("[project]/app/assets/galette.jpg [app-ssr] (static)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$galette$2e$jpg__$5b$app$2d$ssr$5d$__$28$static$29$__["default"],
    width: 735,
    height: 1103,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAIAAUDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwB+mQ6pem4IKErJ9+J2QEdgdpGSPfnmrhTk9zGpVgrcup//2Q==",
    blurWidth: 5,
    blurHeight: 8
};
}}),
"[project]/app/assets/pound-cake.jpg [app-ssr] (static)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
__turbopack_export_value__("/_next/static/media/pound-cake.d8b5c418.jpg");}}),
"[project]/app/assets/pound-cake.jpg.mjs { IMAGE => \"[project]/app/assets/pound-cake.jpg [app-ssr] (static)\" } [app-ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$pound$2d$cake$2e$jpg__$5b$app$2d$ssr$5d$__$28$static$29$__ = __turbopack_import__("[project]/app/assets/pound-cake.jpg [app-ssr] (static)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$pound$2d$cake$2e$jpg__$5b$app$2d$ssr$5d$__$28$static$29$__["default"],
    width: 956,
    height: 833,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAHAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwCXWvEUun6kumWMKf6OihmYcux+vbkVg7bHVShFxvI//9k=",
    blurWidth: 8,
    blurHeight: 7
};
}}),
"[project]/app/assets/brownies.jpg [app-ssr] (static)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
__turbopack_export_value__("/_next/static/media/brownies.81096927.jpg");}}),
"[project]/app/assets/brownies.jpg.mjs { IMAGE => \"[project]/app/assets/brownies.jpg [app-ssr] (static)\" } [app-ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$brownies$2e$jpg__$5b$app$2d$ssr$5d$__$28$static$29$__ = __turbopack_import__("[project]/app/assets/brownies.jpg [app-ssr] (static)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$brownies$2e$jpg__$5b$app$2d$ssr$5d$__$28$static$29$__["default"],
    width: 5712,
    height: 4284,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAGAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwCppFneNrOXlULE3OXZ+O2M1morcpy0sf/Z",
    blurWidth: 8,
    blurHeight: 6
};
}}),
"[project]/app/assets/lemon-basil.png [app-ssr] (static)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
__turbopack_export_value__("/_next/static/media/lemon-basil.42dcf35d.png");}}),
"[project]/app/assets/lemon-basil.png.mjs { IMAGE => \"[project]/app/assets/lemon-basil.png [app-ssr] (static)\" } [app-ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$lemon$2d$basil$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__ = __turbopack_import__("[project]/app/assets/lemon-basil.png [app-ssr] (static)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$lemon$2d$basil$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__["default"],
    width: 494,
    height: 404,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAYAAAA1WQxeAAAA8klEQVR42gHnABj/AJ+OgP+/s5v/zMKq/7Otk//RxaT/sqmN/56Ug/9jX1//AN7Ml//f1bn/yMGj/6elff/DvJv/0cii/+bbv//JwKj/ALmtkf/MxK7/2NG7/8q9mf+oo4f/w7WP/9DEpv/HuJD/AINzUf+RgFj/no5v/5aFaP+jlnv/n5F4/5uMcv+djnL/AHhkPv95YTD/dl4t/3ZeL/97ZTz/fWQx/4NsN/+GdE7/AIZzT/+Ba0T/fWdB/3xjOP+Eajf/iG42/4tyQP+Ic1P/ALOurf+tpKH/p5iP/6+gj/+smH//kX9r/4V0Wv9+bU7/Ci+VVDHG7CoAAAAASUVORK5CYII=",
    blurWidth: 8,
    blurHeight: 7
};
}}),
"[project]/app/assets/chocolate-mousse.jpeg [app-ssr] (static)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
__turbopack_export_value__("/_next/static/media/chocolate-mousse.54164288.jpeg");}}),
"[project]/app/assets/chocolate-mousse.jpeg.mjs { IMAGE => \"[project]/app/assets/chocolate-mousse.jpeg [app-ssr] (static)\" } [app-ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$chocolate$2d$mousse$2e$jpeg__$5b$app$2d$ssr$5d$__$28$static$29$__ = __turbopack_import__("[project]/app/assets/chocolate-mousse.jpeg [app-ssr] (static)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$chocolate$2d$mousse$2e$jpeg__$5b$app$2d$ssr$5d$__$28$static$29$__["default"],
    width: 971,
    height: 702,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAGAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwB0Ogx6TIlnbKBEGC7zIdxHc9OtefGUpSvc7pcqhZo//9k=",
    blurWidth: 8,
    blurHeight: 6
};
}}),
"[project]/app/assets/sourdough.jpg [app-ssr] (static)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
__turbopack_export_value__("/_next/static/media/sourdough.70579203.jpg");}}),
"[project]/app/assets/sourdough.jpg.mjs { IMAGE => \"[project]/app/assets/sourdough.jpg [app-ssr] (static)\" } [app-ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$sourdough$2e$jpg__$5b$app$2d$ssr$5d$__$28$static$29$__ = __turbopack_import__("[project]/app/assets/sourdough.jpg [app-ssr] (static)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$sourdough$2e$jpg__$5b$app$2d$ssr$5d$__$28$static$29$__["default"],
    width: 5712,
    height: 4284,
    blurDataURL: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAgAAAQABAAD/wAARCAAGAAgDAREAAhEBAxEB/9sAQwAKBwcIBwYKCAgICwoKCw4YEA4NDQ4dFRYRGCMfJSQiHyIhJis3LyYpNCkhIjBBMTQ5Oz4+PiUuRElDPEg3PT47/9sAQwEKCwsODQ4cEBAcOygiKDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDBi1hV1T7CbSEhZR82wdjSs+YTceU//9k=",
    blurWidth: 8,
    blurHeight: 6
};
}}),
"[project]/app/assets/tieredCake.png [app-ssr] (static)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
__turbopack_export_value__("/_next/static/media/tieredCake.aa6d0523.png");}}),
"[project]/app/assets/tieredCake.png.mjs { IMAGE => \"[project]/app/assets/tieredCake.png [app-ssr] (static)\" } [app-ssr] (structured image object, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$tieredCake$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__ = __turbopack_import__("[project]/app/assets/tieredCake.png [app-ssr] (static)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$tieredCake$2e$png__$5b$app$2d$ssr$5d$__$28$static$29$__["default"],
    width: 997,
    height: 734,
    blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAA0UlEQVR42gHGADn/ANK5pf/Vvan/1Lyo/8+1n//RtZ3/0rOZ/9u+p//dwaj/ANG7qf/Puqb/t5eB/6FyWP+UZ0//mGhP/7qFaf/RsZn/AMu4p//HtKH/cFhM/1o3K/9nQDL/dUo5/3hKN/+ni3n/ALyql/+9qpf/XUlA/zAYEf83HBX/SScb/3JFLf+jhnL/AKyhk/+xpZb/dFhK/04rHv9QLB7/aDwp/5RfQf+ujnr/ALStpf+spp7/k4h+/3xnXP+AZln/lXls/5+KgP+vpqD/fD55ftd2il0AAAAASUVORK5CYII=",
    blurWidth: 8,
    blurHeight: 6
};
}}),
"[project]/app/categories/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, x: __turbopack_external_require__, y: __turbopack_external_import__, z: require } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Footer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/components/Footer.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/app/ui/card.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$brioche$2e$jpeg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$assets$2f$brioche$2e$jpeg__$5b$app$2d$ssr$5d$__$28$static$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__('[project]/app/assets/brioche.jpeg.mjs { IMAGE => "[project]/app/assets/brioche.jpeg [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$mille$2d$crepe$2d$cake$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$assets$2f$mille$2d$crepe$2d$cake$2e$jpg__$5b$app$2d$ssr$5d$__$28$static$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__('[project]/app/assets/mille-crepe-cake.jpg.mjs { IMAGE => "[project]/app/assets/mille-crepe-cake.jpg [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$bamboloni$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$assets$2f$bamboloni$2e$jpg__$5b$app$2d$ssr$5d$__$28$static$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__('[project]/app/assets/bamboloni.jpg.mjs { IMAGE => "[project]/app/assets/bamboloni.jpg [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$choux$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$assets$2f$choux$2e$jpg__$5b$app$2d$ssr$5d$__$28$static$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__('[project]/app/assets/choux.jpg.mjs { IMAGE => "[project]/app/assets/choux.jpg [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$tiramisu$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$assets$2f$tiramisu$2e$jpg__$5b$app$2d$ssr$5d$__$28$static$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__('[project]/app/assets/tiramisu.jpg.mjs { IMAGE => "[project]/app/assets/tiramisu.jpg [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$galette$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$assets$2f$galette$2e$jpg__$5b$app$2d$ssr$5d$__$28$static$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__('[project]/app/assets/galette.jpg.mjs { IMAGE => "[project]/app/assets/galette.jpg [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$pound$2d$cake$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$assets$2f$pound$2d$cake$2e$jpg__$5b$app$2d$ssr$5d$__$28$static$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__('[project]/app/assets/pound-cake.jpg.mjs { IMAGE => "[project]/app/assets/pound-cake.jpg [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$brownies$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$assets$2f$brownies$2e$jpg__$5b$app$2d$ssr$5d$__$28$static$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__('[project]/app/assets/brownies.jpg.mjs { IMAGE => "[project]/app/assets/brownies.jpg [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$lemon$2d$basil$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$assets$2f$lemon$2d$basil$2e$png__$5b$app$2d$ssr$5d$__$28$static$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__('[project]/app/assets/lemon-basil.png.mjs { IMAGE => "[project]/app/assets/lemon-basil.png [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$chocolate$2d$mousse$2e$jpeg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$assets$2f$chocolate$2d$mousse$2e$jpeg__$5b$app$2d$ssr$5d$__$28$static$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__('[project]/app/assets/chocolate-mousse.jpeg.mjs { IMAGE => "[project]/app/assets/chocolate-mousse.jpeg [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$sourdough$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$assets$2f$sourdough$2e$jpg__$5b$app$2d$ssr$5d$__$28$static$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__ = __turbopack_import__('[project]/app/assets/sourdough.jpg.mjs { IMAGE => "[project]/app/assets/sourdough.jpg [app-ssr] (static)" } [app-ssr] (structured image object, ecmascript)');
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const categories = [
    {
        id: 'artisan-sourdoughs',
        name: 'Artisan Sourdoughs',
        image: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$sourdough$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$assets$2f$sourdough$2e$jpg__$5b$app$2d$ssr$5d$__$28$static$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        description: 'Using the best flours, grains and seeds.',
        itemCount: 8,
        items: [
            {
                id: 'sourbread',
                itemName: "White Sourdough",
                itemDescription: "A classic French-style brioche with a soft, buttery crust and a light, airy interior.",
                itemPrice: 3.50,
                itemImages: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$brioche$2e$jpeg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$assets$2f$brioche$2e$jpeg__$5b$app$2d$ssr$5d$__$28$static$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                    __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$brioche$2e$jpeg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$assets$2f$brioche$2e$jpeg__$5b$app$2d$ssr$5d$__$28$static$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"]
                ]
            },
            {
                id: 'WholeWheat',
                itemName: "Whole Wheat Sourdough",
                itemDescription: "A classic French-style brioche with a soft, buttery crust and a light, airy interior.",
                itemPrice: 3.50,
                itemImages: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$brioche$2e$jpeg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$assets$2f$brioche$2e$jpeg__$5b$app$2d$ssr$5d$__$28$static$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                    __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$brioche$2e$jpeg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$assets$2f$brioche$2e$jpeg__$5b$app$2d$ssr$5d$__$28$static$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"]
                ]
            },
            {
                id: 'sourbread3',
                itemName: "Artisanal Loaf Sourdough",
                itemDescription: "A classic French-style brioche with a soft, buttery crust and a light, airy interior.",
                itemPrice: 3.50,
                itemImages: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$brioche$2e$jpeg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$assets$2f$brioche$2e$jpeg__$5b$app$2d$ssr$5d$__$28$static$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                    __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$brioche$2e$jpeg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$assets$2f$brioche$2e$jpeg__$5b$app$2d$ssr$5d$__$28$static$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"]
                ]
            },
            {
                id: 'Rye',
                itemName: "100% Rye Sourdough",
                itemDescription: "A classic French-style brioche with a soft, buttery crust and a light, airy interior.",
                itemPrice: 3.50,
                itemImages: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$brioche$2e$jpeg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$assets$2f$brioche$2e$jpeg__$5b$app$2d$ssr$5d$__$28$static$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                    __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$brioche$2e$jpeg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$assets$2f$brioche$2e$jpeg__$5b$app$2d$ssr$5d$__$28$static$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"]
                ]
            },
            {
                id: 'MultiSeedWholeGrain',
                itemName: "MultiSeed Whole Grain Sourdough",
                itemDescription: "A classic French-style brioche with a soft, buttery crust and a light, airy interior.",
                itemPrice: 3.50,
                itemImages: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$brioche$2e$jpeg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$assets$2f$brioche$2e$jpeg__$5b$app$2d$ssr$5d$__$28$static$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                    __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$brioche$2e$jpeg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$assets$2f$brioche$2e$jpeg__$5b$app$2d$ssr$5d$__$28$static$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"]
                ]
            }
        ]
    },
    {
        "id": "rustic-breads",
        "name": "Rustic & Dinner Breads",
        "image": "rustic",
        "description": "Freshly baked table breads and classic sides for every meal.",
        "itemCount": 10,
        "items": [
            {
                "id": "ciabatta",
                "itemName": "Ciabatta",
                "itemDescription": "Italian rustic bread with an airy crumb and crisp crust — perfect for sandwiches.",
                "itemPrice": 3.50,
                "itemImages": [
                    "ciabatta"
                ]
            },
            {
                "id": "focaccia",
                "itemName": "Focaccia",
                "itemDescription": "Soft Italian flatbread brushed with olive oil, sea salt, and fresh herbs.",
                "itemPrice": 3.50,
                "itemImages": [
                    "focaccia"
                ]
            },
            {
                "id": "brioche-buns",
                "itemName": "Brioche Buns",
                "itemDescription": "Buttery, fluffy buns for gourmet burgers or breakfast sandwiches.",
                "itemPrice": 3.50,
                "itemImages": [
                    "brioche-buns"
                ]
            },
            {
                "id": "buttermilk-biscuits",
                "itemName": "Buttermilk Biscuits",
                "itemDescription": "Southern-style biscuits, flaky and rich — a comfort classic.",
                "itemPrice": 3.50,
                "itemImages": [
                    "biscuits"
                ]
            },
            {
                "id": "popovers",
                "itemName": "Popovers",
                "itemDescription": "Light, airy rolls with a crisp shell — best served warm with butter.",
                "itemPrice": 3.50,
                "itemImages": [
                    "popovers"
                ]
            },
            {
                "id": "parker-house-rolls",
                "itemName": "Parker House Rolls",
                "itemDescription": "Soft, folded dinner rolls brushed with butter — a timeless table favorite.",
                "itemPrice": 3.50,
                "itemImages": [
                    "parker-house-rolls"
                ]
            },
            {
                "id": "garlic-knots",
                "itemName": "Garlic Knots",
                "itemDescription": "Soft, chewy knots brushed with garlic butter and fresh herbs.",
                "itemPrice": 3.50,
                "itemImages": [
                    "garlic-knots"
                ]
            },
            {
                "id": "classic-cornbread",
                "itemName": "Classic Cornbread",
                "itemDescription": "Moist, buttery cornbread with a golden crust — a perfect side for any meal.",
                "itemPrice": 3.50,
                "itemImages": [
                    "cornbread"
                ]
            },
            {
                "id": "jalapeno-cheddar-cornbread",
                "itemName": "Jalapeño Cheddar Cornbread",
                "itemDescription": "Savory cornbread packed with sharp cheddar cheese and a mild jalapeño kick.",
                "itemPrice": 3.50,
                "itemImages": [
                    "jalapeno-cheddar-cornbread"
                ]
            },
            {
                "id": "cornbread-muffins",
                "itemName": "Honey Butter Cornbread Muffins",
                "itemDescription": "Individual cornbread muffins brushed with sweet honey butter — great for brunch.",
                "itemPrice": 3.50,
                "itemImages": [
                    "cornbread-muffins"
                ]
            }
        ]
    },
    {
        id: 'sweet-bread',
        name: 'Brioche and Sweet Breads',
        image: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$brioche$2e$jpeg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$assets$2f$brioche$2e$jpeg__$5b$app$2d$ssr$5d$__$28$static$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        description: 'Classic, spiced or filled with irresistible inclusions.',
        itemCount: 5,
        items: [
            {
                id: 'sweet-bread1',
                itemName: "Classic Brioche",
                itemDescription: "A classic French-style brioche with a soft, buttery crust and a light, airy interior.",
                itemPrice: 3.50,
                itemImages: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$brioche$2e$jpeg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$assets$2f$brioche$2e$jpeg__$5b$app$2d$ssr$5d$__$28$static$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                    __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$brioche$2e$jpeg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$assets$2f$brioche$2e$jpeg__$5b$app$2d$ssr$5d$__$28$static$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"]
                ]
            },
            {
                id: 'sweet-bread2',
                itemName: "Cinnamon Roll Bread",
                itemDescription: "A classic French-style brioche with a soft, buttery crust and a light, airy interior.",
                itemPrice: 3.50,
                itemImages: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$brioche$2e$jpeg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$assets$2f$brioche$2e$jpeg__$5b$app$2d$ssr$5d$__$28$static$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                    __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$brioche$2e$jpeg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$assets$2f$brioche$2e$jpeg__$5b$app$2d$ssr$5d$__$28$static$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"]
                ]
            },
            {
                id: 'sweet-bread3',
                itemName: "Chocolate Babka",
                itemDescription: "A classic French-style brioche with a soft, buttery crust and a light, airy interior.",
                itemPrice: 3.50,
                itemImages: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$brioche$2e$jpeg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$assets$2f$brioche$2e$jpeg__$5b$app$2d$ssr$5d$__$28$static$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                    __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$brioche$2e$jpeg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$assets$2f$brioche$2e$jpeg__$5b$app$2d$ssr$5d$__$28$static$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"]
                ]
            },
            {
                id: 'sweet-bread4',
                itemName: "Apple Raisin Walnut Brioche",
                itemDescription: "A classic French-style brioche with a soft, buttery crust and a light, airy interior.",
                itemPrice: 3.50,
                itemImages: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$brioche$2e$jpeg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$assets$2f$brioche$2e$jpeg__$5b$app$2d$ssr$5d$__$28$static$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                    __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$brioche$2e$jpeg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$assets$2f$brioche$2e$jpeg__$5b$app$2d$ssr$5d$__$28$static$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"]
                ]
            },
            {
                id: 'sweet-bread5',
                itemName: "Cranberry Pecan Babka",
                itemDescription: "A classic French-style brioche with a soft, buttery crust and a light, airy interior.",
                itemPrice: 3.50,
                itemImages: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$brioche$2e$jpeg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$assets$2f$brioche$2e$jpeg__$5b$app$2d$ssr$5d$__$28$static$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                    __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$brioche$2e$jpeg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$assets$2f$brioche$2e$jpeg__$5b$app$2d$ssr$5d$__$28$static$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"]
                ]
            },
            {
                id: 'sweet-bread5',
                itemName: "Pull-apart Monkey Bread",
                itemDescription: "A classic French-style brioche with a soft, buttery crust and a light, airy interior.",
                itemPrice: 3.50,
                itemImages: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$brioche$2e$jpeg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$assets$2f$brioche$2e$jpeg__$5b$app$2d$ssr$5d$__$28$static$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
                    __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$brioche$2e$jpeg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$assets$2f$brioche$2e$jpeg__$5b$app$2d$ssr$5d$__$28$static$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"]
                ]
            }
        ]
    },
    {
        "id": "breakfast-pastries",
        "name": "Breakfast Pastries & Muffins",
        "description": "Fresh baked morning treats, perfect with coffee or tea.",
        "items": [
            {
                "id": "blueberry-muffin",
                "itemName": "Blueberry Muffin",
                "itemDescription": "Fluffy muffin loaded with juicy blueberries.",
                "itemPrice": 2.50,
                "itemImages": [
                    "blueberry-muffin"
                ]
            },
            {
                "id": "banana-nut-muffin",
                "itemName": "Banana Nut Muffin",
                "itemDescription": "Moist muffin packed with ripe bananas and crunchy walnuts.",
                "itemPrice": 2.50,
                "itemImages": [
                    "banana-nut-muffin"
                ]
            },
            {
                "id": "cranberry-scone",
                "itemName": "Cranberry Orange Scone",
                "itemDescription": "Buttery scone with tart cranberries and a hint of orange zest.",
                "itemPrice": 2.50,
                "itemImages": [
                    "cranberry-scone"
                ]
            },
            {
                "id": "classic-scone",
                "itemName": "Classic English Scone",
                "itemDescription": "Tender, buttery scone, perfect with jam and cream.",
                "itemPrice": 2.50,
                "itemImages": [
                    "classic-scone"
                ]
            },
            {
                "id": "coffee-cake",
                "itemName": "Cinnamon Coffee Cake",
                "itemDescription": "Soft crumb cake swirled with cinnamon sugar.",
                "itemPrice": 2.50,
                "itemImages": [
                    "coffee-cake"
                ]
            }
        ]
    },
    {
        "id": "tiered-cakes",
        "name": "Tiered Cakes & Cupcakes",
        "image": "tieredCake",
        "description": "From classic favorites to inventive seasonal creations, our cakes and cupcakes are made to delight. Any cake flavor can be made into cupcakes, and we happily take custom orders. New flavors are added seasonally — check back often to see what’s fresh from the oven!",
        "itemCount": 12,
        "details": {
            "availableTiers": [
                "2-tier",
                "3-tier",
                "4-tier"
            ],
            "availableSizes": [
                "6 inch",
                "8 inch",
                "10 inch"
            ],
            "signatureFlavors": [
                "Vanilla",
                "Chocolate",
                "Red Velvet",
                "Carrot",
                "Banana",
                "Coffee",
                "Lemon"
            ],
            "fillings": [
                "Vanilla Bean Custard",
                "Strawberry",
                "Raspberry",
                "Blueberry",
                "Caramel",
                "Chocolate",
                "Banana Mousse",
                "Lemon Curd",
                "Coffee Cream",
                "Oreo",
                "Lotus",
                "Passion Fruit (Seasonal)",
                "Mango (Seasonal)",
                "Peach (Seasonal)"
            ],
            "frostings": {
                "frenchButtercream": [
                    "Vanilla Bean",
                    "Chocolate",
                    "White Chocolate",
                    "Salted Caramel",
                    "Mocha Lotus"
                ],
                "additionalOptions": [
                    "Toasted Meringue",
                    "Cream Cheese",
                    "Marshmallow",
                    "Whipped Cream",
                    "Ganache",
                    "Toasted Coconut"
                ]
            },
            "cupcakePricing": [
                {
                    "quantity": 6,
                    "priceJOD": 18
                },
                {
                    "quantity": 8,
                    "priceJOD": 24
                },
                {
                    "quantity": 10,
                    "priceJOD": 30
                },
                {
                    "quantity": 12,
                    "priceJOD": 35
                }
            ]
        },
        images: [],
        "items": []
    },
    {
        "id": "specialty-cakes",
        "name": "Specialty Cakes",
        "image": "specialtyCakes",
        "description": "Unique flavors from our kitchen you won’t find anywhere else. Signature cakes with special flavor combinations crafted in-house.",
        "itemCount": 3,
        "items": [
            {
                "id": "king-chocolate-cake",
                "itemName": "King Chocolate Cake",
                "itemDescription": "Rich chocolate mousse cake layered with cream puffs for a decadent bite.",
                "itemPrice": 25.00,
                "itemImages": [
                    "king-chocolate-1.jpg",
                    "king-chocolate-2.jpg"
                ]
            },
            {
                "id": "mikes-lemonade",
                "itemName": "Mike's Lemonade",
                "itemDescription": "Moist olive oil cake with zesty lemon curd, mascarpone frosting, and lemon basil sugar.",
                "itemPrice": 25.00,
                "itemImages": [
                    "mikes-lemonade-1.jpg",
                    "mikes-lemonade-2.jpg"
                ]
            },
            {
                "id": "tias-chocolate-lotus",
                "itemName": "Tia's Chocolate Lotus Cake",
                "itemDescription": "Indulgent chocolate cake with layers of chocolate French buttercream and Lotus French buttercream.",
                "itemPrice": 25.00,
                "itemImages": [
                    "tias-lotus-1.jpg",
                    "tias-lotus-2.jpg"
                ]
            }
        ]
    },
    {
        id: 'mille-crepe-cakes',
        name: 'Mille Crêpe Cakes',
        image: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$mille$2d$crepe$2d$cake$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$assets$2f$mille$2d$crepe$2d$cake$2e$jpg__$5b$app$2d$ssr$5d$__$28$static$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        description: 'Light, layered crêpe cakes filled with luscious creams.',
        itemCount: 4,
        items: []
    },
    {
        id: 'pound-cakes',
        name: 'Pound Cakes',
        image: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$pound$2d$cake$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$assets$2f$pound$2d$cake$2e$jpg__$5b$app$2d$ssr$5d$__$28$static$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        description: 'Buttery, moist and tender, classic and beyond.',
        itemCount: 5,
        items: []
    },
    {
        id: 'bamboloni',
        name: 'Bamboloni',
        image: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$bamboloni$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$assets$2f$bamboloni$2e$jpg__$5b$app$2d$ssr$5d$__$28$static$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        description: 'Italian-style filled doughnuts — soft, fluffy, irresistible.',
        itemCount: 4
    },
    {
        id: 'choux-au-craquelin',
        name: 'Choux au Craquelin',
        image: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$choux$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$assets$2f$choux$2e$jpg__$5b$app$2d$ssr$5d$__$28$static$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        description: 'Delicate cream puffs with crisp craquelin tops.',
        itemCount: 4,
        items: []
    },
    {
        id: 'tiramisu',
        name: 'Tiramisu',
        image: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$tiramisu$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$assets$2f$tiramisu$2e$jpg__$5b$app$2d$ssr$5d$__$28$static$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        description: 'Traditional and reimagined with seasonal fillings and modern flair.',
        itemCount: 4,
        items: []
    },
    {
        id: 'pies-cobblers-galettes',
        name: 'Pies, Cobblers & Galettes',
        image: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$galette$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$assets$2f$galette$2e$jpg__$5b$app$2d$ssr$5d$__$28$static$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        description: 'Rustic, seasonal fruit pies and hand-crafted pastries.',
        itemCount: 4,
        items: []
    },
    {
        id: 'cookies-bars-brownies',
        name: 'Cookies, Bars & Brownies',
        image: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$brownies$2e$jpg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$assets$2f$brownies$2e$jpg__$5b$app$2d$ssr$5d$__$28$static$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        description: 'Classic and creative sweet bites for any occasion.',
        itemCount: 4,
        items: []
    },
    {
        id: 'seasonal-treats',
        name: 'Seasonal Treats',
        image: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$lemon$2d$basil$2e$png$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$assets$2f$lemon$2d$basil$2e$png__$5b$app$2d$ssr$5d$__$28$static$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"],
        description: 'Limited-time offerings inspired by the freshest seasonal ingredients.',
        itemCount: 4,
        items: []
    }
];
const CategoriesHero = ({ title, subtitle, backgroundImage })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative h-[70vh] overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 parallax-bg",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        src: backgroundImage,
                        alt: "Pound cake",
                        fill: true,
                        sizes: "100vh",
                        className: "object-cover",
                        priority: true
                    }, void 0, false, {
                        fileName: "[project]/app/categories/page.tsx",
                        lineNumber: 413,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-black/60"
                    }, void 0, false, {
                        fileName: "[project]/app/categories/page.tsx",
                        lineNumber: 422,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/categories/page.tsx",
                lineNumber: 412,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative h-full flex flex-col justify-center items-center text-center px-4 z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-5xl font-goglast text-umami-cream tracking-[0.5rem] mb-4 font-bold",
                        children: title
                    }, void 0, false, {
                        fileName: "[project]/app/categories/page.tsx",
                        lineNumber: 426,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "max-w-6xl mx-auto text-umami-cream/90 font-glimp text-4xl leading-relaxed",
                        children: subtitle
                    }, void 0, false, {
                        fileName: "[project]/app/categories/page.tsx",
                        lineNumber: 429,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/categories/page.tsx",
                lineNumber: 425,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/categories/page.tsx",
        lineNumber: 411,
        columnNumber: 5
    }, this);
const CategoryCard = ({ category })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        href: `/category/${category.id}`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Card"], {
            className: "group cursor-pointer elegant-shadow hover:shadow-2xl transition-all duration-500 overflow-hidden border-0 bg-white",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative h-64 overflow-hidden",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            src: category.image,
                            alt: category.name,
                            className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        }, void 0, false, {
                            fileName: "[project]/app/categories/page.tsx",
                            lineNumber: 441,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"
                        }, void 0, false, {
                            fileName: "[project]/app/categories/page.tsx",
                            lineNumber: 446,
                            columnNumber: 17
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute bottom-4 left-4 right-4 text-white",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl font-goglast font-bold mb-1 text-shadow tracking-[0.5rem]",
                                    children: category.name
                                }, void 0, false, {
                                    fileName: "[project]/app/categories/page.tsx",
                                    lineNumber: 448,
                                    columnNumber: 21
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-umami-cream/90",
                                    children: [
                                        category.itemCount,
                                        " items"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/app/categories/page.tsx",
                                    lineNumber: 451,
                                    columnNumber: 21
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/categories/page.tsx",
                            lineNumber: 447,
                            columnNumber: 17
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/categories/page.tsx",
                    lineNumber: 440,
                    columnNumber: 13
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$ui$2f$card$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CardContent"], {
                    className: "p-6 bg-white group-hover:bg-umami-cream transition-colors duration-300",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-umami-navy text-lg font-bold leading-relaxed",
                        children: category.description
                    }, void 0, false, {
                        fileName: "[project]/app/categories/page.tsx",
                        lineNumber: 458,
                        columnNumber: 17
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/app/categories/page.tsx",
                    lineNumber: 457,
                    columnNumber: 13
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/categories/page.tsx",
            lineNumber: 438,
            columnNumber: 9
        }, this)
    }, category.id, false, {
        fileName: "[project]/app/categories/page.tsx",
        lineNumber: 437,
        columnNumber: 5
    }, this);
const CategoriesGrid = ({ categories })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-16",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto px-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",
                children: categories.map((category)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CategoryCard, {
                        category: category
                    }, category.id, false, {
                        fileName: "[project]/app/categories/page.tsx",
                        lineNumber: 471,
                        columnNumber: 21
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/categories/page.tsx",
                lineNumber: 469,
                columnNumber: 13
            }, this)
        }, void 0, false, {
            fileName: "[project]/app/categories/page.tsx",
            lineNumber: 468,
            columnNumber: 9
        }, this)
    }, void 0, false, {
        fileName: "[project]/app/categories/page.tsx",
        lineNumber: 467,
        columnNumber: 5
    }, this);
const Categories = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-umami-cream",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CategoriesHero, {
                title: "What We Bake",
                subtitle: "Our curated menu showcases exclusive flavors and small-batch creations you won’t find anywhere else — including seasonal specialties and refined takes on cult favorites.",
                backgroundImage: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$assets$2f$chocolate$2d$mousse$2e$jpeg$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$app$2f$assets$2f$chocolate$2d$mousse$2e$jpeg__$5b$app$2d$ssr$5d$__$28$static$2922$__$7d$__$5b$app$2d$ssr$5d$__$28$structured__image__object$2c$__ecmascript$29$__["default"]
            }, void 0, false, {
                fileName: "[project]/app/categories/page.tsx",
                lineNumber: 482,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(CategoriesGrid, {
                categories: categories
            }, void 0, false, {
                fileName: "[project]/app/categories/page.tsx",
                lineNumber: 487,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Footer$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/categories/page.tsx",
                lineNumber: 488,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/categories/page.tsx",
        lineNumber: 480,
        columnNumber: 9
    }, this);
};
const __TURBOPACK__default__export__ = Categories;
}}),
"[project]/app/categories/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules ssr)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: require } = __turbopack_context__;
{
}}),

};

//# sourceMappingURL=app_d398c8._.js.map