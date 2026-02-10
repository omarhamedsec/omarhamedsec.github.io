
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
    {% assign items = site.projects | sort: 'date' | reverse %}
    {% for p in items %}
      <div class="card">
        <h3 class="m0">{{ p.title }}</h3>
        <p class="meta">{{ p.date | date: "%Y-%m-%d" }}{% if p.status %} · {{ p.status }}{% endif %}</p>
        {% if p.stack %}<p class="meta">{{ p.stack }}</p>{% endif %}
        {% if p.summary %}<p>{{ p.summary }}</p>{% endif %}
        <p class="m0">
          <a href="{{ p.url | relative_url }}">Details →</a>
          {% if p.repo %} · <a href="{{ p.repo }}" target="_blank">Repo ↗</a>{% endif %}
        </p>
      </div>
    {% endfor %}
  </div>
</div>
