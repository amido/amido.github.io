---
id: intro_data_azure
title: Architecture Overview
sidebar_label: Architecture Overview
hide_title: true
hide_table_of_contents: false
description: Architecture overview for the deployed solution
keywords:
  - data
  - python
  - etl
  - databricks
  - azure
  - adf
---

# Stacks Azure Data Platform

## Overview

The [Stacks Azure Data Platform](https://github.com/amido/stacks-azure-data) solution provides
a template for deploying a production-ready data platform, including **Azure Data Factory** for data
ingestion and orchestration, **Databricks** for data processing and **Azure Data Lake Storage Gen2**
for data lake storage. The solution's data workload naming convention originates from Databricks'
Medallion Architecture, a system emphasising structured data transformation layers.

Key elements of the solution include:

* Infrastructure as code (IaC) for all infrastructure components (Terraform & ARM Templates);
* Azure Data Factory (ADF) resources and a sample ingest pipeline that transfers data from a sample
source into a landing (Bronze) data lake zone;
* Sample data processing pipelines named Silver and Gold. These are responsible for data
transformations from 'Bronze to Silver' layer and from 'Silver to Gold' layer, respectively;
* Data Quality validations;
* Deployment pipelines to enable CI/CD and DataOps for all components;
* Automated tests to ensure quality assurance and operational efficiency.

### High-level architecture

![High-level architecture](images/Stacks_Azure_Data_Platform-HLD.png)

### Infrastructure deployed
* Resource Group
* Azure Data Factory
* Azure Data Lake Storage Gen2
* Azure Blob Storage (for config files)
* Azure Key Vault
* Log Analytics Workspace
* Databricks Workspace
  * Azure Key Vault-backed secret scope