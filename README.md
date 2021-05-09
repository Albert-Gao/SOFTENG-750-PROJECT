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
- Storybook deployment for `dev` update: https://wiki-chat-storybook.netlify.app/

## 3. How to run the project

### Start the backend first

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
    - ### Meeting 07:00pm - 07:40pm 04/03/2021 <br>
      The main contents of our meeting included:<br>
      - Get to know each other<br>
      - Browse the brief introduction of the project<br>
      - Selecte the top three topics we are interested in<br>
      - Research for inplement approaches<br>
      - Prepare and selecte feasible solutions before the next meeting<br>
  - **Tasks breaking down:**
    - features design: Albert
- #### Week 2:
  - **Meetings (1):**
    - ### Meeting 06:30pm - 07:30pm 14/03/2021 <br>
      The main contents of our meeting included:<br>
      - Discuss about our research result and collect our bainstorming ideas<br>
      - Vote for Top 3 project topics<br>
      - Decide to implement Wikipedia forum<br>
      - Start working on proposal and split tasks<br>
        * Yuxin - Introduction & related work<br>
        * Evan - Requirements<br>
        * Albert - Technologies<br>
        * Henry - Project management<br>
  - **Tasks breaking down:**
    - architecture design: Albert
    - tech stack decision: Albert
    - CI/CD setup: Albert
- #### Week 3:
  - **Meetings (1):**
    - ### Meeting 07:00pm - 08:30pm 17/03/2021 <br>
      The main contents of our meeting included:<br>
      - Set up project, add ESLint & Prettier plugin<br>
      - Use React for components and TailwindCSS to manage layout<br>
      - Make standards for Github repositroy<br>
        * Commit & pull request formats([Commit format](https://www.conventionalcommits.org/en/v1.0.0/#summary))<br>
        * Setup Vercel to auto delpoyment<br>
        * Pull new branches to dev branch instead of master<br>
      - Get to know the new technologies<br>
  - **Tasks breaking down:**
    - frontend app folder structure: Albert
    - react router integration: Albert
    - responsive App shell: Albert
- #### Week 4:
  - **Meetings (1):**
    - ### Meeting 07:00pm - 07:30pm 27/03/2021 <br>
      The main contents of our meeting included:<br>
      - Organize proposal and submit<br>
      - Update the process of project, starting the implementation<br>
      - UI design and functionalities deisgn<br>
      - Work on the tasks breaking down<br>
  - **Tasks breaking down:**
    - authentication api: Albert
    - user api: Albert

### April

- #### Week 1:
  - **Meetings (1):**
    - ### Meeting 07:00pm - 07:30pm 02/04/2021 <br>
      The main contents of our meeting included:<br>
      - Discuss about the test library([Test Library](https://testing-library.com/docs/))<br>
      - Get to know the test library and set up for our project<br>
      - Talk about home page between authentication / authentication<br>
  - **Tasks breaking down:**
    - page rendering: Albert
    - like/unlike user: Albert
    - add/remove from fav: Albert
    - share news: Albert
    - go to wikipedia: Albert
- #### Week 2:
  - **Meetings (1):**
    - ### Meeting 07:00pm - 07:15pm 08/04/2021 <br>
      The main contents of our meeting included:<br>
      - Add storybook to help UI and component implementation<br>
      - Update evryone's process<br>
      - Talk about the features on the detail page<br>
  - **Tasks breaking down:**
    - page rendering: Albert
    - comments: Albert
- #### Week 3:
  - **Meetings (1):**
    - ### Meeting 07:00pm - 08:30pm 15/04/2021 <br>
      The main contents of our meeting included:<br>
      - Talk about A2<br>
      - Update evryone's process<br> 
      - Talk about the personal portal - settings part
  - **Tasks breaking down:**
    - page rendering: Albert
    - personal info section: Albert
    - privacy info section: Albert
- #### Week 4:
  - **Meetings (1):**
    - ### Meeting 07:00pm - 08:00pm 25/04/2021 <br>
      The main contents of our meeting included:<br>
      - Finish the basic functionalities<br>
      - Fix detail information and documentations<br>
      - Start working on test design<br>
      - Talk about the personal portal - history timeline part
  - **Tasks breaking down:**
    - favourites sections: Albert
    - submitted news section: Albert
    - my comments section: Albert

### May

- #### Week 1:
  - **Meetings (1):**
    - ### Meeting 06:00pm - 07:00pm 02/05/2021 <br>
      The main contents of our meeting included:<br>
      - Update dependencies<br>
      - Talk about the problems of storybook
      - Bugs fixing and testing strategy
  - **Tasks breaking down:**
    - component testing breaking down: Albert
    - e2e testing breaking down: Albert
    - storybook breaking down: Albert
    - bug fixing: Albert
- #### Week 2:
  - **Meetings (3):**
    - ### Meeting 07:00pm - 07:50pm 05/05/2021 <br>
      The main contents of our meeting included:<br>
      - Add component tests & e2e test structure to the repository<br>
      - Split the task of tests<br>
      - Fix the existing Problems<br>
    - **Tasks breaking down:**

    - ### Meeting 07:00pm - 09:00pm 08/05/2021 <br>
      The main contents of our meeting included:<br>
      - Update component tasks<br>
      - Add component to storybook<br>
      - Fix auto deloyment tool<br>
    - **Tasks breaking down:**

    - ### Meeting 11:00am - 2:00 pm 09/05/2021 <br>
      The main contents of our meeting included:<br>
      - Fix existing bugs<br>
      - Finish all the issues and pr<br>
      - Tidy up repository and documentations<br>
      - Merge branch dev to master<br>
    - **Tasks breaking down:**
