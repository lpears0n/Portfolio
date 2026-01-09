---
layout: ../../layouts/LayoutBlogPost.astro
title: "Building My Production Infrastructure Lab"
description: "Setting up a dedicated Proxmox server for real-world cloud infrastructure experience"
pubDate: 2026-01-09
category: "infrastructure"
---

# Building My Production Infrastructure Lab

After running VMs on my desktop for months, I decided to invest in proper infrastructure. Today I'm setting up a dedicated server to learn enterprise-level systems administration and cloud architecture.

## The Hardware

I went with a dedicated server from a hosting provider with some serious specs:

- **CPU**: Intel Core i9-13900K (24 cores, 32 threads)
- **RAM**: 64GB DDR5
- **Storage**: 1TB NVMe SSD
- **Network**: 1Gbps port, 20TB monthly bandwidth
- **IPs**: 8 IPv4 addresses included

This gives me room to run multiple VMs, containers, and experiment with high-availability setups without worrying about resource constraints.

## Why Proxmox?

I chose Proxmox VE as my hypervisor for several reasons:

1. **Industry Standard**: Type 1 hypervisor used in enterprise environments
2. **Flexibility**: Mix KVM VMs and LXC containers on the same host
3. **Web UI**: Manage everything through a clean interface
4. **ZFS Support**: Advanced storage features and snapshots
5. **Free**: Enterprise features without licensing costs

## Planned Architecture

Here's my initial infrastructure layout:

```
Proxmox VE Host
├── Infrastructure VM (Ubuntu 24.04)
│   ├── Nginx Proxy Manager (reverse proxy)
│   ├── Portfolio website (Docker)
│   ├── Uptime Kuma (monitoring)
│   └── Portainer (container management)
│
├── Database Server (LXC - Debian 12)
│   └── PostgreSQL for future projects
│
├── Development Environment (LXC)
│   └── Testing ground for new projects
│
└── Reserved capacity for experiments
    - Kubernetes cluster nodes
    - ML/AI workloads
    - Game servers
```

## Learning Objectives

This isn't just about hosting a portfolio site. I'm using this as hands-on training for:

- **Virtualization**: VM lifecycle management, resource allocation
- **Networking**: VLANs, firewall rules, reverse proxies
- **Storage**: ZFS pools, snapshots, backup strategies
- **Automation**: Terraform for infrastructure-as-code
- **Monitoring**: Prometheus + Grafana stack
- **Security**: Hardening, fail2ban, automated patching

## Next Steps

Over the coming weeks, I'll be documenting my journey:

1. Initial Proxmox setup and hardening
2. Creating VM templates with cloud-init
3. Deploying the portfolio with automated CI/CD
4. Building a monitoring stack
5. Implementing backup strategies

This is the kind of infrastructure experience that's hard to get without access to enterprise equipment. By building and maintaining my own production environment, I'm gaining practical skills that directly translate to real-world DevOps and cloud engineering roles.

Stay tuned for updates as I build this out!
