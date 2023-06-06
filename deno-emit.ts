import { bundle } from "https://deno.land/x/emit/mod.ts";
const result = await bundle(
new URL('C:\Users\caleb\code\sandbox\deno-build-test\main.ts', import.meta.url),
);

const { code } = result;
Deno.writeTextFile('C:\Users\caleb\code\sandbox\deno-build-test\dist\main.js', code);