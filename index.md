
---
layout: default
title: Omar Hamed | Cybersecurity Portfolio
---

<div class="container">

  <div class="topbar">
    <div class="brand"><a href="{{ '/' | relative_url }}">Omar Hamed</a></div>
    <button id="themeToggle">Light</button>
  </div>

  <nav class="nav">
    <a href="{{ '/' | relative_url }}">Home</a>
    <a href="{{ '/soc/' | relative_url }}">SOC</a>
    <a href="{{ '/network/' | relative_url }}">Network</a>
    <a href="{{ '/homelab/' | relative_url }}">Homelab</a>
    <a href="{{ '/projects/' | relative_url }}">Projects</a>
    <a href="{{ '/contact/' | relative_url }}">Contact</a>
  </nav>

  <div class="card">
    <h1 class="m0">SOC / Network Security (Junior) — Portfolio</h1>
    <p class="mt10">
      Building an <strong>enterprise‑grade homelab</strong> that mirrors real corporate environments:
      detection engineering, incident response, and network security (Windows‑centric + Linux).
    </p>
    <p class="mt6">
      <a class="btn btn-primary" href="{{ '/projects/' | relative_url }}">View Projects</a>
      <a class="btn btn-ghost" href="{{ '/homelab/' | relative_url }}">Homelab Design</a>
    </p>
    <p class="mt6">
      <a class="btn btn-ghost" href="{{ '/assets/docs/OMAR-HAMED-CV.pdf' | relative_url }}" download>Download CV (PDF)</a>
      <a class="btn btn-ghost" href="{{ '/assets/docs/OMAR-HAMED-RESUME.pdf' | relative_url }}" download>Resume (PDF)</a>
    </p>
  </div>

  <div class="card">
    <h2>Highlights</h2>
    <ul>
      <li>Hands‑on SOC: Wazuh / Security Onion, log analysis, alert triage, basic IR playbooks.</li>
      <li>Network security: segmentation, VLAN/DMZ, firewalling, VPN, Suricata IDS.</li>
      <li>Windows AD + Win11 + Ubuntu + pfSense. Daily voice‑logs + organized configs/commands.</li>
    </ul>
  </div>

  <div class="card">
    <h2>Core Skills</h2>
    <div class="grid">
      <div class="card">
        <h3 class="m0">Detection & Logging</h3>
        <p class="meta">Wazuh, Security Onion, Sysmon basics</p>
        <p>Queries, triage, create simple rules/use‑cases.</p>
      </div>
      <div class="card">
        <h3 class="m0">Network & Protocols</h3>
        <p class="meta">TCP/IP, DNS/DHCP, Subnetting</p>
        <p>Wireshark/Nmap, packet analysis, baseline vs anomalies.</p>
      </div>
      <div class="card">
        <h3 class="m0">Security Stack</h3>
        <p class="meta">Suricata, Metasploit (lab), Burp basics</p>
        <p>Blue‑team mindset with red‑team awareness.</p>
      </div>
      <div class="card">
        <h3 class="m0">OS & Scripting</h3>
        <p class="meta">Windows AD, Linux (Ubuntu/Kali), PS/Bash</p>
        <p>Lab automation scripts for repeats.</p>
      </div>
    </div>
  </div>

  <div class="card">
    <h2>Timeline</h2>
    <div class="timeline mt10">
      <div class="tl-item">
        <h3 class="m0">Head of Cybersecurity Team — Microsoft Tech Club (Horus University)</h3>
        <p class="meta">2025 — Present</p>
        <p>Lead 20+ members, roadmap, Notion dashboard, SOC/Network sessions, CTF practices.</p>
      </div>
      <div class="tl-item">
        <h3 class="m0">Cybersecurity Operations Trainee — NTI Cisco CyberOps Scholarship</h3>
        <p class="meta">Sep 2025 — Nov 2025</p>
        <p>Threat detection labs, Wireshark traffic analysis, Nmap recon, Linux/PowerShell tasks.</p>
      </div>
      <div class="tl-item">
        <h3 class="m0">Google Cybersecurity Certificate — Analyst Trainee</h3>
        <p class="meta">Jan 2025 — May 2025</p>
        <p>NIST CSF audits, Splunk/Chronicle queries, tcpdump/Wireshark, Python automation.</p>
      </div>
      <div class="tl-item">
        <h3 class="m0">NTI CCNA Scholarship — Network Engineer Trainee</h3>
        <p class="meta">Oct 2024 — Jan 2025</p>
        <p>Routing/Switching labs, VLANs, OSPF/EIGRP/RIP, Packet Tracer designs, VPN talk.</p>
      </div>
    </div>
  </div>

  <div class="card">
    <h2>Featured Projects</h2>
    <div class="grid mt10">
      <div class="card">
        <h3 class="m0">Enterprise Homelab</h3>
        <p class="meta">AD + Win11 + Ubuntu · Wazuh · Security Onion · Postfix · pfSense</p>
        <p>End‑to‑end attack simulation with actionable detections & dashboards.</p>
        <p class="m0"><a href="{{ '/homelab/' | relative_url }}">Open →</a></p>
      </div>
      <div class="card">
        <h3 class="m0">SOC Detections Pack</h3>
        <p class="meta">Sysmon → Wazuh rules</p>
        <p>Use‑cases: failed logons, brute‑force, abnormal logon hours, basic lateral movement.</p>
        <p class="m0"><a href="{{ '/soc/' | relative_url }}">Open →</a></p>
      </div>
      <div class="card">
        <h3 class="m0">Network Security Notes</h3>
        <p class="meta">Segmentation · DMZ · IPS/IDS · VPN</p>
        <p>Design checklists and references for interviews and quick real‑world usage.</p>
        <p class="m0"><a href="{{ '/network/' | relative_url }}">Open →</a></p>
      </div>
    </div>
  </div>

  <div class="card">
    <h2>Enterprise Homelab Course (In Progress)</h2>
    <ul>
      <li>Video: <a href="https://youtu.be/f8SCF2UoT4c" target="_blank">Build a Cybersecurity Homelab — Enterprise 101</a></li>
      <li>Course page: <a href="https://projectsecurity.teachable.com/p/build-a-cybersecurity-homelab-a-practical-guide-to-offense-defense-enterprise-101" target="_blank">Practical Guide (Offense/Defense)</a></li>
    </ul>
  </div>

  <div class="card">
    <h2>Contact</h2>
    <p class="m0">
      LinkedIn: <a href="https://www.linkedin.com/in/omar-hamed-sec" target="_blank">omar-hamed-sec</a><br>
      GitHub: <a href="https://github.com/omarhamedsec" target="_blank">github.com/omarhamedsec</a><br>
      Email: <a href="mailto:omarhamed.sec@gmail.com">omarhamed.sec@gmail.com</a>
    </p>
  </div>

  <footer>© {{ "now" | date: "%Y" }} Omar Hamed · Cyber Portfolio</footer>
</div>

<script src="{{ '/assets/js/app.js' | relative_url }}"></script>
