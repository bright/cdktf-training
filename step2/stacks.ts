import { Construct } from 'constructs';
import { TerraformStack, TerraformOutput } from 'cdktf';
import { GoogleProvider } from '@cdktf/provider-google/lib/provider';
import { PubsubTopic } from '@cdktf/provider-google/lib/pubsub-topic';
import { PubsubSchema } from '@cdktf/provider-google/lib/pubsub-schema';

// Configuration interface
export interface GcpPubSubStackConfig {
  projectId: string;
  region: string;
}

export class GcpPubSubStack extends TerraformStack {
  constructor(scope: Construct, id: string, config: GcpPubSubStackConfig) {
    super(scope, id);

    // Define Google Provider
    new GoogleProvider(this, 'google', {
      project: config.projectId,
      region: config.region,
    });

    // Create a Pub/Sub topic
    const exampleTopic = new PubsubTopic(this, 'example_topic', {
      name: 'example-topic',
      messageRetentionDuration: '86600s', // 24 hours
      labels: {
        environment: 'workshop',
        purpose: 'demo',
      },
    });

    // Create a Pub/Sub schema
    const exampleSchema = new PubsubSchema(this, 'example_schema', {
      name: 'example-schema',
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

    // Create a Pub/Sub topic with schema
    const topicWithSchema = new PubsubTopic(this, 'topic_with_schema', {
      name: 'topic-with-schema',
      schemaSettings: {
        schema: exampleSchema.id,
        encoding: 'JSON',
      },
    });

    // Define outputs
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