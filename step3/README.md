# Step 3: CDKTF with Environment Variables and Remote State

This directory contains an enhanced CDKTF project that builds on Step 2 by adding:
- Environment-specific deployments (stage/prod)
- Resource naming with environment prefixes
- Remote state management using a GCP Storage Bucket

## Prerequisites

1. [Node.js](https://nodejs.org/) installed (v14.0+)
2. [CDKTF CLI](https://learn.hashicorp.com/tutorials/terraform/cdktf-install) installed
3. [Google Cloud SDK](https://cloud.google.com/sdk/docs/install) installed
4. A Google Cloud Platform account with a project
5. Appropriate permissions to create Pub/Sub resources and Storage Buckets

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

Set the following environment variables:

```bash
# Required: Your GCP project ID (defaults to anywhere-iac-workshop)
export PROJECT_ID="anywhere-iac-workshop"

# Optional: GCP region (defaults to europe-central2, Warsaw, Poland)
export REGION="europe-central2"

# Optional: Deployment environment (defaults to stage if not specified)
export DEPLOY_ENV="stage"  # or "prod"
```

## Deployment

This project creates two stacks:
1. A state bucket stack that creates a GCP Storage Bucket for Terraform state
2. The main stack that creates the Pub/Sub resources

### Deploy to Staging Environment

```bash
npm run deploy:stage
```

### Deploy to Production Environment

```bash
npm run deploy:prod
```

## Cleanup

### Destroy Staging Environment

```bash
npm run destroy:stage
```

### Destroy Production Environment

```bash
npm run destroy:prod
```

## Key Files

- `main.ts`: The main TypeScript file that defines the infrastructure
- `cdktf.json`: CDKTF configuration file
- `package.json`: Node.js project configuration with environment-specific scripts
- `tsconfig.json`: TypeScript configuration

## Environment-Specific Features

1. **Resource Naming**: All resources are prefixed with the environment name (e.g., `stage-example-topic`, `prod-example-topic`)
2. **State Management**: 
   - Creates a GCP Storage Bucket for Terraform state
   - Uses remote backend configuration to store state in the bucket
   - Separates state files by environment
3. **Stack Naming**: All stacks are prefixed with the environment name

## Remote State Management

This project demonstrates how to use a GCP Storage Bucket for Terraform state management:

1. The `StateBucketStack` creates a versioned GCP bucket for storing Terraform state
2. The `GcpPubSubStack` uses the `RemoteBackend` construct to configure Terraform to store state in this bucket
3. State files are organized by environment to prevent conflicts

## Comparison with Previous Steps

- **Step 1**: Basic Terraform with HCL
- **Step 2**: CDKTF with TypeScript
- **Step 3** (Current): CDKTF with environment variables and remote state

This progression demonstrates how infrastructure as code can evolve from simple scripts to sophisticated, environment-aware deployments with proper state management.
