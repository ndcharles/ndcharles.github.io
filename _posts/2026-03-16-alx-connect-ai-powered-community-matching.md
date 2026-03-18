---
layout: post
title:  "Building ALX Connect - An AI-Powered Community Matching Platform"
author: ndcharles
categories: [ Product, Data ]
image: assets/images/alx-connect-community-matching.webp
tags: [sticky, AI-powered_matchmaking, community_engagement, orbiit_alternative]
---
In 2024, I set out on a mission: to help our rapidly growing ALX Nigeria community connect meaningfully. At the time, we were nearing 50,000 grads, and that number has only grown since. With such scale, organic networking wasn’t enough. People needed intentional, thoughtful introductions—ones that matched not just skill sets, but journeys.

My first instinct was to look for existing tools. I explored using <code class="language-plaintext highlighter-rouge">Orbiit</code>, but at the end of our call, the process turned out to be more complex than anticipated. On top of that, the pricing model made it impractical for us to adopt independently.

So, I went back to the drawing board.

I researched alternatives like <code class="language-plaintext highlighter-rouge">Matcha</code>, [CuratedConnections](https://curatedconnections.io/), and a few others. Each had strengths, but none offered an end-to-end solution for what I needed, especially at our scale. That’s when it became clear, no single platform was built for this exact use case.

What I truly envisioned was a platform that could:

- Let users sign up with custom fields (tailored to ALX’s context),
- Match users intelligently based on professional background, personal profile, and experience,
- Send automated emails to both parties with meeting links and scheduled times
- Allow matches to reschedule easily if life gets in the way,
- Provide a seamless feedback system after each interaction
- Provide analytics to track matches, engagement, attendance, and feedback (what worked and what didn’t?)

Since no tool could do it all, I improvised.

I used CuratedConnections for the matching process, but it only handled step one. Everything after that? Manual. After matches were made, I’d export them, generate 400+ meeting links, shorten them using our in-house tool and then dispatch the emails using a mail merge tool (which gave me more flexibility than traditional bulk email tools). Then, after the call, I'd nudge people to fill out a feedback form (many ignored it). No-shows piled up. Rescheduling? That was something I left them to handle between themselves.

By the second round, I had moved the entire process into Google Sheets. Matching, scheduling, emailing—it all lived there. It wasn’t pretty, but it worked. Despite the messy backend, I managed to pull off a fairly coordinated matching experience, and people did connect.

But the cracks were obvious.

The manual workload was overwhelming. Matches weren’t always meaningful, leading to complaints about mismatched interests and goals. Inconsistent feedback collection. No-shows were common, with no easy way for participants to reschedule.

That’s when I knew, if this was going to scale, it had to be automated.

So, we decided to build.

## Building ALX Connect (v1)

We initially assembled a small team of alumni across frontend, backend, and data science to create the first version of what we called ALX Connect. The goal was so ambitious that we even planned to submit it for the Meta LLaMA grant. The early version included three core features: matching, a resume reviewer, and AI career coach. Although that version fell short, the idea didn’t die.

> Huge thanks to [Faithful](https://www.linkedin.com/in/faithful-ajah/), [Amobi](https://www.linkedin.com/in/aamobi-ndubuisi/), [Austin](https://www.linkedin.com/in/augustine-chibueze-c/), <code class="language-plaintext highlighter-rouge">David</code> and others for pouring their hearts into that MVP. They had just a few weeks to build a v1, and they delivered something truly impressive.

## Going All In - ALX Connect (v2)

In 2025, I took ownership of the project to push it to completion. I leaned on my data science background and Forster's full-stack magic, focusing on building the matching engine from scratch without the extra features.

> ALX Connect is a fully automated, community-first matching platform

After just one month of focused development, [ALX Connect v2](https://connect.alxafrica.ng) went live 🎉<br>
We ran our first fully automated matching cycle, and monitored interactions via Microsoft Clarity as real people clicked, scheduled, and connected. This time, it worked the way I envisioned; not perfect but purposeful. Matching was smarter. The process was smoother. And most importantly, it was built to scale.

A few tech notes (because nerdy details matter 😊):
- Built with Next.js
- Hosted on Vercel
- MS Clarity for behavioural insights & heatmaps
- Video powered by Agora (we also evaluated 100ms Live!)
- Matching backend with FastAPI
- Hosted on Google cloudrun and [Render](https://alx-connect-ds.onrender.com/docs)

Looking back, the journey from manually matching over 800 profiles using Google Sheets to a scalable matching platform wasn’t straightforward, but it was necessary.

Most importantly, people are meeting peers who get their journey. Feedback loops are tighter. No-shows didn't end but we gave people ways to reschedule and best of all, we’re scaling without burning out.

## What’s Next

While I’m proud of what we’ve built so far, this isn't the end. It’s the beginning of an AI-powered community ecosystem where connection isn’t left to chance but designed, nurtured, and continuously improved.

> To those who believed, built, tested, and matched: thank you.<br>
> Let’s keep connecting—intentionally, kindly, and at scale.

There’s still so much more we can do to strengthen connections within the community and build tools that truly serve people at scale.

—
P.S. Building tools that deepen human connection? I’m always open to learning, collaborating, or sharing what we’ve learned at [ALX Connect](https://connect.alxafrica.ng).

<div class="alert alert-primary d-flex align-items-center" role="alert">
    <i class="fas fa-info-circle flex-shrink-0 me-2" style="font-size: 1.5rem; margin-right: 1rem;"></i>
    
    <div>
		For a more technical version of this project, check out <a href="https://ndcharles.github.io/data-portfolio/alx-connect-peer-matching.html" style="text-decoration: underline; color: white;">my portfolio site.</a>
    </div>
</div>
