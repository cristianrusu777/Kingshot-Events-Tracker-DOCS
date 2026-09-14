---
title: 'Championship Warboard'
description: 'Build Alliance Championship rosters, work with partial opponent intelligence, compare three-lane plans, and save or export a deployment.'
product: 'kingshot-events'
audience: 'Alliance Championship planners'
experienceLevel: 'Intermediate'
featureArea: 'Simulations and Optimizations'
lastReviewed: '2026-09-14'
verifiedAgainstSourceCommit: 'bea100eeccd39f9d71fc12820b2791c48adfcb8f'
sourceVerificationOwner: 'Ralyvora documentation'
---

# Championship Warboard

The **Championship Warboard** is a four-step, three-lane Alliance Championship planning tool. It compares your roster with several plausible opponent layouts, then produces deployment options designed for different levels of risk. It is a decision-support model, not an official Kingshot formula or a guaranteed match result.

Open [Championship Warboard](https://ralyvora.com/games/kingshot/simulators/championship-warboard) from the Lab. The tool is available to visitors and does not require a tracked Ralyvora alliance.

## 1. Build both rosters

Set the Championship week, opponent name, and current round. Add your alliance and the opponent independently by using any of these methods:

- add and edit players one at a time;
- paste rows copied from Excel or Google Sheets;
- paste CSV, tab-separated, or aligned text;
- paste a single column of AC Squad Power values;
- paste three AC columns headed as the three lanes;
- use the screenshot prompt to convert screenshots with an external AI assistant, then review and paste its CSV output.

The standard multi-column import accepts player name, real account Power, Town Center or Truegold context, AC Squad Power, and an optional player ID. AC Squad Power is the value the battle model uses to order and compare fighters. Real Power and Town Center are supporting context and do not replace observed AC when it is known.

Imports open as a preview. Apply the valid rows and keep invalid or duplicate rows visible for correction. A roster can contain up to 60 modeled fighters, with up to 20 effective fighters in each lane.

Signed-in users with the appropriate roster permission may preview a suggestion from their tracked alliance. The suggestion is never applied automatically, may be incomplete or outdated, and does not prove Championship registration. Manual entry remains available.

## 2. Review opponent intelligence

Exact opponent AC is optional. When a player has real Power but no observed AC, the Warboard estimates AC from the Power and AC pairs entered in the current board. Every estimate is labeled, includes a likely range and confidence, and stays distinct from observed AC.

::: warning Estimates are planning inputs
The calibration is based on the evidence in this Warboard. It is not an official game conversion formula. Sparse data, outliers, and estimates outside the observed Power range widen uncertainty.
:::

For Round 1, you can run a blind plan without an opponent roster. The tool produces balanced, aggressive, and safer two-lane options from your own AC roster. If you add an opponent roster, the default Round 1 assumption treats the strongest modeled players as candidates, not confirmed participants.

For Rounds 2 to 5, record only what was actually observed in earlier battles:

- newly observed AC values;
- actual opponent lane assignments;
- optional known lane totals;
- the observed win or loss.

Missing players remain in the roster. New observed values replace estimates, while saved prediction history remains available for comparison. The tool reports observed, estimated, and unknown coverage separately.

## 3. Run and compare strategies

Select the expected opponent lineup and a strategy, then choose **Run Warboard**. The run is explicit, so editing a roster or assumption marks older results stale until you run again.

Results compare several deployment styles, including balanced, robust, aggressive, underdog, sweep, minimum-change, and manual plans when applicable. Each plan shows:

- expected round-win outlook and a robust floor;
- expected lane wins across plausible opponent layouts;
- individual lane matchups, likely knockouts, and confidence;
- the AC distribution and ordered fighter curve for both sides;
- the assumptions and model evidence behind the recommendation.

Alliance Championship battles are modeled as ordered lane duels, with weaker fighters entering before stronger fighters and a fighter retiring after two knockouts. A high total lane AC is useful context, but the result is calculated from the ordered individual matchups.

Use lane locks to protect a lane from automated changes. Save the current board as a baseline when you want the minimum-change strategy to count required moves from an existing assignment.

The **Scenario Matrix** compares each available plan against each plausible opponent arrangement. On a narrow screen, swipe the matrix horizontally. Use the detailed panels only when you need lane curves, alternative layouts, calibration evidence, or predicted-versus-actual history.

## 4. Save, update, and export

Choose **Save scenario** to store the current week, opponent, round, rosters, observations, and predictions. Saved scenarios are keyed by week, opponent, and round.

Warboard saves are browser-local and separated between a visitor and a signed-in user on the same browser. They are not cloud profiles, alliance records, or shared sessions. Clearing site data or changing browsers can remove them.

After choosing a plan, you can:

- copy formatted lane instructions for Discord;
- download a CSV containing lane, order, player name, AC, estimate status, and lock state;
- record the forecast before battle, then link later observations to review accuracy;
- save a baseline board so later plans can minimize moves.

## Limitations

- Hidden registration and hidden lane assignments remain uncertain until observed.
- Confidence describes the model evidence in this board, not a promise of a win frequency.
- Estimated AC should be replaced with observed AC when reliable evidence becomes available.
- The tool does not submit a lineup to Kingshot or update tracked Player records.
- Browser-local scenarios are not a substitute for an alliance backup or an official in-game roster.

For reusable account equipment and combat facts in other Lab tools, see [Profiles and autosave](/kingshot-events/lab/profiles-and-autosave). For individual combat distributions rather than Championship lane planning, use the [Battle Simulator](/kingshot-events/lab/battle-simulator).
