---
layout: post
title:  "Data et Operations at ALX"
author: ndcharles
categories: [ Data, Tech ]
image: assets/images/alx_theroom.webp
tags: [ featured, alx, the_room, data_operations, alx_nigeria ]
---
I am never a picture person, it never comes out great, but for the sake of this piece, I took different pictures at different angles to know which would come out better.

[picture collage]

We must have met somewhere; ALX Fellowship townhalls (CTH/FTH), activation events, marketing outreach, application clinics, karibu or at our Lagos hub.

Nice meeting you!

## Data analysis in Google sheet
My first few days at ALX, I was stuck between doing analysis in Excel versus doint it in Google sheet. By the end of month 1, I had to choose Google sheets. This is because most task requires sharing the final output with someone or having to copy data from an exisiting sheet.

A few formulas I can clearly say I used during these days:
- INDEX/MATCH
- VLOOKUP (This quickly became a favourite)
- IFERROR
- REGEX
- ARRAYFORMULA
- IMPORTRANGE
- PIVOTS
- And more.

Some formulas are considered basic that's why you won't be seeing COUNTIFS and the likes.

## Google workspace tools
Given that everything has to be done in a manner that it can be easily shared plus we use Google workspace tools, I had to explore what tools are available to enhance these workspace tools. Let me inteoduce you to a few tools that would come handy.
- Bulk emails: My first love was YAMM. It was great at what it does. 1500 emails daily on Google workspace premium and 50 daily emails free forever. Another tool is Dr. Merge. This is a life saver if you don't have the money to subscribe to YAMM. The only catch is that, you won't be able to create email templates in Gmail. You will have to create them within Dr. Merge. Another trade-off is that you can't choose a custom sender (if your default email is abc@gmail.com, you can't change that). Another product worthy of exploring is [MailMergo]. It happened to be from the creator of YAMM (he left YAMM and started xyz).
- Repositories and project sites: Google sites is an amazing tool for quick project sites. The customisations can be limiting but with a custom theme, xyz addon, abc add-on, a good eye for design and other add-ons I am not aware of, you can get something amazing out of it. Plus it has the option for custom domains (remember to use a [custom DNS server].)
See an example site I built for a client after discovering Google sites.
- Other site tools: Notion is really great. A few of our projects were also hosted on Notion as a site published using super.so. This was our early days, now I push these site directly via notion but cloak them behind our custom URL shortener (alx.ng).
- Google sheets tools: I am not a power user of sheets but I have had a fair share of the tools for most of my analysis. A few of my go-to add-ons are power tool (split sheet), app script, 
- Appsheet: Even though [my first appsheet app failed] on first usage, I was able to learn a lot about appsheets and remedy the situation then went ahead to build other apps (although for different clients and purposes). Glide was another platform I used for creating our event apps but the experience and customisation wasn't as great as Appsheet's (apologies to all glide lovers).

## Events coordination
It's one thing to plan an event but another thing to coordinate your attendees to ensure they have a seamless check-in experience. 

- [Ticket Tailor]: This is really great for event registration and check-in. They have a generous free plan of 5,000 event registrations. The platform is customisable to a very large extent, registration pages, attendee questions, ticket types, ticket grouping, admin and check-in app user accounts, custom registeration confirmation email and conditional emails to recipients.
- Luma: This is a great Ticket Tailor alternative but doesn't have enough customisation options especially for emails. It has a blog option and that can mean a lot to some people.
- Google sheets and qr scanner: Yes, Google sheets again. For a very large event where our data is already on sheets or it has been collected before hand but then we need to check-in our attendees using QR. This [QR tool] is good enough for you. I created a [quick qr code check-in tutorial here] on how to set this up. You're welcome.

## More tools 
- Github pages was a rescue for a lot of settings 
- Google form and Typeform alternatives: Fillout, Formbricks
- Staff training and onboarding: classroomio.com 

## Visualisations
What use is analysis if no visualisations are attached.
- Google sheets 
- Datawrapper 
- Rawgraphs
- Looker stuido
- Tableau (sorry to Power BI lovers, it was a tough decision)
- Getting map data for custom graphing (https://hackernoon.com/how-to-convert-and-prepare-topojson-files-for-interactive-mapping-with-d3-499cf0ced5f)
- Get the data here: https://gadm.org/download_country.html (I used the GeoJSON file instead of shapefile. Selected only Lagos data. Uploaded the custom map to datawrapper.) 

## People relations
At first, part of working here involved calling learners, alumni and others for one thing or another. Borrowing some learnings from ‘Better’ by Atul Gawande (a book about performance in medicine), there are several ways to make a positive difference especially when your work involves interacting with people.

- Be personable, learn to hold conversations, irrespective of the call scripts offered to you. Learn about the people you speak to. Listen and make note of what you learn. This is a big loophole I find in almost every customer relationship calls I have received. You're human not a robot, use that to your advantage.
- Don’t complain — It doesn’t solve anything but gets you down. Instead, in your conversation with others discuss ideas you read about, interesting problems you came across.
- Be observant - See everything as a learning phase and not problems. This also is one of the CHAIR values at ALX (Adventure).
- Write something — Writing helps you step back and think through a problem. With the degree of thoughtfulness that you put into writing you eventually become a better person.
- Explore change

## Building things 
- Job Board Using Jekyll
	- Jekyll 
	- Search
- Job board using WordPress
I never pushed any of the job boards to production. They were built as proof of concepts and then I leave the final build to the product team. I didn't want to increase my personal workload.

references:
- https://medium.com/@kurtiskemple/setting-up-client-side-search-for-a-jekyll-github-pages-site-with-lunr-and-backbone-d644541d7260
- https://talk.jekyllrb.com/t/page-variable-name-in-for-loop-using-data-files/7522/4 
- https://jekyllrb.com/docs/datafiles/ (dump the csv in site.data)

There is more to me being here. [ALX Connections](), our [Big query project], [managing the contact centre], and hosting the experience (which gave birth to my next project).



# How I built a a connected space for our community
- 
> This project gave birth to my startup, Syfinix