# GCP Pub/Sub Topic and Schema Example

# Configure the Google Cloud provider
provider "google" {
  project = var.project_id
  region  = var.region
}

# Create a Pub/Sub topic
resource "google_pubsub_topic" "example_topic" {
  name = "example-topic"
  
  # Optional: Configure message retention
  message_retention_duration = "86600s" # 24 hours
  
  # Optional: Labels for organization
  labels = {
    environment = "workshop"
    purpose     = "demo"
  }
}

# Create a Pub/Sub schema
resource "google_pubsub_schema" "example_schema" {
  name = "example-schema"
  type = "AVRO"
  definition = jsonencode({
    type = "record"
    name = "Avro"
    fields = [
      {
        name = "message"
        type = "string"
      },
      {
        name = "timestamp"
        type = "string"
      }
    ]
  })
}

# Attach the schema to the topic
resource "google_pubsub_topic" "topic_with_schema" {
  name = "topic-with-schema"
  
  schema_settings {
    schema = google_pubsub_schema.example_schema.id
    encoding = "JSON"
  }
}