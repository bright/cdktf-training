# Image Generation Script

This directory contains a script for generating simple, presentation-friendly images for slides.

## Overview

The `generate-image.js` script uses OpenAI's DALL-E model to generate simple, clean images with a single focused item, specifically designed for presentation slides.

## Prerequisites

Before using the script, make sure you have:

1. Node.js installed
2. Run `npm install` in this directory to install dependencies
3. Set up the required API key in the `.env` file at the root of the repository:
   - For DALL-E: `OPENAI_API_KEY`

## Usage

### Basic Usage

```bash
node generate-image.js -p "Your image description" -o "path/to/output.png"
```

This will generate a simple, clean image with a single focused item using DALL-E, specifically designed for presentation slides.

### Options

- `-p, --prompt <text>`: Text prompt for image generation (required)
- `-o, --output <path>`: Output path for the image (default: ./generated-image.png)
- `--style <style>`: Style of image to generate (options: simple, minimal, flat, icon, sketch; default: simple)
- `-s, --size <size>`: Size for the generated image (options: 1024x1024, 1024x1792, 1792x1024; default: 1024x1024)

### Examples

1. Generate a simple, minimal image:
   ```bash
   node generate-image.js -p "Infrastructure as Code" -o "presentation/images/iac.png" --style minimal
   ```

2. Generate a flat-style image:
   ```bash
   node generate-image.js -p "Cloud infrastructure" -o "presentation/images/cloud.png" --style flat
   ```

3. Generate an icon-style image:
   ```bash
   node generate-image.js -p "Terraform logo" -o "presentation/images/terraform.png" --style icon
   ```

## Creating Images for Presentation Slides

To create simple, clean images with a single focused item for your presentation slides:

1. For each slide, identify the ONE key concept that needs to be illustrated
2. Create a clear, concise prompt that describes this single concept
3. Keep your prompt focused on one main element to ensure clarity
4. Run the script with the prompt and desired style
5. The script will generate and save a presentation-friendly image with a single focused item

Example:
```bash
node generate-image.js -p "Benefits of Infrastructure as Code" -o "presentation/images/benefits-of-iac.png" --style minimal
```

This will create a simple, clean image with a single focused item that clearly illustrates the concept of "Benefits of Infrastructure as Code" in a minimal style, perfect for presentation slides.
