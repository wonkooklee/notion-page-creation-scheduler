resource "aws_lambda_function" "processing_lambda" {
  filename         = data.archive_file.main.output_path
  function_name    = "notion-page-creation-scheduler"
  handler          = "src/index.handler"
  source_code_hash = data.archive_file.main.output_base64sha256
  role             = aws_iam_role.processing_lambda_role.arn

  runtime     = "nodejs16.x"
  timeout     = 60
  memory_size = 1024

  environment {
    variables = {
      "NOTION_API_KEY"     = var.notion_api_key
      "NOTION_DATABASE_ID" = var.notion_database_id
    }
  }
}

resource "aws_iam_role" "processing_lambda_role" {
  name               = "my-role"
  path               = "/service-role/"
  assume_role_policy = data.aws_iam_policy_document.assume-role-policy_document.json

  inline_policy {
    name   = "test_policy"
    policy = data.aws_iam_policy_document.test_policy_document.json
  }
}

data "aws_iam_policy_document" "assume-role-policy_document" {
  statement {
    actions = ["sts:AssumeRole"]

    principals {
      type        = "Service"
      identifiers = ["lambda.amazonaws.com"]
    }
  }
}

data "aws_iam_policy_document" "test_policy_document" {
  statement {
    actions = [
      "logs:CreateLogGroup",
      "logs:CreateLogStream",
      "logs:PutLogEvents",
      "logs:AssociateKmsKey"
    ]
    resources = ["*"]

  }
}

variable "notion_api_key" {
  type = string
}

variable "notion_database_id" {
  type = string
}
