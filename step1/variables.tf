# Variables for GCP Pub/Sub Topic and Schema Example

variable "project_id" {
  description = "The ID of the GCP project"
  type        = string
  default     = "anywhere-iac-workshop"
}

variable "region" {
  description = "The region to deploy resources to"
  type        = string
  default     = "europe-central2"
}
