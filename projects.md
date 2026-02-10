---
layout: default
title: Projects
permalink: /projects/
---

<div class="container">
  <nav class="nav">
    <a href="{{ '/' | relative_url }}">Home</a>
    <a href="{{ '/soc/' | relative_url }}">SOC</a>
    <a href="{{ '/network/' | relative_url }}">Network</a>
    <a href="{{ '/homelab/' | relative_url }}">Homelab</a>
    <a href="{{ '/projects/' | relative_url }}">Projects</a>
    <a href="{{ '/contact/' | relative_url }}">Contact</a>
  </nav>

  <h1>Projects</h1>

  <div class="grid mt10">
    <!-- Project 1 -->
    <div class="card">
      <h3 class="m0">Enterprise Homelab</h3>
      <p class="meta">AD + Win11 + Ubuntu · Wazuh · Security Onion · Postfix · pfSense</p>
      <p>
        Enterprise-like lab for offense/defense practice: end-to-end attacks, detections, dashboards.
      </p>
      <ul>
        <li>Windows AD domain, workstations، Ubuntu server</li>
        <li>Wazuh SIEM + Security Onion packet analysis</li>
        <li>pfSense segmentation + basic rule sets</li>
      </ul>
      <p class="m0"><a href="{{ '/homelab/' | relative_url }}">Design & Notes →</a></p>
    </div>

    <!-- Project 2 -->
    <div class="card">
      <h3 class="m0">SOC Detections Pack</h3>
      <p class="meta">Sysmon → Wazuh rules (basic use-cases)</p>
      <p>Detections for failed logons, brute-force, suspicious logon hours, and simple lateral movement.</p>
      <ul>
        <li>Event sources: Sysmon + Windows Security logs</li>
        <li>Use-cases & triage steps</li>
        <li>Sample queries/alerts (pseudo)</li>
      </ul>
      <p class="m0"><a href="{{ '/soc/' | relative_url }}">Playbooks & Alerts →</a></p>
    </div>

    <!-- Project 3 -->
    <div class="card">
      <h3 class="m0">Network Security Notes</h3>
      <p class="meta">Segmentation · DMZ · IPS/IDS · VPN</p>
      <p>Design checklists, packet captures, and rule‑of‑thumbs for interviews and real work.</p>
      <ul>
        <li>VLAN/DMZ patterns + traffic flow</li>
        <li>Firewall rule strategy</li>
        <li>Suricata/IDS basic tuning notes</li>
      </ul>
      <p class="m0"><a href="{{ '/network/' | relative_url }}">Open Notes →</a></p>
    </div>
  </div>
</div>
