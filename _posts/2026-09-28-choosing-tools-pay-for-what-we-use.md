---
published: false
layout: post
title:  "Paying for What We Use: How I Choose Tools for the ALX Nigeria Team"
categories: [ Tech, Growth ]
image: /assets/images/pay-for-what-we-use.webp
tags: [saas, it_operations, tool_selection, cost_savings, automation]
---
Most software is priced for a company that uses it the same way every month. Every person gets a seat, the plan is sized for your busiest month, and you pay for it in the quiet months too.

That's not how we work. The ALX Nigeria team is 30 people supporting a community of over 135,000 learners and graduates. Our email volume spikes around [application windows, events and programme launches], then drops. Some tools are used by one person every day. Others are used by the whole team twice a quarter.

A big part of my job is picking the tools we use, paying for them (or not), and getting them working. Over time I've settled on a simple way of deciding, and it has saved us a lot of money without leaving anyone short of what they need.

## The questions I ask first

Before I look at any product, I answer these:

1. **What exactly do we need it to do?** The job, not the feature list. "Send a follow-up to everyone who signs up for an event" is a job. "Marketing automation" is a sales page.
2. **Who needs access, and how many of them?** Per-seat pricing is where most tools get expensive. If five people need to edit and twenty just need to see results, that changes everything.
3. **How often will we use it?** Daily, weekly, or a few times a quarter. A tool we use in bursts should not be on a flat monthly plan.
4. **What does it need to connect to?** Usually Google Sheets, our CRM, Slack, or something we built. If it can't connect, someone ends up copying and pasting.
5. **Is there a deal on the best option?** Lifetime deals, non-profit pricing, and discounts on annual plans. The best tool is sometimes affordable if you ask.

The answers usually point to one of three options:

- **Use a free or open-source tool** if it does the job well enough and someone can look after it.
- **Pay for a tool**, preferably pay-as-you-go or a lifetime deal, and only on a monthly plan if we really use it every month.
- **Build it** with Apps Script or JavaScript, when nothing does the whole job or when the only way to get one feature is a monthly plan we'd barely use.

Building is last on that list for a reason. A tool I build is a tool I maintain. I only build when the other two options leave a real gap.

## Email: SendPulse on pay-as-you-go

Email is where we spent the most, so it's where this approach paid off first.

I compared Mailchimp, MailerLite and Brevo. They're all good products, but they all wanted a monthly subscription sized to our contact list. With [number] contacts, that meant paying [amount] a month whether we sent one campaign or ten.

SendPulse lets us buy credits and use them when we need to send. In a busy month we use more, in a quiet month we use almost nothing. So far that has saved us **over $10,000** compared with what a recurring plan would have cost.

For the emails our internal tools send ([confirmations, reminders, notifications from tools like X and Y]), I use Emailit, which I got on a lifetime deal. That's one less monthly bill for something that runs in the background.

## Forms: Tally instead of Jotform

On features, Tally and Jotform were close enough for what we do: [conditional logic, hidden fields, file uploads, webhooks]. The difference was pricing, especially for teams. Tally lets me add everyone on the team without paying extra for each person. With Jotform, more editors meant a more expensive plan.

We now run [sign-ups, event registrations, feedback, internal requests] on Tally. Responses go straight into [Google Sheets / our CRM / a webhook], which triggers the follow-up, so nobody has to chase sign-ups by hand. That replaced [number] separate form subscriptions we had across the team.

## Links: Dub.co instead of Bitly

Same logic as Tally. Dub.co gave us branded short links and room for the whole team at a price that made sense, while Bitly's team pricing did not.

The branding part matters more than it sounds. Our community gets a lot of links, and some of them are scams. When a link starts with [our short domain], people know it came from us. That trust is worth protecting.

## When nothing fits: we build

Sometimes the right answer is none of the above.

When we wanted to match graduates for one-on-one conversations, I looked at Orbiit, Matcha, CuratedConnections and a few others. None of them did the whole thing: sign-up, matching, scheduling, emails, rescheduling, feedback and reporting. Even the partial options came with monthly costs. So we built ALX Connect. I wrote about [how that happened here](/alx-connect-ai-powered-community-matching).

The event check-in app is a smaller example. Community-led events needed a way to check people in and track attendance, and paid ticketing and check-in tools would have added a cost to every event. I built one with JavaScript and Tally instead, and it's now used internally for [number] events.

Everyday data jobs get Apps Script. The biggest of those is [CommandX](/commandx-google-appscript-add-on), my own Google Sheets toolkit. It replaced a paid add-on subscription for splitting, combining and cleaning data, and anyone on the team can use it.

## Adoption: the person who needs it most goes first

I don't run big rollouts where everyone has to move to a new tool on the same day. Not every tool is for everyone.

Each tool has an owner, usually the person who needs it most. They set it up for their work, find the rough edges, and build the templates. Once it works for them, other people come to it on their own, because they can see it working. [Example: who owned Tally or SendPulse first, and how the rest of the team followed.]

The templates matter too. Everyone who sends an email, form or link starts from a shared template, so our communications look like they come from one team, not thirty individuals.

## What I'd tell another team

Start with how you actually use a tool, not how the pricing page expects you to. If your usage comes in bursts, look for pay-as-you-go. If per-seat pricing is the problem, look for tools that don't charge per member. Ask about lifetime deals and non-profit pricing. Build only when you've checked the other options and you're ready to maintain what you build.

A few notes on the stack (because the details matter 😊):
- **Email campaigns:** SendPulse (pay-as-you-go)
- **Emails sent by our tools:** Emailit (lifetime deal)
- **Forms and sign-up follow-ups:** Tally
- **Branded short links:** Dub.co
- **Community matching:** ALX Connect (built in-house, FastAPI backend)
- **Event check-in:** custom JavaScript app + Tally
- **Glue and small automations:** Google Apps Script
