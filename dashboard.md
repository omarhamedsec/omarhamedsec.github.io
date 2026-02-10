
---
layout: default
title: Dashboard
permalink: /dashboard/
---

<div class="container">
  <nav class="nav">
    <a href="{{ '/' | relative_url }}">Home</a>
    <a href="{{ '/projects/' | relative_url }}">Projects</a>
    <a href="https://github.com/omarhamedsec/omarhamedsec.github.io/issues">GitHub Issues</a>
  </nav>

  <h1>Dashboard</h1>
  <div class="card">
    <p class="meta">This dashboard opens GitHub forms. Only you (repo owner) can apply changes.</p>
    <p>
      <a class="btn btn-primary" href="https://github.com/omarhamedsec/omarhamedsec.github.io/issues/new?template=edit_home.yml">Edit Home</a>
      <a class="btn btn-ghost" href="https://github.com/omarhamedsec/omarhamedsec.github.io/issues/new?template=edit_soc.yml">Edit SOC</a>
      <a class="btn btn-ghost" href="https://github.com/omarhamedsec/omarhamedsec.github.io/issues/new?template=edit_network.yml">Edit Network</a>
      <a class="btn btn-ghost" href="https://github.com/omarhamedsec/omarhamedsec.github.io/issues/new?template=edit_homelab.yml">Edit Homelab</a>
      <a class="btn btn-ghost" href="https://github.com/omarhamedsec/omarhamedsec.github.io/issues/new?template=edit_contact.yml">Edit Contact</a>
    </p>
    <p>
      <a class="btn btn-primary" href="https://github.com/omarhamedsec/omarhamedsec.github.io/issues/new?template=project_add_update.yml">Add / Update Project</a>
      <a class="btn btn-ghost" href="https://github.com/omarhamedsec/omarhamedsec.github.io/issues/new?template=project_delete.yml">Delete Project</a>
    </p>
    <p class="meta">After submitting a form: go to Actions → wait for green build → refresh your site.</p>
  </div>
</div>
