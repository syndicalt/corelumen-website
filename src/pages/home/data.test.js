import { describe, expect, it } from 'vitest';
import { commands, events, levels, systems } from './data.js';

describe('Founder OS homepage data', () => {
  it('defines the approved navigation commands in order', () => {
    expect(commands.map((command) => command.id)).toEqual([
      'thesis',
      'systems',
      'proof',
      'founder',
      'contact',
    ]);
  });

  it('groups the approved systems by maturity level', () => {
    const byLevel = systems.reduce((acc, system) => {
      acc[system.level] = [...(acc[system.level] || []), system.name];
      return acc;
    }, {});

    expect(Object.keys(levels)).toEqual(['flagship', 'tools', 'applications']);
    expect(byLevel.flagship).toEqual(['Ainix', 'Zaxy', 'Specora Core']);
    expect(byLevel.tools).toEqual([
      'Pathlight',
      'llmff',
      'Rava',
      'AIegis',
      'Eventloom',
      'Tugboat',
    ]);
    expect(byLevel.applications).toEqual(['Provara', 'Divita']);
  });

  it('keeps every system inspectable with role, status, maturity, focus, and connections', () => {
    for (const system of systems) {
      expect(system.id).toMatch(/^[a-z0-9-]+$/);
      expect(system.tagline.length).toBeGreaterThan(10);
      expect(system.summary.length).toBeGreaterThan(40);
      expect(system.thesisRole.length).toBeGreaterThan(40);
      expect(system.status.length).toBeGreaterThan(3);
      expect(system.maturity.length).toBeGreaterThan(3);
      expect(system.currentFocus.length).toBeGreaterThan(10);
      expect(Array.isArray(system.connections)).toBe(true);
    }
  });

  it('connects curated proof events to known systems', () => {
    const systemIds = new Set(systems.map((system) => system.id));

    for (const event of events) {
      expect(systemIds.has(event.systemId)).toBe(true);
      expect(event.title.length).toBeGreaterThan(10);
      expect(event.summary.length).toBeGreaterThan(20);
    }
  });

  it('highlights Tugboat docs and package distribution', () => {
    const tugboat = systems.find((system) => system.id === 'tugboat');

    expect(tugboat.proofLinks).toEqual(
      expect.arrayContaining([
        { label: 'GitHub', href: 'https://github.com/syndicalt/tugboat' },
        { label: 'Site/docs', href: 'https://syndicalt.github.io/tugboat' },
        { label: 'PyPI', href: 'https://pypi.org/project/tugboat-ai/' },
      ])
    );
    expect(tugboat.primaryCta).toEqual({
      label: 'Visit site',
      href: 'https://syndicalt.github.io/tugboat',
    });
    expect(tugboat.secondaryCta).toEqual({
      label: 'PyPI package',
      href: 'https://pypi.org/project/tugboat-ai/',
    });
  });
});
