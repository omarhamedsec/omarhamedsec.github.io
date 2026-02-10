---
layout: default
title: Homelab
permalink: /homelab/
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

  <h1>Enterprise Homelab</h1>

  <div class="card">
    <h2>Stack</h2>
    <ul>
      <li>Windows Server (AD DS) + Windows 11</li>
      <li>Ubuntu (server/desktop)</li>
      <li>Wazuh SIEM + Security Onion</li>
      <li>Postfix (lab mail) · pfSense (firewall/segmentation)</li>
    </ul>
  </div>

  <div class="card">
    <h2>Design Snapshot</h2>
    <ul>
      <li>Segments: <strong>Corp</strong> (AD/Clients) · <strong>Sec</strong> (SIEM/SO) · <strong>Infra</strong> (Services)</li>
      <li>AD-auth across clients, centralized logging إلى SIEM</li>
      <li>IDS on SPAN/monitor interface (SO)</li>
    </ul>
  </div>

  <div class="card">
    <h2>Focus Areas</h2>
    <ul>
      <li>End‑to‑end attack simulation + detections</li>
      <li>Log pipelines & parsing (Windows/Sysmon → Wazuh)</li>
      <li>Network segmentation & firewall rule design</li>
    </ul>
  </div>

  <div class="card">
    <h2>Learning / Course (In Progress)</h2>
    <ul>
      <li>🎥 Video: <a target="_blank" href="https://youtu.be/f8SCF2UoT4c">Enterprise Homelab 101</a></li>
      <li>📘 Course page: <a target="_blank" href="https://projectsecurity.teachable.com/p/build-a-cybersecurity-homelab-a-practical-guide-to-offense-defense-enterprise-101">Practical Guide</a></li>
    </ul>
    <p class="meta">سأضيف milestones أسبوعية هنا بعد كل تقدم.</p>
  </div>

  <div class="card">
    <h2>Mini‑Log (مختصر)</h2>
    <ul>
      <li><strong>Day 1:</strong> AD + Client join، basic GPO</li>
      <li><strong>Day 2:</strong> Install Wazuh / Agents</li>
      <li><strong>Day 3:</strong> Attack scenario (brute) + detection</li>
    </ul>
  </div>
</div>
