# WatchTrack Prototype Check-In Guide

**Course:** CSCE 3444.401 – Software Engineering  
**Project:** WatchTrack  
**Assignment:** Prototype Check-In Recording Assignment, due Week 7  
**Video Length:** 5–7 minutes maximum  
**Current Status:** Prototype check-in, not final presentation yet  

---

## 1. Assignment Goal

For this check-in assignment, the team must submit a short recorded presentation showing the current progress of the WatchTrack prototype.

The recording should demonstrate:

- Current prototype progress
- Core features completed so far
- Current UI screens
- Interactive functionality
- What has been completed
- What still needs improvement
- Any challenges the team is facing
- Participation from all team members

The goal is not to have the final project fully completed yet. The goal is to show a working or partially working prototype that demonstrates progress and clearly explains what still needs to be finished.

---

## 2. Minimum Prototype Flow

By the time the team records the video, WatchTrack should be able to show this basic user flow:

1. User opens WatchTrack.
2. User registers or logs in.
3. User reaches the dashboard.
4. User adds a movie or TV show recommendation.
5. User sees the saved recommendation in the watchlist.
6. User changes the viewing status, such as:
   - Recommended
   - Plan to Watch
   - Watching
   - Completed
   - Dropped
7. User searches or filters the watchlist.
8. Team explains what works, what is unfinished, and what challenges remain.

A simple working prototype is acceptable. The app does not need to be perfect for this check-in.

---

## 3. Team Member Responsibilities

## Zion Welsh – User Authentication / Account Features

Zion is responsible for the login, registration, and account-related parts of the prototype.

### Features to Build or Prepare

- Register screen
- Login screen
- Logout button
- Basic login validation
- Error message for invalid login
- Simple user session behavior

A minimum working version is acceptable. If full backend authentication is not ready, a mock user system or local storage version can still be shown as prototype progress.

### Prototype Demo Tasks

During the recording, Zion should show:

1. The register page.
2. Creating a new account.
3. Logging in.
4. What happens when login information is incorrect.
5. Logging out.

### Documentation Tasks

Zion should update the Requirements document sections related to authentication.

Suggested functional requirements:

- **F-1:** System shall allow a user to register an account.
- **F-2:** System shall allow a user to log in.
- **F-3:** System shall allow a user to log out.
- **F-4:** System shall display an error message for invalid login information.

Suggested user stories:

- As a new user, I want to create an account so that I can save my personal watchlist.
- As a returning user, I want to log in so that I can access my saved recommendations.

Suggested use cases:

- Register Account
- Log In

Suggested non-functional requirement:

- Passwords should not be stored in plain text in the final system.

### Suggested Recording Script

> My part of the prototype is the user authentication feature. Right now, the user can register, log in, and log out. We also added basic validation so the system can show an error if the login information is incorrect. This matters because each user's watchlist should eventually be tied to their own account.

---

## Tevin Daney – Team Lead / Dashboard / Repository Manager

Tevin is responsible for project organization, dashboard progress, and making sure the demo is ready to run.

### Features to Build or Prepare

- Dashboard screen
- Main navigation
- Basic home page after login
- Summary cards, such as:
  - Total saved recommendations
  - Watching
  - Completed
  - Plan to Watch
- Confirm that everyone’s work is pushed to GitHub
- Confirm that the README is updated
- Confirm that the app can be opened during the demo

### Documentation and Management Tasks

Tevin should update or manage:

- README
- Trello board
- Project status
- GitHub organization
- Sprint progress summary
- Intro and outro for the recording

### Suggested Recording Script

Opening:

> Our project is WatchTrack, a social recommendation and media watchlist application. The purpose is to help users save movies and shows recommended by friends, family, classmates, or online communities. For this prototype check-in, we are showing the current login flow, dashboard, watchlist management, and search/filter features.

Dashboard section:

> This is the dashboard. It gives the user a quick overview of their saved recommendations and viewing progress. The dashboard is still being improved, but it shows the main direction of the application.

---

## Jeet Rathod – Watchlist Management

Jeet is responsible for the main watchlist features. This is one of the most important parts of the prototype because WatchTrack needs saved media entries to demonstrate.

### Features to Build or Prepare

- Add movie/show form
- View saved watchlist entries
- Edit an entry
- Delete an entry
- Update viewing status
- Store fields such as:
  - Title
  - Type: Movie or TV Show
  - Genre
  - Platform
  - Recommended by
  - Reason or note
  - Status
  - Rating, if completed

Minimum version: the user should be able to add entries and see them in a list. Edit and delete can be basic buttons if time is limited.

### Documentation Tasks

Jeet should update the Requirements document with watchlist-related requirements.

Suggested functional requirements:

- **F-5:** System shall allow a user to add a movie or TV show recommendation.
- **F-6:** System shall allow a user to record who recommended the title.
- **F-7:** System shall allow a user to add a note or reason for the recommendation.
- **F-8:** System shall allow a user to update the viewing status.
- **F-9:** System shall allow a user to edit a saved entry.
- **F-10:** System shall allow a user to delete a saved entry.

Suggested use cases:

- Add Recommendation
- Update Watch Status
- Delete Recommendation

### Suggested Recording Script

> My part is the watchlist management feature. The user can add a movie or TV show recommendation, include who recommended it, add notes, and select a viewing status. The entry then appears in the user's watchlist. We also started adding edit and delete options so the user can manage their saved recommendations.

---

## Collin Burns – Search and Filter

Collin is responsible for helping users find saved recommendations quickly.

### Features to Build or Prepare

- Search by title
- Filter by status
- Filter by genre
- Filter by platform
- Filter by recommender, if there is time
- Clear filters button
- Result count, if there is time

Minimum version: search by title and filter by status.

### Documentation Tasks

Collin should update the Requirements document with search and filtering requirements.

Suggested functional requirements:

- **F-11:** System shall allow a user to search recommendations by title.
- **F-12:** System shall allow a user to filter recommendations by viewing status.
- **F-13:** System shall allow a user to filter by genre, platform, or recommender.
- **F-14:** System shall allow a user to clear filters.
- **F-15:** System shall display matching results.

Collin should also help update the Testing Template because search and filter features are easy to test.

### Suggested Recording Script

> My part is the search and filtering feature. The user can search their saved recommendations by title and filter the list by status. This helps users quickly find what they want to watch next instead of scrolling through every saved item.

---

## 4. Documents to Update Before Recording

## Requirements Document

The Requirements document should not remain a blank template. It should include WatchTrack-specific content.

Required sections to update:

- Team name
- Project name
- Brief problem statement
- System requirements
- User profile
- Functional requirements
- User stories
- 2–3 use cases
- Non-functional requirements

Suggested team/project information:

- **Team Name:** Group 4
- **Project Name:** WatchTrack

Suggested problem statement:

> WatchTrack is a personal media recommendation and watchlist application designed to help users keep track of movies and TV shows recommended by other people. Many users receive recommendations from friends, family, classmates, social media, or online communities, but they often forget the title, who recommended it, or where it can be watched. WatchTrack solves this problem by giving users one organized place to save recommendations, track viewing status, and search or filter their list.

Suggested user profile:

> WatchTrack is intended for users who watch movies or TV shows and want an easier way to organize recommendations. Users should be comfortable using a basic web application with login, forms, buttons, search, and filters. The app should be simple enough for general users and useful for students or young adults who frequently receive media recommendations.

Suggested system requirements:

> WatchTrack is designed to run as a web application in a modern web browser. Users need internet access and a device such as a laptop, desktop, tablet, or smartphone. The development team may use GitHub for version control and local development tools for building and testing the prototype.

---

## Design Document

The Design document should include:

- Updated revision table
- Class diagram
- UI wireframes or screenshots
- Main screen IDs
- Design summary
- Design rationale
- Design changes since the last sprint

Suggested screen IDs:

| Screen ID | Screen Name | Owner |
| --- | --- | --- |
| S-01 | Login Screen | Zion |
| S-02 | Register Screen | Zion |
| S-03 | Dashboard | Tevin |
| S-04 | Add Recommendation | Jeet |
| S-05 | Watchlist View | Jeet |
| S-06 | Search and Filter View | Collin |

Suggested design summary:

> WatchTrack uses a simple web application design with separate screens for authentication, dashboard viewing, recommendation entry, watchlist management, and search/filter features. The design focuses on usability and clear navigation so users can quickly save and find media recommendations.

Suggested design rationale:

> The team chose a simple dashboard and list-based layout because the main purpose of WatchTrack is organization. A list layout makes it easy for users to scan saved recommendations, update statuses, and search for specific titles. The authentication flow was separated from the main watchlist features so each user can eventually have a personal saved list.

---

## Testing Tracker

The testing tracker should be updated with WatchTrack-specific tests instead of unrelated sample tests.

Suggested test cases:

| Test ID | Feature | Owner | Expected Result |
| --- | --- | --- | --- |
| T-01 | Register account | Zion | New account is created successfully |
| T-02 | Login with valid information | Zion | User reaches dashboard |
| T-03 | Login with invalid information | Zion | Error message appears |
| T-04 | Logout | Zion | User returns to login screen |
| T-05 | Add recommendation | Jeet | New title appears in watchlist |
| T-06 | Edit recommendation | Jeet | Updated information is saved |
| T-07 | Delete recommendation | Jeet | Entry is removed |
| T-08 | Update status | Jeet | Status changes correctly |
| T-09 | Search by title | Collin | Matching titles appear |
| T-10 | Filter by status | Collin | Only matching status entries appear |
| T-11 | Clear filters | Collin | Full list appears again |
| T-12 | Dashboard summary | Tevin | Counts/status summary updates correctly |

Suggested testing status labels:

- **Passed:** Feature works as expected.
- **Partially Working:** Feature works but still needs improvement.
- **Failed:** Feature does not work yet or still has major issues.

---

## Trello Board Setup

The Trello board should clearly show the team's Sprint 3 progress.

Recommended columns:

| Column | Purpose |
| --- | --- |
| To Do | Tasks not started |
| In Progress | Someone is actively working on it |
| Testing | Feature is built but needs checking |
| Done | Finished and ready for recording |

### Zion Cards

- Build register screen
- Build login screen
- Add logout button
- Add login validation
- Update authentication requirements
- Test authentication flow

### Tevin Cards

- Build dashboard screen
- Clean README
- Merge branches/check GitHub
- Update Trello statuses
- Prepare intro/outro for recording
- Make sure demo opens correctly

### Jeet Cards

- Build add recommendation form
- Display watchlist entries
- Add edit option
- Add delete option
- Add status update option
- Test watchlist flow

### Collin Cards

- Build title search
- Build status filter
- Build genre/platform filter
- Add clear filter button
- Test search/filter flow
- Help update testing tracker

---

## 5. Suggested 5–7 Minute Recording Order

This order keeps the video organized and makes sure all group members participate.

| Time | Speaker | Section |
| --- | --- | --- |
| 0:00–0:45 | Tevin | Intro and project overview |
| 0:45–2:00 | Zion | Authentication demo |
| 2:00–3:30 | Jeet | Watchlist management demo |
| 3:30–4:45 | Collin | Search and filter demo |
| 4:45–5:45 | Tevin | Dashboard and navigation demo |
| 5:45–6:45 | Everyone | Challenges and next steps |

### 0:00–0:45 – Tevin Intro

Tevin should explain:

- Project name
- Team members
- Purpose of WatchTrack
- What the current prototype includes

### 0:45–2:00 – Zion Authentication Demo

Zion should show:

- Register
- Login
- Invalid login error
- Logout

### 2:00–3:30 – Jeet Watchlist Demo

Jeet should show:

- Add movie/show
- Add recommender
- Add status
- Show saved watchlist entry
- Edit/delete, if working

### 3:30–4:45 – Collin Search/Filter Demo

Collin should show:

- Search by title
- Filter by status
- Clear filters

### 4:45–5:45 – Tevin Dashboard Demo

Tevin should show:

- Dashboard
- Navigation
- Summary/status cards
- Overall UI layout

### 5:45–6:45 – Challenges and Next Steps

Each person should say one short update:

- Zion: Authentication still needs stronger backend/security.
- Jeet: Watchlist management needs more polish, editing, and testing.
- Collin: Filters need more options and better edge-case handling.
- Tevin: Integration, styling, and final documentation still need work.

---

## 6. Final Checklist Before Recording

| Item | Responsible Person |
| --- | --- |
| App opens without errors | Tevin |
| Login/register works or is clickable | Zion |
| Logout works | Zion |
| Add recommendation works | Jeet |
| Watchlist displays saved items | Jeet |
| Status can be changed | Jeet |
| Search/filter works at least partly | Collin |
| Dashboard exists | Tevin |
| README updated | Tevin |
| Requirements document updated | Zion, Jeet, Collin |
| Design document updated with screenshots/wireframes | Tevin and everyone |
| Testing tracker filled with WatchTrack tests | Collin and everyone |
| Trello board updated | Tevin |
| Everyone has a speaking part | Tevin |
| Recording is under 7 minutes | Everyone |

---

## 7. Message to Send to the Group

> We need to finish enough of the WatchTrack prototype for the Week 7 prototype check-in recording. The video has to be 5–7 minutes max, show our current UI and interactive features, explain what is completed, what still needs improvement, and include all team members.
>
> Zion will handle login/register/logout and authentication documentation. Tevin will handle the dashboard, repo organization, Trello, and the intro/outro. Jeet will handle adding, editing, deleting, and updating watchlist entries. Collin will handle search/filter and help fill out the testing tracker.
>
> Before recording, we need the app to open, have basic navigation, show login/register, add media entries, display a watchlist, search/filter entries, and show the dashboard. We also need to update the Requirements document, Design document, Testing tracker, Trello board, and README.

---

## 8. Prototype Check-In Priority

The team should focus on showing progress, not perfection.

Highest priority:

1. Make sure the app opens.
2. Make sure the screens are visible and understandable.
3. Make sure every team member has something to show or explain.
4. Make sure the main user flow works or is clearly explained.
5. Make sure the recording stays under 7 minutes.

Lower priority:

- Advanced styling
- Full backend security
- Perfect database integration
- Extra filter options
- Final presentation polish

These items can be improved after the prototype check-in and before the final presentation.
