---
layout: default
title: Omar Hamed | Cybersecurity Portfolio
---

<!-- ===== Navigation (لو عايز تحتفظ بيه) ===== -->
<nav class="nav">
  <a href="{{ '/' | relative_url }}">Home</a>
  <a href="{{ '/soc/' | relative_url }}">SOC</a>
  <a href="{{ '/network/' | relative_url }}">Network</a>
  <a href="{{ '/homelab/' | relative_url }}">Homelab</a>
  <a href="{{ '/projects/' | relative_url }}">Projects</a>
  <a href="{{ '/contact/' | relative_url }}">Contact</a>
</nav>

<!-- ===== HERO / VALUE PROP ===== -->
<div class="card" style="border-color:#00ff9d; box-shadow:0 0 16px rgba(0,255,157,.18);">
  <h1 style="margin-top:0;">⚡ Omar Hamed — Cybersecurity Engineer (in progress)</h1>
  <p style="font-size:19px; color:#cfe8dd">
    Building an <strong>Enterprise‑grade Cybersecurity Homelab</strong> that mirrors real corporate environments.<br>
    Path: <strong>SOC → Network Security → Cloud → Detection Engineering → CISSP</strong>.
  </p>
  <p style="margin:0;">
    <a href="{{ '/projects/' | relative_url }}" style="background:#00ff9d;color:#061013;padding:10px 16px;border-radius:8px;text-decoration:none;font-weight:700;">
      View Projects
    </a>
    <a href="{{ '/homelab/' | relative_url }}" style="margin-left:10px;color:#00ff9d;text-decoration:none;">
      Homelab Design →
    </a>
  </p>
</div>

<!-- ===== HIGHLIGHTS ===== -->
<div class="card">
  <h2>Highlights</h2>
  <ul>
    <li>Hands‑on in <strong>SOC operations</strong>: SIEM (Wazuh/Security Onion), alert triage, basic IR.</li>
    <li><strong>Network security</strong> fundamentals: segmentation, VLAN/DMZ, firewalling, VPN, IDS/IPS.</li>
    <li><strong>Windows‑centric lab</strong> (AD, Win11) + supporting Linux (Ubuntu/Kali) + pfSense.</li>
    <li>Documenting daily via voice notes + storing commands/configs في فولدرات منظمة.</li>
  </ul>
</div>

<!-- ===== SKILLS (TARGETED FOR HIRING) ===== -->
<div class="card">
  <h2>Core Skills</h2>
  <ul>
    <li>Detection &amp; Logging: Wazuh, Security Onion, Sysmon, Sigma (basics)</li>
    <li>Network &amp; Protocols: TCP/IP, Subnetting, VLAN, DNS/DHCP, Routing, VPN</li>
    <li>Tools: Nmap, Wireshark, Metasploit (lab), Burp (basics), Suricata</li>
    <li>Windows: AD basics, GPO basics, hardening concepts</li>
    <li>Scripting: PowerShell/bash (basic automation for lab tasks)</li>
  </ul>
</div>

<!-- ===== EXPERIENCE / ROADMAP ===== -->
<div class="card">
  <h2>Learning Roadmap & Recent Work</h2>
  <ul>
    <li>Current: SOC fundamentals + Detection engineering inside homelab</li>
    <li>Next: Network Security deep‑dive (firewalls, IPS/IDS, VPN) → Cloud Security (Azure AZ‑500)</li>
    <li>Goal: Cybersecurity Engineer → then CISSP</li>
  </ul>
</div>

<!-- ===== FEATURED PROJECTS (CARDS) ===== -->
<div class="card">
  <h2>Featured Projects</h2>

  <div class="card">
    <h3 style="margin-top:0;">Enterprise Cybersecurity Homelab</h3>
    <p>
      Windows AD + Win11 + Ubuntu, Wazuh SIEM, Security Onion, Postfix test mail, end‑to‑end attack simulation with detections.
    </p>
    <p style="margin:0;">
      <a href="{{ '/homelab/' | relative_url }}" style="color:#00ff9d;">Design & Notes →</a>
    </p>
  </div>

  <div class="card">
    <h3 style="margin-top:0;">SOC Use‑cases & Detections</h3>
    <p>
      Lab detections for common attack paths (brute‑force, suspicious logons, basic lateral movement patterns) using Wazuh + Sysmon logs.
    </p>
    <p style="margin:0;">
      <a href="{{ '/soc/' | relative_url }}" style="color:#00ff9d;">Playbooks & Alerts →</a>
    </p>
  </div>

  <div class="card">
    <h3 style="margin-top:0;">Network Security Notes</h3>
    <p>
      Practical notes on segmentation, DMZ, firewall rule design, IDS/IPS tuning, packet captures & analysis.
    </p>
    <p style="margin:0;">
      <a href="{{ '/network/' | relative_url }}" style="color:#00ff9d;">Open Notes →</a>
    </p>
  </div>
</div>

<!-- ===== MEDIA / COURSE LINKS ===== -->
<div class="card">
  <h2>Learning Resources</h2>
  <ul>
    <li>🎥 Course video: <a href="https://youtu.be/f8SCF2UoT4c" target="_blank">Homelab Enterprise 101</a></li>
    <li>📘 Course page: <a target="_blank" href="https://projectsecurity.teachable.com/p/build-a-cybersecurity-homelab-a-practical-guide-to-offense-defense-enterprise-101">Practical Guide (Offense/Defense)</a></li>
  </ul>
</div>

<!-- ===== CONTACT ===== -->
<div class="card">
  <h2>Contact</h2>
  <p>
    LinkedIn: <a target="_blank" href="https://www.linkedin.com/in/omar-hamed-sec">/in/omar-hamed-sec</a><br>
    GitHub: <a target="_blank" href="https://github.com/omarhamedsec">github.com/omarhamedsec</a>
  </p>
</div>

<!-- ===== FOOTER ===== -->
<footer>
  © {{ "now" | date: "%Y" }} Omar Hamed · Cyber Portfolio
</footer>
