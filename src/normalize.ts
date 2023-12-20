export function normalize(
  rawName: string,
  pattern = String.raw`^(n?vim|dps|denops)[_-]|[_-]n?vim$`,
): string {
  const replacePattern = new RegExp(pattern, "g");
  return rawName.replaceAll(replacePattern, "");
}

export function trimTailDotVim(rawName: string): string {
  return rawName.replace(/\.n?vim$/, "");
}
