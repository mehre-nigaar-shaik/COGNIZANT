variable "aws_region" {
  type        = string
  description = "AWS region to deploy resource stacks"
  default     = "us-east-1"
}

variable "bucket_prefix" {
  type        = string
  description = "Unique bucket identifier prefix string"
  default     = "amit-tiwari-2026"
}

variable "common_tags" {
  type        = map(string)
  description = "Metadata tags applied to all AWS resources"
  default = {
    Environment = "Dev"
    Project     = "StudentCoursePortal"
    Track       = "NetFullStackEngineer"
  }
}
