import type { Compiler } from '@umijs/bundler-webpack/compiled/webpack';
import type { IApi } from '../../types';

interface IAddUmiCssAssetPluginOpts {
  addCss: () => void;
}

const PLUGIN_NAME = 'add-umi-css-asset-plugin';
class AddUmiCssAssetPlugin {
  isAdded = false;
  addCss = () => {};

  constructor(options: IAddUmiCssAssetPluginOpts) {
    this.addCss = options.addCss;
  }

  addCssStyle() {
    this.isAdded = true;
    this.addCss();
  }

  apply(compiler: Compiler) {
    compiler.hooks.assetEmitted.tap(PLUGIN_NAME, (file) => {
      if (this.isAdded) {
        return;
      }
      if (file === 'umi.css') {
        this.addCssStyle();
      }
    });
  }
}

export default (api: IApi) => {
  api.chainWebpack((memo) => {
    memo.plugin(PLUGIN_NAME).use(AddUmiCssAssetPlugin, [
      {
        addCss: () => {
          api.addHTMLStyles({
            fn: () => ['/umi.css'],
            stage: Number.NEGATIVE_INFINITY,
          });
        },
      },
    ]);
  });
};
