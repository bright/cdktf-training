# Step 1: Simple Terraform Example with GCP Pub/Sub

This directory contains a simple Terraform configuration that creates Google Cloud Pub/Sub resources:
- A Pub/Sub topic
- A Pub/Sub schema (AVRO format)
- A Pub/Sub topic with the schema attached

## Prerequisites

1. [Terraform](https://www.terraform.io/downloads.html) installed (v1.0.0+)
2. [Google Cloud SDK](https://cloud.google.com/sdk/docs/install) installed
3. A Google Cloud Platform account with a project
4. Appropriate permissions to create Pub/Sub resources

## Setup

1. Authenticate with Google Cloud:
   ```
   gcloud auth application-default login
   ```

2. Initialize Terraform:
   ```
   terraform init
   ```

## Configuration

Create a `terraform.tfvars` file with your GCP project ID:

```hcl
project_id = "anywhere-iac-workshop"  # Optional, defaults to anywhere-iac-workshop
region     = "europe-central2"  # Optional, defaults to europe-central2 (Warsaw, Poland)
```

## Deployment

1. Plan the deployment:
   ```
   terraform plan
   ```

2. Apply the configuration:
   ```
   terraform apply
   ```

3. Confirm by typing `yes` when prompted.

## Cleanup

To remove all resources created by this configuration:

```
terraform destroy
```

## Resources Created

- `google_pubsub_topic.example_topic`: A basic Pub/Sub topic
- `google_pubsub_schema.example_schema`: An AVRO schema for Pub/Sub messages
- `google_pubsub_topic.topic_with_schema`: A Pub/Sub topic with the schema attached
