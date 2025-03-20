import { Construct } from 'constructs';
import { TerraformStack, TerraformOutput, RemoteBackend } from 'cdktf';
import { GoogleProvider } from '@cdktf/provider-google/lib/provider';
import { PubsubTopic } from '@cdktf/provider-google/lib/pubsub-topic';
import { PubsubSchema } from '@cdktf/provider-google/lib/pubsub-schema';
import { StorageBucket } from '@cdktf/provider-google/lib/storage-bucket';

// Configuration interface
export interface GcpPubSubStackConfig {
  projectId: string;
  region: string;
  environment: string;
  stateBucketName: string;
}

export class GcpPubSubStack extends TerraformStack {
  constructor(scope: Construct, id: string, config: GcpPubSubStackConfig) {
    super(scope, id);

    // Define Google Provider
    new GoogleProvider(this, 'google', {
      project: config.projectId,
      region: config.region,
    });

    // Configure remote backend using GCP bucket
    new RemoteBackend(this, {
      hostname: "app.terraform.io",
      organization: "example-org",
      workspaces: {
        name: `${config.environment}-workspace`
      }
    });

    // Create a Pub/Sub topic with environment prefix
    const exampleTopic = new PubsubTopic(this, 'example_topic', {
      name: `${config.environment}-example-topic`,
      messageRetentionDuration: '86600s', // 24 hours
      labels: {
        environment: config.environment,
        purpose: 'demo',
      },
    });

    // Create a Pub/Sub schema with environment prefix
    const exampleSchema = new PubsubSchema(this, 'example_schema', {
      name: `${config.environment}-example-schema`,
      type: 'AVRO',
      definition: JSON.stringify({
        type: 'record',
        name: 'Avro',
        fields: [
          {
            name: 'message',
            type: 'string',
          },
          {
            name: 'timestamp',
            type: 'string',
          },
        ],
      }),
    });

    // Create a Pub/Sub topic with schema and environment prefix
    const topicWithSchema = new PubsubTopic(this, 'topic_with_schema', {
      name: `${config.environment}-topic-with-schema`,
      schemaSettings: {
        schema: exampleSchema.id,
        encoding: 'JSON',
      },
    });

    // Define outputs
    new TerraformOutput(this, 'environment', {
      value: config.environment,
      description: 'The deployment environment',
    });

    new TerraformOutput(this, 'topic_id', {
      value: exampleTopic.id,
      description: 'The ID of the Pub/Sub topic',
    });

    new TerraformOutput(this, 'topic_name', {
      value: exampleTopic.name,
      description: 'The name of the Pub/Sub topic',
    });

    new TerraformOutput(this, 'schema_id', {
      value: exampleSchema.id,
      description: 'The ID of the Pub/Sub schema',
    });

    new TerraformOutput(this, 'schema_name', {
      value: exampleSchema.name,
      description: 'The name of the Pub/Sub schema',
    });

    new TerraformOutput(this, 'topic_with_schema_id', {
      value: topicWithSchema.id,
      description: 'The ID of the Pub/Sub topic with schema',
    });
  }
}

export class StateBucketStack extends TerraformStack {
  constructor(scope: Construct, id: string, config: GcpPubSubStackConfig) {
    super(scope, id);

    // Define Google Provider
    new GoogleProvider(this, 'google', {
      project: config.projectId,
      region: config.region,
    });

    // Create a GCP Storage Bucket for Terraform state
    const stateBucket = new StorageBucket(this, 'terraform_state_bucket', {
      name: config.stateBucketName,
      location: config.region.toUpperCase(),
      forceDestroy: true,
      versioning: {
        enabled: true,
      },
      uniformBucketLevelAccess: true,
    });

    // Output the bucket name
    new TerraformOutput(this, 'state_bucket_name', {
      value: stateBucket.name,
      description: 'The name of the GCP bucket for Terraform state',
    });
  }
}
