data "archive_file" "main" {
  type        = "zip"
  source_dir  = "${path.module}/handlers"
  output_path = "${path.module}/.terraform/archive_files/handlers.zip"

  depends_on = [
    null_resource.main
  ]
}

resource "null_resource" "main" {
  triggers = {
    updated_at = timestamp()
  }

  provisioner "local-exec" {
    command = <<EOF
    npm ci
    EOF

    working_dir = "${path.module}/handlers"
  }
}
