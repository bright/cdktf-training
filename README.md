# Infrastructure as Code Workshop with Terraform and CDKTF

This repository contains a workshop for learning Infrastructure as Code (IaC) using Terraform and the Cloud Development Kit for Terraform (CDKTF) to manage Google Cloud Platform (GCP) resources.

## Workshop Overview

This workshop guides you through a progressive learning journey:

1. **Step 1**: Basic Terraform with HCL (HashiCorp Configuration Language)
2. **Step 2**: CDKTF with TypeScript
3. **Step 3**: Advanced CDKTF with environment variables and remote state management

Each step builds on the previous one, demonstrating how to create the same infrastructure (GCP Pub/Sub topics and schemas) using different approaches and increasing levels of sophistication.

## Prerequisites

- [Terraform](https://www.terraform.io/downloads.html) (v1.0.0+)
- [Node.js](https://nodejs.org/) (v14.0+)
- [CDKTF CLI](https://learn.hashicorp.com/tutorials/terraform/cdktf-install)
- [Google Cloud SDK](https://cloud.google.com/sdk/docs/install)
- A Google Cloud Platform account with a project
- Appropriate permissions to create Pub/Sub resources and Storage Buckets

## Workshop Structure

### Step 1: Simple Terraform Example

Located in the `step1` directory, this step introduces basic Terraform concepts using HCL to define:
- A GCP Pub/Sub topic
- A GCP Pub/Sub schema
- A GCP Pub/Sub topic with the schema attached

This step focuses on understanding the basic structure of Terraform configurations, including providers, resources, variables, and outputs.

### Step 2: CDKTF Example

Located in the `step2` directory, this step introduces CDKTF with TypeScript to define the same infrastructure as in Step 1. Key concepts include:
- Using a programming language (TypeScript) instead of HCL
- Defining infrastructure as code using object-oriented programming
- Understanding CDKTF constructs and how they map to Terraform resources

### Step 3: Advanced CDKTF with Environment Variables and Remote State

Located in the `step3` directory, this step enhances the CDKTF project with:
- Environment-specific deployments (stage/prod)
- Resource naming with environment prefixes
- Remote state management using a GCP Storage Bucket

This step demonstrates how to build more sophisticated infrastructure deployments with proper environment separation and state management.

## Getting Started

1. Clone this repository
2. Follow the instructions in each step's README.md file, starting with Step 1

## Workshop Flow

For the best learning experience, follow these steps:

1. Start with Step 1 to understand basic Terraform concepts
2. Move to Step 2 to learn how to use CDKTF with TypeScript
3. Complete Step 3 to understand advanced concepts like environment variables and remote state

Each step includes detailed instructions in its own README.md file.

## Presentation Slide Deck

This repository includes a presentation slide deck (`cdktf-presentation.md`) created with Marp that provides an overview of Infrastructure as Code, Terraform, and CDKTF concepts.

### Generating Simple Images for Slides

The repository includes a script for generating simple, clean images specifically designed for presentation slides using OpenAI's DALL-E:

```bash
# Generate a simple image for a presentation slide
node scripts/generate-image.js -p "Your image description" -o "images/output.png" --style minimal

# Generate a flat-style image
node scripts/generate-image.js -p "Your image description" -o "images/output.png" --style flat
```

See the [Image Generation Script README](scripts/README.md) for more details and options.

### Presenting the Slides

There are several ways to present the Marp slide deck:

#### Using Marp CLI

1. You can use Marp CLI with npx without installing it globally:
   ```bash
   npx @marp-team/marp-cli
   ```

2. Convert the presentation to HTML (for viewing in a browser):
   ```bash
   npx @marp-team/marp-cli cdktf-presentation.md --output presentation.html
   ```

3. Convert to PDF:
   ```bash
   npx @marp-team/marp-cli cdktf-presentation.md --pdf
   ```

4. Convert to PowerPoint:
   ```bash
   npx @marp-team/marp-cli cdktf-presentation.md --pptx
   ```

5. Start a live server for presenting (with hot reload):
   ```bash
   npx @marp-team/marp-cli -s cdktf-presentation.md
   ```

#### Using VS Code with Marp Extension

1. Install the [Marp for VS Code](https://marketplace.visualstudio.com/items?itemName=marp-team.marp-vscode) extension
2. Open `cdktf-presentation.md` in VS Code
3. Use the "Marp: Export slide deck..." command from the command palette (Ctrl+Shift+P or Cmd+Shift+P)
4. Choose your preferred export format (HTML, PDF, PPTX)
5. For presentation mode, click the "Open Preview to the Side" button or use the "Marp: Open preview" command

#### Presentation Tips

- Use the arrow keys to navigate between slides
- Press `f` to enter fullscreen mode when presenting from HTML
- Press `p` to toggle presenter notes view (if presenter notes are included)

## Resources

- [Terraform Documentation](https://www.terraform.io/docs/index.html)
- [CDKTF Documentation](https://learn.hashicorp.com/terraform/cdktf/cdktf-intro)
- [Google Cloud Pub/Sub Documentation](https://cloud.google.com/pubsub/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Marp Documentation](https://marpit.marp.app/)
- [Marp CLI Documentation](https://github.com/marp-team/marp-cli)

## Notes

- This workshop is designed for educational purposes
- The examples are simplified to focus on learning concepts
- In a production environment, you would likely add more security features and follow best practices for secret management
