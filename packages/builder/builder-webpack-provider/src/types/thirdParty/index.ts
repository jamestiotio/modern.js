import type WebpackChain from '@modern-js/utils/webpack-chain';
import type webpack from 'webpack';
import type { Configuration as WebpackConfig } from 'webpack';
import type CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import type { Options as RawTSLoaderOptions } from 'ts-loader';

export type { BabelTransformOptions } from '@modern-js/types';
export type { InspectorPluginOptions } from '@modern-js/inspector-webpack-plugin';
export type { CopyPluginOptions } from './CopyWebpackPlugin';
export type { Options as HTMLPluginOptions } from 'html-webpack-plugin';
export type { SubresourceIntegrityPluginOptions as SubresourceIntegrityOptions } from 'webpack-subresource-integrity';

export type CssMinimizerPluginOptions = CssMinimizerPlugin.BasePluginOptions &
  CssMinimizerPlugin.DefinedDefaultMinimizerAndOptions<CssMinimizerPlugin.CssNanoOptionsExtended>;

export type { CssNanoOptions } from 'css-minimizer-webpack-plugin';

export type { BabelConfigUtils } from '@modern-js/babel-preset-app';

export type TSLoaderOptions = Partial<RawTSLoaderOptions>;

export type { webpack, WebpackChain, WebpackConfig };

export type {
  CSSExtractOptions,
  MiniCSSExtractPluginOptions,
  MiniCSSExtractLoaderOptions,
} from './css';
