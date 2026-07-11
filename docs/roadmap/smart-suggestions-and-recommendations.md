# Smart Suggestions & Recommendations Roadmap

> **Planned / Future · Not implemented yet · Premium Alliance, Premium Kingdom, Premium Both, and selected Free safety suggestions**

Recommendations should reduce investigation time, not replace human judgment. Every card must answer: **What happened? Why is this shown? What can I do? How reliable is the data?**

## Recommendation catalogue

| Future suggestion | Why it would appear | Suggested human action | Mode | Tier | Required data quality |
|---|---|---|---|---|---|
| Remind before event | Player is eligible and recently missed comparable events | Send reminder or dismiss | Suggestion only | Premium Alliance | Reliable eligibility and recent attendance |
| Often misses an event | No accepted participation in several recent eligible instances | Check availability, alliance change, or missing OCR | Suggestion only | Premium Alliance | At least 3 comparable instances |
| Declining activity | Attendance or accepted activity falls across multiple windows | Check in; inspect data coverage | Suggestion only | Premium Alliance | Stable roster and complete recent data |
| Strong participation, low reward visibility | High attendance/contribution but no handled reward record | Review reward rules and handling | Suggestion only | Premium Alliance | Current rules and handled state |
| Reward candidate | Player meets configured eligibility rule | Review and approve/mark handled | Suggestion only | Premium Alliance | Valid rules and accepted results |
| Suspicious score drop | Score is far below the player's comparable history | Verify screenshot, stage, units, or event context | Safety suggestion | Free warning; Premium history | Like-for-like history |
| Inconsistent OCR | Name, power, or score conflicts across rows/frames | Open review and choose source value | Safety suggestion | Free | Confidence and raw-source trace |
| Recent alliance change | Membership history changed near an imported result | Confirm correct scope; avoid membership overwrite | Safety suggestion | Free | Trustworthy membership history |
| Manual review needed | Row is unmatched, conflicting, low-confidence, or missing context | Correct, rematch, ignore, or accept | Safety suggestion | Free | Row-level reasons |
| Low-participation event | Participation is below the alliance's normal range | Inspect eligibility, reminders, and missing data | Suggestion only | Premium Both | Comparable instances and coverage |
| Improving/declining event | Normalized event performance changes across periods | Review trend and contributing groups | Suggestion only | Premium Both | Compatible scoring and sufficient samples |
| Recommended reward list | Multiple candidates meet transparent configured rules | Review, export, and mark handled | Suggestion only | Premium Alliance | Rules, accepted data, audit trail |
| Cleanup priority | Quota pressure is driven by old or duplicate artifacts | Preview safe cleanup candidates | Suggestion with confirmation | Free basic; Premium prioritization | Accurate usage and ownership |
| Import correction | Repeated OCR pattern suggests a scale/name/stage fix | Apply correction in review only | Suggestion only | Premium Both | Source evidence and confidence |
| Subscription usage cleanup | Resource is approaching a limit | Archive/delete safe candidates or request capacity | Suggestion only | Free warning; Premium forecast | Current usage snapshot |
| Alliance needing attention | An alliance has falling participation plus worsening data coverage | King reviews evidence with alliance owner | Suggestion only | Premium Kingdom | Aggregate, privacy-safe metrics |

## Required explanation format

Each recommendation should show:

- **Observation:** the measured fact.
- **Evidence:** instances, dates, counts, and data coverage.
- **Reason:** the rule or model that produced the suggestion.
- **Confidence:** high, medium, low, or insufficient data.
- **Possible data issue:** why the evidence may be incomplete.
- **Actions:** review, correct, remind, dismiss, snooze, or mark resolved.

### Example

> **Suggestion:** CRON missed 3 of the last 5 Bear Trap events.  
> **Why:** No accepted participation row exists in 3 recent eligible Bear Trap instances.  
> **Data check:** One instance contains low-confidence OCR rows.  
> **Suggested action:** Send a reminder, check whether the player changed alliance, or correct the instance if OCR missed them.

## Automation boundaries

The system may automatically *calculate and refresh* suggestions. It must not automatically kick players, change ranks, approve rewards, overwrite results, message people, buy/assign plans, or delete data. Those actions require an authorized person and an impact preview.

## Feedback and governance

Users should be able to dismiss a suggestion with a reason, mark underlying data as wrong, and see when a recommendation rule changed. Kingdom comparisons should use aggregates and respect alliance access boundaries.

