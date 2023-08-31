import type { Options } from 'tsup'

export default <Options>{
  entry: [
    'src/*.ts',
  ],
  clean: true,
  format: ['cjs', 'esm'],
  dts: true,
  splitting: true,
  onSuccess: 'npm run build:fix',
  shims: false,
  noExternal: ['boxen'],
  external: ['korlorist'],
}
