# Advanced Analytics Roadmap

> **Planned / Future · Not implemented yet · Free, Premium Alliance, Premium Kingdom, Premium Both, and Experimental ideas**

The future analytics system should help users understand *what changed, why it matters, and what to inspect next*. Scores must be accompanied by their inputs, time window, data coverage, and uncertainty.

## Planned analytics catalogue

| Analytics idea | Purpose | Who benefits | Data used | What the user would see | Tier | Complexity | Main risks | Phase |
|---|---|---|---|---|---|---|---|---|
| Alliance health score | Summarize participation, reliability, growth, review debt, and roster stability | Leaders, Kings | Accepted results, attendance, roster changes, unresolved rows | 0–100 score, five sub-scores, trend, evidence | Premium Both | High | Oversimplification; unfair comparison | D |
| Player activity score | Show recent involvement without equating absence with misconduct | Leaders | Attendance, accepted activity, recency | Score band, recent evidence, “insufficient data” state | Premium Alliance | Medium | Stigmatizing players | C |
| Player reliability score | Estimate how consistently a player appears in expected events | Leaders | Eligible instances, accepted participation, manual corrections | Reliability percentage and event breakdown | Premium Alliance | Medium | Missing OCR mistaken for absence | C |
| Event participation trends | Reveal attendance changes over time | All roles | Eligible players and accepted participation | Trend line, coverage, comparison window | Free summary; Premium detail | Medium | Eligibility changes distort trend | C |
| Event score trends | Track score direction by event type | Leaders, Kings | Accepted scores, event type, dates | Median/total trend with outlier markers | Premium Both | Medium | Different event rules compared blindly | C |
| Player score consistency | Distinguish stable performance from volatility | Leaders | Per-player accepted results | range, median, consistency band | Premium Alliance | Medium | Small sample sizes | C |
| Missed-event tracking | Count eligible instances without accepted participation | Leaders | Eligibility snapshots, participation, corrections | missed list with evidence and correction action | Free basic; Premium history | Medium | OCR omissions | C |
| Event comparison | Compare like-for-like event instances | Leaders, Kings | Template, stage, dates, participation, scores | normalized comparison table | Premium Both | High | Incompatible scoring modes | C |
| Stage analytics | Identify strong or weak event stages | Leaders, Kings | Stage identifiers and accepted stage results | stage trend, drop-off, contribution | Premium Both | High | Incorrect stage mapping | C |
| KvK before/after comparison | Measure power change around preparation checkpoints | Kings, Leaders | power snapshots and capture dates | before/after delta and missing-snapshot warnings | Premium Both | Medium | Non-comparable snapshot timing | C |
| Alliance growth/decline | Track roster, power, attendance, and contribution direction | Leaders, Kings | roster history, power, results | multi-metric trend with cause notes | Premium Both | High | Correlation presented as cause | D |
| Power growth tracking | Show player/alliance power movement | Players, Leaders, Kings | dated validated power values | growth line and suspicious-jump flags | Premium Both | Medium | OCR scale errors | C |
| Role/rank distribution | Understand roster composition | Leaders, Kings | current and historical ranks/roles | distribution and change summary | Free current; Premium history | Low | Stale roles | C |
| Reward readiness | Surface players near or above configured rules | Leaders | reward rules, points, attendance, handled state | candidate list with rule evidence | Premium Alliance | Medium | Treating suggestion as entitlement | D |
| Inactive-player warnings | Find players who may need a check-in | Leaders | recency, eligible misses, roster state | explainable warning and dismiss/correct actions | Premium Alliance | Medium | False positives | D |
| Data-quality score | Measure completeness and unresolved review debt | Editors, admins | confidence, conflicts, missing links, manual overrides | coverage score with fix queue | Free summary; Premium dashboard | High | Score hides issue severity | E |
| Manual-override audit | Explain where users corrected imported data | Leaders, Kings | change trail and audit records | override timeline and before/after values | Premium Both | Medium | Exposing sensitive operator patterns | E |
| Kingdom event health | Show participation and coverage across alliances | Kings | alliance aggregates, event instances, data coverage | comparison grid and low-coverage warnings | Premium Kingdom | High | Cross-alliance privacy | C |
| Granted-alliance visibility | Separate direct, granted, and free analytics coverage | Kings | plan/grant state and aggregates | grant-aware coverage map | Premium Kingdom | Medium | Confusing access with performance | C |
| Participation forecast | Estimate a range for likely attendance | Leaders, Kings | seasonal attendance and eligible roster | forecast range, confidence, drivers | Future Experimental | Very high | Misleading certainty | Later research |
| Workload forecast | Predict review volume and import cleanup effort | Editors, admins | import history, row confidence, event schedule | expected queue range and staffing hint | Future Experimental | High | Bad historical data | Later research |

## Alliance health score design

A future health score should never be a mysterious single number. It should show separately:

- participation stability
- score/contribution trend
- roster stability and recent movement
- data completeness and unresolved review debt
- reward follow-through

Users should be able to open each component, see the exact window and evidence, and disable components that do not fit their alliance. No score should automatically kick, demote, reward, suspend, or shame a player.

## Player behavior insights

Future behavior views may highlight attendance streaks, recurring misses, recovery after inactivity, event preferences, score volatility, and power-versus-participation patterns. These are observations about tracker records—not claims about motivation, character, or conduct.

## Custom analytics builder

Planned **Premium Both** controls:

- date range
- kingdom, alliance, or player scope
- event type and event instance
- stage
- metric
- grouping
- filters and minimum data coverage
- comparison period
- PDF, CSV, or Excel export

Example future questions include “Top 20 Bear Trap contributors last month,” “Players missing Alliance Brawl Day 3,” and “KvK power before versus after preparation.”

## Prediction boundaries

Predictions must use ranges, identify their strongest drivers, disclose sample size and missing data, and provide a “why might this be wrong?” explanation. They must remain advisory and opt-in.

