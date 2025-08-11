import React from 'react';
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';

// STUB ENV VARIABLES FOR TESTING
beforeEach(() => {
  vi.stubEnv('DEV', 'true');
  vi.stubEnv('VITE_ENABLE_ANALYTICS', 'true');
});

afterEach(() => {
  vi.unstubAllEnvs();
  vi.clearAllMocks();
});

// MOCK SUPABASE CLIENT
vi.mock('@/services/supabase/supabase.js', () => {
  function mockQueryBuilder(views = 42) {
    return {
      select: vi.fn().mockReturnThis(),
      eq: vi.fn().mockReturnThis(),
      single: vi.fn().mockResolvedValue({ data: { views } }),
    };
  }
  const rpc = vi.fn().mockResolvedValue(undefined);
  return {
    supabase: {
      rpc,
      from: vi.fn().mockImplementation(() => mockQueryBuilder(42)),
    },
  };
});

import { supabase } from '@/services/supabase/supabase.js';
import VisitorCounter from '@/components/ui/VisitorCounter.jsx';

function renderWithRouter(ui, { initialEntries = ['/test-path'] } = {}) {
  return render(<MemoryRouter initialEntries={initialEntries}>{ui}</MemoryRouter>);
}

describe('VisitorCounter', () => {
  it('renders loader then visitor count in dev mode and calls Supabase', async () => {
    renderWithRouter(<VisitorCounter />, { initialEntries: ['/about'] });

    // INITIAL LOADING STATE SHOULD SHOW LOADER
    expect(screen.getByText('...')).toBeInTheDocument();

    // AFTER EFFECT IS EXECUTED, VISITOR COUNT SHOULD BE RENDERED
    await waitFor(() => {
      expect(screen.getByText(/Visitors$/)).toHaveTextContent('42 Visitors');
    });

    // SUPABASE RPC CALL SHOULD HAVE BEEN MADE
    expect(supabase.rpc).toHaveBeenCalledWith('increment_page_view', { page_slug: '/about' });
  });

  it('allows toggling analytics off in dev mode', async () => {
    renderWithRouter(<VisitorCounter />, { initialEntries: ['/'] });

    // WAIT UNTIL INITIAL LOADING STATE IS RENDERED
    await waitFor(() => {
      expect(screen.getByText(/Visitors$/)).toBeInTheDocument();
    });

    // TOGGLE ANALYTICS OFF
    const checkbox = screen.getByRole('checkbox');
    await userEvent.click(checkbox);

    // SHOWS ANALYTICS DISABLED MESSAGE
    expect(screen.getByText('Analytics Disabled')).toBeInTheDocument();
  });
});
