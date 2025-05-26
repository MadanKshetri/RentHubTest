const { getDefaultConfig } = require('expo/metro-config');
const { withNativeWind } = require('nativewind/metro');

const config = getDefaultConfig(__dirname);

// Remove svg from assetExts
config.resolver.assetExts = config.resolver.assetExts.filter(ext => ext !== 'svg');

// Add svg to sourceExts
config.resolver.sourceExts.push('svg');

// Wrap config with NativeWind and export once
module.exports = withNativeWind(config, { input: './global.css' });
