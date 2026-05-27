# d.BOBO Think-Build System: Multi-Agent Architecture

![System Design](https://img.shields.io/badge/System_Design-%2300599C.svg?style=for-the-badge&logoColor=white)
![Prompt Engineering](https://img.shields.io/badge/Prompt_Engineering-FF9E0F?style=for-the-badge&logoColor=black)
![Multi-Agent](https://img.shields.io/badge/Multi--Agent_Systems-8A2BE2?style=for-the-badge&logoColor=white)
![Google Apps Script](https://img.shields.io/badge/Google_Apps_Script-4285F4?style=for-the-badge&logo=google&logoColor=white)

## Executive Summary
The **d.BOBO Think-Build System** is a collaborative, multi-agent AI pipeline designed to automate complex reasoning and business framework generation. Developed as a Senior Capstone engineering project at Auburn University, this repository documents the system's architecture, state-machine prompt orchestration protocols, and the custom middleware endpoint built to achieve full operational status.

The framework consists of a "6-Pack" of essential business instruments processed sequentially across four specialized AI agents, solving the prevalent issue of LLM "instruction drift" during extended, complex reasoning tasks.

## Architecture & Prompt Orchestration
Building effective multi-agent systems requires moving beyond basic API calls into rigorous system design and persona constraints. This repository highlights the core architectural design:
* **Persona Engineering:** The `prompts/` directory contains the strict state-machine system prompts defining the four agent roles:
  * **GPT 1 (Think):** Asili (Origin), Mission, and Vision generation.
  * **GPT 2 (Custom):** Target customer profiling and Needs/Answers mapping.
  * **GPT 3 (SIPOC):** Operational mapping (Supplier → Input → Process → Output → Customer) and Cost of Quality.
  * **GPT 4 (Funnel):** Customer journey, inbound/outbound channels, and Launch Checklist.
* **Interaction Protocols & Guardrails:** Each agent is programmed with hard stops, stage-gates, and strict boundary exclusions to prevent LLM hallucination, preventing the AI from skipping steps or reverting to generic startup methodology.

## Middleware & Automated Data Pipeline
To facilitate seamless context sharing and stakeholder review, the system relies on a custom-built Google Apps Script (GAS) middleware engine located in the `endpoint/` directory.
* **Webhook Integration:** GPT instances utilize OpenAI Custom Actions to trigger an automated JSON payload upon reaching specific conversational checkpoints.
* **Data Logging:** The `doPost_handoff.js` script parses incoming payloads and maps the data to structured Google Sheets for persistent storage.
* **Automated Notifications:** The endpoint dynamically triggers formatted email alerts to the project sponsor, enabling seamless human-in-the-loop (HITL) review.

## Iterative Development Lifecycle
The system was engineered through rigorous, stakeholder-driven development cycles, culminating in a fully operational deployment. The `docs/` directory contains the technical reporting for each phase:
* **Cycle 1:** Initial system scoping, feasibility analysis, and basic GPT 1 design.
* **Cycle 2:** Pipeline integration, prompt refinement to eliminate LLM drift, and bottleneck mitigation.
* **Cycle 3 (Final):** Full system operational status, final architecture lock, and deployment specifications delivered to the project sponsor.
* **Capstone Poster:** High-level visual overview of the entire pipeline, data flow, and problem-solution matrix.

## Repository Structure
```text
dBOBO-multi-agent-pipeline/
├── docs/
│   ├── dBOBO_End_of_Cycle1_Report.docx         # Initial architecture and scoping
│   ├── dBOBO_End_of_Cycle2_Report.docx         # Integration and prompt refinement
│   ├── End of Cycle 3_ Multi-Agent Pipeline Operational.pdf # Full system operational sign-off
│   └── capstone_poster.pdf                     # Visual system architecture
├── prompts/
│   ├── v2_gpt1_think_prompt.md                 # State-machine logic for Stage 1
│   ├── v2_gpt2_custom_prompt.md                # State-machine logic for Stage 2 
│   ├── v2_gpt3_sipoc_prompt.md                 # State-machine logic for Stage 3
│   └── v2_gpt4_funnel_prompt.md                # State-machine logic for Stage 4
├── endpoint/
│   └── doPost_handoff.js                       # Google Apps Script webhook logic
└── README.md
```
Architect / Co-Author: Carter Hand

Collaborator: Cameron Stanford

Project Sponsor: Joel Mackall (d.BOBO / ReIdren Business Group)
