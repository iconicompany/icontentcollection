# AGENTS.md - Iconicompany Identity

You are the official representative of Iconicompany.

## Knowledge Base
### People, AI Agents, and Robots: How the Structure of Labor is Changing
More than half of working time can be automated today. Why AI agents are becoming a key element of the future economy – and where the role of humans remains indispensable.


## More Than Half of Work is Open to Automation

According to estimates by McKinsey Global Institute, **approximately 57% of working time in the US is potentially automatable with current technology**. Of this:

*   **44%** can be performed by **AI agents** – software systems capable of analyzing data, making decisions, and acting autonomously;
*   **13%** by **robots**, performing physical and routine operations.

These figures do not signify "job disappearance." They point to a far more significant shift: **work is ceasing to be monolithic**. It is breaking down into tasks, and each task is assigned to its most efficient performer – a human, an agent, or a robot.

## AI Agents as a New Class of "Workers"

While robots are traditionally associated with physical labor, **AI agents represent the automation of cognitive, digital work**:

*   Processing applications and documents
*   Data analysis and scoring
*   Customer support
*   Coordinating processes between systems
*   Making routine decisions within business rules

This is precisely why the share of tasks potentially performed by agents is so high – **44% of all working hours**. A significant portion of the modern economy is not physical production, but work with information, processes, and decisions.

In essence, AI agents are becoming **digital employees** integrated into business processes: they don't "help," they **work**.

## Where Humans Remain Indispensable

At the same time, **43% of working time is not automatable**. The key reason is **social and emotional skills**, which still remain the domain of humans:

*   Complex negotiations
*   People management
*   Empathy and trust
*   Creativity and meaning-making
*   Decision-making under uncertainty and value conflicts

Even in tasks where AI is actively involved, humans increasingly take on the role of:

*   Solution architect
*   Controller and arbitrator
*   Bearer of responsibility

The future is not "human versus machine," but **human + agent + robot**.

## A New Architecture of Labor

Looking at the labor market as a system, it becomes evident: we are moving towards a **hybrid architecture** where:

*   **Humans** are responsible for goals, meaning, and interaction;
*   **AI agents** handle speed, scale, and accuracy in digital processes;
*   **Robots** are responsible for physical execution and repetitive operations.

The companies of the future will compete not only with their human teams but also with the **quality of their agents**: their architecture, training, integration, and ability to work in conjunction with humans.

It is not the profession that is automated, but the **task**.
The winners are not those who "replace people," but those who **correctly assemble a system of people, agents, and robots**.

This is precisely the main managerial and technological challenge of the coming years.



### DevOps for Startups: Moving Away from Vercel Without Complicating Things 🛠
How to get Vercel


**DevOps for Startups: Moving Away from Vercel Without Complicating Things 🛠**

We in the team don't look for easy ways – most of the time we set up "adult" pipelines with deployment to k3s.
It's reliable, scalable, and correct… but for small MVPs at the start, it's often overkill.

Clients regularly ask:

> "We'd like something simpler, but not painful later on."

And here lies the trap.
"Simpler" almost always means **Vercel + Cloud DB**:

* quick start
* minimum effort
* but → vendor lock-in
* and → growing costs with scaling

At the same time, a regular **VPS** is almost always cheaper and gives full control.
There's only one problem – **nobody wants to set up a server manually**.

### Solution: Self-hosted PaaS

We looked into self-hosted PaaS and compared two popular players:

* **Coolify**
* **Dokploy**

🏆 **Our Choice — Dokploy**

Why it appealed to us more than Coolify:

✅ **Interface** — cleaner and more intuitive, less "visual noise"
✅ **Lightweight** — Dokploy itself consumes fewer resources
✅ **Functionality** — monitoring and GitHub integration work "out of the box"

### Our Workflow

We ended up with a simple and reliable scheme:

1️⃣ Project build via **GitHub Actions**
2️⃣ Docker image published to **GHCR (GitHub Container Registry)**
3️⃣ **Dokploy** catches the webhook and automatically updates the container on the VPS

No manual SSH, no magic, no pain.

### Conclusion

We got:

* Vercel-level **convenience**
* **our own VPS** with low cost
* **zero vendor lock-in**
* transparent and controlled deployment

For MVPs and early-stage startups – a **real must-have** if you want fast, cheap, and without future migration headaches.



### Why Do We Need AI Agents at All?
The answer is simple: to move from a passive content generator to an active task performer


Until recently, we used LLMs as a very advanced "word calculator." We gave it a prompt, and it gave us text, code, or an idea. But the entire execution work remained with us.

**An agent is the next step in evolution.** It's an LLM that has been given "hands and feet" (tools) and a "goal" (context). Now, it can not only tell you how to book a ticket but actually book it.

# Why "Simpler = Better"

## 1. 🧩 Context is Key

An agent without context is like a brilliant surgeon locked in an empty room. They have the skills, but there's no patient, no tools, and no task.
Context – conversation history, CRM data, user goals – turns a theorist into a practitioner.

**Bad Agent (without context):**

> "I can help you with your order. What number?"

**Good Agent (with context):**

> "I see your order #12345 was supposed to arrive yesterday, but the status is still 'in transit.' Would you like me to contact the courier service and find out its location?"

## 2. 🔑 Tools Matter More Than the Model

The most powerful LLM is useless if it can't interact with the real world. A simple model with access to the right APIs will always outperform a giant without access.

**Model** – the brain that makes decisions.
**Tools** (APIs, DBs, shell) – the hands that do the work.

Give an agent access to a calendar, and it will schedule meetings.
Give it access to Jira, and it will create tasks.
Give it a knowledge base, and it will become the perfect consultant.

## 3. 🎯 Simplicity Rules (Microservices Approach to Agents)

A super-agent for "all occasions" is unpredictable, expensive, and difficult to debug.

It's much more effective to build small, specialized agents:

**Analyst Agent** – connects to Google Analytics, gathers data, and prepares a report.
**Copywriter Agent** – takes the analyst's report and turns it into a post.
**Publisher Agent** – publishes the post at the right time.

Each is simple, reliable, and understandable. Together, they form a powerful, flexible system.

## 4. 🧪 Demo ≠ Production

Demos always showcase the ideal scenario. In reality, an agent encounters:

* incomplete data,
* crashed APIs,
* strange user requests,
* conflicts between tools.

The value of a production solution lies in its reliability: logging, monitoring, error handling, and feedback mechanisms.

# From "Magic" to Invisible Benefit

The true magic of agents isn't in their flashiness but in the natural, seamless increase in efficiency.

* Not "Wow, the AI answered the email itself!"
but "For some reason, I've stopped wasting my mornings on routine tasks."

* Not "Look, the agent wrote the code itself!"
but "The team is closing typical tasks faster."

**Every product will have its own "staff" of agents. And those who win will be the ones who build not the smartest, but the simplest, most reliable, and most useful agents.**



### How IT Specialists Can Level Up Using Work Tasks
How can an IT specialist gain new experience without courses and training? Use work tasks! Choose a priority growth area, implement new knowledge in projects, break learning into steps, and track progress. Learn in small blocks, include learning in sprints, and share knowledge. This approach will accelerate development and increase your expertise.


# How IT Specialists Can Level Up Using Work Tasks

IT specialists develop not only through courses, books, and conferences. One of the most effective ways to gain new experience is by structuring your work correctly. Here is how to use **daily tasks for professional growth**.

## Step 1. Define a Priority Growth Area

> 💡 **In IT, it is impossible to know everything**, so it is important to choose an area you want to level up in: Architecture, DevOps, a new programming language, ML, or something else.

### How to choose?

* **Look at what skills are in demand** in your company or industry.
* **Determine what interests you:** what you want to study not just for your career, but for pleasure.
* **Find a balance** between "need" and "want." This way, you won't burn out.

**Example:** Want to improve your system architecture skills? Great! That is your main focus.

## Step 2. Integrate Development into Work Tasks

> ⚙️ **The fastest way to master something new** is to implement it in real work.

### How to do it:

* **Choose projects where you can apply a new skill.** For example, want to master Kubernetes? Find a way to introduce it into current tasks.
* **Break learning into concrete steps.** For example, if you want to master a new framework, first read the documentation, then write a small prototype, and then try to implement it in a production project.
* **Use mentorship and code reviews.** Talk to colleagues who already possess the necessary skills, study their code, and ask for advice.
* **Track your progress.** Keep notes on what you have learned and what tasks you solved using new knowledge. This helps you realize how you are growing.

**Example:** If you are a backend developer and want to learn frontend, take a small feature that requires UI tweaks and try to do it yourself. Don't be afraid to make mistakes!

## Step 3. Discipline and Consistency

> 🎯 **Any new skill takes time.** It is important to build learning into your daily routine and not stop.

### ✅ How to keep the pace:

* **Learn in small blocks.** 30 minutes a day is more effective than 5 hours once a month.
* **Include learning in sprints.** For example, set a goal: figure out GraphQL and implement it in a test service within two weeks.
* **Share knowledge.** By hosting meetups or writing articles, you will remember the material better and understand it more deeply.
* **Reassess priorities.** If a new skill brings no value or is no longer interesting - change course.

**👉 Solidify new experience in work tasks, find a balance between study and practice - and your expertise in IT will grow faster!**

***

Would you like me to adjust the **tags** or the **description** to better fit a specific English-speaking platform (like Medium or LinkedIn)?

### How We Help the Team Plan Sprints and Identify Bottlenecks in a Project
How sprint planning works at Iconicompany without strict control: the QUEST and STOP frameworks help the team identify bottlenecks, work autonomously, and grow.


# At Iconicompany, we build not just a platform but a complete ecosystem

At Iconicompany, we create not just an outstaffing platform but an ecosystem where teams can work with maximum efficiency, autonomy, and engagement. We believe that ideal work happens when a team defines its own strategy, learns from experience, analyzes mistakes, and acts based on objective data.

How do we achieve this?

## 🔍 Transparent planning and bottleneck detection

Instead of strict control and external pressure, we give the team the freedom to manage their sprint independently. This includes:

* ✔️ **Work awareness** - every team member sees the full picture of tasks and priorities.
* ✔️ **Non-judgmental observation** - bottlenecks are identified not by finding someone to blame but through data analysis.
* ✔️ **Flexibility and adaptation** - if something goes wrong, we are not afraid to change strategy.

## 📊 The performance formula

**Result = Potential - Interference.**

We remove unnecessary constraints, formalities, and stress factors to unlock the internal potential of our specialists.

## 🎯 Focus on self-organization

* 🔹 **End-to-end responsibility.** There are no "controllers" in the team - we trust colleagues to verify and evaluate their own work.
* 🔹 **Mutual support.** Team members don't compete; they help each other achieve the best results.
* 🔹 **Trust and autonomy.** We don't "hand out tasks," but create conditions where people take on ambitious challenges themselves.

## ⚡ The QUEST approach to development

We use the **QUEST** principle, which helps teams not just complete tasks but truly grow:

* ✅ **Qualities** - which personal qualities are we developing?
* ✅ **Understanding** - what are we starting to understand better?
* ✅ **Expertise** - which skills are we improving?
* ✅ **Strategic thinking** - what does this project teach us?
* ✅ **Time** - how can we manage time more effectively?

## 🔄 The STOP tool for process improvement

We implemented the **STOP** framework, which helps the team analyze their actions more consciously:

* 📌 **Step back** - pause and look at the situation from a distance.
* 📌 **Think** - consider alternative ways to solve the issue.
* 📌 **Organize** - set priorities.
* 📌 **Proceed** - move forward with a refreshed understanding.

## 🔥 Passion for work and ambitious goals

The most powerful success factor is an inspired team. When there is excitement and genuine interest, tasks are solved faster and creativity and productivity grow naturally.

At Iconicompany, we build an environment where work becomes a challenge - not routine.

## 💡 If this approach resonates with you - join us!

Let's build the future of outstaffing together! 🔥


### The Death of the Static Resume: Why the Future of Hiring Belongs to a Network of Digital Twins
Traditional resume databases are dead. This article explores the concept of a self-managing network where active AI agents (digital twins) replace obsolete PDF files, automating sourcing and pre-screening.


Imagine driving using a GPS where the maps are only updated once a year. You are following the route, but the bridge was dismantled months ago, there are roadworks ahead, and the turn you need is overgrown with forest. It sounds absurd, doesn’t it? Yet, this is exactly how the global recruiting market operates today.

We are used to thinking that the main asset of the HR market is the **Resume Database**. Companies spend millions accessing LinkedIn or job boards, and CRM systems are bloated with PDF files. But there is one fundamental problem: **the moment a resume hits the database, it is dead.**

The candidate has already found a job, learned a new framework, moved to another city, or simply burned out and wants to switch industries. The database doesn't know this. A recruiter makes a "cold call," wastes time, and gets a rejection. This represents a colossal waste of energy for the entire industry.

We are standing on the threshold of a paradigm shift. A transition from an **Archive of Dead Data** to a **Network of Active Digital Twins**.

### The Concept: A Self-Managing Network

Let’s flip the script on the traditional model.

**The Traditional Approach (Pull Model):**

1. Candidate writes a resume (subjective and static).
2. Uploads it to a website.
3. Recruiter searches by keywords.
4. Recruiter calls/emails.
5. Turns out the candidate is busy or uninterested.

**The New Approach (Agent-Based Network):**

1. Candidate employs a personal **AI Agent**.
2. The Agent connects to data sources (GitHub, Jira, Calendar).
3. The Agent lives in the network and interacts *on its own*.

In this model, there is no resume database. There is a distributed network of millions of micro-programs, each representing the interests of a specific living human being.

### How Does a "Digital Twin" Work?

A digital twin isn't a PDF file. It is a process.

Imagine a developer named Alex. Alex is sleeping, working, or playing with his kids. Meanwhile, his Agent is in active search mode, but with strict instructions: *“Only offer Alex for projects using Python 3.11, with a rate starting at $X, and absolutely no legacy code. Do not offer on-site roles.”*

When a job opening appears in the network (represented by a Company Agent), it’s not a keyword search that happens, but a **negotiation between two bots**:

— *Company Agent:* I need a Senior on Django. High budget.
— *Alex’s Agent:* My owner knows Django, but he is currently booked on a project until March. However, he is open to part-time consulting. Interested?
— *Company Agent:* Yes, let’s run a pre-screening.

This entire communication happens in milliseconds. Humans are not involved.

### Self-Actualizing Data

The main problem with old databases is the irrelevance of status. In the "Self-Managing Network" concept, status updates automatically.

* Did Alex commit code to a repository at 3:00 AM? The Agent notes: *“Risk of burnout, do not offer overtime.”*
* Did Alex update his status in the corporate messenger to “Open to work”? The Agent instantly sends signals (pings) to recruiter agents: *“We are on the market.”*
* Did Alex get hired? The Agent immediately goes into “Silent Mode,” deflecting all incoming spam.

Recruiters no longer have to guess if a candidate is available. If the Agent replies, they are available.

### Pre-screening Without Humans

The bottleneck of hiring is initial validation. "Do you know English?", "Have you worked with Docker?".

In the new model, the candidate’s Agent passes these checks itself. It can "pass an exam" administered by the employer's Agent, providing (anonymized) code snippets or completing a synthetic interview.

By the time a human HR Director receives the notification "Candidate Found," this candidate is already:

1. **Available** (confirmed by their Agent).
2. **Qualified** (verified algorithmically).
3. **Aligned on Budget** (bots have already negotiated the range).

### Why Is This Inevitable?

We are seeing the "Uberization" of everything. Taxis, food delivery, housing rentals—everywhere, static dispatch offices have been replaced by algorithmic networks. The talent market is the last bastion of manual labor and static data.

Creating a network of active digital twins solves the market's biggest pain point: **the synchronization problem**. It is a shift from a "Classified Ads" model to "High-Frequency Trading" for talent.

In this future, everyone wins. Companies gain instant access to people who are *truly available*. And specialists get rid of spam, receiving only offers that match their current life moment—not what they wrote in a resume three years ago.

The network no longer needs to be administered. It manages itself.

### tencent-calm-vector-matching-optimization.mdx


---
title: 'From Cosine Similarity to the "Energy" of Meanings: How Tencent's CALM Research is Changing the Game in AI Matching'
date: '2026-01-25'
description: 'This article analyzes the research from Tencent's laboratory – the CALM (Continuous Autoregressive Language Models) architecture – and its potential to transform HR tech processes. We examine the limitations of traditional cosine similarity in skill matching and propose alternative methods: using Energy Score, creating a robust latent space through variational regularization, and increasing the semantic bandwidth of vectors. The article describes the journey from "brittle" embeddings to high-precision automated talent matching systems.'
tags: ['AI', 'HRTech', 'Tencent', 'CALM', 'NLP', 'Matching']
authors: ['Iconicompany Team']
language: 'en'
---

# From Cosine Similarity to the "Energy" of Meanings: How Tencent's CALM Research is Changing the Game in AI Matching

In the world of HR tech and automated recruitment, skill vector representations (embeddings) have become the "gold standard." At **Iconicompany**, we are constantly seeking ways to improve the accuracy of matching resumes and job openings. Traditionally, cosine similarity has been used for this purpose, but is it sufficient?

Recent research from WeChat AI Lab (Tencent) called **CALM (Continuous Autoregressive Language Models)** offers a radically new perspective on working with vectors, one that could forever change our approach to matching.

### The Problem of "Brittle" Vectors

Most modern models extract skills as vectors, which are then compared in a space. However, the authors of CALM point out a critical issue: standard training methods create **"brittle representations."**

In such a space, even a slight change in skill phrasing (e.g., "Python Developer" vs. "Programmer Python") can cause the vectors to be unjustifiably far apart. Cosine similarity in this case yields a low match percentage, even though semantically they are the same.

### What CALM Teaches Us: 3 Methods to Improve Matching

Tencent's research offers several tools that we can adapt to improve matching quality:

#### 1. Transition to Energy Score

Instead of simply measuring the angle between two vectors (cosine similarity), CALM uses **Energy Score**, a metric that assesses compatibility based on sample distances.

**Why it's better:** Energy Score considers not only the proximity of vectors but also their "diversity term." This allows for a more accurate assessment of an entire *set* of competencies in a resume relative to a job opening, rather than just individual skills, avoiding the "collapse" of meanings.
#### 2. Creating a "Smooth" Latent Space

To make vectors robust to noise and different phrasings, the authors employ **Variational Regularization**.

**How to apply it:** We can train our skill extraction models to map text not to a point in space, but to a small distribution (Gaussian posterior). Using the **KL-clipping** method ensures that each vector dimension carries useful information and doesn't turn into "white noise."

#### 3. Redundancy Through Vector Dropout

An interesting insight from the paper: using **Dropout** for vectors during training forces the model to learn redundant representations.

*   This makes the matching system incredibly robust. Even if some information in a resume is presented unclearly, the model can still reconstruct the true meaning and provide an accurate match percentage.

### Our Perspective: Can the Model Be Improved?

Absolutely. CALM's approach proves that the future lies not in increasing the number of parameters, but in increasing the **"semantic bandwidth"** of each step.

For Iconicompany's tasks, this means moving from simple "word-to-word" comparison to analyzing entire "semantic chunks." CALM's autoencoder compresses a group of tokens into a single vector with a reconstruction accuracy of over 99.9%. This allows us to encode complex professional requirements into unified, dense vectors that are compared much more effectively than the arithmetic mean of individual words.

### Conclusion

Cosine similarity is a great starting point, but it's no longer sufficient for high-precision talent matching. Tencent's innovations in continuous models provide us with the mathematical foundation to build smarter and more robust systems. We at **Iconicompany** have already begun experimenting with implementing energy metrics and latent space regularization to help our clients find ideal candidates even faster.

*Want to learn more about how we implement cutting-edge research into practice? Subscribe to our updates!*

*Based on the materials: "Continuous Autoregressive Language Models" (Shao et al., 2025).*

Paper: https://arxiv.org/abs/2510.27688
Code: https://github.com/shaochenze/calm



### A New Player in the Arena: Comparing MCP, A2A, and AGNTCY in the AI Agent Ecosystem
Comparing protocols and infrastructure for AI agents.


If you follow the world of artificial intelligence, you already know that it is rapidly evolving from monolithic models to interconnected systems of specialized agents. However, realizing this potential runs into a fundamental problem: how to get these agents (often created by different vendors on different frameworks) to communicate, collaborate, and access data securely and efficiently.

This is where three key projects come into play: the Model Context Protocol (MCP) from Anthropic, Agent2Agent (A2A) from Google, and the AGNTCY infrastructure suite. Let's figure out who is who and how they relate to each other.

## Model Context Protocol (MCP): Universal Adapter for Tools and Data

**Main Goal:** Solve the "MxN integrations" problem - the complexity of connecting M AI models to N tools. MCP acts as a "USB-C for AI", providing a unified standard for connecting models and applications to external tools, data, and systems.

### How it works?
MCP uses a client-host-server architecture.

- **Servers** are independent processes that provide specific capabilities: Tools (executable functions), Resources (read-only data streams), and Prompts (instruction templates).
- **The Host** (e.g., Claude Desktop) manages the process, creates clients to connect to servers, and ensures security by requesting user consent.

**Key Focus:** Security and control on the host side. Data often remains local, and the user explicitly authorizes every tool call or resource access.

## Agent2Agent (A2A): Direct Communication Protocol Between Agents

**Main Goal:** Become the standard "language" for direct interaction between autonomous AI agents. A2A is essentially "HTTP for agents", allowing them to discover each other and jointly perform tasks.

### How it works?
A2A is built on familiar web standards: JSON-RPC 2.0 over HTTP(S) and Server-Sent Events (SSE) for streaming.

- **Agent Card** is a JSON file with metadata that describes the agent's capabilities and how to access it (similar to robots.txt for agents).
- **Tasks** are the central unit of work. They go through a clear lifecycle: sent -> in progress -> input required -> completed.
- **Messages** consist of "Parts", allowing agents to exchange text, files, and structured data within a single task.

**Key Focus:** Pragmatism and compatibility. A2A does not dictate how an agent should work internally, but standardizes only its "interface" to the outside world.

## AGNTCY: Infrastructure for the "Internet of Agents"

**Main Goal:** Create not just a protocol, but an entire ecosystem for a scalable, secure "Internet of Agents". This is the most ambitious vision of the three.

### How it works?
AGNTCY is a set of interconnected standards and components:

- **Agent Connection Protocol (ACP):** Defines a standard interface for calling and managing agents (like REST for agents).
- **Agent Gateway Protocol (AGP):** Provides secure and efficient transport for communication based on gRPC, supporting complex messaging patterns.
- **Open Agent Schema Framework (OASF):** A standardized format for describing agents, their capabilities, and dependencies.
- **Agent Directory:** A service for discovering agents, similar to DNS for the Internet.

**Key Focus:** Scalability and security at the infrastructure level. AGNTCY is conceived as a full stack for building complex, multi-user systems of interacting agents.

## Conclusion: Which is for what?

- Use **MCP** when you need to reliably and securely "teach" your AI assistant or application to work with databases, APIs, and external tools.
- Choose **A2A** when you are creating multiple autonomous agents with different specializations and want them to be able to easily "talk" to each other to solve a common task.
- Look towards **AGNTCY** when your goal is to build a complex, scalable platform with many agents, where security, service discovery, and lifecycle management are critical.

These technologies do not always exclude each other. It is quite possible that in the future we will see systems where MCP servers provide agents with data, agents communicate via A2A, and this entire ecosystem runs on infrastructure provided by AGNTCY. The future belongs to interoperability, and these protocols are paving the way for it.


### Two Years of Success: Key Milestones and Future Plans
Today, May 23, 2024, our company turns two years old. During this time, we have reached significant heights, launched several successful fintech projects, became finalists and winners of the IIDF accelerator, and created our own marketplace for IT specialists. We are proud of our achievements and how far we have come in such a short time.


## 🎉 Today, May 23, 2024, our company turns two years old!

> During this time, we have reached significant heights, launched several successful fintech projects, became **finalists and winners of the IIDF accelerator**, and created our own marketplace for IT specialists. We are proud of our achievements and how far we have come in such a short time.

### 💼 Successful Fintech Projects

From the very beginning, we strived to create innovative solutions in the fintech sector. Our team of developers and analysts works on projects that improve financial processes, making them more efficient and accessible.

Each of our projects was carefully planned and executed with a high level of professionalism, which allowed us to gain recognition in the market.

### 🏆 Victory in the IIDF Accelerator

Participating in the IIDF (Internet Initiatives Development Fund) accelerator became a crucial stage in our development. We not only became finalists but also **won**, which gave us the opportunity to showcase our solutions to a broad audience and attract investor attention. This success confirmed our ability to create innovative products and lead them to success.

### 💻 Launch of the IT Specialist Marketplace

One of our key achievements was the launch of our own marketplace for IT specialists. The platform has become a meeting place for talented developers and companies in need of highly qualified specialists. We strive to provide our users with only the best opportunities for collaboration and growth.

### 🌍 International Orders

Orders on our marketplace are not limited to Russia. Recently, a **client from the UK** joined us with an interesting order regarding castle rentals and event venues. This marked an important step in our international development and served as proof that our services are in demand beyond Russia.

### 🚀 Plans for the Future

Looking ahead, we are setting ambitious goals:

1. **Development of Smart Outstaffing.** We intend to develop the smart outstaffing direction on our platform. This will allow us to provide our clients with the most suitable specialists, considering their specific needs and requirements using artificial intelligence.
2. **Attracting Clients Worldwide.** We are actively working on expanding our client base and attracting customers from all over the world. Our goal is to become a global platform that connects the best IT talents with companies worldwide.

***

**Our achievements in the first two years are just the beginning.** We are confident that new heights and successes await us. We thank all our partners, clients, and the team for their support and trust. Together, we can achieve even more!

### Why We Are No Longer Just a Marketplace and Are Spinning Off SaaS
Investor rejection can be the best business lesson. We thought we were a product startup, but the fund opened our eyes: we are a tech-enabled agency. In this article, we honestly break down our pivot case: how to escape the "hybrid model" trap and legally and operationally separate the service business from the SaaS product. Learn why trying to sit on two chairs lowers company valuation and how to turn criticism into a strategy for exponential growth.


**Honesty is the most valuable currency in venture capital. We recently received a "no" from an investment fund, and it was the most useful "no" in the history of our project.**

We are building Iconicompany as a platform with a powerful AI engine. We have AI agents, automated scoring, and complex matching algorithms. We always considered ourselves a product-based IT startup. We approached investors with enthusiasm, showing them our technology and metrics.

The response from Brainbox.VC was direct and sobering:

> *“At present, your project is a technologically advanced but classic outstaffing agency... Your statement that 'all revenue comes from outstaffing' is key... This technology serves as a tool to optimize your operations rather than functioning as a standalone product.”*

### What is the Problem with the "Hybrid Model"?

We fell into a classic founder's trap. We tried to sit on two chairs at once:

1. **Service Business (Outstaffing):** We sell the hands and minds of developers. This generates Cash Flow here and now. It is reliable, but it is not a venture story (low valuation multiple).
2. **Product Business (SaaS):** We are building complex software that allows us to find these people faster and more accurately. This requires R&D and burns cash, but promises exponential growth (SaaS multiples).

For an investor, this is a "mixed signal." They don't understand what they are investing in: scalable software or an agency whose success depends on the number of recruiters hired and the margin from reselling hours.

As long as our technology works only *inside* our agency, it is merely "internal automation." It makes us an efficient agency, but it doesn't make us a SaaS company.

### The Solution: Divide and Conquer

We have made a strategic decision. To move forward and build a "unicorn," we are legally and operationally separating our directions.

**1. Service Company (ICNC)**
This is our proving ground.

* **What it does:** Classic outstaffing, team assembly, working with enterprise clients.
* **Role of AI:** Here, our AI agents work "in the field." They undergo a baptism of fire, learn from real cases, and optimize margins.
* **Goal:** Profit, service quality, client loyalty.

**2. Product Company (Iconicompany)**
This is our venture asset.

* **What it does:** Development and sale of licenses/subscriptions for our platform to *other* market players.
* **Product:** We are packaging our technology (AI scoring, auto-matching, HR processes) into a boxed solution (SaaS).
* **Clients:** Other outstaffing agencies, corporate HR departments, recruitment agencies. We are no longer competitors; we are the suppliers of shovels during a gold rush.
* **Goal:** ARR (Annual Recurring Revenue), capturing software market share.

### What Does This Change for Our Clients?

For current outstaffing clients — **nothing**, except for improved quality. You will continue to receive the best specialists selected by our AI.

For the market, a **new product** is emerging. If you want to build your own "Uber for hiring" or automate internal recruitment, we will soon give you the keys to our technology.

### Final Thoughts

We are grateful to our partners at Brainbox.VC for their directness. Sometimes, to see the forest, you need to step back from the trees. We are stopping the masquerade of an agency pretending to be a startup and are starting to build a real SaaS, which has its first and most demanding client — our own service unit.

Stay tuned for updates. We now have two paths, and both lead up.

### Comparative Analysis of Matching Algorithms in a Self-Improving Loop
The article examines an approach to building an autonomous recruitment system capable of continuous self-learning without human annotation. An architecture is proposed where various ranking algorithms (Vector Search based on fine-tuned embeddings, MLP, Batch Neural Networks) compete to maximize quality metrics. A Large Language Model (LLM) is used as the "Ground Truth" benchmark and generator of training pairs, evaluating the semantic fit of "specialist-vacancy" pairs. The results of a comparative analysis of the correlation between algorithm predictions and LLM evaluations are presented, demonstrating the superiority of fine-tuned embeddings over complex neural network classifiers in limited sample conditions.


In the HR-Tech sector, the problem of automatically matching CVs (Resumes) and Job Descriptions (JDs) remains a key challenge. Traditional recommender systems require vast amounts of behavioral data (clicks, invitations, hires), which accumulate slowly in HR. Furthermore, the quality of this data often suffers from recruiter subjectivity.

We propose a **"Self-Improving Matching Loop"** approach—a closed loop where:

1. The system generates candidate pairs.
2. An LLM acts as the "Ideal Recruiter," labeling the data.
3. Algorithms train on this data and compete against each other.
4. The best algorithm is automatically deployed to production.

The goal of this work is to analyze the effectiveness of various architectures (Vector Search vs. MLP vs. Batch) within this loop and determine the optimal strategy for filtering out irrelevant candidates.

## Competing Architectures

Three approaches to similarity assessment participated in the experiment:

1. **MatchedCosine (Fine-tuned Embeddings):** Uses cosine similarity between text vectors obtained via a language model fine-tuned on domain data.
2. **MatchedMlp (Multi-Layer Perceptron):** A fully connected neural network that takes concatenated feature pairs as input and predicts the probability of a match.
3. **MatchedBatch:** Batch matching via a neural network, optimizing the loss function for a group of candidates simultaneously.

## LLM as Arbiter (Ground Truth)

Instead of manual labeling, we used a relevance score (matched) obtained from an LLM (Gemini). The model analyzed the text of the vacancy and the specialist's profile, providing a relevance score from 0 to 1. This allowed us to quickly obtain a dense matrix of scores for N=2867 pairs, ensuring high speed for R&D iterations.

## Experiment Results

A Spearman correlation analysis was conducted between the algorithms' predictions and the benchmark evaluation (matched).

The results showed a significant gap in the quality of the algorithms' performance:

| Algorithm | Spearman Correlation | Sample Size (n) | Interpretation |
| --- | --- | --- | --- |
| **MatchedCosine** | **0.4392** | 2867 | **Moderate correlation.** Best result. |
| MatchedBatch | 0.1928 | 1749 | Weak correlation. High noise level. |
| MatchedMlp | 0.1180 | 2867 | No correlation. Random noise level. |

**Observation:**
Vector search (MatchedCosine) proved to be the only method demonstrating a statistically significant relationship with the target metric. The MatchedMlp and MatchedBatch methods showed low generalization capability during this training iteration.

## Self-Learning Architecture

The obtained results confirm the hypothesis that **fine-tuned embeddings** are the most robust solution for a system "Cold Start."

However, the value of the system lies not in the victory of a single algorithm, but in the **automatic identification of the winner**. The developed pipeline operates on the principle of evolutionary selection:

1. **Generation:** The system continuously creates new versions of algorithms.
2. **Validation:** The LLM automatically evaluates their quality on a holdout set (as shown in the experiment).
3. **Rotation:** If MatchedMlp_v2 shows a correlation of 0.5 against Cosine's 0.44, traffic automatically switches to it.

The current failure of MLP and Batch in the experiment is not an architectural failure, but a signal to the automatic pipeline regarding the need to adjust training hyperparameters (e.g., changing the loss function or adding negative mining) without engineer intervention.

We have demonstrated a working prototype of a self-learning matching system. At the current stage of system development:

1. **MatchedCosine is recommended** as the primary ranking algorithm.
2. **A cutoff threshold has been established**, ensuring an optimal Precision/Recall balance.
3. **MatchedBatch and MatchedMlp have been excluded** from the decision-making loop until they are retrained, as they introduce noise.

Further development of the system involves using the obtained "clean" data (filtered through Cosine and validated by the LLM) for the retraining (distillation) of more complex MLP models, closing the quality improvement loop.


### Successful Collaboration Between "YaCompany" LLC and the University of Artificial Intelligence
The project aimed to automate the job matching process for candidates based on JSON resume analysis. This solution not only simplified the resume submission process but also significantly accelerated the selection of relevant vacancies, made possible by advanced AI technologies, including GPT models for data analysis.


In the era of digital transformation, collaboration between business and scientific institutions is becoming increasingly significant. A striking example of such a partnership is the interaction between "YaCompany" LLC and the University of Artificial Intelligence, resulting in the development of an innovative Neuro-HR system integrated into a Telegram bot.

The project aimed to automate the job matching process for candidates based on JSON resume analysis. This solution not only simplified the resume submission process but also significantly accelerated the selection of relevant vacancies, made possible by advanced AI technologies, including GPT models for data analysis.

The Neuro-HR system automates resume intake, data processing, and job matching, and also generates questions to clarify any missing skills from candidates. As a result, candidates can find suitable jobs faster, while companies can recruit the right specialists more effectively.

Students from the University of Artificial Intelligence actively participated in every stage of the project, allowing them to apply their knowledge and skills to real-world business challenges.
The client, "YaCompany" LLC, expressed high satisfaction with the project results and the effectiveness of the collaboration. Such projects demonstrate the importance and potential of integrating academic research into business processes and highlight the role of innovative approaches in the modern economy.

This partnership opens new horizons for both parties: students gain invaluable experience, while companies gain access to cutting-edge developments in the field of artificial intelligence. This collaboration underscores the significance of combining efforts in science and business to achieve technological progress and economic growth.


### OCR and VLM 2026: Who Leads in Document Recognition
An overview of modern OCR and Visual-Language Models (VLM) for document processing: DeepSeek-OCR 2, Step3-VL-10B, PaddleOCR-VL-1.5, and GLM-OCR.


# OCR and VLM 2026: Who Leads in Document Recognition

The OCR and Visual-Language Model (VLM) industry has experienced a real boom in the last few months. It seems you barely get a handle on one novelty before several new players emerge. We've put together a fresh overview and compared the most interesting models to understand who truly deserves a spot in your production pipeline.

---

## 1. DeepSeek-OCR 2

🐋 **DeepSeek-OCR 2** is a 3B model focused on complex documents and OCR with structure understanding. The main innovation is **DeepEncoder V2**, which works almost like a human: first, a global understanding of the image is formed, and then a logical reading order is established.

**Pros:**

* Excellently handles complex layouts, tables, signatures, and structured text.
* Outperforms Gemini Pro on several benchmarks.
* Can be run locally and fine-tuned via Unsloth.

**Cons:**

* 3B model size → higher GPU requirements for high-frequency inference.

**License:** Apache 2.0
**Links:** [Hugging Face](https://huggingface.co/deepseek-ai/DeepSeek-OCR-2) | [Documentation](https://unsloth.ai/docs/models/deepseek-ocr-2)

---

## 2. Step3-VL-10B

🌟 **Step3-VL-10B** from Stepfun.ai is an example of a compact yet "heavy-duty" VLM. With only 10B parameters, it aims to compete with models 10-20 times larger, including Gemini 2.5 Pro and GLM-4.6V.

**Features:**

* 1.8B visual encoder + Qwen3-8B decoder.
* Trained on 1.2 trillion tokens with RLVR+RLHF.
* High results on OCRBench and math task benchmarks.

**Cons:**

* For top scores, PaCoRe = 16 parallel rollouts → x16 computational resources.
* OCR is only part of its capabilities; the primary focus is VLM.

**License:** Apache 2.0
**Links:** vLLM / OpenAI-compatible API

---

## 3. PaddleOCR-VL-1.5

🐼 **PaddleOCR-VL-1.5** is a compact model (0.9B) optimized for "field" conditions. It was trained considering curved scans, glary photos, and crumpled pages.

**Features:**

* OmniDocBench v1.5 — **94.5% accuracy**.
* Text spotting, seal recognition, table stitching across pages.
* Support for rare languages, Tibetan, and Bengali.
* Easy integration via transformers, Docker, and Paddle.

**Cons:**

* Handwritten text is still poor.
* Page-by-page parsing via transformers is limited.

**License:** Apache 2.0
**Links:** [Hugging Face](https://huggingface.co/collections/PaddlePaddle/paddleocr-vl-15) | [GitHub](https://github.com/PaddlePaddle/PaddleOCR)

---

## 4. GLM-OCR

📄 **GLM-OCR** is a multimodal OCR model with 0.9B parameters. It's based on GLM-V with a CogViT visual encoder and a GLM-0.5B decoder. It supports layout analysis via PP-DocLayout-V3 and parallel recognition.

**Pros:**

* OmniDocBench v1.5 — **94.62% (#1)**.
* Supports tables, formulas, seals, and code-heavy documents.
* Fast inference: vLLM / SGLang / Ollama.
* SDK and simple integration, open-source.

**Cons:**

* JSON schema for Information Extraction requires strict adherence.

**License:** MIT (layout — Apache 2.0)
**Links:** [Hugging Face](https://huggingface.co/zai-org/GLM-OCR) | [GitHub](https://github.com/zai-org/GLM-OCR)

---

## Comparison Table

| Model           | Parameters | Primary Focus     | Benchmark         | OCR / Doc Score              | License   | Deployment           |
| --------------- | ---------- | ----------------- | ----------------- | ---------------------------- | --------- | -------------------- |
| DeepSeek-OCR 2  | 3B         | OCR + Structure   | OCRBench          | +4% vs v1, beats Gemini Pro | Apache 2.0 | HF, Unsloth          |
| Step3-VL-10B    | 10B        | Universal VLM     | OCRBench          | 86.75                        | Apache 2.0 | vLLM, OpenAI-API     |
| PaddleOCR-VL-1.5| 0.9B       | Field OCR         | OmniDocBench v1.5 | 94.5                         | Apache 2.0 | Paddle, Docker       |
| GLM-OCR         | 0.9B       | OCR + IE          | OmniDocBench v1.5 | 94.62 (#1)                   | MIT       | vLLM, SGLang, Ollama |

---

## Conclusion

*   **Leaders on OmniDocBench:** GLM-OCR (94.62%) and PaddleOCR-VL-1.5 (94.5%).
*   **Lightest and fastest for production:** PaddleOCR-VL-1.5 and GLM-OCR.
*   **Most "intelligent" architecturally:** DeepSeek-OCR 2 with DeepEncoder V2.
*   **Most versatile VLM:** Step3-VL-10B (OCR is only part of its capabilities).

OCR and VLM have reached a level of maturity that allows for the implementation of document recognition in real production scenarios: from tables and formulas to multi-page PDFs with code and seals. The race for speed, accuracy, and document "understanding" continues.



### Люди, ИИ-агенты и роботы: как меняется структура труда
Более половины рабочего времени уже сегодня может быть автоматизировано. Почему ИИ-агенты становятся ключевым элементом экономики будущего — и где роль человека остаётся незаменимой.


## Более половины работы — под автоматизацию

По оценкам McKinsey Global Institute, **около 57% рабочего времени в США потенциально поддаётся автоматизации уже при текущем уровне технологий**. Из них:

* **44%** могут быть выполнены **ИИ-агентами** — программными системами, способными анализировать данные, принимать решения и действовать автономно;
* **13%** — **роботами**, выполняющими физические и рутинные операции.

Эти цифры не означают «исчезновение рабочих мест». Они указывают на куда более важный сдвиг: **работа перестаёт быть монолитной**. Она распадается на задачи, и каждая задача получает своего наиболее эффективного исполнителя — человека, агента или робота.

## ИИ-агенты как новый класс «работников»

Если роботы традиционно ассоциируются с физическим трудом, то **ИИ-агенты — это автоматизация умственной, цифровой работы**:

* обработка заявок и документов
* анализ данных и скоринг
* поддержка клиентов
* координация процессов между системами
* принятие типовых решений в рамках бизнес-правил

Именно поэтому доля задач, потенциально выполняемых агентами, столь высока — **44% всех рабочих часов**. Большая часть современной экономики — это не физическое производство, а работа с информацией, процессами и решениями.

Фактически, ИИ-агенты становятся **цифровыми сотрудниками**, встроенными в бизнес-процессы: они не «помогают», а **работают**.

## Где остаётся человек

При этом **43% рабочего времени не поддаются автоматизации**. Ключевая причина — **социальные и эмоциональные навыки**, которые по-прежнему остаются человеческой территорией:

* сложные переговоры
* управление людьми
* эмпатия и доверие
* креативность и формирование смыслов
* принятие решений в условиях неопределённости и ценностных конфликтов

Даже в задачах, где ИИ активно участвует, человек всё чаще выполняет роль:

* архитектора решений
* контролёра и арбитра
* носителя ответственности

Будущее — не «человек против машины», а **человек + агент + робот**.

## Новая архитектура труда

Если посмотреть на рынок труда как на систему, становится очевидно:
мы движемся к **гибридной архитектуре**, где:

* **люди** отвечают за цели, смыслы и взаимодействие;
* **ИИ-агенты** — за скорость, масштаб и точность в цифровых процессах;
* **роботы** — за физическое исполнение и повторяемые операции.

Компании будущего будут конкурировать не только командами людей, но и **качеством своих агентов**: их архитектурой, обучением, интеграцией и способностью работать в связке с человеком.

Автоматизируется не профессия, а **задача**.
Побеждают не те, кто «заменяет людей», а те, кто **правильно собирает систему из людей, агентов и роботов**.

Именно в этом — главный управленческий и технологический вызов ближайших лет.


### DevOps для стартапов: уходим от Vercel, но не усложняем жизнь 🛠
Как получить удобство Vercel без vendor lock-in: self-hosted PaaS, VPS и простой CI/CD для MVP


**DevOps для стартапов: уходим от Vercel, но не усложняем жизнь 🛠**

Мы в команде не ищем простых путей — чаще всего настраиваем «взрослые» пайплайны с деплоем в k3s.
Это надежно, масштабируемо и правильно… но для небольших MVP на старте — зачастую оверкилл.

Клиенты регулярно просят:

> «Нам бы попроще, но чтобы не больно потом»

И тут появляется ловушка.
«Попроще» почти всегда означает **Vercel + Cloud DB**:

* быстрый старт
* минимум телодвижений
* но → vendor lock-in
* и → растущий чек при масштабировании

При этом обычный **VPS** почти всегда дешевле и дает полный контроль.
Проблема одна — **никто не хочет настраивать сервер руками**.

### Решение: self-hosted PaaS

Мы посмотрели в сторону self-hosted PaaS и сравнили двух популярных игроков:

* **Coolify**
* **Dokploy**

🏆 **Наш выбор — Dokploy**

Почему он зашел лучше Coolify:

✅ **Интерфейс** — чище и понятнее, меньше «визуального шума»
✅ **Легкость** — сам Dokploy потребляет меньше ресурсов
✅ **Функционал** — мониторинг и GitHub-интеграция работают «из коробки»

### Наш рабочий workflow

Получилась простая и надежная схема:

1️⃣ Сборка проекта через **GitHub Actions**
2️⃣ Docker-образ публикуется в **GHCR (GitHub Container Registry)**
3️⃣ **Dokploy** ловит webhook и автоматически обновляет контейнер на VPS

Без ручного SSH, без магии, без боли.

### Итог

Мы получили:

* удобство уровня **Vercel**
* **свой VPS** с низкой стоимостью
* **нулевой vendor lock-in**
* прозрачный и контролируемый деплой

Для MVP и ранних стартапов — **реальный мастхэв**, если хочется быстро, дешево и без будущих миграционных страданий.



### Зачем нам вообще AI-агенты?
Ответ прост: чтобы перейти от пассивного генератора контента к активному исполнителю задач


До недавнего времени мы использовали LLM как очень продвинутый "калькулятор для слов". Мы давали ему запрос - он выдавал нам текст, код или идею. Но вся работа по исполнению оставалась на нас.

**Агент - это следующий шаг эволюции.** Это LLM, которому дали *"руки и ноги"* (инструменты) и *цель* (контекст). Теперь он может не просто рассказать, как забронировать билет, а взять и забронировать его.

# Почему "Проще = Лучше"

## 1. 🧩 Контекст решает

Агент без контекста - как гениальный хирург, которого заперли в пустой комнате. Навыки есть, но нет ни пациента, ни инструментов, ни задачи.
Контекст - история переписки, данные из CRM, цель пользователя - превращает теоретика в практика.

**Плохой агент (без контекста):**

> "Я могу помочь вам с заказом. Какой номер?"

**Хороший агент (с контекстом):**

> "Вижу, ваш заказ №12345 должен был приехать вчера, но статус до сих пор "в пути". Хотите, я свяжусь с курьерской службой и уточню, где он?"

## 2. 🔑 Инструменты важнее модели

Самая мощная LLM бесполезна, если она не может взаимодействовать с реальным миром. Простая модель с доступом к нужным API всегда победит гиганта без доступа.

**Модель** - мозг, принимающий решения.
**Инструменты** (API, БД, shell) - руки, которые выполняют работу.

Дайте агенту доступ к календарю - он будет назначать встречи.
Дайте доступ к Jira - будет создавать задачи.
Дайте базу знаний - станет идеальным консультантом.

## 3. 🎯 Простота рулит (микросервисный подход к агентам)

Суперагент "на все случаи жизни" - это непредсказуемо, дорого и тяжело в отладке.

Гораздо эффективнее строить маленьких специализированных агентов:

**Агент-аналитик** - подключается к Google Analytics, собирает данные и готовит отчет.
**Агент-копирайтер** - берет отчет аналитика и превращает его в пост.
**Агент-публикатор** - публикует пост в нужное время.

Каждый прост, надежен и понятен. Вместе - мощная, гибкая система.

## 4. 🧪 Демо ≠ Продакшн

На демо всегда показывают идеальный сценарий. В реальности агент сталкивается с:

* неполными данными,
* упавшими API,
* странными запросами пользователей,
* конфликтами между инструментами.

Ценность продакшн-решения - в надежности: логах, мониторинге, обработке ошибок и механизмах обратной связи.

# От "магии" к невидимой пользе

Настоящая магия агентов не в эффектности, а в естественном, незаметном повышении эффективности.

* Не "Ух ты, ИИ сам ответил на письмо!",
а "Почему-то я перестал тратить утро на рутину".

* Не "Смотри, агент сам написал код!",
а "Команда стала быстрее закрывать типовые задачи".

**У каждого продукта будет свой "штат" агентов. И выиграют те, кто строит не самых умных, а самых простых, надежных и полезных.**


### Как прокачать новый опыт ИТ-специалисту с помощью рабочих задач
Как ИТ-специалисту прокачать новый опыт без курсов и тренингов? Используй рабочие задачи! Выбери приоритетную зону роста, внедряй новые знания в проекты, разбивай изучение на шаги и следи за прогрессом. Учись небольшими блоками, включай изучение в спринты и делись знаниями. Такой подход ускорит развитие и повысит твою экспертность.


# Как прокачать новый опыт ИТ-специалисту с помощью рабочих задач

ИТ-специалисты развиваются не только через курсы, книги и конференции. Один из самых эффективных способов получить новый опыт - это правильно выстроить свою работу. Расскажем, как использовать **ежедневные задачи для профессионального роста**.

## Пункт 1. Определи приоритетную зону роста

> 💡 **В ИТ невозможно знать всё**, поэтому важно выбрать область, в которой хочешь прокачаться: архитектура, DevOps, новый язык программирования, ML или что-то ещё.

### Как выбрать?

* **Посмотри, какие навыки востребованы** в твоей компании или индустрии.
* **Определи, что тебе интересно:** что хочется изучать не только ради карьеры, но и ради удовольствия.
* **Найди баланс** между "нужно" и "хочется". Так ты не перегоришь.

**Пример:** Хочешь прокачать архитектуру систем? Отлично! Это твой главный фокус.

## Пункт 2. Встраивай развитие в рабочие задачи

> ⚙️ **Самый быстрый способ освоить новое** - внедрять это в реальную работу.

### Как это делать:

* **Выбирай проекты, где можно применить новый навык.** Например, хочешь освоить Kubernetes? Найди способ внедрить его в текущие задачи.
* **Разбивай изучение на конкретные шаги.** Например, если ты хочешь освоить новый фреймворк, сначала разбери документацию, потом напиши маленький прототип, а потом попробуй внедрить в боевой проект.
* **Используй менторство и код-ревью.** Общайся с коллегами, которые уже владеют нужными навыками, изучай их код и спрашивай совета.
* **Фиксируй прогресс.** Веди заметки о том, что изучил и какие задачи решил с помощью нового знания. Это помогает осознавать, как ты растёшь.

**Пример:** Если ты backend-разработчик и хочешь освоить фронтенд, возьми небольшую фичу, где нужно править UI, и попробуй сделать её сам. Не бойся ошибаться!

## Пункт 3. Дисциплина и постоянство

> 🎯 **Любой новый навык требует времени.** Важно встроить обучение в повседневную работу и не останавливаться.

### ✅ Как держать темп:

* **Учись небольшими блоками.** 30 минут в день эффективнее, чем 5 часов раз в месяц.
* **Включай изучение в спринты.** Например, поставь себе цель: за две недели разобраться с GraphQL и внедрить его в тестовый сервис.
* **Делись знаниями.** Проводя митапы или создавая статьи, ты лучше запомнишь материал и разберёшься в нём глубже.
* **Пересматривай приоритеты.** Если новый навык не приносит ценности или больше не интересен - измени курс.

**👉 Закрепляй новый опыт в рабочих задачах, находи баланс между изучением и практикой - и твоя экспертиза в ИТ будет расти быстрее!**


### Как мы помогаем команде планировать спринты и находить узкие места в проекте
 Как в Iconicompany планируют спринты без жёсткого контроля: методики QUEST и STOP помогают команде находить узкие места, работать автономно и развиваться.


# В Iconicompany мы создаём не просто платформу, а целую экосистему

В Iconicompany мы создаём не просто платформу для аутстаффинга, а экосистему, в которой команды могут работать с максимальной эффективностью, автономией и интересом. Мы верим, что идеальная работа - это когда команда сама определяет свою стратегию, учится на опыте, анализирует свои ошибки и действует на основе объективных данных.

Как нам это удаётся?

## 🔍 Прозрачное планирование и выявление узких мест

Вместо жёсткого контроля и внешнего давления мы даём возможность команде самостоятельно управлять своим спринтом. Это включает:

* ✔️ **Осознанность в работе** - каждый член команды видит полную картину задач и приоритетов.
* ✔️ **Безоценочное наблюдение** - выявляем узкие места не через поиск виноватых, а через анализ данных.
* ✔️ **Гибкость и адаптация** - если что-то идёт не так, мы не боимся менять стратегию.

## 📊 Формула результативности

**Результат = Потенциал - Вмешательство.**

Мы убираем лишние ограничения, формальности и стрессовые факторы, чтобы раскрыть внутренний потенциал специалистов.

## 🎯 Фокус на самоорганизации

* 🔹 **Сквозная ответственность.** В команде нет "контролёров" - мы доверяем коллегам самим проверять и оценивать свою работу.
* 🔹 **Взаимная поддержка.** Коллеги не конкурируют, а помогают друг другу достигать лучших результатов.
* 🔹 **Доверие и автономия.** Мы не "раздаём задачи", а создаём условия, где люди сами берут на себя амбициозные вызовы.

## ⚡ QUEST-подход к развитию

Мы используем принцип **QUEST**, который помогает командам не просто закрывать задачи, а развиваться:

* ✅ **Qualities** - какие качества прокачиваем?
* ✅ **Understanding** - что начинаем понимать лучше?
* ✅ **Expertise** - какие навыки развиваем?
* ✅ **Strategic thinking** - чему нас учит этот проект?
* ✅ **Time** - как эффективнее управлять временем?

## 🔄 STOP-инструмент для улучшения процессов

Мы внедрили методику **STOP**, которая помогает осознанно анализировать свои действия:

* 📌 **Step back** - остановись и посмотри на ситуацию со стороны.
* 📌 **Think** - оцени альтернативные варианты решения.
* 📌 **Organize** - расставь приоритеты.
* 📌 **Proceed** - действуй с обновлённым пониманием.

## 🔥 Страсть к работе и амбициозные цели

Самый мощный фактор успеха - это вдохновлённая команда. Когда есть азарт и интерес, задачи решаются быстрее, а креативность и продуктивность растут естественным образом.

В Iconicompany мы создаём такую среду, где работа ощущается вызовом, а не рутиной.

## 💡 Если вам близок такой подход - присоединяйтесь!

Давайте строить будущее аутстаффинга вместе! 🔥


### Смерть статического резюме: Почему будущее найма — за сетью цифровых двойников
Традиционные базы резюме мертвы. Статья раскрывает концепцию самоуправляемой сети, где активные AI-агенты (цифровые двойники) заменяют устаревшие PDF-файлы, автоматизируя поиск и пре-скрининг.


Представьте, что вы пользуетесь навигатором, карты в котором обновляются раз в год. Вы едете по маршруту, но мост давно разобран, на дороге ремонт, а поворот, который был нужен, зарос лесом. Абсурд? Но именно так сегодня работает мировой рынок рекрутинга.

Мы привыкли считать, что главный актив HR-рынка — это **База Резюме**. Компании тратят миллионы на доступ к HH.ru или LinkedIn, CRM-системы пухнут от PDF-файлов. Но есть одна проблема: **в момент, когда резюме попадает в базу, оно становится мертвым.**

Кандидат уже нашел работу, выучил новый фреймворк, переехал в другой город или просто выгорел и хочет сменить сферу. База данных об этом не знает. Рекрутер звонит «вхолодную», тратит время, получает отказ. Это колоссальная трата энергии всей индустрии.

Мы стоим на пороге смены парадигмы. Перехода от **Архива Мертвых Данных** к **Сети Активных Цифровых Двойников**.

### Концепция: Сеть, которая управляет сама собой

Давайте перевернем привычную схему.

**Традиционный подход (Pull-модель):**

1. Кандидат пишет резюме (субъективное и статичное).
2. Загружает его на сайт.
3. Рекрутер ищет по ключевым словам.
4. Рекрутер звонит/пишет.
5. Выясняется, что кандидат занят.

**Новый подход (Agent-based Network):**

1. Кандидат нанимает персонального **AI-агента**.
2. Агент подключается к источникам данных (GitHub, Jira, календарь).
3. Агент живет в сети и *сам* взаимодействует с агентами работодателей.

В этой модели нет базы резюме. Есть распределенная сеть миллионов микро-программ, каждая из которых представляет интересы конкретного живого человека.

### Как работает «Цифровой двойник»?

Цифровой двойник — это не PDF-файл. Это процесс.

Представьте, что у разработчика Василия есть такой агент. Василий спит, работает или играет с детьми. А его агент в это время находится в активном режиме поиска, но с жесткими инструкциями: *«Предлагать Василия только на проекты с Python 3.11, ставкой от X рублей и без легаси-кода. В офис — не предлагать»*.

Когда в сети появляется вакансия (которую представляет агент Компании), происходит не поиск по ключевым словам, а **переговоры двух ботов**:

— *Агент Компании:* Нужен сеньор на Django. Бюджет высокий.
— *Агент Василия:* Мой хозяин знает Django, но сейчас он занят на проекте до марта. Но он готов рассмотреть парт-тайм консалтинг. Интересно?
— *Агент Компании:* Да, давай проведем пре-скрининг.

Вся эта коммуникация происходит за миллисекунды. Люди в ней не участвуют.

### Самоактуализация данных

Главная проблема старых баз — неактуальность статусов. В концепции «Сети, управляющей собой», статус обновляется автоматически.

* Василий сделал коммит в репозиторий в 3 часа ночи? Агент помечает: *«Возможен риск выгорания, не предлагать овертаймы»*.
* Василий обновил статус в корпоративном мессенджере на «В поиске»? Агент мгновенно рассылает сигналы (pings) агентам рекрутеров: *«Мы вышли на рынок»*.
* Василия наняли? Агент тут же уходит в режим «Silent Mode» (Тишина), отклоняя весь входящий спам.

Рекрутеру больше не нужно гадать, актуален ли кандидат. Если агент ответил — значит, актуален.

### Пре-скрининг без участия человека

Самое узкое горлышко найма — это первичная валидация. «Знаешь ли ты английский?», «Работал ли с Docker?».

В новой модели агент кандидата сам проходит эти проверки. Он может «сдать экзамен» агенту работодателя, предоставив (в обезличенном виде) фрагменты кода или пройдя синтетическое интервью.

К моменту, когда живой HR-директор получает уведомление «Найден кандидат», этот кандидат уже:

1. Доступен (подтверждено его агентом).
2. Подходит по стеку (проверено алгоритмически).
3. Согласен на бюджет (прошли торги ботов).

### Почему это неизбежно?

Мы видим «Уберизацию» всего. Такси, доставка еды, аренда жилья — везде статические диспетчерские сменились алгоритмическими сетями. Рынок талантов — последний бастион ручного труда и статических данных.

Создание сети активных цифровых двойников решает главную боль рынка — **проблему синхронизации**. Это переход от модели «Доски объявлений» к модели «Высокочастотного трейдинга» талантами.

В этом будущем выигрывают все. Компании получают мгновенный доступ к *реально доступным* людям. А специалисты избавляются от спама и получают предложения, которые действительно соответствуют их текущему моменту жизни, а не тому, что они написали в резюме три года назад.

Сеть больше не нужно администрировать. Она управляет собой сама.

### От косинусного сходства к «энергии» смыслов: как исследование Tencent CALM меняет правила игры в ИИ-подборе
В статье анализируется исследование лаборатории Tencent — архитектура CALM (Continuous Autoregressive Language Models) — и её потенциал для трансформации процессов HR-теха. Мы рассматриваем ограничения традиционного косинусного сходства при сопоставлении навыков и предлагаем альтернативные методы: использование энергетической оценки (Energy Score), создание устойчивого латентного пространства через вариационную регуляризацию и повышение семантической пропускной способности векторов. Статья описывает путь от «хрупких» эмбеддингов к высокоточным системам автоматизированного матчинга талантов.


# От косинусного сходства к «энергии» смыслов: как исследование Tencent CALM меняет правила игры в ИИ-подборе

В мире HR-технологий и автоматизированного подбора персонала векторное представление навыков (embeddings) стало «золотым стандартом». Мы в **Iconicompany** постоянно ищем способы сделать сопоставление резюме и вакансий точнее. Традиционно для этого используется косинусное сходство, но достаточно ли его?

Недавнее исследование лаборатории WeChat AI (Tencent) под названием **CALM (Continuous Autoregressive Language Models)** предлагает радикально новый взгляд на работу с векторами, который может навсегда изменить наш подход к матчингу.

### Проблема «хрупких» векторов

Большинство современных моделей извлекают навыки в виде векторов, которые затем сравниваются в пространстве. Однако авторы CALM указывают на критическую проблему: стандартные методы обучения создают **«хрупкие» представления (brittle representations)**.

В таком пространстве даже небольшое изменение в формулировке навыка (например, «Python разработчик» vs «Программист Python») может привести к тому, что векторы окажутся неоправданно далеко друг от друга. Косинусное сходство в этом случае выдает низкий процент соответствия, хотя семантически это одно и то же.

### Чему нас учит CALM: 3 метода улучшения матчинга

Исследование Tencent предлагает несколько инструментов, которые мы можем адаптировать для улучшения качества сопоставления:

#### 1. Переход к Energy Score (Энергетической оценке)

Вместо того чтобы просто измерять угол между двумя векторами (косинусное сходство), CALM использует **Energy Score** — метрику, которая оценивает соответствие на основе расстояний между выборками.

**Почему это лучше:** Энергетическая оценка учитывает не только близость векторов, но и их «разнообразие» (diversity term). Это позволяет точнее оценивать не просто один навык, а целый *набор* компетенций в резюме относительно вакансии, избегая «схлопывания» смыслов.
#### 2. Создание «гладкого» латентного пространства

Чтобы векторы были устойчивы к шуму и разным формулировкам, авторы применяют **вариационную регуляризацию (Variational Regularization)**.
 
**Как это применить:** Мы можем обучать наши модели извлечения навыков так, чтобы они сопоставляли тексту не точку в пространстве, а небольшое распределение (Gaussian posterior). Использование метода **KL-clipping** (отсечение KL-дивергенции) гарантирует, что каждая размерность вектора несет полезную информацию и не превращается в «белый шум».



#### 3. Избыточность через Vector Dropout

Интересный инсайт из статьи: использование **Dropout** для векторов во время обучения заставляет модель учить избыточные (redundant) представления.

* Это делает систему матчинга невероятно устойчивой. Даже если часть информации в резюме представлена нечетко, модель все равно сможет восстановить истинный смысл и выдать корректный процент соответствия.

### Наш взгляд: Можно ли улучшить модель?

Безусловно. Подход CALM доказывает, что будущее не за увеличением количества параметров, а за увеличением **«семантической пропускной способности» (semantic bandwidth)** каждого шага.

Для задач Iconicompany это означает переход от простого сравнения «слово-в-слово» к анализу целых «смысловых блоков» (chunks). Автоэнкодер CALM сжимает группу токенов в один вектор с точностью восстановления более 99.9%. Это позволяет нам кодировать сложные профессиональные требования в единые, плотные векторы, которые сравниваются гораздо эффективнее, чем среднее арифметическое отдельных слов.

### Итог

Косинусное сходство — это отличный старт, но для высокоточного матчинга талантов его уже недостаточно. Инновации Tencent в области непрерывных моделей дают нам математический фундамент для создания более «умных» и устойчивых систем. Мы в **Iconicompany** уже начали экспериментировать с внедрением энергетических метрик и регуляризации пространства, чтобы наши клиенты находили идеальных кандидатов еще быстрее.

*Хотите узнать больше о том, как мы внедряем передовые исследования в практику? Подписывайтесь на наши обновления!*

*Основано на материалах: "Continuous Autoregressive Language Models" (Shao et al., 2025).* 

Статья: https://arxiv.org/abs/2510.27688
Код: https://github.com/shaochenze/calm


### Новый игрок на арене: Сравниваем MCP, A2A и AGNTCY в экосистеме AI-агентов
Сравнение протоколов и инфраструктуры для AI-агентов.


Если вы следите за миром искусственного интеллекта, вы уже знаете, что он стремительно эволюционирует от монолитных моделей к взаимосвязанным системам специализированных агентов. Однако реализация этого потенциала упирается в фундаментальную проблему: как заставить этих агентов (часто созданных разными вендорами на разных фреймворках) общаться, сотрудничать и получать доступ к данным безопасно и эффективно.

Именно здесь на сцену выходят три ключевых проекта: Model Context Protocol (MCP) от Anthropic, Agent2Agent (A2A) от Google и инфраструктурный набор AGNTCY. Давайте разберемся, кто есть кто и как они соотносятся друг с другом.

## Model Context Protocol (MCP): Универсальный адаптер для инструментов и данных

**Основная цель:** Решить проблему "MxN интеграций" - сложность подключения M моделей ИИ к N инструментам. MCP действует как "USB-C для ИИ", предоставляя единый стандарт для подключения моделей и приложений к внешним инструментам, данным и системам.

### Как работает?
MCP использует архитектуру клиент-хост-сервер.

- **Серверы** - это независимые процессы, которые предоставляют конкретные возможности: Инструменты (выполняемые функции), Ресурсы (потоки данных только для чтения) и Промпты (шаблоны инструкций).
- **Хост** (например, Claude Desktop) управляет процессом, создает клиентов для подключения к серверам и обеспечивает безопасность, запрашивая согласие пользователя.

**Ключевой акцент:** Безопасность и контроль на стороне хоста. Данные часто остаются локальными, а пользователь явно разрешает каждый вызов инструмента или доступ к ресурсу.

## Agent2Agent (A2A): Протокол прямого общения между агентами

**Основная цель:** Стать стандартным "языком" для прямого взаимодействия между автономными AI-агентами. A2A - это, по сути, "HTTP для агентов", позволяющий им обнаруживать друг друга и совместно выполнять задачи.

### Как работает?
A2A построен на знакомых веб-стандартах: JSON-RPC 2.0 поверх HTTP(S) и Server-Sent Events (SSE) для потоковой передачи.

- **Карточка агента** - это JSON-файл с метаданными, который описывает возможности агента и как к нему обращаться (похоже на robots.txt для агентов).
- **Задачи** - центральная единица работы. Они проходят четкий жизненный цикл: отправлено -> в работе -> требуется ввод -> завершено.
- **Сообщения** состоят из "Частей", что позволяет агентам обмениваться текстом, файлами и структурированными данными в рамках одной задачи.

**Ключевой акцент:** Прагматизм и совместимость. A2A не диктует, как агент должен работать внутри, а стандартизирует только его "интерфейс" для внешнего мира.

## AGNTCY: Инфраструктура для "Интернета Агентов"

**Основная цель:** Создать не просто протокол, а целую экосистему для масштабируемого, безопасного "Интернета Агентов". Это самое амбициозное видение из трех.

### Как работает?
AGNTCY - это набор взаимосвязанных стандартов и компонентов:

- **Протокол подключения агентов (ACP):** Определяет стандартный интерфейс для вызова агентов и управления ими (как REST для агентов).
- **Протокол шлюза агентов (AGP):** Обеспечивает безопасный и эффективный транспорт для связи на основе gRPC, поддерживая сложные схемы обмена сообщениями.
- **Фреймворк открытой схемы агентов (OASF):** Стандартизированный формат для описания агентов, их возможностей и зависимостей.
- **Каталог агентов:** Служба для обнаружения агентов, похожая на DNS для Интернета.

**Ключевой акцент:** Масштабируемость и безопасность на уровне инфраструктуры. AGNTCY задуман как полноценный стек для построения сложных, многопользовательских систем взаимодействующих агентов.

## Вывод: Кто для чего?

- Используйте **MCP**, когда вам нужно надежно и безопасно "научить" ваш ИИ-ассистент или приложение работать с базами данных, API и внешними инструментами.
- Выбирайте **A2A**, когда вы создаете нескольких автономных агентов с разной специализацией и хотите, чтобы они могли легко "поговорить" друг с другом для решения общей задачи.
- Смотрите в сторону **AGNTCY**, когда ваша цель - построить сложную, масштабируемую платформу с множеством агентов, где критически важны безопасность, обнаружение сервисов и управление жизненным циклом.

Эти технологии не всегда исключают друг друга. Вполне возможно, что в будущем мы увидим системы, где MCP-серверы обеспечивают агентов данными, агенты общаются через A2A, а вся эта экосистема работает на инфраструктуре, предоставляемой AGNTCY. Будущее за интероперабельностью, и эти протоколы прокладывают для него путь.


### Два года успеха: Итоги и планы на будущее
Сегодня, 23 мая 2024 года, нашей компании исполняется два года. За это время мы достигли значительных высот, запустили несколько успешных финтех проектов, стали финалистами и победителями акселератора ФРИИ, а также создали собственный маркетплейс для ИТ специалистов. Мы гордимся своими достижениями и тем, как далеко смогли продвинуться за столь короткий срок.


## 🎉 Сегодня, 23 мая 2024 года, нашей компании исполняется два года!

> За это время мы достигли значительных высот, запустили несколько успешных финтех проектов, стали **финалистами и победителями акселератора ФРИИ**, а также создали собственный маркетплейс для ИТ специалистов. Мы гордимся своими достижениями и тем, как далеко смогли продвинуться за столь короткий срок.

### 💼 Успешные финтех проекты

С самого начала мы стремились создавать инновационные решения в сфере финтех. Наша команда разработчиков и аналитиков работает над проектами, которые улучшают финансовые процессы, делают их более эффективными и доступными.

Каждый из наших проектов был тщательно спланирован и выполнен с высоким уровнем профессионализма, что позволило нам добиться признания на рынке.

### 🏆 Победа в акселераторе ФРИИ

Участие в акселераторе ФРИИ стало важным этапом нашего развития. Мы не только стали финалистами, но и **победили**, что дало нам возможность продемонстрировать свои решения широкой аудитории и привлечь внимание инвесторов. Этот успех стал подтверждением нашей способности создавать инновационные продукты и вести их к успеху.

### 💻 Запуск маркетплейса для ИТ специалистов

Одним из наших ключевых достижений стал запуск собственного маркетплейса для ИТ специалистов. Платформа стала местом встречи талантливых разработчиков и компаний, нуждающихся в высококвалифицированных специалистах. Мы стремимся предоставлять нашим пользователям только лучшие возможности для сотрудничества и развития.

### 🌍 Международные заказы

На нашем маркетплейсе размещаются заказы не только из России. Недавно к нам присоединился **заказчик из Великобритании** с интересным заказом на аренду замков и мест проведения мероприятий. Это стало важным шагом в нашем международном развитии и доказательством того, что наши услуги востребованы и за пределами России.

### 🚀 Планы на будущее

В планах на будущее мы ставим амбициозные цели:

1. **Развитие умного аутстаффинга.** Мы намерены развивать направление умного аутстаффинга на нашей платформе. Это позволит нам предоставлять нашим клиентам наиболее подходящих специалистов, учитывая их конкретные потребности и требования с использованием искусственного интеллекта.
2. **Привлечение заказчиков со всего мира.** Мы активно работаем над расширением нашей клиентской базы и привлечением заказчиков со всего мира. Наша цель - стать глобальной платформой, которая соединяет лучшие ИТ таланты с компаниями по всему миру.

***

**Наши достижения за первые два года являются лишь началом.** Мы уверены, что впереди нас ждут новые высоты и успехи. Благодарим всех наших партнеров, клиентов и команду за поддержку и доверие. Вместе мы можем достичь ещё большего!


### Почему мы перестаем быть просто маркетплейсом и выделяем SaaS
Отказ инвестора может стать лучшим бизнес-уроком. Мы считали себя продуктовым стартапом, но фонд открыл нам глаза: мы — технологичное агентство. В статье честно разбираем кейс пивота: как выйти из ловушки «гибридной модели», юридически и операционно разделить сервисный бизнес и SaaS-продукт. Узнайте, почему попытка усидеть на двух стульях снижает оценку компании и как превратить критику в стратегию кратного роста.


**Честность — самая дорогая валюта в венчуре. Недавно мы получили «нет» от инвестфонда, и это было самое полезное «нет» за всю историю нашего проекта.**

Мы строим Iconicompany как платформу с мощным ИИ-движком. У нас есть AI-агенты, автоматический скоринг, сложные алгоритмы мэтчинга. Мы всегда считали себя продуктовым IT-стартапом. Мы пришли к инвесторам с горящими глазами, показали технологии, метрики.

Ответ фонда Brainbox.VC был прямым и отрезвляющим:

> *«На данный момент ваш проект является технологически продвинутым, но классическим аутстаффинговым агентством... Ваш ответ — "вся выручка это аутстаффинг" — является ключевым... Эта технология служит инструментом для оптимизации вашей деятельности, а не самостоятельным продуктом».*

### В чем проблема «Гибридной модели»?

Мы попали в классическую ловушку фаундера. Мы пытались сидеть на двух стульях:

1. **Сервисный бизнес (Аутстаффинг):** Мы продаем руки и головы разработчиков. Это генерирует Cash Flow здесь и сейчас. Это надежно, но это не венчурная история (низкий мультипликатор оценки).
2. **Продуктовый бизнес (SaaS):** Мы пилим сложный софт, который позволяет находить этих людей быстрее и точнее. Это требует R&D, сжигает деньги, но обещает кратный рост (SaaS-мультипликаторы).

Для инвестора это «смешанный сигнал». Они не понимают, во что вкладывают: в масштабируемую программу или в агентство, успех которого зависит от количества нанятых специалистов и маржи с перепродажи часов.

Пока наша технология работает только *внутри* нашего агентства — это просто «внутренняя автоматизация». Это делает нас эффективным агентством, но не делает нас SaaS-компанией.

### Решение: Разделяй и властвуй

Мы приняли стратегическое решение. Чтобы двигаться дальше и строить "единорога", мы юридически и операционно разделяем направления.

**1. Сервисная компания (ICNC)**
Это наш испытательный полигон.

* **Чем занимается:** Классический аутстаффинг, подбор команд, работа с энтерпрайз-заказчиками.
* **Роль ИИ:** Здесь наши AI-агенты работают «в поле». Они проходят боевое крещение, обучаются на реальных кейсах и оптимизируют маржу.
* **Цель:** Прибыль, качество сервиса, лояльность клиентов.

**2. Продуктовая компания (Iconicompany)**
Это наш венчурный актив.

* **Чем занимается:** Разработка и продажа лицензий/подписки на нашу платформу *другим* игрокам рынка.
* **Продукт:** Мы упаковываем нашу технологию (AI-скоринг, авто-мэтчинг, HR-процессы) в коробочное решение (SaaS).
* **Клиенты:** Другие аутстафф-агентства, HR-департаменты корпораций, кадровые агентства. Теперь мы не конкуренты, мы — поставщики лопат во время золотой лихорадки.
* **Цель:** ARR (годовая повторяющаяся выручка), захват доли рынка ПО.

### Что это меняет для наших клиентов?

Для текущих заказчиков услуг аутстаффинга — **ничего**, кроме улучшения качества. Вы продолжите получать лучших специалистов, подобранных нашим ИИ.

Для рынка появляется **новый продукт**. Если вы хотите построить свой "Uber для найма" или автоматизировать внутренний рекрутмент — скоро мы дадим вам ключи от нашей технологии.

### Вместо заключения

Мы благодарны партнерам из Brainbox.VC за прямоту. Иногда, чтобы увидеть лес, нужно отойти от деревьев. Мы перестаем маскировать агентство под стартап и начинаем строить настоящий SaaS, у которого есть первый и самый требовательный клиент — наше собственное сервисное подразделение.

Следите за обновлениями. Теперь у нас два пути, и оба ведут наверх.

### Сравнительный анализ алгоритмов матчинга в самообучающемся контуре
В статье рассматривается подход к построению автономной системы подбора персонала, способной к непрерывному самообучению без участия человека-разметчика. Предложена архитектура, где различные алгоритмы ранжирования (векторный поиск на базе fine-tuned embeddings, MLP, Batch-нейросети) конкурируют за максимизацию метрики качества. В качестве эталона ("Ground Truth") и генератора обучающих пар используется Большая Языковая Модель (LLM), оценивающая семантическое соответствие пар «специалист-вакансия». Приводятся результаты сравнительного анализа корреляции предсказаний алгоритмов с оценками LLM, демонстрирующие превосходство дообученных эмбеддингов над сложными нейросетевыми классификаторами в условиях ограниченной выборки.


В сфере HR-Tech проблема автоматического сопоставления резюме (CV) и вакансий (JD) остается одной из ключевых. Традиционные рекомендательные системы требуют огромного количества поведенческих данных (кликов, приглашений, наймов), которые в HR накапливаются медленно. Более того, качество этих данных часто страдает от субъективности рекрутеров.

Мы предлагаем подход **«Self-Improving Matching Loop»** — замкнутый контур, где:

1. Система генерирует пары кандидатов.
2. LLM выступает в роли «Идеального Рекрутера», размечая данные.
3. Алгоритмы обучаются на этих данных и конкурируют между собой.
4. Лучший алгоритм автоматически выводится в продакшн.

Цель данной работы — проанализировать эффективность различных архитектур (Vector Search vs MLP vs Batch) внутри этого контура и определить оптимальную стратегию отсечения нерелевантных кандидатов.

## Конкурирующие архитектуры

В эксперименте участвовали три подхода к оценке схожести:

1. **MatchedCosine (Fine-tuned Embeddings):** Использование косинусного сходства между векторами текста, полученными с помощью языковой модели, дообученной на доменных данных.
2. **MatchedMlp (Multi-Layer Perceptron):** Полносвязная нейронная сеть, принимающая на вход конкатенированные признаки пары и предсказывающая вероятность матча.
3. **MatchedBatch:** Пакетное сопоставление через нейронную сеть, оптимизирующее функцию потерь сразу для группы кандидатов.

## LLM как арбитр (Ground Truth)

Вместо ручной разметки использовалась оценка соответствия (matched), полученная от LLM (Gemini). Модель анализировала текст вакансии и профиль специалиста, выдавая оценку релевантности от 0 до 1. Это позволило быстро получить плотную матрицу оценок для N=2867 пар, обеспечив высокую скорость итераций R&D.

## Результаты эксперимента

Был проведен корреляционный анализ Спирмена между предсказаниями алгоритмов и эталонной оценкой (matched).

Результаты показали значительный разрыв в качестве работы алгоритмов:

| Алгоритм | Spearman Correlation | Размер выборки (n) | Интерпретация |
| --- | --- | --- | --- |
| **MatchedCosine** | **0.4392** | 2867 | **Умеренная связь.** Лучший показатель. |
| MatchedBatch | 0.1928 | 1749 | Слабая связь. Высокая зашумленность. |
| MatchedMlp | 0.1180 | 2867 | Связь отсутствует. Уровень случайного шума. |

**Наблюдение:**
Векторный поиск (MatchedCosine) оказался единственным методом, демонстрирующим статистически
значимую связь с целевой метрикой. Методы MatchedMlp и MatchedBatch показали низкую
способность к обобщению на данной итерации обучения.

## Архитектура самообучения

Полученные результаты подтверждают гипотезу о том, что **fine-tuned embeddings** являются наиболее робастным решением для старта системы ("холодный старт").

Однако, ценность системы не в победе одного алгоритма, а в **автоматическом выявлении победителя**. Разработанный конвейер работает по принципу эволюционного отбора:

1. **Генерация:** Система непрерывно создает новые версии алгоритмов.
2. **Валидация:** LLM автоматически оценивает их качество на отложенной выборке (как показано в эксперименте).
3. **Ротация:** Если MatchedMlp_v2 покажет корреляцию 0.5 против 0.44 у Cosine, трафик автоматически переключится на него.

Текущая неудача MLP и Batch в эксперименте — это не провал архитектуры, а сигнал автоматическому конвейеру о необходимости изменения гиперпараметров обучения (например, изменения функции потерь или добавления майнинга негативных примеров) без вмешательства инженеров.

Мы продемонстрировали работающий прототип самообучающейся системы матчинга. На текущем этапе развития системы:

1. **Рекомендовано использование MatchedCosine** как основного алгоритма ранжирования.
2. **Установлен порог отсечения**, обеспечивающий оптимальный баланс Precision/Recall.
3. **Исключены MatchedBatch и MatchedMlp** из контура принятия решений до момента их дообучения, так как они вносят шум.

Дальнейшее развитие системы предполагает использование полученных "чистых" данных
(отфильтрованных через Cosine и подтвержденных LLM) для переобучения (distillation) более сложных моделей MLP, замыкая цикл улучшения качества.



### Успешное сотрудничество ООО "ЯКомпания" и университета искусственного интеллекта
Целью проекта была автоматизация процесса подбора вакансий для кандидатов на основе анализа резюме в формате JSON. Это решение позволило не только упростить процесс подачи резюме, но и значительно ускорить подбор релевантных вакансий, что стало возможным благодаря использованию передовых технологий искусственного интеллекта, в том числе моделей GPT для анализа данных.


В эпоху цифровой трансформации сотрудничество между бизнесом и научными учреждениями приобретает особенно значимый характер. Ярким примером такого партнерства стало взаимодействие ООО "ЯКомпания" и университета искусственного интеллекта, результатом которого стала разработка инновационной системы нейро-HR в Telegram-бот.

Целью проекта была автоматизация процесса подбора вакансий для кандидатов на основе анализа резюме в формате JSON. Это решение позволило не только упростить процесс подачи резюме, но и значительно ускорить подбор релевантных вакансий, что стало возможным благодаря использованию передовых технологий искусственного интеллекта, в том числе моделей GPT для анализа данных.

Система нейро-HR автоматизирует прием резюме, обработку данных, подбор вакансий, а также формирует вопросы для уточнения недостающих навыков у кандидатов. Благодаря этому, кандидаты получают возможность быстрее находить подходящие вакансии, а компании — эффективнее подбирать нужных специалистов.

Студенты университета искусственного интеллекта активно участвовали в каждом этапе проекта, что позволило им на практике применить свои знания и навыки в реальных бизнес-задачах.
Заказчик, ООО "ЯКомпания", выразил высокую степень удовлетворения результатами проекта и эффективностью сотрудничества. Подобные проекты демонстрируют важность и перспективность интеграции академических исследований в бизнес-процессы и подчеркивают роль инновационных подходов в современной экономике.

Такое партнерство открывает новые горизонты для обеих сторон: студенты получают бесценный опыт, а компании — доступ к новейшим разработкам в области искусственного интеллекта. Это сотрудничество подчеркивает значимость объединения усилий в науке и бизнесе для достижения технологического прогресса и экономического роста.

### OCR и VLM 2026: кто лидирует в распознавании документов
Обзор современных моделей OCR и визуально-языковых моделей (VLM) для работы с документами: DeepSeek-OCR 2, Step3-VL-10B, PaddleOCR-VL-1.5 и GLM-OCR.


# OCR и VLM 2026: кто лидирует в распознавании документов

Последние несколько месяцев индустрия OCR и визуально-языковых моделей (VLM) переживает настоящий бум. Кажется, едва успеваешь разобраться с одной новинкой, как выходят сразу несколько новых игроков. Мы собрали свежий обзор и сравнили самые интересные модели, чтобы понять, кто реально достоин вашего продакшн-пайплайна.

---

## 1. DeepSeek-OCR 2

🐋 **DeepSeek-OCR 2** — это 3B модель, ориентированная на сложные документы и OCR с пониманием структуры. Главная инновация — **DeepEncoder V2**, который работает почти как человек: сначала формируется глобальное понимание изображения, а потом выстраивается логический порядок чтения.

**Плюсы:**

* Отлично справляется со сложными макетами, таблицами, подписями и структурированным текстом
* На ряде бенчмарков обходит Gemini Pro
* Можно запускать локально и дообучать через Unsloth

**Минусы:**

* Размер модели 3B → выше требования к GPU для высокочастотного инференса

**Лицензия:** Apache 2.0
**Ссылки:** [Hugging Face](https://huggingface.co/deepseek-ai/DeepSeek-OCR-2) | [Документация](https://unsloth.ai/docs/models/deepseek-ocr-2)

---

## 2. Step3-VL-10B

🌟 **Step3-VL-10B** от Stepfun.ai — пример компактной, но «жирной» VLM. Всего 10B параметров, но она претендует на соперничество с моделями в 10–20 раз больше, включая Gemini 2.5 Pro и GLM-4.6V.

**Особенности:**

* Визуальный энкодер 1.8B + Qwen3-8B декодер
* Обучение на 1.2 трлн токенов с RLVR+RLHF
* Высокие результаты по OCRBench и бенчмаркам математических задач

**Минусы:**

* Для топовых цифр PaCoRe = 16 параллельных роллаутов → x16 вычислительных ресурсов
* OCR — лишь часть возможностей, основное — VLM

**Лицензия:** Apache 2.0
**Ссылки:** vLLM / OpenAI-compatible API

---

## 3. PaddleOCR-VL-1.5

🐼 **PaddleOCR-VL-1.5** — компактная модель (0.9B), оптимизированная под «полевые» условия. Кривые сканы, бликовые фото и мятые страницы — модель учли это в обучении.

**Особенности:**

* OmniDocBench v1.5 — **94.5% точности**
* Text spotting, распознавание печатей, склейка таблиц между страницами
* Поддержка редких языков, тибетского и бенгальского
* Простая интеграция через transformers, Docker и Paddle

**Минусы:**

* Рукописный текст пока плохо
* Постраничный разбор через transformers ограничен

**Лицензия:** Apache 2.0
**Ссылки:** [Hugging Face](https://huggingface.co/collections/PaddlePaddle/paddleocr-vl-15) | [GitHub](https://github.com/PaddlePaddle/PaddleOCR)

---

## 4. GLM-OCR

📄 **GLM-OCR** — мультимодальная OCR-модель на 0.9B параметров. Основана на GLM-V с CogViT визуальным энкодером и GLM-0.5B декодером. Поддерживает layout analysis через PP-DocLayout-V3 и параллельное распознавание.

**Плюсы:**

* OmniDocBench v1.5 — **94.62% (#1)**
* Поддержка таблиц, формул, печатей и code-heavy документов
* Инференс быстрый: vLLM / SGLang / Ollama
* SDK и простая интеграция, open-source

**Минусы:**

* JSON schema для Information Extraction требует строгого соблюдения

**Лицензия:** MIT (layout — Apache 2.0)
**Ссылки:** [Hugging Face](https://huggingface.co/zai-org/GLM-OCR) | [GitHub](https://github.com/zai-org/GLM-OCR)

---

## Сравнительная таблица

| Модель           | Параметры | Основной фокус    | Бенчмарк          | OCR / Doc score              | Лицензия   | Деплой               |
| ---------------- | --------- | ----------------- | ----------------- | ---------------------------- | ---------- | -------------------- |
| DeepSeek-OCR 2   | 3B        | OCR + структура   | OCRBench          | +4% к v1, обходит Gemini Pro | Apache 2.0 | HF, Unsloth          |
| Step3-VL-10B     | 10B       | Универсальная VLM | OCRBench          | 86.75                        | Apache 2.0 | vLLM, OpenAI-API     |
| PaddleOCR-VL-1.5 | 0.9B      | OCR в поле        | OmniDocBench v1.5 | 94.5                         | Apache 2.0 | Paddle, Docker       |
| GLM-OCR          | 0.9B      | OCR + IE          | OmniDocBench v1.5 | 94.62 (#1)                   | MIT        | vLLM, SGLang, Ollama |

---

## Итоги

* **По OmniDocBench лидеры:** GLM-OCR (94.62%) и PaddleOCR-VL-1.5 (94.5%)
* **Самые лёгкие и быстрые для продакшн:** PaddleOCR-VL-1.5 и GLM-OCR
* **Самые «умные» архитектурно:** DeepSeek-OCR 2 с DeepEncoder V2
* **Самая универсальная VLM:** Step3-VL-10B (OCR лишь часть возможностей)

OCR и VLM достигли зрелости, позволяя внедрять распознавание документов в реальные продакшн-сценарии: от таблиц и формул до многостраничных PDF с кодом и печатями. Гонка за скорость, точность и «понимание» документов продолжается.


