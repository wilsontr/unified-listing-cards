const React = require('react');
const { View } = require('react-native');

module.exports = {
  SafeAreaProvider({ children }) {
    return React.createElement(View, null, children);
  },
  SafeAreaView({ children }) {
    return React.createElement(View, null, children);
  },
};