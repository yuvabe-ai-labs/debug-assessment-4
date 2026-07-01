# Assessment Instructions

**Time limit: 2 hours**

This assessment tests your ability to trace bugs **across multiple components** using browser DevTools. Each bug has its root cause in one part of the codebase and its visible symptom somewhere else entirely — reading a single file will not be enough.

## Setup

1. Fork this repository on GitHub
2. Clone your fork locally:
   ```bash
   git clone <your-fork-url>
   cd task-assessment-4
   ```
3. Install dependencies:
   ```bash
   pnpm install
   ```
4. Start the dev server:
   ```bash
   pnpm dev
   ```
5. Open http://localhost:3004
6. Install the **React Developer Tools** browser extension if you don't have it

## What to do

For each symptom in `SYMPTOMS.md`:

1. **Reproduce** the symptom exactly as described
2. **Trace using DevTools** — follow the data from where the symptom appears back to its origin:
   - **Sources tab** — set breakpoints at multiple points in the call chain, step through async code, inspect the Scope panel at each call frame
   - **React DevTools** — inspect component props at each level of the tree to find where a value changes from correct to wrong
3. **Prove the root cause** before editing any code — document what you saw in DevTools
4. **Fix it**
5. **Fill in the Google Doc** using `DEBUG_REPORT_TEMPLATE.md` (your lead will share the Doc link)

## Submission

1. Push all your fixes to your fork
2. Open a Pull Request back to the original repo
3. **Attach the Google Doc link** in the PR description
4. Each fix must be its own commit using the format below

## Commit Message Format

```
fix(bug-N): <one-line description>

DevTools used: <Sources / React DevTools / Network / Console>
Investigation: <2-3 sentences on what you found during your component trace>
Root cause: <what was wrong and in which component/file>
Fix: <what you changed>
```

## Tips

- The symptom and the root cause are in **different components**. Start at the symptom, then trace the prop or state back up the tree.
- In React DevTools, compare the same prop at the parent level vs the child level to find where the value goes wrong.
- In Sources, set breakpoints at **both** the component that shows the wrong value AND the component that produces it.
- Some bugs only appear under specific timing conditions — reproduce exactly as described before investigating.
