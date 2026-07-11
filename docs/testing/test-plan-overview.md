# Manual Test Plan Overview

This guide is the shared setup for every manual testing guide in this section.

## 1. Seed data

Prepare one stable demo dataset before any test run.

Minimum seed:

1. **2 kingdoms**
2. **2 alliances in each kingdom**
3. **about 30 players total**
4. **1 event instance for each default event**
5. **1 alliance on a premium direct plan**
6. **1 alliance on the free tier**
7. **1 suspended alliance**
8. **1 applied import that was later deleted with results**
9. **1 pre-existing player that later appears again in an import**

Helpful extras:

1. one accepted kingdom grant
2. one pending grant
3. one import in `completed_with_review`
4. one import in `restored_draft`

## 2. Accounts to create

Create at least these accounts:

1. **1 Supreme Admin**
2. **1 King**
3. **1 Alliance Leader**
4. **1 Co-Leader**
5. **1 Alliance Player**
6. **1 multi-role user**

The multi-role user should hold at least:

- one kingdom-scoped role
- one alliance-scoped role in a different place

## 3. Browser setup

Run the main manual pass in a current desktop browser at normal desktop width.

Recommended minimum:

1. one current Chromium-based browser for the full pass
2. one second browser family for a smoke check on key flows

Use a clean profile or incognito window when role switching would otherwise reuse the wrong session.

## 4. Reset between test runs

Before repeating a test pack:

1. return changed plans to their original state
2. revoke grants created only for testing
3. unsuspend anything suspended only for testing
4. clear or recreate imports used only for rollback tests
5. restore deleted demo data if the next run expects it
6. log out of every account

If a run changes too much state, reseed the dataset rather than trying to patch it by hand.
