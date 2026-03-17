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


{% comment %}
Before this system existed, the problem was clear.

As the ALX Nigeria community scaled to tens of thousands of graduates across the country, meaningful connections became harder to facilitate. I thought of a solution that connected people. These early attempts relied on manual processes, spreadsheets, bulk emails, and meeting coordination, which proved the value of structured matching but quickly became unsustainable.

The challenges were consistent: mismatched pairings, no-shows, limited feedback, and increasing operational overhead with each cycle.

It became clear that this wasn’t just a coordination issue, it required a purpose-built system.

What we needed was an engine that could intelligently match people, automate the interaction flow, and scale without manual intervention.

This document outlines how that system, ALX Connect, was designed and built.

For more details on the backstory of this journey, check the blog article [here](https://ndcharles.github.io/alx-connect-ai-powered-community-matching/)

<div class="alert alert-dark d-flex align-items-center" role="alert">
    <i class="fas fa-info-circle flex-shrink-0 me-2" style="font-size: 1.5rem; margin-right: 1rem;"></i>
    
    <div>
		For more details on the backstory of this journey, check <a href="https://ndcharles.github.io/alx-connect-ai-powered-community-matching/" >my blog article.</a>
    </div>
</div>

## Building ALX Connect 

Early-career professionals often struggle to find the right guidance, mentors, and opportunities. ALX Connect solves this by enabling users to discover and connect with other members of the community based on skills, experience, and career interests.

> ALX Connect is a networking and mentorship discovery platform built for the ALX community. It helps learners and alumni connect based on skills, experience, and career interests, creating a collaborative ecosystem where knowledge and opportunities are shared.

ALX Connect is unique through two key features: an automated matching system and an automated feedback system. The platform automatically matches community members based on shared skills, experience, and career interests. Furthermore, the feedback system is designed to help identify and highlight emerging mentors to community members who consistently offer valuable guidance.

By combining machine learning, data-driven recommendations, and automated feedback mechanism, ALX Connect helps community members:
- Build meaningful professional relationships
- Access mentorship and career guidance
- Navigate early careers in technology

Ultimately, ALX Connect transforms the ALX community into a living network of knowledge, support, and opportunity, helping talented individuals grow and succeed in the global workforce.

## Implementation Techniques
The implementation is in two versions: Cloud Run (full semantic model) and OnRender (lightweight TF-IDF).

### Text Embedding
Sentence Transformers (all-MiniLM-L6-v2): pretrained transformer model that generates dense semantic vectors was chosen for its balance of speed and accuracy, and its 384-dim output aligns well with the target dimension. For the Render version, TF-IDF + TruncatedSVD was used in place of the sentence transfromer (Render has memory constraints preventing loading large transformer models). This combination converts text to sparse term-frequency vectors then reduces it to 384 dimensions. This captures keyword overlap but lacks deep semantic understanding.

### Similarity Index
HNSWlib (Hierarchical Navigable Small World): a dedicated approximate nearest neighbour index optimised for cosine similarity was used as it has a simple API and good performance for my use case. Sklearn was also implemented as a fallback if HNSWlib fails (this was implemented for Render). Slower but guarantees exact nearest neighbours.

### Matching Strategies
The matching system uses a multi-stage similarity and clustering pipeline designed to maximize high-confidence matches while ensuring every profile is paired. The process progressively relaxes constraints to maintain match quality before falling back to forced pairing strategies.

The system progressively moves through four stages:
- Mutual Nearest Neighbour Matching (highest confidence)
- Greedy Matching from Top-10 Neighbours
- Cluster-Then-Match using K-Means
- Forced Matching for remaining profiles

This layered approach ensures: High similarity matches are prioritized, Computational efficiency through clustering and Complete coverage for all profiles

- **Mutual Nearest Neighbour Matching**
The system first computes cosine similarity across all profile embeddings. Each profile identifies its closest neighbour (Top-1) based on similarity.
A pair is considered a Mutual Nearest Neighbour if:
	- Profile A's closest match is B
	- Profile B's closest match is A

	These matches are considered high-confidence pairs because both participants are each other's strongest similarity signal. This stage is executed first to capture the most reliable matches in the dataset.

- **Greedy Matching from Top Neighbours**
After mutual pairs, there are still many possible good matches. A greedy approach maximises overall similarity among the remaining profiles without requiring exhaustive search.
Once a match is made, both profiles are removed from the pool. This step helps capture strong but non-mutual matches that were missed in the first stage.

- **Cluster-Then-Match Strategy**
This stage handles the leftovers that were not matched in the previous stages. These profiles are typically less similar to anyone, so we try to find any reasonable groupings using K-Means clustering.
Clustering provides a coarse grouping based on overall similarity, which then allows fine‑grained pairing within each group.
Unlike centroid-based assignment, this method matches profiles based on direct pairwise similarity, preventing centroid bias. Profiles that remain unmatched within clusters are moved to a global singleton pool.

- **Forced Matching**
To ensure complete coverage, profiles that remain unmatched after clustering are collected in a singleton list which are then matched using a fallback strategy.
Singleton represent cases where: similarity scores are too low, cluster structures prevented pairing or odd profile counts occurred
Rules:
	- Singletons are paired sequentially.
	- Each forced pair is assigned a low similarity score (0.1).
	- Matches are labeled with the tag forced-match to distinguish them from similarity-based matches.

If an odd number of singletons remains, the final singleton is added to an existing pair forming a trio group. This guarantees no profile remains unmatched.

## System Flow
The process for generating profile embeddings and identifying similar profiles involves several distinct, sequential steps, ensuring robust similarity matching and detailed output reporting.

- Validate the input to ensure each profile includes an <code class="language-plaintext highlighter-rouge">id</code>, <code class="language-plaintext highlighter-rouge">personal_summary</code>, <code class="language-plaintext highlighter-rouge">professional_summary</code>, and <code class="language-plaintext highlighter-rouge">years_experience</code> and in the right format. This validation is performed using Pydantic within FastAPI.

	```python
	class ProfileInput(BaseModel):
		id: str
		personal_summary: str
		professional_summary: str
		years_experience: int
	```

![sample-raw-data](./images/matching-raw-data.webp)

- Combine the profile inputs to generate embeddings before L2-normalize (this helps improve the stability and performance of subsequent similarity search coming next).
- Index Building: create HNSWlib index from all profile embeddings.
- Neighbour Query: retrieve top-50 neighbours for each profile (including self).
- Output Formatting: The final list of groups (pairs or trios) is transformed into a JSON-compatible format for backend consumption. For each group we include the original <code class="language-plaintext highlighter-rouge">profile data</code> (id, years_experience, personal_summary, professional_summary (prefixed with a_, b_, and optionally c_)), <code class="language-plaintext highlighter-rouge">similarity</code> (the similarity score of the match) and <code class="language-plaintext highlighter-rouge">source</code> (one of "nearest", "greedy", "cluster", "forced-match"). The output also includes number of doubles and the number of trios for monitoring group composition.

![sample-output-data](./images/matching-output-data.webp)
<caption>Matching Output</caption>

Check out the API here: https://alx-connect-ds.onrender.com/docs

<div class="alert alert-dark d-flex align-items-center" role="alert">
    <i class="fas fa-info-circle flex-shrink-0 me-2" style="font-size: 1.5rem; margin-right: 1rem;"></i>
    
    <div>
		Check out the API <a href="https://alx-connect-ds.onrender.com/docs" >here.</a>
    </div>
</div>

## Memory Management
Throughout the pipeline, memory usage is logged using psutil. After the matching completes, gc.collect() is called explicitly to free temporary objects (e.g., large similarity matrices). This is important to ensure that memory size doesn’t outgrow available resources. The consequence is constant shutdown on memory-constrained platforms like Render or increased platform costs on auto-scale infra like Cloud Run.

## Limitations and Challenges
A lot of trade-offs were made to ensure the model runs on the free-tier of Render and Cloud run at first.

- Model Size: SentenceTransformer cannot be used on OnRender due to memory caps.
- HNSWlib Tuning: parameters (M, ef_construction) affect recall vs. memory/time – current values are a starting point and may need optimisation for larger datasets.
- TF-IDF lacks synonym handling and context, leading to less accurate matches when profiles use different wording. It was preferred for the Render version due to resource constraints.
- We have edge cases for odd number of profiles forcing a trio (the code attempts to avoid singles). The forced-match similarity is arbitrarily low but ensures that no one is left unmatched.
- Cold Start problem: First visit on Cloud Run or Render requires about 50-seconds wait time for startup

## Future Improvements
This was built for a maximum of 10k profiles and so far tested with about 1k. Scaling it beyond that would require further testing to ensure fit for purpose. You might also want to consider a few extra things during scale:
- Profiles matched once per cycle and these profiles vary, thus implementing caching embeddings/indexes to avoid recomputation for repeated runs wasn’t a consideration 
- Consider different kind of sentence transformer for better embedding quality
- You might want to add  more sophisticated clustering (e.g., DBSCAN) to better handle uneven cluster sizes.
- LLM can be used for matching validation. I did a v1 with the task to evaluate the potential connection between the final output profiles. The idea of this is a constant QA where random samples are taken from each cluster (nearest, greedy, cluster, forced-match) and passed to an LLM based on the context which is but a set of rubrics to weigh the matching results.

## Conclusion
[Review]
ALX Connect demonstrates a flexible matching system that adapts to different deployment environments. By combining semantic embeddings (or TF-IDF fallback) with a multi-stage matching pipeline and efficient approximate nearest neighbour search, it produces meaningful participant groups while managing resource constraints. The choice of HNSWlib over FAISS was driven by practical compatibility, and the system’s modular design allows for easy tuning and future enhancements.
{% endcomment %}