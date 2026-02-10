---
layout: default
title: SOC Journey
permalink: /soc/
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

  <h1>SOC Journey</h1>

  <div class="card">
    <h2>Detections & Use‑cases</h2>
    <ul>
      <li><strong>Failed logons burst</strong> → threshold per user/IP</li>
      <li><strong>Suspicious logon hours</strong> → outside normal profile</li>
      <li><strong>New admin group membership</strong> → alert + ticket</li>
      <li><strong>Repeated Service creation</strong> (persistence indicators)</li>
    </ul>
  </div>

  <div class="card">
    <h2>Sample Playbooks (بسيطة)</h2>
    <ul>
      <li><strong>Brute-force</strong>: validate source → lockout policy → reset creds → block IP/ASN (if external) → note in case</li>
      <li><strong>Suspicious logon</strong>: verify user context → geo/ASN check → MFA prompt → isolate host if needed</li>
      <li><strong>Persistence hints</strong>: list services/tasks → hash binary → restore baseline</li>
    </ul>
  </div>

  <div class="card">
    <h2>Data Sources</h2>
    <ul>
      <li>Windows Security + Sysmon (process, network, registry)</li>
      <li>Wazuh agents → central index</li>
      <li>SO sensors (pcap/ids alerts)</li>
    </ul>
  </div>

  <div class="card">
    <h2>Queries (Pseudo)</h2>
    <ul>
      <li>Failed logons per user in 10m ≥ X</li>
      <li>Logon events خارج الوقت المعتاد للمستخدم</li>
      <li>New local admin membership</li>
    </ul>
  </div>
</div>
