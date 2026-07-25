terraform {
  required_version = ">= 1.5.0"
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 5.0"
    }
  }
}

provider "aws" {
  region = var.aws_region
}

# Provision the S3 bucket for hosting
resource "aws_s3_bucket" "student_portal_bucket" {
  bucket        = "${var.bucket_prefix}-student-course-portal"
  force_destroy = true

  tags = var.common_tags
}

# Configure website settings for S3 hosting
resource "aws_s3_bucket_website_configuration" "portal_website" {
  bucket = aws_s3_bucket.student_portal_bucket.id

  index_document {
    suffix = "index.html"
  }

  error_document {
    key = "index.html"
  }
}

# Enable S3 bucket public access blocks to configure policies
resource "aws_s3_bucket_public_access_block" "public_allow" {
  bucket = aws_s3_bucket.student_portal_bucket.id

  block_public_acls       = false
  block_public_policy     = false
  ignore_public_acls      = false
  restrict_public_buckets = false
}

# Set S3 bucket policy for public read access
resource "aws_s3_bucket_policy" "public_read_policy" {
  depends_on = [aws_s3_bucket_public_access_block.public_allow]
  bucket     = aws_s3_bucket.student_portal_bucket.id

  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid       = "PublicReadGetObject"
        Effect    = "Allow"
        Principal = "*"
        Action    = "s3:GetObject"
        Resource  = "${aws_s3_bucket.student_portal_bucket.arn}/*"
      }
    ]
  })
}
