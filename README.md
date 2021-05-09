# Project WikiChat

> Group 17 - Red Rhinoceros

A project that aims to add a social flavor over Wikipedia.

## 1. Features

**Authentication**

- Login
- Register
- Protect certain pages to be authenticated user view only

**Core features**

- news submission
  - Submit wikipedia link with ideas
  - Auto parsing Wikipedia content on the backend when user submits
  - Validating URL to ensure it comes from Wikipedia
- news interaction
  - Like news
  - Unlike news
  - Add news to favourite list
  - Remove news from favourite list
  - Add comments
- settings
  - profile updating, nick name and avatar
  - privacy settings
    - set displaying email or not on personal portal
    - set displaying favourites pages or not on personal portal
    - set displaying submitted news or not on personal portal
  - history timeline
    - the favourites list for the current authenticated user
    - the submission news list for the current authenticated user
    - the comments list for the current authenticated user

**Other features:**

- Routes level code splitting
- Share the news to the other social site
- Parsing time as a relative time, like `1 day ago`
- Check user avatar list for all users liked the news
- Check original wikipedia content from the WikiChat news entry
- client side validation when submitting news
- features page
- about page
- FAQ page

## 2. Preview URL

All updates to the `dev` branch will be auto deployed via the CI/CD pipeline

- Project deployment for `dev` update: https://wiki-chat.netlify.app/
  - this one is also populated with data for you get a good overview of the project
  - demo user name: goodboy@goodboy.com
  - demo password: 123
- Storybook deployment for `dev` update: https://wiki-chat-storybook.netlify.app/

## 3. How to run the project

### Start the backend first

0. start local mongodb
1. from the project root
1. `cd backend`
1. `npm ci`
1. `npm run dev`

### Start the frontend

1. from the project root
1. `cd frontend`
1. `npm ci`
1. `npm run start`

> Congrat! Now you are good to go

## 4. Other developer toolings

### To check the Storybook components in isolation

1. from the project root
1. `cd frontend`
1. `npm ci` (if not installed already)
1. `npm run storybook`

### To check the E2E tests suites

1. from the project root
1. `cd frontend`
1. `npm ci` (if not installed already)
1. `npm run cypress:open`

## 5. Weekly meeting

### March

- #### Week 1:
  - **Meetings (1):**
    - ##### Meeting 07:00pm - 07:40pm 04/03/2021
      The main contents of our meeting included:
      - Get to know each other
      - Browse the brief introduction of the project
      - Selected the top three topics we are interested in
      - Research for implement approaches
      - Prepare and selected feasible solutions before the next meeting
  - **Tasks breaking down:**
    - features design: Albert, Yuxin
    - Layout design: Yuxin
- #### Week 2:
  - **Meetings (2):**
    - ##### Meeting 06:30pm - 07:30pm 14/03/2021
      The main contents of our meeting included:
      - Discuss about our research result and collect our brainstorming ideas
      - Vote for Top 3 project topics
      - Decide to implement Wikipedia forum
      - Start working on proposal and split tasks
        - Yuxin - Introduction & related work
        - Evan - Requirements
        - Albert - Technologies
        - Henry - Project management
  - **Tasks breaking down:**
    - architecture design: Albert, Yuxin
    - tech stack decision: Albert, Yuxin
    - CI/CD setup: Albert
    - topic decision: Yuxin
- #### Week 3:
  - **Meetings (3):**
    - ##### Meeting 07:00pm - 08:30pm 17/03/2021
      The main contents of our meeting included:
      - Set up project, add ESLint & Prettier plugin
      - Use React for components and TailwindCSS to manage layout
      - Make standards for Github repositroy
        - Commit & pull request formats([Commit format](https://www.conventionalcommits.org/en/v1.0.0/#summary))
        - Setup Vercel to auto deployment
        - Pull new branches to dev branch instead of master
      - Get to know the new technologies
  - **Tasks breaking down:**
    - frontend app folder structure: Albert
    - react router integration: Albert
    - responsive App shell: Albert
    - standard decision: Yuxin
    - documentation setup: Yuxin
- #### Week 4:
  - **Meetings (4):**
    - ##### Meeting 07:00pm - 07:30pm 27/03/2021
      The main contents of our meeting included:
      - Organize proposal and submit
      - Update the process of project, starting the implementation
      - UI design and functionalities design
      - Work on the tasks breaking down
  - **Tasks breaking down:**
    - authentication api: Albert
    - user api: Albert
    - frontend setup: Yuxin

### April

- #### Week 1:
  - **Meetings (1):**
    - ##### Meeting 07:00pm - 07:30pm 02/04/2021
      The main contents of our meeting included:
      - Discuss about the test library([Test Library](https://testing-library.com/docs/))
      - Get to know the test library and set up for our project
      - Talk about home page between authentication / authentication
  - **Tasks breaking down:**
    - page rendering: Albert
    - like/unlike user: Albert
    - add/remove from fav: Albert
    - share news: Albert
    - go to wikipedia: Albert
    - manage front end pages: Yuxin
    - add information: Yuxin
- #### Week 2:
  - **Meetings (2):**
    - ##### Meeting 07:00pm - 07:15pm 08/04/2021
      The main contents of our meeting included:
      - Add storybook to help UI and component implementation
      - Update everyone's process
      - Talk about the features on the detail page
  - **Tasks breaking down:**
    - page rendering: Albert
    - comments: Albert
    - storybook implementation: Yuxin, Evan
- #### Week 3:
  - **Meetings (3):**
    - ##### Meeting 07:00pm - 08:30pm 15/04/2021
      The main contents of our meeting included:
      - Talk about A2
      - Update everyone's process
      - Talk about the personal portal - settings part
  - **Tasks breaking down:**
    - page rendering: Albert
    - personal info section: Albert
    - privacy info section: Albert
    - Fulfill info section: Yuxin
    - tidy up docs: Yuxin
- #### Week 4:
  - **Meetings (4):**
    - ##### Meeting 07:00pm - 08:00pm 25/04/2021
      The main contents of our meeting included:
      - Finish the basic functionalities
      - Fix detail information and documentations
      - Start working on test design
      - Talk about the personal portal - history timeline part
  - **Tasks breaking down:**
    - favourites sections: Albert
    - submitted news section: Albert
    - my comments section: Albert
    - tests setup: Yuxin

### May

- #### Week 1:
  - **Meetings (1):**
    - ##### Meeting 06:00pm - 07:00pm 02/05/2021
      The main contents of our meeting included:
      - Update dependencies
      - Talk about the problems of storybook
      - Bugs fixing and testing strategy
  - **Tasks breaking down:**
    - component testing breaking down: Albert, Yuxin
    - e2e testing breaking down: Albert
    - storybook breaking down: Albert, Yuxin
    - bug fixing: Albert
- #### Week 2:

  - **Meetings (2):**

    - ##### Meeting 07:00pm - 07:50pm 05/05/2021
      The main contents of our meeting included:
      - Add component tests & e2e test structure to the repository
      - Split the task of tests
      - Fix the existing Problems
    - **Tasks breaking down:**

      - component test: Yuxin
      - Storybook: Yuxin, Evan

    - ##### Meeting 07:00pm - 09:00pm 08/05/2021
      The main contents of our meeting included:
      - Update component tasks
      - Add component to storybook
      - Fix auto deployment tool
    - **Tasks breaking down:**

      - fix bugs: Yuxin
      - test check: Yuxin

    - ##### Meeting 11:00am - 2:00 pm 09/05/2021
      The main contents of our meeting included:
      - Fix existing bugs
      - Finish all the issues and pr
      - Tidy up repository and documentations
      - Merge branch dev to master

## 6. Contributions

<table>
<tr><th>Name</th><th>Contributions</th></tr>
<tr><td>
Albert Gao
</td><td>
Worked on backend, API implementation, project set up, technology supports, managed repository, add components
</td></tr>
<tr><td>
Evan Zhou
</td><td>
Worked on implementation of storybook, attended meetings and contributed idea, significant documentation work, managed repository and worked on bug fixing, and project setting
</td></tr>
<tr><td>
Henry Yang
</td><td>
attendance of meetings, sharing ideas, significant documentation work, managed repository, code cleaning, testing
</td></tr>
<tr><td>
Yuxin Chen
</td><td>
Worked on frontend development, coordinated meetings and took minutes, significant documentation work, managed repository and worked on component testing
</td></tr>
</table>
