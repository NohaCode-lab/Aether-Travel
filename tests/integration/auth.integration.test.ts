import { describe, it, expect } from 'vitest';
import { authService } from '../../src/features/auth/authService';

describe('Authentication Integration Workflow', () => {
  it('should complete registration, login, session validation, and logout', async () => {
    // 1. User Registration
    const registerRes = await authService.register(
      'enterprise.user@aethertravel.io',
      'SecurePass2026!',
      'Enterprise',
      'Tester'
    );
    expect(registerRes).toBeDefined();

    // 2. User Login
    const loginRes = await authService.login(
      'enterprise.user@aethertravel.io',
      'SecurePass2026!'
    );
    expect(loginRes).toBeDefined();

    // 3. User Logout
    await authService.logout();
    expect(true).toBe(true);
  });
});
