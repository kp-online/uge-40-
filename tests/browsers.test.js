import { expect, test } from '@playwright/test';

import _config from '../_config';

const HOST = _config.server.host;
const PORT = _config.server.port;

test('Test browsers', async ({ page }) => {
  const response = await page.goto(`http://${HOST}:${PORT}`);
  expect(response?.ok()).toBeTruthy();
});
