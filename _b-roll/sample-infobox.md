---
title: "Sample: info box with prompts"
date: 2026-09-27 09:00:00 +0100
tags: [ai]
published: false
---
Concept for boxed examples: a heading, some context, then labelled code blocks.

{% include infobox.html title="Text Classification" %}

Use this when the model has to sort text into fixed labels. Zero-shot gives no examples; few-shot shows a handful first.

#### Zero-shot

```text
"Classify the following text into categories: sports, politics, technology, or entertainment: 'The team secured a victory in the final seconds.'"
```

#### Few-shot

```text
"Classify the following text into categories: sports, politics, technology, or entertainment:
- 'The government passed a new bill yesterday.' (politics)
- 'Innovative startups are leading the way in AI development.' (technology)
- 'The championship game will be held next weekend.' (sports)
- 'A new app is changing the way we manage our daily tasks.'"
```

{% include endinfobox.html %}

{% include infobox.html title="Quick tip" %}

A box can also be just a heading and some text, with `inline code` if you need it.

{% include endinfobox.html %}
