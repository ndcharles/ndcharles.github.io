---
published: false
layout: post
title:  "What Setting Up Email for 15+ Small Businesses Taught Me"
categories: [ Tech ]
image: /assets/images/business-email-setup.webp
tags: [business_email, zoho_mail, google_workspace, cloudflare, dns, small_business]
---
Most of my clients forget about their domain until I message them that it's about to expire. One doesn't.

She's a physiotherapist in [town], Anambra. When she came to me, she had no website and no domain. She just wanted an email address that looked like a business instead of a personal Gmail. I registered her domain, set up the DNS, and put her email on Zoho. [Add a line on why she needed it: patients, referrals, hospitals, insurers?]

Every year since, she's the one who reaches out to renew, usually before I remember. That tells me more than any feedback form could. She uses it every day and it's worth paying for to her.

I've set up business email for more than 15 clients since 2022. This is what I've learned.

## What clients actually ask for

My most common job is the full setup: domain, DNS, email, website and a Google Business Profile. That's everything a small business needs to be found and taken seriously online.

Not everyone needs all of it. A [CX outsourcing company] only wanted a website. [AG Law](https://aglaw.com.ng) wanted an online presence while they worked out their e-commerce plans. I built them a Google Site as a starting point. That was [year], and they're still running that same site. I guess they settled. 😄

I'm fine with that. The job is to give people what they need now and make sure it doesn't lock them in if they want something bigger later.

## Zoho or Google Workspace?

Most of my clients are on Zoho Mail, because its free plan covers up to five users. For a small business, "free" usually wins, and most of them don't need more than five mailboxes.

The clients who chose Google Workspace had two reasons: they wanted Google Meet without the time limit, and they wanted the Gmail interface they were used to. Both are fair reasons to pay.

Most of my Zoho clients run physical businesses. They meet customers in person, and when they do need a call, free Google Meet is enough. One of them later started paying for Zoho Meeting when online meetings became part of how they work, which was the right time to start paying.

So the decision comes down to what the client prefers and what they can afford. I explain the trade-off, and they choose.

## My one rule: don't put everything in one place

I buy domains from Upperlink. DNS always goes on Cloudflare. Hosting and email go wherever suits the client. I never use the same company for the domain and for hosting of any kind.

This is about lock-in. If a host has problems, raises its prices, or a client wants to move, I can change that one piece without touching the others. Email keeps working while the website moves, and the domain stays wherever it's registered. When everything sits with one provider, leaving means moving everything at once. [If you have one, add a real example where this saved a client.]

## My checklist

My setups rarely have problems, and I think that's because I follow the same checklist every time:

1. Register the domain (or get access to the one the client already has).
2. Point the nameservers to Cloudflare.
3. Create the organisation on Zoho or Google Workspace and verify the domain with the TXT record they give you.
4. Add the MX records.
5. Add **one** SPF record.
6. Turn on DKIM and add the key.
7. Add a DMARC record. [Say what policy you start with, e.g. `p=none` with reports, and whether you tighten it later.]
8. Create users, groups (info@, support@) and aliases.
9. Migrate old mail if the client had any.
10. Send test emails to Gmail and Outlook, check they land in the inbox, and check the headers show SPF, DKIM and DMARC passing.
11. Hand over admin access and recovery details, and note the renewal dates.

## The problem I fix most often

Most of the broken setups I'm asked to fix were done by someone else, and the most common problem is **multiple SPF records**.

It usually happens like this: someone sets up Zoho and adds an SPF record. Later a newsletter tool or the website host says "add this SPF record", so they add a second one. Everything looks fine in the DNS panel, but a domain is only allowed one SPF record. When receiving servers find two, SPF fails, and emails start going to spam or bouncing.

The fix is to merge them into one record:

```
Before (broken):
v=spf1 include:zoho.com ~all
v=spf1 include:[other-service-include] ~all

After:
v=spf1 include:zoho.com include:[other-service-include] ~all
```

The other common problem is one record that's slightly wrong: [a DKIM key pasted with a missing character, an MX record pointing to the wrong place, a mail record proxied through Cloudflare. Use one you've actually seen]. Everything looks set up, but one small mistake breaks delivery.

## What good looks like

When email is set up properly, nobody thinks about it. The client sends and receives, their emails land in inboxes, and the only time they hear from me is at renewal.

Or, in the physiotherapist's case, the only time I hear from her is at renewal.

A few setup notes for anyone doing this themselves:
- **Domains:** Upperlink (for .ng and other domains)
- **DNS:** Cloudflare, always, and never with the same company as hosting
- **Email:** Zoho Mail (free for up to 5 users) or Google Workspace
- **Must-have records:** MX, one SPF, DKIM, DMARC
- **Online presence:** Google Sites for a quick start, Google Business Profile for local search
