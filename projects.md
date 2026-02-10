
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
    <div class="card">
      <h3 class="m0">Enterprise Homelab</h3>
      <p class="meta">AD + Win11 + Ubuntu · Wazuh · Security Onion · Postfix · pfSense</p>
      <p>Enterprise-like environment for offense/defense practice with logging pipelines.</p>
      <p class="m0"><a href="{{ '/homelab/' | relative_url }}">Details →</a></p>
    </div>
    <div class="card">
      <h3 class="m0">SOC Detections Pack</h3>
      <p class="meta">Sysmon → Wazuh rules</p>
      <p>Use-cases: failed logons, brute-force, abnormal logon hours, basic lateral movement.</p>
      <p class="m0"><a href="{{ '/soc/' | relative_url }}">Details →</a></p>
    </div>
    <div class="card">
      <h3 class="m0">Network Security Notes</h3>
      <p class="meta">Segmentation · DMZ · IPS/IDS · VPN</p>
      <p>Design checklists and references for interviews and quick real‑world usage.</p>
      <p class="m0"><a href="{{ '/network/' | relative_url }}">Open →</a></p>
    </div>
  </div>
</div>
