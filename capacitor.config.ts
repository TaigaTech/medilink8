import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.app.medilinkug',
  appName: 'MediLink UG',
  server: {
    url: 'https://medilink8.vercel.app',
    cleartext: false
  }
};

export default config;
