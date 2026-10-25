"use client";

import { useEffect } from "react";

/**
 * One observer for every element marked with data-pause.
 * Freezes CSS and SMIL animations while the element is offscreen or the tab is hidden.
 */
export default function AnimationPauser() {
  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;

    const elements = new Map<HTMLElement, boolean>();

    const apply = (el: HTMLElement) => {
      const paused = !elements.get(el) || document.hidden;
      el.dataset.paused = String(paused);

      for (const svg of el.querySelectorAll("svg")) {
        if (paused) svg.pauseAnimations();
        else svg.unpauseAnimations();
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const el = entry.target as HTMLElement;
          elements.set(el, entry.isIntersecting);
          apply(el);
        }
      },
      { threshold: 0.05 },
    );

    const register = (el: Element) => {
      if (!(el instanceof HTMLElement) || elements.has(el)) return;
      elements.set(el, false);
      apply(el);
      observer.observe(el);
    };

    const scan = (root: ParentNode) => {
      root.querySelectorAll("[data-pause]").forEach(register);
      if (root instanceof Element && root.matches("[data-pause]")) {
        register(root);
      }
    };

    scan(document);

    const mutations = new MutationObserver((records) => {
      for (const record of records) {
        for (const node of record.addedNodes) {
          if (node instanceof Element) scan(node);
        }
      }
    });
    mutations.observe(document.body, { childList: true, subtree: true });

    const onVisibilityChange = () => {
      for (const el of elements.keys()) apply(el);
    };
    document.addEventListener("visibilitychange", onVisibilityChange);

    return () => {
      observer.disconnect();
      mutations.disconnect();
      document.removeEventListener("visibilitychange", onVisibilityChange);
    };
  }, []);

  return null;
}
