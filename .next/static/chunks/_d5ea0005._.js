(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push([typeof document === "object" ? document.currentScript : undefined, {

"[project]/src/components/ui/card.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "Card": (()=>Card),
    "CardContent": (()=>CardContent),
    "CardDescription": (()=>CardDescription),
    "CardFooter": (()=>CardFooter),
    "CardHeader": (()=>CardHeader),
    "CardTitle": (()=>CardTitle)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/utils.ts [app-client] (ecmascript)");
;
;
;
const Card = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("rounded-lg border bg-card text-card-foreground shadow-sm", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 9,
        columnNumber: 3
    }, this));
_c1 = Card;
Card.displayName = "Card";
const CardHeader = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c2 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex flex-col space-y-1.5 p-6", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 24,
        columnNumber: 3
    }, this));
_c3 = CardHeader;
CardHeader.displayName = "CardHeader";
const CardTitle = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c4 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-2xl font-semibold leading-none tracking-tight", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 36,
        columnNumber: 3
    }, this));
_c5 = CardTitle;
CardTitle.displayName = "CardTitle";
const CardDescription = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c6 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("text-sm text-muted-foreground", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 51,
        columnNumber: 3
    }, this));
_c7 = CardDescription;
CardDescription.displayName = "CardDescription";
const CardContent = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c8 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 63,
        columnNumber: 3
    }, this));
_c9 = CardContent;
CardContent.displayName = "CardContent";
const CardFooter = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c10 = ({ className, ...props }, ref)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("flex items-center p-6 pt-0", className),
        ...props
    }, void 0, false, {
        fileName: "[project]/src/components/ui/card.tsx",
        lineNumber: 71,
        columnNumber: 3
    }, this));
_c11 = CardFooter;
CardFooter.displayName = "CardFooter";
;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;
__turbopack_context__.k.register(_c, "Card$React.forwardRef");
__turbopack_context__.k.register(_c1, "Card");
__turbopack_context__.k.register(_c2, "CardHeader$React.forwardRef");
__turbopack_context__.k.register(_c3, "CardHeader");
__turbopack_context__.k.register(_c4, "CardTitle$React.forwardRef");
__turbopack_context__.k.register(_c5, "CardTitle");
__turbopack_context__.k.register(_c6, "CardDescription$React.forwardRef");
__turbopack_context__.k.register(_c7, "CardDescription");
__turbopack_context__.k.register(_c8, "CardContent$React.forwardRef");
__turbopack_context__.k.register(_c9, "CardContent");
__turbopack_context__.k.register(_c10, "CardFooter$React.forwardRef");
__turbopack_context__.k.register(_c11, "CardFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/checkout/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>CheckoutPage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stripe$2f$stripe$2d$js$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/node_modules/@stripe/stripe-js/lib/index.mjs [app-client] (ecmascript) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stripe$2f$stripe$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@stripe/stripe-js/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stripe$2f$react$2d$stripe$2d$js$2f$dist$2f$react$2d$stripe$2e$umd$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/button.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/card.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$CartContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/context/CartContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$party$2d$popper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PartyPopper$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/party-popper.js [app-client] (ecmascript) <export default as PartyPopper>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/hooks/use-toast.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
const stripePromise = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stripe$2f$stripe$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadStripe"])(("TURBOPACK compile-time value", "pk_test_51Rljnj4JoWJeNFX2HF6SC2e72V9L6w9z5b6MEFEG5smCTzZIRqJW4nM2Vbm5fdWqqXxfeyU1lfHbwNtthjwTJi6x002aeILQ89"));
function CheckoutForm() {
    _s();
    const stripe = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stripe$2f$react$2d$stripe$2d$js$2f$dist$2f$react$2d$stripe$2e$umd$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStripe"])();
    const elements = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stripe$2f$react$2d$stripe$2d$js$2f$dist$2f$react$2d$stripe$2e$umd$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useElements"])();
    const { clearCart } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$CartContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"])();
    const { toast } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"])();
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isSubmitted, setIsSubmitted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (!stripe || !elements) {
            return;
        }
        setIsLoading(true);
        const { error } = await stripe.confirmPayment({
            elements,
            confirmParams: {
                return_url: `${window.location.origin}/checkout`
            }
        });
        if (error.type === "card_error" || error.type === "validation_error") {
            toast({
                variant: "destructive",
                title: "Payment failed",
                description: error.message
            });
        } else {
            toast({
                variant: "destructive",
                title: "An unexpected error occurred",
                description: "Please try again."
            });
        }
        setIsLoading(false);
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CheckoutForm.useEffect": ()=>{
            if (!stripe) {
                return;
            }
            const clientSecret = new URLSearchParams(window.location.search).get("payment_intent_client_secret");
            if (!clientSecret) {
                return;
            }
            stripe.retrievePaymentIntent(clientSecret).then({
                "CheckoutForm.useEffect": ({ paymentIntent })=>{
                    switch(paymentIntent?.status){
                        case "succeeded":
                            setIsSubmitted(true);
                            clearCart();
                            break;
                        case "processing":
                            toast({
                                title: "Payment processing.",
                                description: "We'll update you when payment is received."
                            });
                            break;
                        case "requires_payment_method":
                            toast({
                                variant: "destructive",
                                title: "Payment failed.",
                                description: "Please try another payment method."
                            });
                            break;
                        default:
                            toast({
                                variant: "destructive",
                                title: "Something went wrong."
                            });
                            break;
                    }
                }
            }["CheckoutForm.useEffect"]);
        }
    }["CheckoutForm.useEffect"], [
        stripe,
        clearCart,
        toast
    ]);
    if (isSubmitted) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container flex flex-col items-center justify-center text-center py-24",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$party$2d$popper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__PartyPopper$3e$__["PartyPopper"], {
                    className: "h-16 w-16 text-primary"
                }, void 0, false, {
                    fileName: "[project]/src/app/checkout/page.tsx",
                    lineNumber: 89,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    className: "mt-4 text-3xl font-headline font-bold",
                    children: "Thank You for Your Order!"
                }, void 0, false, {
                    fileName: "[project]/src/app/checkout/page.tsx",
                    lineNumber: 90,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "mt-2 text-muted-foreground",
                    children: "Your order has been placed successfully. We'll see you soon!"
                }, void 0, false, {
                    fileName: "[project]/src/app/checkout/page.tsx",
                    lineNumber: 91,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    asChild: true,
                    className: "mt-6",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        href: "/",
                        children: "Back to Home"
                    }, void 0, false, {
                        fileName: "[project]/src/app/checkout/page.tsx",
                        lineNumber: 93,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/checkout/page.tsx",
                    lineNumber: 92,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/checkout/page.tsx",
            lineNumber: 88,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: handleSubmit,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardContent"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stripe$2f$react$2d$stripe$2d$js$2f$dist$2f$react$2d$stripe$2e$umd$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PaymentElement"], {}, void 0, false, {
                    fileName: "[project]/src/app/checkout/page.tsx",
                    lineNumber: 102,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/checkout/page.tsx",
                lineNumber: 101,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardFooter"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$button$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Button"], {
                    type: "submit",
                    disabled: isLoading || !stripe || !elements,
                    size: "lg",
                    className: "w-full",
                    children: isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                        className: "mr-2 h-5 w-5 animate-spin"
                    }, void 0, false, {
                        fileName: "[project]/src/app/checkout/page.tsx",
                        lineNumber: 106,
                        columnNumber: 30
                    }, this) : `Pay now`
                }, void 0, false, {
                    fileName: "[project]/src/app/checkout/page.tsx",
                    lineNumber: 105,
                    columnNumber: 13
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/checkout/page.tsx",
                lineNumber: 104,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/checkout/page.tsx",
        lineNumber: 100,
        columnNumber: 6
    }, this);
}
_s(CheckoutForm, "nbWZAGbzatjQvYUWCemO4sfGQtY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stripe$2f$react$2d$stripe$2d$js$2f$dist$2f$react$2d$stripe$2e$umd$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useStripe"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stripe$2f$react$2d$stripe$2d$js$2f$dist$2f$react$2d$stripe$2e$umd$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useElements"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$CartContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$use$2d$toast$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useToast"]
    ];
});
_c = CheckoutForm;
function CheckoutPage() {
    _s1();
    const { totalPrice } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$CartContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"])();
    const [clientSecret, setClientSecret] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const finalPrice = Math.round(totalPrice * 1.1 * 100);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CheckoutPage.useEffect": ()=>{
            if (totalPrice > 0) {
                fetch('/api/create-payment-intent', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        amount: finalPrice
                    })
                }).then({
                    "CheckoutPage.useEffect": (res)=>res.json()
                }["CheckoutPage.useEffect"]).then({
                    "CheckoutPage.useEffect": (data)=>setClientSecret(data.clientSecret)
                }["CheckoutPage.useEffect"]);
            }
        }
    }["CheckoutPage.useEffect"], [
        totalPrice,
        finalPrice
    ]);
    const options = {
        clientSecret,
        appearance: {
            theme: 'stripe',
            variables: {
                colorPrimary: '#f97316',
                colorBackground: '#ffffff',
                colorText: '#333333'
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "container py-12 md:py-16 flex justify-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Card"], {
            className: "w-full max-w-2xl shadow-xl",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardHeader"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardTitle"], {
                            className: "font-headline text-3xl",
                            children: "Checkout"
                        }, void 0, false, {
                            fileName: "[project]/src/app/checkout/page.tsx",
                            lineNumber: 147,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$card$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CardDescription"], {
                            children: [
                                "Total: $",
                                (finalPrice / 100).toFixed(2)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/checkout/page.tsx",
                            lineNumber: 148,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/checkout/page.tsx",
                    lineNumber: 146,
                    columnNumber: 9
                }, this),
                clientSecret ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stripe$2f$react$2d$stripe$2d$js$2f$dist$2f$react$2d$stripe$2e$umd$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Elements"], {
                    options: options,
                    stripe: stripePromise,
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CheckoutForm, {}, void 0, false, {
                        fileName: "[project]/src/app/checkout/page.tsx",
                        lineNumber: 152,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/checkout/page.tsx",
                    lineNumber: 151,
                    columnNumber: 11
                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-center items-center h-48",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                        className: "h-8 w-8 animate-spin text-primary"
                    }, void 0, false, {
                        fileName: "[project]/src/app/checkout/page.tsx",
                        lineNumber: 156,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/checkout/page.tsx",
                    lineNumber: 155,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/checkout/page.tsx",
            lineNumber: 145,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/checkout/page.tsx",
        lineNumber: 144,
        columnNumber: 5
    }, this);
}
_s1(CheckoutPage, "Cn33yVedr/0j1Rt6Y3aCqrnXgbM=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$context$2f$CartContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"]
    ];
});
_c1 = CheckoutPage;
var _c, _c1;
__turbopack_context__.k.register(_c, "CheckoutForm");
__turbopack_context__.k.register(_c1, "CheckoutPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/node_modules/@stripe/stripe-js/dist/index.mjs [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "loadStripe": (()=>loadStripe)
});
var V3_URL = 'https://js.stripe.com/v3';
var V3_URL_REGEX = /^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/;
var EXISTING_SCRIPT_MESSAGE = 'loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used';
var findScript = function findScript() {
    var scripts = document.querySelectorAll("script[src^=\"".concat(V3_URL, "\"]"));
    for(var i = 0; i < scripts.length; i++){
        var script = scripts[i];
        if (!V3_URL_REGEX.test(script.src)) {
            continue;
        }
        return script;
    }
    return null;
};
var injectScript = function injectScript(params) {
    var queryString = params && !params.advancedFraudSignals ? '?advancedFraudSignals=false' : '';
    var script = document.createElement('script');
    script.src = "".concat(V3_URL).concat(queryString);
    var headOrBody = document.head || document.body;
    if (!headOrBody) {
        throw new Error('Expected document.body not to be null. Stripe.js requires a <body> element.');
    }
    headOrBody.appendChild(script);
    return script;
};
var registerWrapper = function registerWrapper(stripe, startTime) {
    if (!stripe || !stripe._registerWrapper) {
        return;
    }
    stripe._registerWrapper({
        name: 'stripe-js',
        version: "4.6.0",
        startTime: startTime
    });
};
var stripePromise = null;
var onErrorListener = null;
var onLoadListener = null;
var onError = function onError(reject) {
    return function() {
        reject(new Error('Failed to load Stripe.js'));
    };
};
var onLoad = function onLoad(resolve, reject) {
    return function() {
        if (window.Stripe) {
            resolve(window.Stripe);
        } else {
            reject(new Error('Stripe.js not available'));
        }
    };
};
var loadScript = function loadScript(params) {
    // Ensure that we only attempt to load Stripe.js at most once
    if (stripePromise !== null) {
        return stripePromise;
    }
    stripePromise = new Promise(function(resolve, reject) {
        if (typeof window === 'undefined' || typeof document === 'undefined') {
            // Resolve to null when imported server side. This makes the module
            // safe to import in an isomorphic code base.
            resolve(null);
            return;
        }
        if (window.Stripe && params) {
            console.warn(EXISTING_SCRIPT_MESSAGE);
        }
        if (window.Stripe) {
            resolve(window.Stripe);
            return;
        }
        try {
            var script = findScript();
            if (script && params) {
                console.warn(EXISTING_SCRIPT_MESSAGE);
            } else if (!script) {
                script = injectScript(params);
            } else if (script && onLoadListener !== null && onErrorListener !== null) {
                var _script$parentNode;
                // remove event listeners
                script.removeEventListener('load', onLoadListener);
                script.removeEventListener('error', onErrorListener); // if script exists, but we are reloading due to an error,
                // reload script to trigger 'load' event
                (_script$parentNode = script.parentNode) === null || _script$parentNode === void 0 ? void 0 : _script$parentNode.removeChild(script);
                script = injectScript(params);
            }
            onLoadListener = onLoad(resolve, reject);
            onErrorListener = onError(reject);
            script.addEventListener('load', onLoadListener);
            script.addEventListener('error', onErrorListener);
        } catch (error) {
            reject(error);
            return;
        }
    }); // Resets stripePromise on error
    return stripePromise["catch"](function(error) {
        stripePromise = null;
        return Promise.reject(error);
    });
};
var initStripe = function initStripe(maybeStripe, args, startTime) {
    if (maybeStripe === null) {
        return null;
    }
    var stripe = maybeStripe.apply(undefined, args);
    registerWrapper(stripe, startTime);
    return stripe;
}; // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
var stripePromise$1;
var loadCalled = false;
var getStripePromise = function getStripePromise() {
    if (stripePromise$1) {
        return stripePromise$1;
    }
    stripePromise$1 = loadScript(null)["catch"](function(error) {
        // clear cache on error
        stripePromise$1 = null;
        return Promise.reject(error);
    });
    return stripePromise$1;
}; // Execute our own script injection after a tick to give users time to do their
// own script injection.
Promise.resolve().then(function() {
    return getStripePromise();
})["catch"](function(error) {
    if (!loadCalled) {
        console.warn(error);
    }
});
var loadStripe = function loadStripe() {
    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
        args[_key] = arguments[_key];
    }
    loadCalled = true;
    var startTime = Date.now(); // if previous attempts are unsuccessful, will re-load script
    return getStripePromise().then(function(maybeStripe) {
        return initStripe(maybeStripe, args, startTime);
    });
};
;
}}),
"[project]/node_modules/@stripe/stripe-js/lib/index.mjs [app-client] (ecmascript) <locals>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stripe$2f$stripe$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@stripe/stripe-js/dist/index.mjs [app-client] (ecmascript)");
;
}}),
"[project]/node_modules/@stripe/stripe-js/lib/index.mjs [app-client] (ecmascript) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stripe$2f$stripe$2d$js$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@stripe/stripe-js/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$stripe$2f$stripe$2d$js$2f$lib$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@stripe/stripe-js/lib/index.mjs [app-client] (ecmascript) <locals>");
}}),
"[project]/node_modules/@stripe/react-stripe-js/dist/react-stripe.umd.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
(function(global, factory) {
    ("TURBOPACK compile-time truthy", 1) ? factory(exports, __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)")) : ("TURBOPACK unreachable", undefined);
})(this, function(exports1, React) {
    'use strict';
    function ownKeys(object, enumerableOnly) {
        var keys = Object.keys(object);
        if (Object.getOwnPropertySymbols) {
            var symbols = Object.getOwnPropertySymbols(object);
            if (enumerableOnly) {
                symbols = symbols.filter(function(sym) {
                    return Object.getOwnPropertyDescriptor(object, sym).enumerable;
                });
            }
            keys.push.apply(keys, symbols);
        }
        return keys;
    }
    function _objectSpread2(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i] != null ? arguments[i] : {};
            if (i % 2) {
                ownKeys(Object(source), true).forEach(function(key) {
                    _defineProperty(target, key, source[key]);
                });
            } else if (Object.getOwnPropertyDescriptors) {
                Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
            } else {
                ownKeys(Object(source)).forEach(function(key) {
                    Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
                });
            }
        }
        return target;
    }
    function _typeof(obj) {
        "@babel/helpers - typeof";
        if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
            _typeof = function(obj) {
                return typeof obj;
            };
        } else {
            _typeof = function(obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
            };
        }
        return _typeof(obj);
    }
    function _defineProperty(obj, key, value) {
        if (key in obj) {
            Object.defineProperty(obj, key, {
                value: value,
                enumerable: true,
                configurable: true,
                writable: true
            });
        } else {
            obj[key] = value;
        }
        return obj;
    }
    function _objectWithoutPropertiesLoose(source, excluded) {
        if (source == null) return {};
        var target = {};
        var sourceKeys = Object.keys(source);
        var key, i;
        for(i = 0; i < sourceKeys.length; i++){
            key = sourceKeys[i];
            if (excluded.indexOf(key) >= 0) continue;
            target[key] = source[key];
        }
        return target;
    }
    function _objectWithoutProperties(source, excluded) {
        if (source == null) return {};
        var target = _objectWithoutPropertiesLoose(source, excluded);
        var key, i;
        if (Object.getOwnPropertySymbols) {
            var sourceSymbolKeys = Object.getOwnPropertySymbols(source);
            for(i = 0; i < sourceSymbolKeys.length; i++){
                key = sourceSymbolKeys[i];
                if (excluded.indexOf(key) >= 0) continue;
                if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
                target[key] = source[key];
            }
        }
        return target;
    }
    function _slicedToArray(arr, i) {
        return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
    }
    function _arrayWithHoles(arr) {
        if (Array.isArray(arr)) return arr;
    }
    function _iterableToArrayLimit(arr, i) {
        var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);
        if (_i == null) return;
        var _arr = [];
        var _n = true;
        var _d = false;
        var _s, _e;
        try {
            for(_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true){
                _arr.push(_s.value);
                if (i && _arr.length === i) break;
            }
        } catch (err) {
            _d = true;
            _e = err;
        } finally{
            try {
                if (!_n && _i["return"] != null) _i["return"]();
            } finally{
                if (_d) throw _e;
            }
        }
        return _arr;
    }
    function _unsupportedIterableToArray(o, minLen) {
        if (!o) return;
        if (typeof o === "string") return _arrayLikeToArray(o, minLen);
        var n = Object.prototype.toString.call(o).slice(8, -1);
        if (n === "Object" && o.constructor) n = o.constructor.name;
        if (n === "Map" || n === "Set") return Array.from(o);
        if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
    }
    function _arrayLikeToArray(arr, len) {
        if (len == null || len > arr.length) len = arr.length;
        for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
        return arr2;
    }
    function _nonIterableRest() {
        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    function getDefaultExportFromCjs(x) {
        return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
    }
    var propTypes = {
        exports: {}
    };
    /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var ReactPropTypesSecret_1;
    var hasRequiredReactPropTypesSecret;
    function requireReactPropTypesSecret() {
        if (hasRequiredReactPropTypesSecret) return ReactPropTypesSecret_1;
        hasRequiredReactPropTypesSecret = 1;
        var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
        ReactPropTypesSecret_1 = ReactPropTypesSecret;
        return ReactPropTypesSecret_1;
    }
    /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ var factoryWithThrowingShims;
    var hasRequiredFactoryWithThrowingShims;
    function requireFactoryWithThrowingShims() {
        if (hasRequiredFactoryWithThrowingShims) return factoryWithThrowingShims;
        hasRequiredFactoryWithThrowingShims = 1;
        var ReactPropTypesSecret = requireReactPropTypesSecret();
        function emptyFunction() {}
        function emptyFunctionWithReset() {}
        emptyFunctionWithReset.resetWarningCache = emptyFunction;
        factoryWithThrowingShims = function() {
            function shim(props, propName, componentName, location, propFullName, secret) {
                if (secret === ReactPropTypesSecret) {
                    // It is still safe when called from React.
                    return;
                }
                var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use PropTypes.checkPropTypes() to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
                err.name = 'Invariant Violation';
                throw err;
            }
            shim.isRequired = shim;
            function getShim() {
                return shim;
            }
            // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
            var ReactPropTypes = {
                array: shim,
                bool: shim,
                func: shim,
                number: shim,
                object: shim,
                string: shim,
                symbol: shim,
                any: shim,
                arrayOf: getShim,
                element: shim,
                elementType: shim,
                instanceOf: getShim,
                node: shim,
                objectOf: getShim,
                oneOf: getShim,
                oneOfType: getShim,
                shape: getShim,
                exact: getShim,
                checkPropTypes: emptyFunctionWithReset,
                resetWarningCache: emptyFunction
            };
            ReactPropTypes.PropTypes = ReactPropTypes;
            return ReactPropTypes;
        };
        return factoryWithThrowingShims;
    }
    /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */ {
        // By explicitly using `prop-types` you are opting into new production behavior.
        // http://fb.me/prop-types-in-prod
        propTypes.exports = requireFactoryWithThrowingShims()();
    }
    var propTypesExports = propTypes.exports;
    var PropTypes = /*@__PURE__*/ getDefaultExportFromCjs(propTypesExports);
    var useAttachEvent = function useAttachEvent(element, event, cb) {
        var cbDefined = !!cb;
        var cbRef = React.useRef(cb); // In many integrations the callback prop changes on each render.
        // Using a ref saves us from calling element.on/.off every render.
        React.useEffect({
            "useAttachEvent.useEffect": function() {
                cbRef.current = cb;
            }
        }["useAttachEvent.useEffect"], [
            cb
        ]);
        React.useEffect({
            "useAttachEvent.useEffect": function() {
                if (!cbDefined || !element) {
                    return ({
                        "useAttachEvent.useEffect": function() {}
                    })["useAttachEvent.useEffect"];
                }
                var decoratedCb = function decoratedCb() {
                    if (cbRef.current) {
                        cbRef.current.apply(cbRef, arguments);
                    }
                };
                element.on(event, decoratedCb);
                return ({
                    "useAttachEvent.useEffect": function() {
                        element.off(event, decoratedCb);
                    }
                })["useAttachEvent.useEffect"];
            }
        }["useAttachEvent.useEffect"], [
            cbDefined,
            event,
            element,
            cbRef
        ]);
    };
    var usePrevious = function usePrevious(value) {
        var ref = React.useRef(value);
        React.useEffect({
            "usePrevious.useEffect": function() {
                ref.current = value;
            }
        }["usePrevious.useEffect"], [
            value
        ]);
        return ref.current;
    };
    var isUnknownObject = function isUnknownObject(raw) {
        return raw !== null && _typeof(raw) === 'object';
    };
    var isPromise = function isPromise(raw) {
        return isUnknownObject(raw) && typeof raw.then === 'function';
    }; // We are using types to enforce the `stripe` prop in this lib,
    // but in an untyped integration `stripe` could be anything, so we need
    // to do some sanity validation to prevent type errors.
    var isStripe = function isStripe(raw) {
        return isUnknownObject(raw) && typeof raw.elements === 'function' && typeof raw.createToken === 'function' && typeof raw.createPaymentMethod === 'function' && typeof raw.confirmCardPayment === 'function';
    };
    var PLAIN_OBJECT_STR = '[object Object]';
    var isEqual = function isEqual(left, right) {
        if (!isUnknownObject(left) || !isUnknownObject(right)) {
            return left === right;
        }
        var leftArray = Array.isArray(left);
        var rightArray = Array.isArray(right);
        if (leftArray !== rightArray) return false;
        var leftPlainObject = Object.prototype.toString.call(left) === PLAIN_OBJECT_STR;
        var rightPlainObject = Object.prototype.toString.call(right) === PLAIN_OBJECT_STR;
        if (leftPlainObject !== rightPlainObject) return false; // not sure what sort of special object this is (regexp is one option), so
        // fallback to reference check.
        if (!leftPlainObject && !leftArray) return left === right;
        var leftKeys = Object.keys(left);
        var rightKeys = Object.keys(right);
        if (leftKeys.length !== rightKeys.length) return false;
        var keySet = {};
        for(var i = 0; i < leftKeys.length; i += 1){
            keySet[leftKeys[i]] = true;
        }
        for(var _i = 0; _i < rightKeys.length; _i += 1){
            keySet[rightKeys[_i]] = true;
        }
        var allKeys = Object.keys(keySet);
        if (allKeys.length !== leftKeys.length) {
            return false;
        }
        var l = left;
        var r = right;
        var pred = function pred(key) {
            return isEqual(l[key], r[key]);
        };
        return allKeys.every(pred);
    };
    var extractAllowedOptionsUpdates = function extractAllowedOptionsUpdates(options, prevOptions, immutableKeys) {
        if (!isUnknownObject(options)) {
            return null;
        }
        return Object.keys(options).reduce(function(newOptions, key) {
            var isUpdated = !isUnknownObject(prevOptions) || !isEqual(options[key], prevOptions[key]);
            if (immutableKeys.includes(key)) {
                if (isUpdated) {
                    console.warn("Unsupported prop change: options.".concat(key, " is not a mutable property."));
                }
                return newOptions;
            }
            if (!isUpdated) {
                return newOptions;
            }
            return _objectSpread2(_objectSpread2({}, newOptions || {}), {}, _defineProperty({}, key, options[key]));
        }, null);
    };
    var INVALID_STRIPE_ERROR$2 = 'Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.'; // We are using types to enforce the `stripe` prop in this lib, but in a real
    // integration `stripe` could be anything, so we need to do some sanity
    // validation to prevent type errors.
    var validateStripe = function validateStripe(maybeStripe) {
        var errorMsg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : INVALID_STRIPE_ERROR$2;
        if (maybeStripe === null || isStripe(maybeStripe)) {
            return maybeStripe;
        }
        throw new Error(errorMsg);
    };
    var parseStripeProp = function parseStripeProp(raw) {
        var errorMsg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : INVALID_STRIPE_ERROR$2;
        if (isPromise(raw)) {
            return {
                tag: 'async',
                stripePromise: Promise.resolve(raw).then(function(result) {
                    return validateStripe(result, errorMsg);
                })
            };
        }
        var stripe = validateStripe(raw, errorMsg);
        if (stripe === null) {
            return {
                tag: 'empty'
            };
        }
        return {
            tag: 'sync',
            stripe: stripe
        };
    };
    var registerWithStripeJs = function registerWithStripeJs(stripe) {
        if (!stripe || !stripe._registerWrapper || !stripe.registerAppInfo) {
            return;
        }
        stripe._registerWrapper({
            name: 'react-stripe-js',
            version: "2.8.1"
        });
        stripe.registerAppInfo({
            name: 'react-stripe-js',
            version: "2.8.1",
            url: 'https://stripe.com/docs/stripe-js/react'
        });
    };
    var ElementsContext = /*#__PURE__*/ React.createContext(null);
    ElementsContext.displayName = 'ElementsContext';
    var parseElementsContext = function parseElementsContext(ctx, useCase) {
        if (!ctx) {
            throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(useCase, " in an <Elements> provider."));
        }
        return ctx;
    };
    /**
   * The `Elements` provider allows you to use [Element components](https://stripe.com/docs/stripe-js/react#element-components) and access the [Stripe object](https://stripe.com/docs/js/initializing) in any nested component.
   * Render an `Elements` provider at the root of your React app so that it is available everywhere you need it.
   *
   * To use the `Elements` provider, call `loadStripe` from `@stripe/stripe-js` with your publishable key.
   * The `loadStripe` function will asynchronously load the Stripe.js script and initialize a `Stripe` object.
   * Pass the returned `Promise` to `Elements`.
   *
   * @docs https://stripe.com/docs/stripe-js/react#elements-provider
   */ var Elements = function Elements(_ref) {
        var rawStripeProp = _ref.stripe, options = _ref.options, children = _ref.children;
        var parsed = React.useMemo({
            "Elements.useMemo[parsed]": function() {
                return parseStripeProp(rawStripeProp);
            }
        }["Elements.useMemo[parsed]"], [
            rawStripeProp
        ]); // For a sync stripe instance, initialize into context
        var _React$useState = React.useState({
            "Elements.useState[_React$useState]": function() {
                return {
                    stripe: parsed.tag === 'sync' ? parsed.stripe : null,
                    elements: parsed.tag === 'sync' ? parsed.stripe.elements(options) : null
                };
            }
        }["Elements.useState[_React$useState]"]), _React$useState2 = _slicedToArray(_React$useState, 2), ctx = _React$useState2[0], setContext = _React$useState2[1];
        React.useEffect({
            "Elements.useEffect": function() {
                var isMounted = true;
                var safeSetContext = function safeSetContext(stripe) {
                    setContext({
                        "Elements.useEffect.safeSetContext": function(ctx) {
                            // no-op if we already have a stripe instance (https://github.com/stripe/react-stripe-js/issues/296)
                            if (ctx.stripe) return ctx;
                            return {
                                stripe: stripe,
                                elements: stripe.elements(options)
                            };
                        }
                    }["Elements.useEffect.safeSetContext"]);
                }; // For an async stripePromise, store it in context once resolved
                if (parsed.tag === 'async' && !ctx.stripe) {
                    parsed.stripePromise.then({
                        "Elements.useEffect": function(stripe) {
                            if (stripe && isMounted) {
                                // Only update Elements context if the component is still mounted
                                // and stripe is not null. We allow stripe to be null to make
                                // handling SSR easier.
                                safeSetContext(stripe);
                            }
                        }
                    }["Elements.useEffect"]);
                } else if (parsed.tag === 'sync' && !ctx.stripe) {
                    // Or, handle a sync stripe instance going from null -> populated
                    safeSetContext(parsed.stripe);
                }
                return ({
                    "Elements.useEffect": function() {
                        isMounted = false;
                    }
                })["Elements.useEffect"];
            }
        }["Elements.useEffect"], [
            parsed,
            ctx,
            options
        ]); // Warn on changes to stripe prop
        var prevStripe = usePrevious(rawStripeProp);
        React.useEffect({
            "Elements.useEffect": function() {
                if (prevStripe !== null && prevStripe !== rawStripeProp) {
                    console.warn('Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it.');
                }
            }
        }["Elements.useEffect"], [
            prevStripe,
            rawStripeProp
        ]); // Apply updates to elements when options prop has relevant changes
        var prevOptions = usePrevious(options);
        React.useEffect({
            "Elements.useEffect": function() {
                if (!ctx.elements) {
                    return;
                }
                var updates = extractAllowedOptionsUpdates(options, prevOptions, [
                    'clientSecret',
                    'fonts'
                ]);
                if (updates) {
                    ctx.elements.update(updates);
                }
            }
        }["Elements.useEffect"], [
            options,
            prevOptions,
            ctx.elements
        ]); // Attach react-stripe-js version to stripe.js instance
        React.useEffect({
            "Elements.useEffect": function() {
                registerWithStripeJs(ctx.stripe);
            }
        }["Elements.useEffect"], [
            ctx.stripe
        ]);
        return /*#__PURE__*/ React.createElement(ElementsContext.Provider, {
            value: ctx
        }, children);
    };
    Elements.propTypes = {
        stripe: PropTypes.any,
        options: PropTypes.object
    };
    var useElementsContextWithUseCase = function useElementsContextWithUseCase(useCaseMessage) {
        var ctx = React.useContext(ElementsContext);
        return parseElementsContext(ctx, useCaseMessage);
    };
    /**
   * @docs https://stripe.com/docs/stripe-js/react#useelements-hook
   */ var useElements = function useElements() {
        var _useElementsContextWi = useElementsContextWithUseCase('calls useElements()'), elements = _useElementsContextWi.elements;
        return elements;
    };
    /**
   * @docs https://stripe.com/docs/stripe-js/react#elements-consumer
   */ var ElementsConsumer = function ElementsConsumer(_ref2) {
        var children = _ref2.children;
        var ctx = useElementsContextWithUseCase('mounts <ElementsConsumer>'); // Assert to satisfy the busted React.FC return type (it should be ReactNode)
        return children(ctx);
    };
    ElementsConsumer.propTypes = {
        children: PropTypes.func.isRequired
    };
    var _excluded = [
        "on",
        "session"
    ];
    var CustomCheckoutSdkContext = /*#__PURE__*/ React.createContext(null);
    CustomCheckoutSdkContext.displayName = 'CustomCheckoutSdkContext';
    var parseCustomCheckoutSdkContext = function parseCustomCheckoutSdkContext(ctx, useCase) {
        if (!ctx) {
            throw new Error("Could not find CustomCheckoutProvider context; You need to wrap the part of your app that ".concat(useCase, " in an <CustomCheckoutProvider> provider."));
        }
        return ctx;
    };
    var CustomCheckoutContext = /*#__PURE__*/ React.createContext(null);
    CustomCheckoutContext.displayName = 'CustomCheckoutContext';
    var extractCustomCheckoutContextValue = function extractCustomCheckoutContextValue(customCheckoutSdk, sessionState) {
        if (!customCheckoutSdk) {
            return null;
        }
        customCheckoutSdk.on;
        customCheckoutSdk.session;
        var actions = _objectWithoutProperties(customCheckoutSdk, _excluded);
        if (!sessionState) {
            return _objectSpread2(_objectSpread2({}, actions), customCheckoutSdk.session());
        }
        return _objectSpread2(_objectSpread2({}, actions), sessionState);
    };
    var INVALID_STRIPE_ERROR$1 = 'Invalid prop `stripe` supplied to `CustomCheckoutProvider`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.';
    var CustomCheckoutProvider = function CustomCheckoutProvider(_ref) {
        var rawStripeProp = _ref.stripe, options = _ref.options, children = _ref.children;
        var parsed = React.useMemo({
            "CustomCheckoutProvider.useMemo[parsed]": function() {
                return parseStripeProp(rawStripeProp, INVALID_STRIPE_ERROR$1);
            }
        }["CustomCheckoutProvider.useMemo[parsed]"], [
            rawStripeProp
        ]); // State used to trigger a re-render when sdk.session is updated
        var _React$useState = React.useState(null), _React$useState2 = _slicedToArray(_React$useState, 2), session = _React$useState2[0], setSession = _React$useState2[1];
        var _React$useState3 = React.useState({
            "CustomCheckoutProvider.useState[_React$useState3]": function() {
                return {
                    stripe: parsed.tag === 'sync' ? parsed.stripe : null,
                    customCheckoutSdk: null
                };
            }
        }["CustomCheckoutProvider.useState[_React$useState3]"]), _React$useState4 = _slicedToArray(_React$useState3, 2), ctx = _React$useState4[0], setContext = _React$useState4[1];
        var safeSetContext = function safeSetContext(stripe, customCheckoutSdk) {
            setContext(function(ctx) {
                if (ctx.stripe && ctx.customCheckoutSdk) {
                    return ctx;
                }
                return {
                    stripe: stripe,
                    customCheckoutSdk: customCheckoutSdk
                };
            });
        }; // Ref used to avoid calling initCustomCheckout multiple times when options changes
        var initCustomCheckoutCalledRef = React.useRef(false);
        React.useEffect({
            "CustomCheckoutProvider.useEffect": function() {
                var isMounted = true;
                if (parsed.tag === 'async' && !ctx.stripe) {
                    parsed.stripePromise.then({
                        "CustomCheckoutProvider.useEffect": function(stripe) {
                            if (stripe && isMounted && !initCustomCheckoutCalledRef.current) {
                                // Only update context if the component is still mounted
                                // and stripe is not null. We allow stripe to be null to make
                                // handling SSR easier.
                                initCustomCheckoutCalledRef.current = true;
                                stripe.initCustomCheckout(options).then({
                                    "CustomCheckoutProvider.useEffect": function(customCheckoutSdk) {
                                        if (customCheckoutSdk) {
                                            safeSetContext(stripe, customCheckoutSdk);
                                            customCheckoutSdk.on('change', setSession);
                                        }
                                    }
                                }["CustomCheckoutProvider.useEffect"]);
                            }
                        }
                    }["CustomCheckoutProvider.useEffect"]);
                } else if (parsed.tag === 'sync' && parsed.stripe && !initCustomCheckoutCalledRef.current) {
                    initCustomCheckoutCalledRef.current = true;
                    parsed.stripe.initCustomCheckout(options).then({
                        "CustomCheckoutProvider.useEffect": function(customCheckoutSdk) {
                            if (customCheckoutSdk) {
                                safeSetContext(parsed.stripe, customCheckoutSdk);
                                customCheckoutSdk.on('change', setSession);
                            }
                        }
                    }["CustomCheckoutProvider.useEffect"]);
                }
                return ({
                    "CustomCheckoutProvider.useEffect": function() {
                        isMounted = false;
                    }
                })["CustomCheckoutProvider.useEffect"];
            }
        }["CustomCheckoutProvider.useEffect"], [
            parsed,
            ctx,
            options,
            setSession
        ]); // Warn on changes to stripe prop
        var prevStripe = usePrevious(rawStripeProp);
        React.useEffect({
            "CustomCheckoutProvider.useEffect": function() {
                if (prevStripe !== null && prevStripe !== rawStripeProp) {
                    console.warn('Unsupported prop change on CustomCheckoutProvider: You cannot change the `stripe` prop after setting it.');
                }
            }
        }["CustomCheckoutProvider.useEffect"], [
            prevStripe,
            rawStripeProp
        ]); // Apply updates to elements when options prop has relevant changes
        var prevOptions = usePrevious(options);
        React.useEffect({
            "CustomCheckoutProvider.useEffect": function() {
                var _prevOptions$elements, _options$elementsOpti;
                if (!ctx.customCheckoutSdk) {
                    return;
                }
                if (options.clientSecret && !isUnknownObject(prevOptions) && !isEqual(options.clientSecret, prevOptions.clientSecret)) {
                    console.warn('Unsupported prop change: options.client_secret is not a mutable property.');
                }
                var previousAppearance = prevOptions === null || prevOptions === void 0 ? void 0 : (_prevOptions$elements = prevOptions.elementsOptions) === null || _prevOptions$elements === void 0 ? void 0 : _prevOptions$elements.appearance;
                var currentAppearance = options === null || options === void 0 ? void 0 : (_options$elementsOpti = options.elementsOptions) === null || _options$elementsOpti === void 0 ? void 0 : _options$elementsOpti.appearance;
                if (currentAppearance && !isEqual(currentAppearance, previousAppearance)) {
                    ctx.customCheckoutSdk.changeAppearance(currentAppearance);
                }
            }
        }["CustomCheckoutProvider.useEffect"], [
            options,
            prevOptions,
            ctx.customCheckoutSdk
        ]); // Attach react-stripe-js version to stripe.js instance
        React.useEffect({
            "CustomCheckoutProvider.useEffect": function() {
                registerWithStripeJs(ctx.stripe);
            }
        }["CustomCheckoutProvider.useEffect"], [
            ctx.stripe
        ]);
        var customCheckoutContextValue = React.useMemo({
            "CustomCheckoutProvider.useMemo[customCheckoutContextValue]": function() {
                return extractCustomCheckoutContextValue(ctx.customCheckoutSdk, session);
            }
        }["CustomCheckoutProvider.useMemo[customCheckoutContextValue]"], [
            ctx.customCheckoutSdk,
            session
        ]);
        if (!ctx.customCheckoutSdk) {
            return null;
        }
        return /*#__PURE__*/ React.createElement(CustomCheckoutSdkContext.Provider, {
            value: ctx
        }, /*#__PURE__*/ React.createElement(CustomCheckoutContext.Provider, {
            value: customCheckoutContextValue
        }, children));
    };
    CustomCheckoutProvider.propTypes = {
        stripe: PropTypes.any,
        options: PropTypes.shape({
            clientSecret: PropTypes.string.isRequired,
            elementsOptions: PropTypes.object
        }).isRequired
    };
    var useCustomCheckoutSdkContextWithUseCase = function useCustomCheckoutSdkContextWithUseCase(useCaseString) {
        var ctx = React.useContext(CustomCheckoutSdkContext);
        return parseCustomCheckoutSdkContext(ctx, useCaseString);
    };
    var useElementsOrCustomCheckoutSdkContextWithUseCase = function useElementsOrCustomCheckoutSdkContextWithUseCase(useCaseString) {
        var customCheckoutSdkContext = React.useContext(CustomCheckoutSdkContext);
        var elementsContext = React.useContext(ElementsContext);
        if (customCheckoutSdkContext && elementsContext) {
            throw new Error("You cannot wrap the part of your app that ".concat(useCaseString, " in both <CustomCheckoutProvider> and <Elements> providers."));
        }
        if (customCheckoutSdkContext) {
            return parseCustomCheckoutSdkContext(customCheckoutSdkContext, useCaseString);
        }
        return parseElementsContext(elementsContext, useCaseString);
    };
    var useCustomCheckout = function useCustomCheckout() {
        // ensure it's in CustomCheckoutProvider
        useCustomCheckoutSdkContextWithUseCase('calls useCustomCheckout()');
        var ctx = React.useContext(CustomCheckoutContext);
        if (!ctx) {
            throw new Error('Could not find CustomCheckout Context; You need to wrap the part of your app that calls useCustomCheckout() in an <CustomCheckoutProvider> provider.');
        }
        return ctx;
    };
    var capitalized = function capitalized(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };
    var createElementComponent = function createElementComponent(type, isServer) {
        var displayName = "".concat(capitalized(type), "Element");
        var ClientElement = function ClientElement(_ref) {
            var id = _ref.id, className = _ref.className, _ref$options = _ref.options, options = _ref$options === void 0 ? {} : _ref$options, onBlur = _ref.onBlur, onFocus = _ref.onFocus, onReady = _ref.onReady, onChange = _ref.onChange, onEscape = _ref.onEscape, onClick = _ref.onClick, onLoadError = _ref.onLoadError, onLoaderStart = _ref.onLoaderStart, onNetworksChange = _ref.onNetworksChange, onConfirm = _ref.onConfirm, onCancel = _ref.onCancel, onShippingAddressChange = _ref.onShippingAddressChange, onShippingRateChange = _ref.onShippingRateChange;
            var ctx = useElementsOrCustomCheckoutSdkContextWithUseCase("mounts <".concat(displayName, ">"));
            var elements = 'elements' in ctx ? ctx.elements : null;
            var customCheckoutSdk = 'customCheckoutSdk' in ctx ? ctx.customCheckoutSdk : null;
            var _React$useState = React.useState(null), _React$useState2 = _slicedToArray(_React$useState, 2), element = _React$useState2[0], setElement = _React$useState2[1];
            var elementRef = React.useRef(null);
            var domNode = React.useRef(null); // For every event where the merchant provides a callback, call element.on
            // with that callback. If the merchant ever changes the callback, removes
            // the old callback with element.off and then call element.on with the new one.
            useAttachEvent(element, 'blur', onBlur);
            useAttachEvent(element, 'focus', onFocus);
            useAttachEvent(element, 'escape', onEscape);
            useAttachEvent(element, 'click', onClick);
            useAttachEvent(element, 'loaderror', onLoadError);
            useAttachEvent(element, 'loaderstart', onLoaderStart);
            useAttachEvent(element, 'networkschange', onNetworksChange);
            useAttachEvent(element, 'confirm', onConfirm);
            useAttachEvent(element, 'cancel', onCancel);
            useAttachEvent(element, 'shippingaddresschange', onShippingAddressChange);
            useAttachEvent(element, 'shippingratechange', onShippingRateChange);
            useAttachEvent(element, 'change', onChange);
            var readyCallback;
            if (onReady) {
                if (type === 'expressCheckout') {
                    // Passes through the event, which includes visible PM types
                    readyCallback = onReady;
                } else {
                    // For other Elements, pass through the Element itself.
                    readyCallback = function readyCallback() {
                        onReady(element);
                    };
                }
            }
            useAttachEvent(element, 'ready', readyCallback);
            React.useLayoutEffect({
                "createElementComponent.ClientElement.useLayoutEffect": function() {
                    if (elementRef.current === null && domNode.current !== null && (elements || customCheckoutSdk)) {
                        var newElement = null;
                        if (customCheckoutSdk) {
                            newElement = customCheckoutSdk.createElement(type, options);
                        } else if (elements) {
                            newElement = elements.create(type, options);
                        } // Store element in a ref to ensure it's _immediately_ available in cleanup hooks in StrictMode
                        elementRef.current = newElement; // Store element in state to facilitate event listener attachment
                        setElement(newElement);
                        if (newElement) {
                            newElement.mount(domNode.current);
                        }
                    }
                }
            }["createElementComponent.ClientElement.useLayoutEffect"], [
                elements,
                customCheckoutSdk,
                options
            ]);
            var prevOptions = usePrevious(options);
            React.useEffect({
                "createElementComponent.ClientElement.useEffect": function() {
                    if (!elementRef.current) {
                        return;
                    }
                    var updates = extractAllowedOptionsUpdates(options, prevOptions, [
                        'paymentRequest'
                    ]);
                    if (updates && 'update' in elementRef.current) {
                        elementRef.current.update(updates);
                    }
                }
            }["createElementComponent.ClientElement.useEffect"], [
                options,
                prevOptions
            ]);
            React.useLayoutEffect({
                "createElementComponent.ClientElement.useLayoutEffect": function() {
                    return ({
                        "createElementComponent.ClientElement.useLayoutEffect": function() {
                            if (elementRef.current && typeof elementRef.current.destroy === 'function') {
                                try {
                                    elementRef.current.destroy();
                                    elementRef.current = null;
                                } catch (error) {}
                            }
                        }
                    })["createElementComponent.ClientElement.useLayoutEffect"];
                }
            }["createElementComponent.ClientElement.useLayoutEffect"], []);
            return /*#__PURE__*/ React.createElement("div", {
                id: id,
                className: className,
                ref: domNode
            });
        }; // Only render the Element wrapper in a server environment.
        var ServerElement = function ServerElement(props) {
            useElementsOrCustomCheckoutSdkContextWithUseCase("mounts <".concat(displayName, ">"));
            var id = props.id, className = props.className;
            return /*#__PURE__*/ React.createElement("div", {
                id: id,
                className: className
            });
        };
        var Element = isServer ? ServerElement : ClientElement;
        Element.propTypes = {
            id: PropTypes.string,
            className: PropTypes.string,
            onChange: PropTypes.func,
            onBlur: PropTypes.func,
            onFocus: PropTypes.func,
            onReady: PropTypes.func,
            onEscape: PropTypes.func,
            onClick: PropTypes.func,
            onLoadError: PropTypes.func,
            onLoaderStart: PropTypes.func,
            onNetworksChange: PropTypes.func,
            onConfirm: PropTypes.func,
            onCancel: PropTypes.func,
            onShippingAddressChange: PropTypes.func,
            onShippingRateChange: PropTypes.func,
            options: PropTypes.object
        };
        Element.displayName = displayName;
        Element.__elementType = type;
        return Element;
    };
    var isServer = typeof window === 'undefined';
    var EmbeddedCheckoutContext = /*#__PURE__*/ React.createContext(null);
    EmbeddedCheckoutContext.displayName = 'EmbeddedCheckoutProviderContext';
    var useEmbeddedCheckoutContext = function useEmbeddedCheckoutContext() {
        var ctx = React.useContext(EmbeddedCheckoutContext);
        if (!ctx) {
            throw new Error('<EmbeddedCheckout> must be used within <EmbeddedCheckoutProvider>');
        }
        return ctx;
    };
    var INVALID_STRIPE_ERROR = 'Invalid prop `stripe` supplied to `EmbeddedCheckoutProvider`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.';
    var EmbeddedCheckoutProvider = function EmbeddedCheckoutProvider(_ref) {
        var rawStripeProp = _ref.stripe, options = _ref.options, children = _ref.children;
        var parsed = React.useMemo({
            "EmbeddedCheckoutProvider.useMemo[parsed]": function() {
                return parseStripeProp(rawStripeProp, INVALID_STRIPE_ERROR);
            }
        }["EmbeddedCheckoutProvider.useMemo[parsed]"], [
            rawStripeProp
        ]);
        var embeddedCheckoutPromise = React.useRef(null);
        var loadedStripe = React.useRef(null);
        var _React$useState = React.useState({
            embeddedCheckout: null
        }), _React$useState2 = _slicedToArray(_React$useState, 2), ctx = _React$useState2[0], setContext = _React$useState2[1];
        React.useEffect({
            "EmbeddedCheckoutProvider.useEffect": function() {
                // Don't support any ctx updates once embeddedCheckout or stripe is set.
                if (loadedStripe.current || embeddedCheckoutPromise.current) {
                    return;
                }
                var setStripeAndInitEmbeddedCheckout = function setStripeAndInitEmbeddedCheckout(stripe) {
                    if (loadedStripe.current || embeddedCheckoutPromise.current) return;
                    loadedStripe.current = stripe;
                    embeddedCheckoutPromise.current = loadedStripe.current.initEmbeddedCheckout(options).then({
                        "EmbeddedCheckoutProvider.useEffect.setStripeAndInitEmbeddedCheckout": function(embeddedCheckout) {
                            setContext({
                                embeddedCheckout: embeddedCheckout
                            });
                        }
                    }["EmbeddedCheckoutProvider.useEffect.setStripeAndInitEmbeddedCheckout"]);
                }; // For an async stripePromise, store it once resolved
                if (parsed.tag === 'async' && !loadedStripe.current && (options.clientSecret || options.fetchClientSecret)) {
                    parsed.stripePromise.then({
                        "EmbeddedCheckoutProvider.useEffect": function(stripe) {
                            if (stripe) {
                                setStripeAndInitEmbeddedCheckout(stripe);
                            }
                        }
                    }["EmbeddedCheckoutProvider.useEffect"]);
                } else if (parsed.tag === 'sync' && !loadedStripe.current && (options.clientSecret || options.fetchClientSecret)) {
                    // Or, handle a sync stripe instance going from null -> populated
                    setStripeAndInitEmbeddedCheckout(parsed.stripe);
                }
            }
        }["EmbeddedCheckoutProvider.useEffect"], [
            parsed,
            options,
            ctx,
            loadedStripe
        ]);
        React.useEffect({
            "EmbeddedCheckoutProvider.useEffect": function() {
                // cleanup on unmount
                return ({
                    "EmbeddedCheckoutProvider.useEffect": function() {
                        // If embedded checkout is fully initialized, destroy it.
                        if (ctx.embeddedCheckout) {
                            embeddedCheckoutPromise.current = null;
                            ctx.embeddedCheckout.destroy();
                        } else if (embeddedCheckoutPromise.current) {
                            // If embedded checkout is still initializing, destroy it once
                            // it's done. This could be caused by unmounting very quickly
                            // after mounting.
                            embeddedCheckoutPromise.current.then({
                                "EmbeddedCheckoutProvider.useEffect": function() {
                                    embeddedCheckoutPromise.current = null;
                                    if (ctx.embeddedCheckout) {
                                        ctx.embeddedCheckout.destroy();
                                    }
                                }
                            }["EmbeddedCheckoutProvider.useEffect"]);
                        }
                    }
                })["EmbeddedCheckoutProvider.useEffect"];
            }
        }["EmbeddedCheckoutProvider.useEffect"], [
            ctx.embeddedCheckout
        ]); // Attach react-stripe-js version to stripe.js instance
        React.useEffect({
            "EmbeddedCheckoutProvider.useEffect": function() {
                registerWithStripeJs(loadedStripe);
            }
        }["EmbeddedCheckoutProvider.useEffect"], [
            loadedStripe
        ]); // Warn on changes to stripe prop.
        // The stripe prop value can only go from null to non-null once and
        // can't be changed after that.
        var prevStripe = usePrevious(rawStripeProp);
        React.useEffect({
            "EmbeddedCheckoutProvider.useEffect": function() {
                if (prevStripe !== null && prevStripe !== rawStripeProp) {
                    console.warn('Unsupported prop change on EmbeddedCheckoutProvider: You cannot change the `stripe` prop after setting it.');
                }
            }
        }["EmbeddedCheckoutProvider.useEffect"], [
            prevStripe,
            rawStripeProp
        ]); // Warn on changes to options.
        var prevOptions = usePrevious(options);
        React.useEffect({
            "EmbeddedCheckoutProvider.useEffect": function() {
                if (prevOptions == null) {
                    return;
                }
                if (options == null) {
                    console.warn('Unsupported prop change on EmbeddedCheckoutProvider: You cannot unset options after setting them.');
                    return;
                }
                if (options.clientSecret === undefined && options.fetchClientSecret === undefined) {
                    console.warn('Invalid props passed to EmbeddedCheckoutProvider: You must provide one of either `options.fetchClientSecret` or `options.clientSecret`.');
                }
                if (prevOptions.clientSecret != null && options.clientSecret !== prevOptions.clientSecret) {
                    console.warn('Unsupported prop change on EmbeddedCheckoutProvider: You cannot change the client secret after setting it. Unmount and create a new instance of EmbeddedCheckoutProvider instead.');
                }
                if (prevOptions.fetchClientSecret != null && options.fetchClientSecret !== prevOptions.fetchClientSecret) {
                    console.warn('Unsupported prop change on EmbeddedCheckoutProvider: You cannot change fetchClientSecret after setting it. Unmount and create a new instance of EmbeddedCheckoutProvider instead.');
                }
                if (prevOptions.onComplete != null && options.onComplete !== prevOptions.onComplete) {
                    console.warn('Unsupported prop change on EmbeddedCheckoutProvider: You cannot change the onComplete option after setting it.');
                }
                if (prevOptions.onShippingDetailsChange != null && options.onShippingDetailsChange !== prevOptions.onShippingDetailsChange) {
                    console.warn('Unsupported prop change on EmbeddedCheckoutProvider: You cannot change the onShippingDetailsChange option after setting it.');
                }
                if (prevOptions.onLineItemsChange != null && options.onLineItemsChange !== prevOptions.onLineItemsChange) {
                    console.warn('Unsupported prop change on EmbeddedCheckoutProvider: You cannot change the onLineItemsChange option after setting it.');
                }
            }
        }["EmbeddedCheckoutProvider.useEffect"], [
            prevOptions,
            options
        ]);
        return /*#__PURE__*/ React.createElement(EmbeddedCheckoutContext.Provider, {
            value: ctx
        }, children);
    };
    var EmbeddedCheckoutClientElement = function EmbeddedCheckoutClientElement(_ref) {
        var id = _ref.id, className = _ref.className;
        var _useEmbeddedCheckoutC = useEmbeddedCheckoutContext(), embeddedCheckout = _useEmbeddedCheckoutC.embeddedCheckout;
        var isMounted = React.useRef(false);
        var domNode = React.useRef(null);
        React.useLayoutEffect({
            "EmbeddedCheckoutClientElement.useLayoutEffect": function() {
                if (!isMounted.current && embeddedCheckout && domNode.current !== null) {
                    embeddedCheckout.mount(domNode.current);
                    isMounted.current = true;
                } // Clean up on unmount
                return ({
                    "EmbeddedCheckoutClientElement.useLayoutEffect": function() {
                        if (isMounted.current && embeddedCheckout) {
                            try {
                                embeddedCheckout.unmount();
                                isMounted.current = false;
                            } catch (e) {
                            // Parent effects are destroyed before child effects, so
                            // in cases where both the EmbeddedCheckoutProvider and
                            // the EmbeddedCheckout component are removed at the same
                            // time, the embeddedCheckout instance will be destroyed,
                            // which causes an error when calling unmount.
                            }
                        }
                    }
                })["EmbeddedCheckoutClientElement.useLayoutEffect"];
            }
        }["EmbeddedCheckoutClientElement.useLayoutEffect"], [
            embeddedCheckout
        ]);
        return /*#__PURE__*/ React.createElement("div", {
            ref: domNode,
            id: id,
            className: className
        });
    }; // Only render the wrapper in a server environment.
    var EmbeddedCheckoutServerElement = function EmbeddedCheckoutServerElement(_ref2) {
        var id = _ref2.id, className = _ref2.className;
        // Validate that we are in the right context by calling useEmbeddedCheckoutContext.
        useEmbeddedCheckoutContext();
        return /*#__PURE__*/ React.createElement("div", {
            id: id,
            className: className
        });
    };
    var EmbeddedCheckout = isServer ? EmbeddedCheckoutServerElement : EmbeddedCheckoutClientElement;
    /**
   * @docs https://stripe.com/docs/stripe-js/react#usestripe-hook
   */ var useStripe = function useStripe() {
        var _useElementsOrCustomC = useElementsOrCustomCheckoutSdkContextWithUseCase('calls useStripe()'), stripe = _useElementsOrCustomC.stripe;
        return stripe;
    };
    /**
   * Requires beta access:
   * Contact [Stripe support](https://support.stripe.com/) for more information.
   *
   * @docs https://stripe.com/docs/stripe-js/react#element-components
   */ var AuBankAccountElement = createElementComponent('auBankAccount', isServer);
    /**
   * @docs https://stripe.com/docs/stripe-js/react#element-components
   */ var CardElement = createElementComponent('card', isServer);
    /**
   * @docs https://stripe.com/docs/stripe-js/react#element-components
   */ var CardNumberElement = createElementComponent('cardNumber', isServer);
    /**
   * @docs https://stripe.com/docs/stripe-js/react#element-components
   */ var CardExpiryElement = createElementComponent('cardExpiry', isServer);
    /**
   * @docs https://stripe.com/docs/stripe-js/react#element-components
   */ var CardCvcElement = createElementComponent('cardCvc', isServer);
    /**
   * @docs https://stripe.com/docs/stripe-js/react#element-components
   */ var FpxBankElement = createElementComponent('fpxBank', isServer);
    /**
   * @docs https://stripe.com/docs/stripe-js/react#element-components
   */ var IbanElement = createElementComponent('iban', isServer);
    /**
   * @docs https://stripe.com/docs/stripe-js/react#element-components
   */ var IdealBankElement = createElementComponent('idealBank', isServer);
    /**
   * @docs https://stripe.com/docs/stripe-js/react#element-components
   */ var P24BankElement = createElementComponent('p24Bank', isServer);
    /**
   * @docs https://stripe.com/docs/stripe-js/react#element-components
   */ var EpsBankElement = createElementComponent('epsBank', isServer);
    var PaymentElement = createElementComponent('payment', isServer);
    /**
   * @docs https://stripe.com/docs/stripe-js/react#element-components
   */ var ExpressCheckoutElement = createElementComponent('expressCheckout', isServer);
    /**
   * Requires beta access:
   * Contact [Stripe support](https://support.stripe.com/) for more information.
   */ var CurrencySelectorElement = createElementComponent('currencySelector', isServer);
    /**
   * @docs https://stripe.com/docs/stripe-js/react#element-components
   */ var PaymentRequestButtonElement = createElementComponent('paymentRequestButton', isServer);
    /**
   * @docs https://stripe.com/docs/stripe-js/react#element-components
   */ var LinkAuthenticationElement = createElementComponent('linkAuthentication', isServer);
    /**
   * @docs https://stripe.com/docs/stripe-js/react#element-components
   */ var AddressElement = createElementComponent('address', isServer);
    /**
   * @deprecated
   * Use `AddressElement` instead.
   *
   * @docs https://stripe.com/docs/stripe-js/react#element-components
   */ var ShippingAddressElement = createElementComponent('shippingAddress', isServer);
    /**
   * @docs https://stripe.com/docs/stripe-js/react#element-components
   */ var PaymentMethodMessagingElement = createElementComponent('paymentMethodMessaging', isServer);
    /**
   * @docs https://stripe.com/docs/stripe-js/react#element-components
   */ var AffirmMessageElement = createElementComponent('affirmMessage', isServer);
    /**
   * @docs https://stripe.com/docs/stripe-js/react#element-components
   */ var AfterpayClearpayMessageElement = createElementComponent('afterpayClearpayMessage', isServer);
    exports1.AddressElement = AddressElement;
    exports1.AffirmMessageElement = AffirmMessageElement;
    exports1.AfterpayClearpayMessageElement = AfterpayClearpayMessageElement;
    exports1.AuBankAccountElement = AuBankAccountElement;
    exports1.CardCvcElement = CardCvcElement;
    exports1.CardElement = CardElement;
    exports1.CardExpiryElement = CardExpiryElement;
    exports1.CardNumberElement = CardNumberElement;
    exports1.CurrencySelectorElement = CurrencySelectorElement;
    exports1.CustomCheckoutProvider = CustomCheckoutProvider;
    exports1.Elements = Elements;
    exports1.ElementsConsumer = ElementsConsumer;
    exports1.EmbeddedCheckout = EmbeddedCheckout;
    exports1.EmbeddedCheckoutProvider = EmbeddedCheckoutProvider;
    exports1.EpsBankElement = EpsBankElement;
    exports1.ExpressCheckoutElement = ExpressCheckoutElement;
    exports1.FpxBankElement = FpxBankElement;
    exports1.IbanElement = IbanElement;
    exports1.IdealBankElement = IdealBankElement;
    exports1.LinkAuthenticationElement = LinkAuthenticationElement;
    exports1.P24BankElement = P24BankElement;
    exports1.PaymentElement = PaymentElement;
    exports1.PaymentMethodMessagingElement = PaymentMethodMessagingElement;
    exports1.PaymentRequestButtonElement = PaymentRequestButtonElement;
    exports1.ShippingAddressElement = ShippingAddressElement;
    exports1.useCustomCheckout = useCustomCheckout;
    exports1.useElements = useElements;
    exports1.useStripe = useStripe;
});
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/party-popper.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "__iconNode": (()=>__iconNode),
    "default": (()=>PartyPopper)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M5.8 11.3 2 22l10.7-3.79",
            key: "gwxi1d"
        }
    ],
    [
        "path",
        {
            d: "M4 3h.01",
            key: "1vcuye"
        }
    ],
    [
        "path",
        {
            d: "M22 8h.01",
            key: "1mrtc2"
        }
    ],
    [
        "path",
        {
            d: "M15 2h.01",
            key: "1cjtqr"
        }
    ],
    [
        "path",
        {
            d: "M22 20h.01",
            key: "1mrys2"
        }
    ],
    [
        "path",
        {
            d: "m22 2-2.24.75a2.9 2.9 0 0 0-1.96 3.12c.1.86-.57 1.63-1.45 1.63h-.38c-.86 0-1.6.6-1.76 1.44L14 10",
            key: "hbicv8"
        }
    ],
    [
        "path",
        {
            d: "m22 13-.82-.33c-.86-.34-1.82.2-1.98 1.11c-.11.7-.72 1.22-1.43 1.22H17",
            key: "1i94pl"
        }
    ],
    [
        "path",
        {
            d: "m11 2 .33.82c.34.86-.2 1.82-1.11 1.98C9.52 4.9 9 5.52 9 6.23V7",
            key: "1cofks"
        }
    ],
    [
        "path",
        {
            d: "M11 13c1.93 1.93 2.83 4.17 2 5-.83.83-3.07-.07-5-2-1.93-1.93-2.83-4.17-2-5 .83-.83 3.07.07 5 2Z",
            key: "4kbmks"
        }
    ]
];
const PartyPopper = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("PartyPopper", __iconNode);
;
 //# sourceMappingURL=party-popper.js.map
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/party-popper.js [app-client] (ecmascript) <export default as PartyPopper>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "PartyPopper": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$party$2d$popper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$party$2d$popper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/party-popper.js [app-client] (ecmascript)");
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ __turbopack_context__.s({
    "__iconNode": (()=>__iconNode),
    "default": (()=>LoaderCircle)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-client] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M21 12a9 9 0 1 1-6.219-8.56",
            key: "13zald"
        }
    ]
];
const LoaderCircle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])("LoaderCircle", __iconNode);
;
 //# sourceMappingURL=loader-circle.js.map
}}),
"[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "Loader2": (()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript)");
}}),
}]);

//# sourceMappingURL=_d5ea0005._.js.map