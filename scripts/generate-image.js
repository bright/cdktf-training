#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { program } = require('commander');
const { OpenAI } = require('openai');
const dotenv = require('dotenv');
const https = require('https');

// Load environment variables from .env file
dotenv.config();

// Configure the command-line interface
program
  .name('generate-image')
  .description('Generate an image based on a text prompt using DALL-E')
  .version('1.0.0')
  .requiredOption('-p, --prompt <text>', 'Text prompt for image generation')
  .option('-o, --output <path>', 'Output path for the generated image', './generated-image.png')
  .option('-s, --size <size>', 'Size of the generated image (1024x1024, 1024x1792, 1792x1024)', '1024x1024')
  .option('--style <style>', 'Style of image (simple, minimal, flat, icon, sketch)', 'simple')
  .parse(process.argv);

const options = program.opts();

// Check if required API key is set
if (!process.env.OPENAI_API_KEY) {
  console.error('Error: OPENAI_API_KEY environment variable is not set.');
  console.error('Please create a .env file with your OpenAI API key or set it in your environment.');
  console.error('Example: OPENAI_API_KEY=your-api-key-here');
  process.exit(1);
}

// Initialize the OpenAI client
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Validate size option
const validSizes = ['1024x1024', '1024x1792', '1792x1024'];
if (!validSizes.includes(options.size)) {
  console.error(`Error: Invalid size "${options.size}". Valid options are: ${validSizes.join(', ')}`);
  process.exit(1);
}

// Ensure the output directory exists
const outputDir = path.dirname(options.output);
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function generateDalleImage() {
  try {
    console.log(`Generating image with DALL-E using prompt: "${options.prompt}"`);
    console.log(`Style: ${options.style}`);
    console.log(`Size: ${options.size}`);
    console.log(`Output path: ${options.output}`);

    // Enhance the prompt with style information specifically for presentation slides
    let enhancedPrompt = options.prompt;
    if (options.style) {
      enhancedPrompt = `Please create an image depicting ${enhancedPrompt}, in a ${options.style} style. Create a minimalist image suitable for presentation slide.`;
    }

    console.log(`Enhanced prompt: "${enhancedPrompt}"`);

    // Generate the image using OpenAI API
    const response = await openai.images.generate({
      model: "dall-e-3",
      prompt: enhancedPrompt,
      n: 1,
      size: options.size,
    });

    const imageUrl = response.data[0].url;
    console.log('Image generated successfully!');

    // Download the image
    await downloadImage(imageUrl, options.output);

    console.log(`Image saved to: ${options.output}`);
    return true;
  } catch (error) {
    console.error('Error generating DALL-E image:');
    if (error.response) {
      console.error(error.response.status, error.response.data);
    } else {
      console.error(error.message);
    }
    return false;
  }
}

async function generateImage() {
  try {
    console.log('Using DALL-E to generate a simple image...');
    const success = await generateDalleImage();

    if (!success) {
      console.error('Failed to generate an image.');
      process.exit(1);
    }
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
}

// Function to download the image from URL and save it to a file
function downloadImage(url, outputPath) {
  return new Promise((resolve, reject) => {
    https.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download image: ${response.statusCode} ${response.statusMessage}`));
        return;
      }

      const fileStream = fs.createWriteStream(outputPath);
      response.pipe(fileStream);

      fileStream.on('finish', () => {
        fileStream.close();
        resolve();
      });

      fileStream.on('error', (err) => {
        fs.unlink(outputPath, () => {}); // Delete the file if there was an error
        reject(err);
      });
    }).on('error', reject);
  });
}

// Run the main function
generateImage();
