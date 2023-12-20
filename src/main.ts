import { debug, getInput, info, setOutput } from "npm:@actions/core@1.10.1";
import { context } from "npm:@actions/github@6.0.0";
import { normalize, trimTailDotVim } from "./normalize.ts";

const main = () => {
  info("Start main process");
  debug(JSON.stringify(context.repo));
  const stripDotVim =
    getInput("trim-tail-dot-vim", { required: false }) === "true";
  if (stripDotVim) {
    info(`You specify trim-tail-dot-vim.`);
  }
  info("Complete main process");
  const normalized = normalize(context.repo.repo);
  setOutput(
    "normalizedName",
    stripDotVim ? trimTailDotVim(normalized) : normalized,
  );
};
main();
