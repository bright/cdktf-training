# Outputs for GCP Pub/Sub Topic and Schema Example

output "topic_id" {
  description = "The ID of the Pub/Sub topic"
  value       = google_pubsub_topic.example_topic.id
}

output "topic_name" {
  description = "The name of the Pub/Sub topic"
  value       = google_pubsub_topic.example_topic.name
}

output "schema_id" {
  description = "The ID of the Pub/Sub schema"
  value       = google_pubsub_schema.example_schema.id
}

output "schema_name" {
  description = "The name of the Pub/Sub schema"
  value       = google_pubsub_schema.example_schema.name
}

output "topic_with_schema_id" {
  description = "The ID of the Pub/Sub topic with schema"
  value       = google_pubsub_topic.topic_with_schema.id
}
