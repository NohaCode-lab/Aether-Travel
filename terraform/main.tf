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

variable "aws_region" {
  default = "eu-central-1" # Frankfurt, Germany
}

variable "environment" {
  default = "production"
}

# PostgreSQL Database (RDS Aurora Serverless v2)
resource "aws_db_subnet_group" "aether_db_subnet" {
  name       = "aether-db-subnet-group"
  subnet_ids = ["subnet-12345", "subnet-67890"]
}

resource "aws_rds_cluster" "aether_postgres" {
  cluster_identifier      = "aether-travel-postgres-cluster"
  engine                  = "aurora-postgresql"
  engine_version          = "16.1"
  database_name           = "aethertravel"
  master_username         = "aetheradmin"
  master_password         = "SecurePass2026!"
  db_subnet_group_name    = aws_db_subnet_group.aether_db_subnet.name
  skip_final_snapshot     = true
  storage_encrypted       = true
}

# ElastiCache Redis Cluster for BullMQ and Caching
resource "aws_elasticache_cluster" "aether_redis" {
  cluster_id           = "aether-travel-redis"
  engine               = "redis"
  node_type            = "cache.t4g.micro"
  num_cache_nodes      = 1
  parameter_group_name = "default.redis7"
  port                 = 6379
}

output "postgres_endpoint" {
  value = aws_rds_cluster.aether_postgres.endpoint
}

output "redis_endpoint" {
  value = aws_elasticache_cluster.aether_redis.cache_nodes[0].address
}
