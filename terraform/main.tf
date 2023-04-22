terraform {
  required_providers {
    aws = {
      source = "hashicorp/aws"
    }
  }
}

provider "aws" {
  region = var.aws_region
}

module "schedule_test_module" {
  source             = "./module"
  schedule           = var.schedule
  notion_api_key     = var.notion_api_key
  notion_database_id = var.notion_database_id
}
