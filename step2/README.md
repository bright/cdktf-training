# Step 2: CDKTF Example with GCP Pub/Sub

This directory contains a CDKTF (Cloud Development Kit for Terraform) project that creates the same Google Cloud Pub/Sub resources as in Step 1, but using TypeScript instead of HCL:
- A Pub/Sub topic
- A Pub/Sub schema (AVRO format)
- A Pub/Sub topic with the schema attached

## Prerequisites

1. [Node.js](https://nodejs.org/) installed (v14.0+)
2. [CDKTF CLI](https://learn.hashicorp.com/tutorials/terraform/cdktf-install) installed
3. [Google Cloud SDK](https://cloud.google.com/sdk/docs/install) installed
4. A Google Cloud Platform account with a project
5. Appropriate permissions to create Pub/Sub resources

## Setup

1. Install dependencies:
   ```
   npm install
   ```

2. Generate CDKTF provider bindings:
   ```
   npm run get
   ```

3. Authenticate with Google Cloud:
   ```
   gcloud auth application-default login
   ```

## Configuration

Set the following environment variables or modify the defaults in `main.ts`:

```bash
# Required: Your GCP project ID (defaults to anywhere-iac-workshop)
export PROJECT_ID="anywhere-iac-workshop"

# Optional: GCP region (defaults to europe-central2, Warsaw, Poland)
export REGION="europe-central2"
```

## Deployment

1. Synthesize the Terraform configuration:
   ```
   npm run synth
   ```

2. Deploy the resources:
   ```
   npm run deploy
   ```

3. Confirm when prompted.

## Cleanup

To remove all resources created by this configuration:

```
npm run destroy
```

## Key Files

- `main.ts`: The main TypeScript file that defines the infrastructure
- `cdktf.json`: CDKTF configuration file
- `package.json`: Node.js project configuration
- `tsconfig.json`: TypeScript configuration

## Comparison with Step 1

This example demonstrates how to use CDKTF to define the same infrastructure as in Step 1, but with the benefits of using a programming language (TypeScript):
- Type safety
- Reusable components
- Ability to use programming constructs like loops, conditionals, and functions
- Better IDE support with autocompletion and inline documentation
