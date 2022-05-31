# Reproduction of "Error: Digests do not match"

### To reproduce the error:

1. Clone the repository
2. `yarn`
3. `yarn test --workers=3 --max-failures=1`

### Result should be like this:

```
Running 28 tests using 3 workers
  ✓  src/integration/dummy3.spec.ts:4:3 › Dummy page2 › dummy 1 (5s)
  ✓  src/integration/dummy.spec.ts:4:3 › Dummy base 1 › dummy 1 (4s)
  ✓  src/integration/dummy2.spec.ts:4:3 › Dummy page1 › dummy 1 (5s)
  ✓  src/integration/dummy.spec.ts:9:3 › Dummy base 1 › dummy 2 (4s)
  ✓  src/integration/dummy2.spec.ts:9:3 › Dummy page1 › dummy 2 (5s)
  ✓  src/integration/dummy3.spec.ts:9:3 › Dummy page2 › dummy 2 (5s)
  ✓  src/integration/dummy.spec.ts:14:3 › Dummy base 1 › dummy 3 (4s)
  ✓  src/integration/dummy3.spec.ts:14:3 › Dummy page2 › dummy 3 (5s)
  ✓  src/integration/dummy2.spec.ts:14:3 › Dummy page1 › dummy 3 (5s)
  ✓  src/integration/dummy.spec.ts:19:3 › Dummy base 1 › dummy 4 (4s)
  ✓  src/integration/dummy3.spec.ts:19:3 › Dummy page2 › dummy 4 (5s)
     src/integration/dummy2.spec.ts:19:3 › Dummy page1 › dummy 4
     src/integration/dummy4.spec.ts:4:3 › Dummy page2 2 › dummy 1
  ✘  src/integration/dummy5.spec.ts:4:3 › Dummy page3 › dummy 1 (0ms)

To open last HTML report run:

  npx playwright show-report



  1) src/integration/dummy5.spec.ts:4:3 › Dummy page3 › dummy 1 ====================================

    Error: Digests do not match



  Slow test file: src/integration/dummy3.spec.ts (19s)
  Consider splitting slow test files to speed up parallel execution

  1 failed
    src/integration/dummy5.spec.ts:4:3 › Dummy page3 › dummy 1 =====================================
  16 skipped
  11 passed (20s)
error Command failed with exit code 1.
```
