import { assertEquals } from "https://deno.land/std@0.204.0/assert/mod.ts";
import { normalize, trimTailDotVim } from "../src/normalize.ts";

type Parameter = {
  input: string;
  expected: string;
};

Deno.test("normalize", async (t) => {
  const paratemeters: Parameter[] = [
    { input: "nvim-treesitter", expected: "treesitter" },
    { input: "some-nvim-plugin", expected: "some-nvim-plugin" },
    { input: "some-plugin-vim", expected: "some-plugin" },
    { input: "some-plugin.vim", expected: "some-plugin.vim" },
  ];
  for (const { input, expected } of paratemeters) {
    await t.step(`Check normalize "${input}" be "${expected}"`, () => {
      assertEquals(normalize(input), expected);
    });
  }
});

Deno.test("trimTailDotVim", async (t) => {
  await t.step("1", () => {
    assertEquals(trimTailDotVim("foo.vim"), "foo");
  });
});
