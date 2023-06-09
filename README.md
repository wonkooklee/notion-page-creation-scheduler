# Notion Page Creation Scheduler

## Blog

[Lambda 스케줄링으로 매일 아침 자동으로 노션 페이지 만들기](https://velog.io/@oneook/create-notion-page-with-lambda-scheduling) (Korean)

## Directory

```sh
.
├─ .gitignore
├─ package-lock.json  # -> ~/terraform/module/handlers/package-lock.json (symlink)
├─ package.json       # -> ~/terraform/module/handlers/package.json (symlink)
├─ src                # -> ~/terraform/module/handlers/src (symlink)
│  ├─ index.js
│  ├─ notionClient.js
│  ├─ utils.js
│  └─ page
│     └─ create.js
└─ terraform
   ├─ module
   │  ├─ archive.tf
   │  ├─ cloudwatchEvent.tf
   │  ├─ lambda.tf
   │  └─ handlers
   │     ├─ package-lock.json
   │     ├─ package.json
   │     └─ src
   │        ├─ index.js
   │        ├─ notionClient.js
   │        ├─ utils.js
   │        └─ page
   │           └─ create.js
   ├─ main.tf
   ├─ terraform.tfstate
   └─ variables.tf
```

## Prerequisite

- AWS Credentials

### Resources

- AWS Lambda (Node.js)
- AWS Cloudwatch Event
- Roles and Policies

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
