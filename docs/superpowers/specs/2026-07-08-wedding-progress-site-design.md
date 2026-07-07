# Wedding Progress Site Design

## Goal

Create a static, shareable wedding preparation progress page for syncing status with the bride.

## Approach

The site lives inside `website/` under the wedding preparation folder. It is a single static page with local CSS and copied image assets, so it can be opened directly in a browser or hosted later from a Git repository.

## Content

- Show the two wedding dates and current focus.
- Summarize the main preparation areas: wedding cars, supplies, tech performance, schedule and people, payment.
- Present car options with photos, one-day price, two-day price, strengths, and open questions.
- Present male and female supply lists as categorized progress blocks.
- Present robot, robot dog, DJI drone ring delivery, and AI digital human ideas as a coordinated tech wedding section.
- Include a compact list of the next confirmations.

## Visual Direction

Use a warm, calm dashboard style rather than a loud wedding poster style. Use light backgrounds, readable cards, restrained red accents, and a cool tech accent for the robot and AI section.

## Constraints

- Static HTML/CSS only.
- No external network dependencies.
- Mobile-first layout.
- Photos are copied into `website/assets/` with ASCII filenames.
- Do not expose private phone numbers because they are not available yet and this page is for sharing.
