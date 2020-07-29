import SassPlugin from '@pawjs/sass/webpack'
import SrcsetPlugin from '@pawjs/srcset/webpack'
import ImageOptimizer from '@pawjs/image-optimizer/webpack'

export default class ProjectWebpack {
  constructor({ addPlugin }) {
    // add sass compiler
    addPlugin(new SassPlugin())
    const optimizerOptions = {
      supportedEnv: [
        'production',
      ],
      configLabel: 'MEDIUM_QUALITY',
    }
    addPlugin(new ImageOptimizer(optimizerOptions))
    addPlugin(new SrcsetPlugin())
  }
}
