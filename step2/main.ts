import { App } from 'cdktf';
import { GcpPubSubStack } from './stacks';

const app = new App();

// Create the stack with configuration
new GcpPubSubStack(app, 'cdktf-gcp-pubsub', {
  projectId: process.env.PROJECT_ID || 'anywhere-iac-workshop',
  region: process.env.REGION || 'europe-central2',
});

app.synth();
