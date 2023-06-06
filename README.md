`deno -A run ./deno-emit.ts`
```shell
PS C:\Users\caleb\code\sandbox\deno-build-test> deno run --allow-all .\deno-emit.ts
error: Uncaught (in promise) Error: Unable to output during bundling.
      const ret = new Error(getStringFromWasm0(arg0, arg1));
                  ^
    at __wbg_new_87297f22973157c8 (https://deno.land/x/emit@0.24.0/emit.generated.js:509:19)
    at <anonymous> (file:///C:/Users/caleb/AppData/Local/deno-wasmbuild/9da37c1955ad9ccc04d9f3aaa76f4ee03ea13face7dcc7bbc42752ce7eb21a53.wasm:1:7369575)
    at <anonymous> (file:///C:/Users/caleb/AppData/Local/deno-wasmbuild/9da37c1955ad9ccc04d9f3aaa76f4ee03ea13face7dcc7bbc42752ce7eb21a53.wasm:1:1541216)
    at <anonymous> (file:///C:/Users/caleb/AppData/Local/deno-wasmbuild/9da37c1955ad9ccc04d9f3aaa76f4ee03ea13face7dcc7bbc42752ce7eb21a53.wasm:1:6482348)
    at <anonymous> (file:///C:/Users/caleb/AppData/Local/deno-wasmbuild/9da37c1955ad9ccc04d9f3aaa76f4ee03ea13face7dcc7bbc42752ce7eb21a53.wasm:1:7329815)
    at __wbg_adapter_46 (https://deno.land/x/emit@0.24.0/emit.generated.js:241:6)
    at real (https://deno.land/x/emit@0.24.0/emit.generated.js:225:14)
    at eventLoopTick (ext:core/01_core.js:181:11)
```
