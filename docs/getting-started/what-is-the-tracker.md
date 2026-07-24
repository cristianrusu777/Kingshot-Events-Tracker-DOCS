# What the Tracker Does

The Kingshot Event Tracker is a scoreboard and record‑keeper for the game *Kingshot*. Instead of juggling screenshots and spreadsheets, your kingdom and alliances keep everything in one place: who your players are, how they did in each event, and who earned rewards.

This page explains the main ideas. Keep the **[Glossary](glossary.md)** handy - it defines every term used here.

## The building blocks

The app is organized in layers, from the biggest group down to a single score. Each layer lives inside the one above it.

```
Kingdom
  └── Alliance
        └── Player
              └── Result  (one player's score in one event instance)

Event template  →  Event instance  →  Results
```

- **Kingdom** - the top level, matching an in‑game kingdom/server. A kingdom contains alliances.
- **Alliance** - a group of players inside a kingdom.
- **Player** - a single governor, belonging to an alliance. Players have things like power, alliance rank, and a nickname history.
- **Event template** - a *reusable definition* of an event, such as "Bear Trap" - its rules, how it's scored, and how many stages it has. Templates are the recipe, not a specific occurrence.
- **Event instance** - one *actual run* of an event on specific dates (for example, "Bear Trap - March 3"). This is where scores get recorded.
- **Result** - one player's score (or participation) in one event instance.

The difference between a **template** and an **instance** matters a lot, so it has its own glossary entries: [template](glossary.md#event-template) and [instance](glossary.md#event-instance).

## Getting scores into the app

There are two ways to record what happened in an event:

1. **Screenshot imports.** You upload screenshots from the game (a damage ranking, a points list, and so on). The app reads the names and numbers for you and shows them as a list of proposed rows for you to check. **Nothing is saved to your players until you review and accept those rows** - imports always start as a safe draft. See the [import](glossary.md#import) and [review row](glossary.md#review-row) glossary entries.
2. **Manual entry.** You type the scores in yourself. This is handy for small events or fixing up an import.

Both paths end the same way: reviewed numbers become **results** attached to an event instance.

## What the app does with your data

Once results are in, the app turns them into useful views:

- **Dashboards and analytics** - charts and summaries of how your kingdom, alliance, and players are doing.
- **Reward eligibility** - based on rules you set, the app flags which players earned rewards.
- **History** - nickname changes, past events, and an audit trail of who changed what.

## Who runs the tracker

Different people have different **roles**, and each role can see and do different things:

- **Supreme Admin** runs the whole platform.
- **King** (also called Kingdom Admin) runs one kingdom.
- **Alliance Leader** runs one alliance.
- **Co‑Leader** helps a leader with day‑to‑day tracking.
- **Alliance Player** is a view‑only member.

For what each role can do, read **[Roles Explained](../roles/overview.md)**.

## What's paid vs. free

The platform can run on **subscription plans**. Every kingdom and alliance always has at least a free plan, and premium plans unlock extra features (deeper analytics, recommendations, larger limits). You don't need to understand the paid side to use the basics - it's covered in a later section. For now, the two terms worth knowing are [effective plan](glossary.md#effective-plan) and [grant](glossary.md#grant).

## Next steps

- [Glossary](glossary.md) - learn the vocabulary.
- [Log In & Out](logging-in.md) - get into the app.
- [Finding Your Way Around](navigating.md) - the layout.
