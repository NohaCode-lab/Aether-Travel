import { test, expect } from '@playwright/test';

test.describe('Aether-Travel SaaS Platform E2E Tests', () => {
  test('User Registration and Login Flow', async ({ page }) => {
    await page.goto('/login');
    await expect(page).toHaveTitle(/Aether/i);
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();

    // Fill login form
    await page.fill('input[type="email"]', 'testuser@aethertravel.io');
    await page.fill('input[type="password"]', 'Password123!');
    await page.click('button[type="submit"]');

    // Should redirect to dashboard
    await expect(page).toHaveURL('/');
  });

  test('Destination Browsing Flow', async ({ page }) => {
    await page.goto('/destinations');
    await expect(page.getByRole('heading', { level: 1 })).toContainText(/Destinations/i);
  });

  test('AI Concierge Chat Interaction', async ({ page }) => {
    await page.goto('/ai-chat');
    await expect(page.getByText(/AI Travel Assistant/i)).toBeVisible();
  });
});
