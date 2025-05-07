# trpc-type-leak-demo

This library demonstrates a type leak in `@trpc/server` when compiling into declaration files. `router.ts` and `trpc.ts` are taken verbatim from https://trpc.io/docs/server/routers. Note the import against the `dist` subtree in the generated declaration file, which is not exported by `@trpc/server`'s `package.json`. One can recreate the issue by running `npm i` and then `npx tsc`.

In production I'm running a patch to get around this, but it's not pretty:
```
diff --git a/package.json b/package.json
index 1f03d01bd1148bffc1434ac66f9feb52ba654bc3..f73cdbd446c2421a377af8ce0459288e1ee1162b 100644
--- a/package.json
+++ b/package.json
@@ -73,6 +73,11 @@
       "require": "./dist/adapters/ws.js",
       "default": "./dist/adapters/ws.js"
     },
+    "./dist/*": {
+      "import": "./dist/*",
+      "require": "./dist/*",
+      "default": "./dist/*"
+    },
     "./http": {
       "import": "./dist/http.mjs",
       "require": "./dist/http.js",
```