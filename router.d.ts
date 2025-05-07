declare const appRouter: import("@trpc/server/dist/unstable-core-do-not-import").BuiltRouter<{
    ctx: object;
    meta: object;
    errorShape: import("@trpc/server/dist/unstable-core-do-not-import").DefaultErrorShape;
    transformer: false;
}, import("@trpc/server/dist/unstable-core-do-not-import").DecorateCreateRouterOptions<{
    greeting: import("@trpc/server").TRPCQueryProcedure<{
        input: void;
        output: string;
    }>;
}>>;
export type AppRouter = typeof appRouter;
export {};
