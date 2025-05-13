---
layout: post
title:  "Data et Operations at ALX"
author: ndcharles
categories: [ Data, Tech ]
image: assets/images/alx_theroom.webp
date_modified: 2025-05-21 
tags: [ featured, alx, the_room, data_operations, SAND, alx_nigeria ]
---
I am never a picture person as my pictures never turn out great, but for the sake of this piece, I took different pictures at different angles to see which would turn out better.

[picture collage not found 😎]

We must have met somewhere: at ALX Fellowship town hall (CTH/FTH), activation events, marketing outreach, application clinics, Karibu, or our Lagos hub.

Nice meeting you!

Managing community at ALX is something that comes to me naturally. I don't know how but despite being an introvert I enjoy the experience. Maybe that's becuase it involves getting to meeet random persons and build systems to solve a need at different points.

This is an unfolding story, but I will get it started and share as much as possible to make it a meaningful read for you. Also, this isn't about the community side of my work but more on the data and operations part which happen behind-the-scene for all to have an amazing experience.

## Data analysis in Google sheet
During my first few days at ALX, I was stuck between analysing in Excel and Google Sheets. By the end of month 1, I had to choose Google Sheets. This is because most tasks require sharing the final output with someone or copying data from an existing sheet.

A few formulas I can clearly say I used [and still use] during these days:
- INDEX/MATCH
- VLOOKUP (This quickly became a favourite)
- IFERROR
- REGEX (my favourite suite in Google Sheets)
- ARRAYFORMULA
- IMPORTRANGE
- PIVOTS
- QUERY
- And more.
Some formulas are considered fundamental that's why you won't be seeing COUNTIFS and the likes.

## Google workspace tools
Given that everything has to be done so that it can be easily shared and we use Google Workspace tools, I had to explore what tools are available to enhance these workspace tools. Let me introduce you to a few tools that come in handy.

- Bulk emails: My first love was [YAMM](https://yamm.com/). It is great at what it does. 1500 emails daily on Google Workspace premium and 50 daily emails free forever (they changed this to 30 in their 2024 update). Another tool is [Dr. Merge](https://drmerge.com/). This is a lifesaver if you don't have the money to subscribe to YAMM. The only catch is that you won't be able to create email templates in Gmail. You will have to create them within Dr. Merge. Another trade-off with Dr Merge is that you can't choose a custom sender (if your default email is abc@gmail.com, you can't change that). But then, you lose nothing since the product is entirely FREE. Another product worthy of exploring is [MailMergo](https://www.mergo.app/). It happened to be from the creator of YAMM (he left YAMM and started [Scripit](https://www.scriptit.fr/)).

> We have professional email tools but flexing my Google Workspace skills helps me automate some things better.

**Note:** Dr. Merge is no longer available on Google Workspace. I am yet to know why since their homepage is still live.

- Repositories and project sites: Google Sites is a fantastic tool for quick project sites. The customisations can be limiting, but you can create something amazing with a custom theme, [Awesome Table addon](https://awesome-table.com/apps), embeds, a good eye for design, and other tweaks I am unaware of. Plus, it has the option for custom domains (remember to use a [custom DNS server]).
See an [example site](https://www.aglaw.com.ng) I built for a client after discovering Google sites. And a quick yet amazing tutorial on [setting up custom domains on Google sites](https://www.steegle.com/google-sites/how-to/assign-custom-url-domain-personal).

- Other site tools: Notion is excellent. A few of our projects are hosted on Notion as a site published using [Super.so](https://super.so). This was our early days, now I push these site directly via notion but cloak them behind our custom URL shortener (alx.ng).

- Google Sheets tools: I am not a power user of Sheets, but I have used a fair share of the tools in most of my analyses. A few of my go-to add-ons are [Power tool (split and sheet)](https://www.ablebits.com/google-sheets-add-ons/power-tools/index.php), app script, and [Sheet Automation](https://workspace.google.com/marketplace/app/sheet_automation_automate_google_sheets/250108887537). Google sheets have received massive updates in the past months that some of these features are already within it core.

- Appsheet: Even though [my first appsheet app failed](../first-appsheet-app-failed) on first usage, I was able to learn a lot about appsheets and remedy the situation then went ahead to build other apps (although for different clients and purposes). Glide was another platform I used for creating our event apps but the experience and customisation wasn't as great as Appsheet's (apologies to all glide lovers). I ended up building a lot more things on Sheets.

## Events coordination
It's one thing to plan an event but another thing to coordinate your attendees to ensure they have a seamless check-in experience. 

- [Ticket Tailor](https://tickettailor.com): This is really great for event registration and check-in. They have a generous free plan of 5,000 event registrations. The platform is customisable to a very large extent, registration pages, attendee questions, ticket types, ticket grouping, admin and check-in app user accounts, custom registeration confirmation email and conditional emails to recipients.

- [Luma](https://lu.ma/): This is a great Ticket Tailor alternative but doesn't have enough customisation options especially for emails. It has a blog option and that can mean a lot to some people.

- Google sheets and qr scanner: Yes, Google sheets again. For a very large event where our data is already on sheets or it has been collected before hand but then we need to check-in our attendees using QR. This [QR tool](https://qrexplore.com/checkin/) or an AppSheet app is good enough for you. I created a [quick qr code check-in tutorial here] on how to set this up. You're welcome.

## More tools 
- Github pages was a rescue for a lot of settings 
- Tally.so, Fillout, and Formbricks were perfect Google forms alternatives
- Staff training and onboarding: classroomio.com and Google Drive

## Visualisations
What use is analysis if no visualisations are attached.
- [Google sheets](sheets.google.com)
- [Datawrapper](https://datawrapper.de)
- [Flourish](https://flourish.studio/)
- [RAWgraphs](https://rawgraphs.io)
- [Looker stuido](https://lookerstudio.google.com/)
- [Tableau](https://public.tableau.com/app) (sorry to Power BI lovers, it was a tough decision)
- [Getting map data for custom graphing](https://hackernoon.com/how-to-convert-and-prepare-topojson-files-for-interactive-mapping-with-d3-499cf0ced5f)
- Get the data [here](https://gadm.org/download_country.html): (I used the GeoJSON file instead of shapefile. Selected only Lagos data and upload the custom map to datawrapper.) 

## People relations
At first, part of working here involved calling learners, alumni and others for one thing or another. Borrowing some learnings from ‘Better’ by Atul Gawande (a book about performance in medicine), there are several ways to make a positive difference, especially when your work involves interacting with people.

- Be personable, and learn to hold conversations, irrespective of the call scripts offered to you. Learn about the people you speak to. Listen and make note of what you learn. This is a big loophole I find in almost every customer relationship calls I have received. You're human not a robot; use that to your advantage.

- Don’t complain — It doesn’t solve anything but gets you down. Instead, in your conversation with others, discuss ideas you read about and interesting problems you came across.

- Be observant - See everything as a learning phase and not problem. This also is one of the CHAIR values at ALX (Adventure).

- Write something — Writing helps you step back and think through a problem. With the degree of thoughtfulness you put into writing you eventually become a better person.

- Explore change

## Building things 
- Job Board Using Jekyll
- Job board using WordPress
I never pushed any of the job boards to production. They were built as proof of concepts and then I leave the final build to the product team. 
- I have a data science background and as such have pushed a few ML apps online. [Here is ALX Connect API](https://alx-connect-w9h3.onrender.com). I shipped it with my team of recent ALX graduates just before this post.

> ALX Connect is aimed at creating an enabling environment for our community members to connect. This helps us break the geographic barrier to meeting your peer, finding mentors and eventually getting placed in jobs or start their own business.

> I created an initial version of ALX Connect using forms, spreadsheets, and meeting tools to test the concept. Amongst other limitations were the manual process involved, the inability to accurately pair everyone based on their profiles, and the scalability of the approach.

> By leveraging the advanced capabilities of LLMs, this gap can be bridged through an intelligent matching model that clusters individuals based on shared interests and professional profiles, then pair them with others who have complementary levels of experience. This approach promotes mentorship and collaborative opportunities and provide a framework for continuously learning from user interactions and feedback to refine clustering and pairing algorithms over time. All with the single click of a button.

{: .highlight }
There is more to me being here. **ALX Connect**, our **Big query project**, **managing the contact centre**, and hosting the experience (which gave birth to my next project) and ALX Connect.

## 2025 Updates
> In 2025, we are improving on ALX Connect and starting a beta test while scaling the platform little by little. We also created a system for ALX community-led events.

> We are done building [ALX Wall of Devs](https://devs.alxafrica.ng). This project is aimed at recognising our heroes, those who spent countless hours developing the products that would make our community experience an amazing one. From ALX Connect, to Job board, and more to come.

> We also launched an [ALX check-in app](https://checkin.alxafrica.com) for our in-person community events. This is a simple solution to help migrate event registration data from forms and other tools to an easy solution that also allows us cover the 37 states of Nigeria where we have presence.

{% comment %}
# How I built a a connected space for our community
- 
> This project gave birth to a startup, Syfinix
{% endcomment %}