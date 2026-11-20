import { defineConfig } from '@rspack/cli';

export default defineConfig({
  resolve: {
    extensions: ['.tsx', '.jsx', '.ts', '...'],
    conditionNames: ['solid', '...'],
  },
  module: {
    rules: [
      {
        test: /\.[mc]?[jt]sx?$/i,
        use: [
          {
            loader: 'builtin:swc-loader',
            options: {
              detectSyntax: 'auto',
            },
          },
          'solid-loader',
        ],
      },
    ],
  },
});
