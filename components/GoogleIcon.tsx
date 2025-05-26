// components/GoogleIcon.tsx
import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

const GoogleIcon = (props) => (
  <Svg viewBox="0 0 48 48" width={24} height={24} {...props}>
    <Path
      fill="#EA4335"
      d="M24 9.5c3.2 0 6.1 1.2 8.3 3.1l6.2-6.2C34.3 2.3 29.4 0 24 0 14.6 0 6.6 5.9 2.7 14.4l7.5 5.8C12.2 13.2 17.6 9.5 24 9.5z"
    />
    <Path
      fill="#4285F4"
      d="M46.1 24.5c0-1.6-.1-2.7-.4-4H24v7.6h12.4c-.5 3-2.3 5.6-4.9 7.3v5.9h7.9c4.6-4.3 6.7-10.7 6.7-16.8z"
    />
    <Path
      fill="#FBBC05"
      d="M10.2 28.2c-1.1-3.2-1.1-6.8 0-10L2.7 12.4c-2.5 5-2.5 11 0 16l7.5-5.8z"
    />
    <Path
      fill="#34A853"
      d="M24 48c5.4 0 10.3-1.8 13.7-4.9l-7.9-5.9c-2.2 1.5-5.1 2.3-8.2 2.3-6.4 0-11.8-3.7-13.8-9l-7.5 5.8C6.6 42.1 14.6 48 24 48z"
    />
  </Svg>
);

export default GoogleIcon;
