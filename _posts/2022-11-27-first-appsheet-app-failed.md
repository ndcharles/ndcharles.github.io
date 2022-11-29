---
layout: post
title:  "My First Appsheet App was a Failure"
author: ndcharles
categories: [ Product, Data, Tech ]
image: assets/images/appsheet_app.webp
tags: [featured, no-code, appsheet]
---
I had to create an app for events attendance at my new place. The aim was to simplify the movement of data from registration to attendance. So, after registration, we should only have to tick your attendance or add your name if you didn't register online earlier. This replaces the case of running search and replace over Google sheets during attendance. Or worse still, having registration data and attendance data separately. This leads to errors while merging and removing duplicates.

Haven used Appsheet before, I decide to just continue with the platform to reduce the learning curve and also allow me create time for other event logistics.

<p align="center"><image src="/assets/images/alx_appsheet.gif" alt="Attendance app" width="300" /></p>

At the onset, my fear was the prototype not running smoothly due to appsheet restrictions; but it ran. No one said they couldn't access the data. But then something happened, something no one told me until after the event. I came to check the app's database and there were fewer persons than we had in attendance. Clearly, we just encountered data loss. Despite using Appsheet `unique()` parameter to set a unique key for every entry, something still found a way to go wrong.

## A little back story...
My appsheet journey started early 2022. I had someone request assistance with listing her products on [Jiji](https://jiji.ng). I went to her place of business, took pictures of products and promised to send her a link to update the product names and prices. I made this promise without an inkling of how to get those inputs from her because the image files involved won't allow me use Google sheets effectively.

A brief Google search led to Appsheet (which is something I was familiar with but not truly tried). I looked at app templates, selected the inventory app template and got down to business. It was a very basic app without any complex parts required. You can see the app below. 

<p align="center"><image src="/assets/images/inventory_manager_app.gif" alt="inventory manager app" width="300" /></p>

To me it was a success because I not only got the pictures, prices and updates I needed, I truly explored the Appsheet platform. So when an app was required for attendance at work, I remembered my escapades with Appsheet and decided to explore it further; this time for an app with complex requirements and conditions.

## Discovering the data loss
After the event, I decided to take a snapshot of all locations, starting with Lagos. I was shocked to see 46 records. Aah, with all the people around, I have only 46 records? I looked at the Feedback form and saw 66. That implies we had more than 70 persons in attendance. I checked Abuja and Rivers, truly I lost data. 

Understanding the situation
I went into deep research to understand what went wrong with my implementation. I used some resources from the Appsheet doc and community.

- [Appsheet data loss](https://googlecloudcommunity.com/gc/Q-A/Data-loss-browser-usage/m-p/242857)
- [App changes are not captured in the spreadsheet](https://support.google.com/appsheet/answer/10105403?hl=en)
- [Losing data](https://googlecloudcommunity.com/gc/Q-A/Losing-Data/m-p/297690)
- [Offline and Sync: The Essentials](https://support.google.com/appsheet/answer/10107724)
- [Concurrent Usage with multiple users](https://support.google.com/appsheet/answer/10104702)

Because the app has to deal with [concurrent user submission](https://googlecloudcommunity.com/gc/AppSheet-Q-A/Concurrent-User-Submissions/m-p/312023/highlight/true#M87713), the issue might probably be from Google sheet API limit or some other stuffs I haven't deeply inspected.

Cross-checking everything again I noticed some loopholes. 
1. Concurrent usage could be taken care of using `user_email()`, which I already used.
2. Having a `uniqueID()` parameter. This I also have used.

## The Blame Game: Is it Me or Appsheet isn't Working Correctly?
My configurations were fine at least. I also noticed that the userss quotes is 11 (more than the expected) probably that might be a reason? Some updates came in successfully, some didn't. I checked the audit log for any syncing issues and realised that majority of my sync reported successful but never came through  into the spreadsheet. Well, I was in a tight corner because people depended heavily on the app to go well.

I had to export the audit logs, thankfully it came as json, and then start extracting the updates that weren't updated in the database. Plus, gather data from our feedback forms to augment for the registration data loss.

## The next steps to prepare for our next events?
The key features I am looking for in this space of no-code apps revolves around:
- number of apps per account
- number of [signed-in] users (public vs private)
- user specific data (see a snapshot of the data not everything)
- available data sources (googlesheet is usually my most preferred data source)
- number of spreadsheet rows per project
- number of updates (read/write/delete)
- whitelabeling (although this is not a major concern for me)

I liked the idea of sharing a spreadsheet [filled with a tab for each user] but the privacy that comes with using an app was what I enjoyed. You get to see only users in your location. Unfortunately, the first outing [using appsheet] wasn't great. As I write, I have started searching for alternatives to Google's Appsheet. Probably Glide comes next, or even an opensource software (less likely due to hosting costs). But I am definitely searching for an alternative platform.

The app was paused to prevent any harm coming to the account. And now we moove to Glide or something else (updates shortly).

**Update**: While soliciting for feedback the next day, other users reported of noticing the data loss but no one signaled. Well, some resorted to the pen-on-paper approach and continued with the event.


