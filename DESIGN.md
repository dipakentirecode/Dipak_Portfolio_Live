# Design system

## Direction

The portfolio uses a dark, mineral-green canvas with a restrained leaf accent. The opening makes Dipak's student and engineering focus clear, then pairs the introduction with a compact code-editor profile snapshot. The rest of the page continues as an editorial sequence of anchored sections and ruled rows, not a grid of decorative cards. It deliberately avoids invented project details, stats, and testimonial proof.

## Tokens

| Role | Value |
| --- | --- |
| Background | `#0b100f` |
| Surface | `#111816` |
| Raised surface | `#151d1a` |
| Border | `#29332e` |
| Primary text | `#edf1e9` |
| Secondary text | `#aab5ad` |
| Accent | `#c5e39a` |
| Accent text | `#182016` |

The page uses the platform sans-serif stack (`Aptos`, `Segoe UI`, system UI) for interface and display text, with system monospace for code and metadata. Keep text contrast, accent usage, and visible focus states consistent with these roles.

## Layout and interaction

- Use a centered content width capped at 1280px with responsive page gutters.
- Keep the primary navigation sticky; elevate it subtly after scrolling.
- On wide screens, place the introduction on the left and the profile terminal on the right. At 700px and below, stack the terminal beneath the introduction and expose navigation through an accessible menu.
- Use the terminal frame only for real profile facts; it is a visual treatment, not a claim about a shipped application.
- Keep motion restrained and disable it when reduced motion is requested.
- Keep sections concise and distinguish known facts from project concepts or details awaiting confirmation.
- Show only the supplied skill categories; do not imply tool proficiency or years of experience.
