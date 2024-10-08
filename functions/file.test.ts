import { exists } from "./file.ts";
import { assertEquals, assertFalse } from "@std/assert";

Deno.test("exists() returns true for existing file", async () => {
  const filePath = "./existingFile.txt";
  await Deno.writeTextFile(filePath, "Hello, world!");
  const result = await exists(filePath);
  assertEquals(result, true);
  await Deno.remove(filePath);
});

Deno.test("exists() returns false for non-existing file", async () => {
  const filePath = "./nonExistingFile.txt";
  const result = await exists(filePath);
  assertFalse(result);
});

Deno.test("exists() returns false for directory", async () => {
  const dirPath = "./existingDir";
  await Deno.mkdir(dirPath);
  const result = await exists(dirPath);
  assertFalse(result);
  await Deno.remove(dirPath);
});
