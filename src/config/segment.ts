import {
  AnalyticsBrowser,
  AnalyticsBrowserSettings,
} from '@segment/analytics-next';

const analytics = AnalyticsBrowser.load({
  writeKey: process.env.REACT_APP_SEGMENT_KEY || '',
} as AnalyticsBrowserSettings);

export { analytics };
