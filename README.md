# action-normalize-vim-plugin-name

Small action that provides normalized vim plugin name.

Normalization work if your repository name is like:

- `vim-some-plugin` => `some-plugin`
- `some-plugin-nvim` => `some-plugin`
- `dps-some-plugin` => `some-plugin`
- `denops-some-plugin` => `some-plugin`
- `some-plugin.vim` => `some-plugin.vim`
    - When specify `true` as `trim-tail-dot-vim`, `.vim` will be trimed.

## usage

```yml
jobs:
  docs:
    runs-on: ubuntu-latest
    steps:
      - uses: Omochice/action-normalize-vim-plugin-name@v0.1.0
        id: normalize
      - run: echo "${{ steps.normalize.outputs.normalizedName }}"
```
