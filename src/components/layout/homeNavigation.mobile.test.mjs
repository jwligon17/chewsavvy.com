import test from "node:test";
import assert from "node:assert/strict";

import {
  homeDesktopNavItems,
  homeMobileNavItems,
  madeForOptions,
} from "./homeNavigation.ts";

test("mobile nav top-level links mirror desktop nav config", () => {
  const mobileTopLevelLinks = homeMobileNavItems
    .filter((item) => !item.children?.length)
    .map((item) => ({ label: item.label, href: item.href }));

  const desktopTopLevelLinks = homeDesktopNavItems.map((item) => ({
    label: item.label,
    href: item.href,
  }));

  assert.deepEqual(mobileTopLevelLinks, desktopTopLevelLinks);
});

test("mobile Made for submenu mirrors madeForOptions config", () => {
  const madeForItem = homeMobileNavItems.find((item) => item.label === "Made for");
  assert.ok(madeForItem?.children?.length, "Made for mobile submenu should exist");

  const mobileMadeForLinks = madeForItem.children.map((child) => ({
    label: child.label,
    href: child.href,
  }));

  const sharedMadeForLinks = madeForOptions.map((option) => ({
    label: option.title,
    href: option.href,
  }));

  assert.deepEqual(mobileMadeForLinks, sharedMadeForLinks);

  for (const link of mobileMadeForLinks) {
    assert.ok(!link.href.startsWith("#"), `Expected route href, got anchor: ${link.href}`);
  }
});
