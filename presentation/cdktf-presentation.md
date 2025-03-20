---
marp: true
theme: default
paginate: true
style: |
  .columns {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
  }
  .columns-right-image {
    display: grid;
    grid-template-columns: 60% 40%;
    gap: 1rem;
  }
  img {
    max-height: 500px;
    object-fit: contain;
  }
---

# CDKTF: Infrastructure as Code for Type Developers

<div class="columns-right-image">
<div>

## A modern approach to infrastructure management using familiar programming languages

</div>
<div>

![Infrastructure](images/title-slide.png)

</div>
</div>

---

# Importance of Infrastructure as Code

<div class="columns-right-image">
<div>

- Infrastructure as Code (IaC) is a practice of managing and provisioning infrastructure through code instead of manual processes
- Enables consistent, repeatable, and version-controlled infrastructure deployments
- Bridges the gap between development and operations teams
- Facilitates DevOps practices and continuous integration/continuous deployment (CI/CD)
- Allows for infrastructure to be treated with the same rigor as application code

</div>
<div>

![Importance](images/importance-of-iac.png)

</div>
</div>

---

# Benefits of Infrastructure as Code (1/2)

<div class="columns-right-image">
<div>

- **Version Control**: Track changes, rollback when needed
- **Consistency**: Eliminate configuration drift
- **Automation**: Reduce manual errors and speed up deployments
- **Documentation**: Self-documenting infrastructure

</div>
<div>

![Benefits](images/benefits-of-iac.png)

</div>
</div>

---

# Benefits of Infrastructure as Code (2/2)

<div class="columns-right-image">
<div>

- **Scalability**: Easily replicate environments
- **Testing**: Test infrastructure changes before applying
- **Collaboration**: Enable teams to work together on infrastructure
- **Cost Efficiency**: Optimize resource usage and reduce operational costs

</div>
<div>

![Benefits](images/benefits-of-iac.png)

</div>
</div>

---

# Problems Without Infrastructure as Code (1/2)

<div class="columns-right-image">
<div>

- **Configuration Drift**: Manual changes lead to inconsistencies
- **Snowflake Servers**: Unique, unreproducible server configurations
- **Knowledge Silos**: Infrastructure knowledge limited to specific individuals
- **Slow Provisioning**: Manual processes delay new environment creation

</div>
<div>

![Problems](images/problems-without-iac.png)

</div>
</div>

---

# Problems Without Infrastructure as Code (2/2)

<div class="columns-right-image">
<div>

- **Human Error**: Manual configuration prone to mistakes
- **Limited Auditability**: Difficult to track who changed what and when
- **Scaling Challenges**: Manual processes don't scale with growing infrastructure
- **Environment Inconsistency**: Dev, test, and production environments differ

</div>
<div>

![Problems](images/problems-without-iac.png)

</div>
</div>

---

# Terraform

<div class="columns-right-image">
<div>

## HashiCorp's Infrastructure as Code Tool

- Open-source tool for provisioning and managing infrastructure
- Uses declarative configuration files
- Supports multiple cloud providers and services
- Manages infrastructure lifecycle

</div>
<div>

![Terraform](images/terraform.png)

</div>
</div>

---

# How Terraform Works

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│                 │     │                 │     │                 │
│  Terraform      │     │  Terraform      │     │  Cloud          │
│  Configuration  │────▶│  Execution      │────▶│  Provider       │
│  (HCL)          │     │  Plan & Apply   │     │  (AWS/GCP/etc.) │
│                 │     │                 │     │                 │
└─────────────────┘     └─────────────────┘     └─────────────────┘
                               │
                               │
                               ▼
                        ┌─────────────────┐
                        │                 │
                        │  Terraform      │
                        │  State          │
                        │                 │
                        └─────────────────┘
```

---

# Terraform State (1/2)

<div class="columns-right-image">
<div>

- Terraform state is a snapshot of your infrastructure at a point in time
- Maps real-world resources to your configuration
- Tracks metadata such as resource dependencies
- Stores sensitive values from your infrastructure

</div>
<div>

![State](images/terraform-state.png)

</div>
</div>

---

# Terraform State (2/2)

<div class="columns-right-image">
<div>

- Can be stored locally or remotely (recommended for team environments)
- Remote state enables collaboration and locking to prevent concurrent modifications
- Critical for Terraform to function correctly - never manually edit state files!

</div>
<div>

![State](images/terraform-state.png)

</div>
</div>

---

# CDKTF (Cloud Development Kit for Terraform)

<div class="columns-right-image">
<div>

## Use Your Favorite Programming Language

- Write infrastructure in TypeScript, Python, Java, C#, or Go
- Leverage the full power of programming languages
- Generate Terraform configuration
- Maintain compatibility with Terraform providers and modules

</div>
<div>

![CDKTF](images/cdktf.png)

</div>
</div>

---

# CDKTF Object Graph to Terraform

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│                 │     │                 │     │                 │     │                 │
│  TypeScript/    │     │  CDKTF          │     │  Terraform      │     │  Cloud          │
│  Python/Java    │────▶│  Synthesis      │────▶│  Execution      │────▶│  Provider       │
│  Code           │     │  (JSON/HCL)     │     │  (Plan & Apply) │     │  (AWS/GCP/etc.) │
│                 │     │                 │     │                 │     │                 │
└─────────────────┘     └─────────────────┘     └─────────────────┘     └─────────────────┘
```

1. Write infrastructure in a programming language
2. CDKTF synthesizes to Terraform JSON/HCL
3. Terraform processes the configuration
4. Resources are provisioned in the cloud

---

# Benefits of Using Programming Languages for Infrastructure (1/2)

<div class="columns-right-image">
<div>

- **Type Safety**: Catch errors at compile time rather than deployment time
- **Abstraction**: Create reusable components and higher-level constructs
- **IDE Support**: Code completion, refactoring, and inline documentation
- **Testing**: Unit test your infrastructure code

</div>
<div>

![Languages](images/benefits-of-programming-languages.png)

</div>
</div>

---

# Benefits of Using Programming Languages for Infrastructure (2/2)

<div class="columns-right-image">
<div>

- **Loops and Conditionals**: Native language constructs for complex logic
- **Modularity**: Better code organization with classes and modules
- **Ecosystem**: Leverage existing libraries and tools
- **Familiar Syntax**: Use languages developers already know

</div>
<div>

![Languages](images/benefits-of-programming-languages.png)

</div>
</div>

---

# Thank You!

<div class="columns-right-image">
<div>

## Questions?

Contact: piotr@bright.dev

</div>
<div>

![Thanks](images/thank-you.png)

</div>
</div>
