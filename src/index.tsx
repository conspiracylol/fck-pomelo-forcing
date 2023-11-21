import { Plugin, registerPlugin } from 'enmity/managers/plugins';
import { React } from 'enmity/metro/common';
import { getByProps } from 'enmity/metro';
import { create } from 'enmity/patcher';
import manifest from '../manifest.json';

import Settings from './components/Settings';

const pomeloProp = getByProps('isPomelo');
const Patcher = create('fuck-pomelo');

const fckPomelo: Plugin = {
   ...manifest,

   onStart() {
      Patcher.instead(pomeloProp, 'isPomelo', () => { return false; });
      Patcher.instead(pomeloProp, 'isPomelo', () => { return false; });
   },

   onStop() {
      Patcher.unpatchAll();
   },

   getSettingsPanel({ settings }) {
      return <Settings settings={settings} />;
   }
};

registerPlugin(fckPomelo);
