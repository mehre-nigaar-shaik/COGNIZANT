output "s3_bucket_arn" {
  value       = aws_s3_bucket.student_portal_bucket.arn
  description = "The ARN of the static website hosting S3 bucket"
}

output "website_endpoint" {
  value       = aws_s3_bucket_website_configuration.portal_website.website_endpoint
  description = "The public website hosting endpoint URL of the Student Course Portal"
}
