# Notion Page Creation Scheduler

## Directory

```sh
.
├─ .gitignore
├─ package.json   # -> ~/terraform/module/handlers/package.json (symlink)
├─ src            # -> ~/terraform/module/handlers/src (symlink)
│  ├─ addItem.js
│  ├─ index.js
│  └─ utils.js
└─ terraform
   ├─ main.tf
   ├─ module
   │  ├─ archive.tf
   │  ├─ eventbridge.tf
   │  ├─ handlers
   │  │  ├─ package-lock.json
   │  │  ├─ package.json
   │  │  └─ src
   │  │     ├─ addItem.js
   │  │     ├─ index.js
   │  │     └─ utils.js
   │  └─ lambda.tf
   ├─ terraform.tfstate
   └─ variables.tf

```

## Prerequisite

- AWS Credentials

### Resources

- AWS Lambda (Node.js)
- AWS EventBridge

### Terraform Initiation

```sh
$ cd terraform
$ terraform init
```

### Variables in Need

```sh
# terraform/vars.tfvars

notion_api_key = "secret_************"
notion_database_id = "***************"
schedule = "cron(0 23 ? * * *)"
```

### Plan and Apply

```
$ terraform plan -var-file="vars.tfvars"
$ terraform apply -var-file="vars.tfvars"
```

<br />
<br />

© WONKOOK LEE
