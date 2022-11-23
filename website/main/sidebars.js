/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  tutorialsSidebar: [{ type: 'autogenerated', dirName: 'tutorials' }],
  guidesSidebar: [{ type: 'autogenerated', dirName: 'guides' }],
  apisAppSidebar: [{ type: 'autogenerated', dirName: 'apis/app' }],
  apisMonorepoSidebar: [{ type: 'autogenerated', dirName: 'apis/monorepo' }],
  apisGeneratorSidebar: [{ type: 'autogenerated', dirName: 'apis/generator' }],
  configsAppSidebar: [{ type: 'autogenerated', dirName: 'configure/app' }],
};
