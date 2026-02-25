# Personal Websites Monorepo

A monorepo containing high-fidelity, interactive personal websites built with React, Tailwind CSS, and GSAP.

## Client Organization Strategy

Every individual has their own directory inside the root of this project containing their respective frontend codebase.

To create a new client project, follow these steps:
1. Duplicate the `client_briefs/_template.md` file and name it `[client-name].md`.
2. Fill out all sections in the client brief (Aesthetic direction, value props, copy, and chatbot context).
3. Request the AI Agent to build the new website based on that brief file. It will automatically read and implement the rules from `GEMINI.md` alongside the brief to generate the custom landing page.

```bash
.
├── client_briefs/    # Initial markdown templates containing client data
│   ├── _template.md  # Duplicate this template to gather information from new clients
│   └── john-doe.md   # Example of a filled out client brief
├── alex-giurea/      # Alex Giurea's Personal Website
└── [other-names]/    # Future personal websites
```

## Current Websites

* **[Alex Giurea's Portfolio](./alex-giurea/)**: A "Midnight Luxe" aesthetic portfolio website built for Alex Giurea containing interactive workflows, tennis statistics, projects, and personal resumes.
