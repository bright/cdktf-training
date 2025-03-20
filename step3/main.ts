import { App } from 'cdktf';
import { GcpPubSubStack, StateBucketStack } from './stacks';

const app = new App();

// Get environment from env var or default to stage
const deployEnv = process.env.DEPLOY_ENV || 'stage';
if (deployEnv !== 'stage' && deployEnv !== 'prod') {
  throw new Error('DEPLOY_ENV must be either "stage" or "prod"');
}

const projectId = process.env.PROJECT_ID || 'anywhere-iac-workshop';
const region = process.env.REGION || 'europe-central2';
const stateBucketName = `${projectId}-terraform-state-${deployEnv}`;

// Create the state bucket stack
new StateBucketStack(app, `${deployEnv}-state-bucket`, {
  projectId,
  region,
  environment: deployEnv,
  stateBucketName,
});

// Create the main stack with environment prefix
new GcpPubSubStack(app, `${deployEnv}-gcp-pubsub`, {
  projectId,
  region,
  environment: deployEnv,
  stateBucketName,
});

app.synth();
