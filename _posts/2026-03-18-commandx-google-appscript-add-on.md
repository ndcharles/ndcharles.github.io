---
published: false
layout: post
title:  "Why I Built CommandX: My Own Toolkit for Google Sheets"
categories: [ Product, Data, Tech, Growth ]
image: assets/images/commandx_toolkit.webp
tags: [CommandX, google-sheets, automation, google-apps-script, call-centre, operations]
---
I built CommandX for one reason: I wanted every tool I need for processing data in one place, not spread across several free and paid tools.

For a long time, my go-to was Ablebits. It's a good add-on, but I only needed it now and then, and paying a subscription for occasional use didn't make sense. It was also missing a few things my work needed. On top of that, I needed something I could hand to the rest of the team, and I couldn't ask everyone to buy their own subscription.

Sharing turned out to be the hardest part. Some of the people I work with use our work email, and others use their agency email. Tools that work nicely inside one company account often break once someone from outside that domain needs access. Whatever I used had to work for all of them.

So I built my own.

When I choose tools for the team, I try to pay only for what we use, and I build only [when nothing fits](/choosing-tools-pay-for-what-we-use#when-nothing-fits-we-build). CommandX is the clearest example of that last case. No single product did the whole job, and paying for several of them would have meant monthly bills for jobs we do in weekly bursts.

## The job it was built for

The easiest way to explain CommandX is to walk through a call cycle.

We run a call centre of 15 agents making over 4,500 calls a week to applicants and leads. Every cycle looks roughly like this:

1. A large list lands in one sheet, sometimes thousands of rows. It gets cleaned.
2. The list is shared out, so each agent gets their own tab with their own contacts.
3. Agents call, update the status of each contact, and add notes.
4. New leads keep arriving during the week and need to go to the right agents.
5. At the end, everything is pulled back into one master list for reporting.

Before CommandX, I got through this with a mix of split sheets, the Ablebits Power Tools add-on and a lot of copy-and-paste. Formulas had to be copied from sheet to sheet, and every copy was another place for something to break. It also meant the process lived in my head. If I went on leave, handing it over to someone else was hard.

Each part of CommandX handles one step of that cycle.

## What each piece does

**x-split: share the list out.** You pick a sheet and choose how to divide it: a fixed number of rows per tab (say 300 contacts per agent), or by the values in a column (one tab per city, programme or agent name). It creates the tabs, copies the header and column widths, and can lock columns so agents can't change data they shouldn't touch.

Two small decisions here saved me a lot of trouble. Rows with an empty value in the split column don't disappear. They go to their own tab, so I can see them and deal with them. And when I append new leads to agents' existing tabs, anything that doesn't fit goes to a "left-over" tab instead of being dropped.

**x-tracker: record when things happen.** This one runs in the background. When an agent updates a column like "Initial call", the tool stamps the date in a matching column like "Initial call date". You can lock the date columns, so the dates only come from the tool and can't be typed in by hand.

This is what makes our 24-hour response time measurable. Without real timestamps, "we responded within a day" is a guess.

**x-combine: bring it all back.** Select the agent tabs (or all of them), and CommandX stacks them into one master tab, with an optional column showing which tab each row came from. You can make it a one-time copy, or a live version that updates on its own whenever an agent edits their tab.

Before it combines anything, it shows a quick preview of the columns in each tab and how often each one appears. That's how you notice that one agent renamed "Phone" to "Phone Number" before it breaks your report.

**x-merge and x-flatten: handle people who apply more than once.** One person can apply to several programmes, so the same email shows up on several rows. x-merge collapses them into one row per person, with their programmes listed together, like "VA, AICE". x-flatten does the reverse: it takes a cell with several values and splits it back into one row per value, which is what you want for analysis.

**x-filter: pull out what you need.** Choose a column, tick the values you want, and get them in one tab or one tab per value. Like x-combine, it can be a snapshot or a live view.

## From copied scripts to one shared library

The first version of CommandX was a script I copied into each spreadsheet that needed it. That worked until I had to fix something. Every fix meant finding every copy and updating it by hand, which was the same copy-and-paste problem I was trying to escape.

In March 2026 I moved everything into a single Apps Script library. Now each spreadsheet has a short piece of setup code that points to the library, and the real work happens in one place. I fix a bug once, publish a new version, and every sheet can use it. It also solved the sharing problem: anyone I give access to can use it, whatever email they're on, and nobody needs a subscription.

Around that, I added the things I'd expect from any tool a team relies on:

- **Version checks.** Every sidebar shows the version you're on. If a newer one is out, you get a notice telling you how to update.
- **A changelog** inside the tool, so people can see what changed and when.
- **A help manual** with a tab for each tool, so nobody needs me on a call to learn it.
- **An install guide** that gives you the setup code to copy into a new sheet.

None of this is complicated code. It's the same thinking you'd apply to any system a team depends on: one source of truth, controlled releases, documentation, and a clear way to update. That's the part of this project I'm proudest of, and it's the part that carries over to any IT or operations role.

## If you want to build something similar

You don't need to be a developer to do this. Most of CommandX is plain logic: loop through rows, group them, write them somewhere else. These are the lessons that made the difference for me:

**Start with a job you repeat every week.** Write down every step you take, including the annoying ones. The annoying steps are what you're automating.

**Check what you're paying for.** If you're on a subscription for something you use a few times a month, add up what it costs you per use. That number is often the push you need.

**Build for the person who'll use it.** Agents and team leads don't want to write formulas. A menu and a sidebar with dropdowns and checkboxes means anyone on the team can run it without breaking anything.

**Never let data disappear quietly.** Blank values, leftover rows and mismatched columns should end up somewhere you can see them. A tool that silently drops rows is worse than doing it by hand.

**Decide between live and snapshot.** A live formula keeps updating as the source changes, which is great for a master list. A snapshot stays fixed, which is better for a record of what happened on a given day. Give people the choice.

**What you see in a cell isn't always what the script sees.** This one cost me real time. The column preview in x-combine kept spinning and never loaded. The cause was dates: the script was reading them as date values, and Apps Script can't pass those from the sheet to a sidebar. Reading each cell as the text you see on screen fixed it.

**Put it in one place early.** If more than one sheet needs the tool, make it a library from the start. Copying scripts around feels faster until the first bug.

**Plan for the day you're not there.** A tool only you can run is a risk to the team. Explaining each step in plain words in a help page shows you which steps are too complicated, and it means someone else can pick up the work when you're on leave.

## What it's changed

Splitting a sheet or appending new data now takes seconds, and anyone on the team can do it once they have the data. It doesn't have to wait for me.

I can add timestamps to any column people fill in, merge several programme applications into one row per email whenever I need to, and use the same tool across as many sheets as I like. When I'm away, the work carries on.

Looking back, CommandX passed every question I ask before choosing a tool. What does it need to do? Six connected jobs that no single product covered. Who needs it? Anyone on the team, including people on agency emails outside our domain. How often? Every call cycle. What does it connect to? Nothing outside the sheet, because the work already lives there. Was there a deal on a ready-made option? Ablebits came closest, but a subscription for occasional use didn't add up, and it didn't have everything I needed.

When the answers look like that, building is the cheaper and better option. I wrote more about how I make that call in [Paying for What We Use](/choosing-tools-pay-for-what-we-use#when-nothing-fits-we-build).

## What's next

I'd like to turn CommandX into a proper Google Workspace add-on for my own use, so it's there in every sheet without any setup. I looked into it, and the process involves more steps than I have time for right now, so I'll come back to it later.

Until then, you can use it the same way my team does, as a library.

<details style="border:1px solid #dadce0; border-radius:8px; padding:12px 16px; margin:1.5rem 0;">
<summary style="cursor:pointer; font-weight:600;">Show the setup steps and code (click to open)</summary>
<ol style="margin-top:1rem;">
<li>Open the Google Sheet you want to use it in.</li>
<li>Go to <strong>Extensions &gt; Apps Script</strong>.</li>
<li>Click <strong>+</strong> next to <strong>Libraries</strong> and paste this Script ID: <code>1lmhlX_ZrCyR4KVGP9rbo51ZpCNSIXgBJheOY_7JBMhSxLMy0vr8dAUhK</code></li>
<li>Make sure the identifier is <strong>CommandX</strong>, pick the latest version, and click <strong>Add</strong>.</li>
<li>Delete everything in <strong>Code.gs</strong>, paste the code below, name the project and save.</li>
<li>Reload your sheet. You will see a new <strong>command-X</strong> menu.</li>
<li>Optional, for x-tracker: change the tab and column names in the settings to match your sheet. Then in Apps Script, go to <strong>Triggers</strong>, add a trigger for <code>adminOnEdit</code> with the event type <strong>On edit</strong>, and save.</li>
</ol>
<pre style="max-height:320px; overflow:auto; font-size:12px; line-height:1.5; padding:12px; border-radius:6px; background:#f6f8fa;"><code>// command-X Client Script
function onOpen() {
  SpreadsheetApp.getUi()
    .createMenu('🔌 command-X')
    .addItem('⛓️‍💥 x-split', 'openSplit')
    .addItem('⛓️ x-combine', 'openCombine')
    .addItem('⛙ x-filter', 'showFilter')
    .addSeparator()
    .addItem('⛓ x-merge', 'openMerge')
    .addItem('𝌤 x-flatten', 'openExpand')
    .addSeparator()
    .addItem('❓ How this library works', 'showHelp')
    .addItem('📖 Run this library in another sheet', 'showSetupInstructions')
    .addToUi();
}

// Sidebars
function openSplit() {
  const html = CommandX.getLibraryHtml('sidebar').setTitle('x-split').setWidth(420);
  SpreadsheetApp.getUi().showSidebar(html);
}

function openCombine() {
  const html = CommandX.getLibraryHtml('combineSidebar').setTitle('x-combine').setWidth(420);
  SpreadsheetApp.getUi().showSidebar(html);
}

function showFilter() {
  const html = CommandX.getLibraryHtml('filterSidebar').setTitle('x-filter').setWidth(420);
  SpreadsheetApp.getUi().showSidebar(html);
}

function openExpand() {
  const html = CommandX.getLibraryHtml('expandSidebar').setTitle('x-expand').setWidth(420);
  SpreadsheetApp.getUi().showSidebar(html);
}

function openMerge() {
  const html = CommandX.getLibraryHtml('mergeSidebar').setTitle('x-merge').setWidth(420);
  SpreadsheetApp.getUi().showSidebar(html);
}

// X-TRACKER SETTINGS (optional)
// SETUP A: each action column stamps its own date column
const ONE_TO_ONE = {
  trackedTabs: ["Agent 1", "Agent 2", "Agent 3"],
  headerRow: 1,
  columnMap: {
    "Initial call": "Initial call date",
    "Follow-up": "Follow-up date"
  }
};

// SETUP B: any of these columns stamps one shared date column
const MANY_TO_ONE = {
  trackedTabs: ["Agent 1", "Agent 2", "Agent 3"],
  headerRow: 1,
  watchColumns: ["Call status", "Call date"],
  timestampColumn: "Logged date"
};

// Runs on every edit once you add the trigger (step 7)
function adminOnEdit(e) {
  runTracker(e, ONE_TO_ONE);
  // To switch setups, comment out the line above and uncomment the line below:
  // runTracker(e, MANY_TO_ONE);
}

// Bridge: lets the sidebars reach the library
function getSpecificSheetData(name) { return CommandX.getSpecificSheetData(name); }
function getInitialData() { return CommandX.getInitialData(); }
function getSheetNames() { return CommandX.getSheetNames(); }
function getSheetSchema(names) { return CommandX.getSheetSchema(names); }
function getUniqueValues(sheetName, rangeA1, colIdx, hasHeaders) { return CommandX.getUniqueValues(sheetName, rangeA1, colIdx, hasHeaders); }
function runSplit(opts) { return CommandX.runSplit(opts); }
function runCombine(opts) { return CommandX.runCombine(opts); }
function runFilter(config) { return CommandX.runFilter(config); }
function runExpand(opts) { return CommandX.runExpand(opts); }
function runMerge(config) { return CommandX.runMerge(config); }
function runTracker(e, config) { return CommandX.runTracker(e, config); }
function showHelp(tab) { return CommandX.showHelp(tab); }
function showSetupInstructions() { CommandX.showSetupInstructions(); }</code></pre>
<p>Once it is installed, <strong>command-X &gt; How this library works</strong> walks you through each tool, and <strong>View Changelog</strong> in any sidebar shows what is new.</p>
</details>

If you try it and something breaks, or you have an idea for a new tool, [reach out](https://linke.ro/ndcharles). I'd like to hear how you use it.

A few notes on how it's built (because the details matter 😊):
- Google Apps Script, published as a shared library with version checks
- HTML sidebars and a tabbed help manual inside Google Sheets
- Live views built on Google Sheets' `QUERY` function
- An on-edit trigger for automatic timestamps
- Column locking that is saved and restored when data is appended to protected tabs
- Six tools: x-split (with an append mode), x-combine, x-filter, x-merge, x-flatten and x-tracker
