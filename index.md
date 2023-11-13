---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Yazi"
  tagline: Blazing fast terminal file manager written in Rust, based on async I/O.
  actions:
    - theme: brand
      text: Get Started
      link: /markdown-examples
    - theme: alt
      text: View on GitHub
      link: https://github.com/sxyazi/yazi
  image:
    src: logo.png
    alt: Yazi

features:
  - icon: 🚀
    title: Pure Speed
    details: All I/O operations are asynchronous and CPU tasks are spread across multiple threads.
  - icon: 🖼️
    title: Image Preview
    details: Supports image protocols for 10+ terminals.
  - icon: 🎨
    title: Syntax Highlighting
    details: Optimized and cached for lightning fast syntax highlighting.
---
