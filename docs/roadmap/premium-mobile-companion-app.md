# Premium Mobile Companion App Roadmap

> **Planned / Future · Not implemented yet · Premium Both / Future Experimental**

Possible working names include **Kingshot Tracker Companion**, **KET Companion**, and **Kingshot Event Tracker Mobile**.

## Purpose

Help authorized users capture screenshots or short recordings while playing, queue them as drafts, send them to the web dashboard, and review them later.

## Proposed capabilities

- manual screenshot and screen-recording capture
- permission-based floating capture button where the operating system allows it
- event, player list, KvK prep, alliance member, and battle result capture modes
- bulk screenshot queue
- premium short-video queue
- offline encrypted drafts
- QR-based account pairing with revocation
- upload progress and processing-complete notifications
- “review on web” handoff

## Platform direction

Android is the more realistic first research target because capture and overlay workflows are more flexible. iOS may need a share-sheet or ReplayKit-based workflow because persistent overlays and background capture are more restricted.

## Explicitly out of scope

The companion must not auto-click, auto-play, cheat, bypass protections, read hidden data, steal accounts/tokens, or capture without informed permission. It must not save imported game data before review.

