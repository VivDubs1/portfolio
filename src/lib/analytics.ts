// Analytics utility functions
import { track } from '@vercel/analytics';

// Function to track custom events
export const trackEvent = (eventName: string, properties?: Record<string, string | number | boolean>) => {
  try {
    track(eventName, properties);
  } catch (error) {
    // Silent fail in development or if tracking fails
    console.error('Analytics error:', error);
  }
};

// Example usage:
// Import this function where needed and call it like:
// trackEvent('button_click', { buttonName: 'contact', section: 'footer' });