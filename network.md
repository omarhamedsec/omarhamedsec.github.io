---
layout: default
title: Network Security
permalink: /network/
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

  <h1>Network Security Notes</h1>

  <div class="card">
    <h2>Segmentation & DMZ</h2>
    <ul>
      <li>Core segments: Corp · Sec · Infra · (optional) DMZ</li>
      <li>Allow-list only بين الـ segments (deny by default)</li>
      <li>Jump box أو bastion لو لازم إتاحة إدارية</li>
    </ul>
  </div>

  <div class="card">
    <h2>Firewall Rule Strategy</h2>
    <ul>
      <li>Contract-like rules: src seg → dst seg → proto/port → justification</li>
      <li>Log critical flows + periodic review</li>
      <li>Outbound control + DNS filtering</li>
    </ul>
  </div>

  <div class="card">
    <h2>IDS / Visibility</h2>
    <ul>
      <li>Mirror traffic نحو مستشعر (SO/Suricata)</li>
      <li>Baseline أولًا → قلّل الضوضاء → ركّز على high‑fidelity</li>
      <li>اربط الـ alerts ببيانات الهوية (AD) لو متاح</li>
    </ul>
  </div>
</div>
