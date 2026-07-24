# WatchTrack

## Live Application

WatchTrack can be accessed through GitHub Pages:

https://tevybub.github.io/Group-Project-CSCE-3444.401-WatchTrack/

Demo account:

- Email: `demo@watchtrack.com`
- Password: `watchtrack`

## Project Description

WatchTrack is a personal media recommendation and watchlist application. It helps users save movies and television shows recommended by friends, family, classmates, social media users, and online communities.

Unlike watchlists tied to one streaming service, WatchTrack allows users to organize recommendations from multiple platforms in one location. Users can record who recommended each title, why it was recommended, its viewing status, and their personal rating.

## Problem and Purpose

People often receive movie and television recommendations from several different sources. These recommendations may be forgotten, lost in messages, or separated across multiple streaming services.

WatchTrack provides a simple location where users can save and manage these recommendations. The application is intended for movie and television viewers who want an uncomplicated way to organize what they plan to watch, what they are currently watching, and what they have completed.

## Completed Features

- User account registration
- User login and logout
- Duplicate-email validation
- Separate watchlists for each user account
- Add movies, television shows, anime, and documentaries
- Record genre and streaming platform
- Record who recommended each title
- Add notes explaining why a title was recommended
- Track viewing status:
  - Recommended
  - Plan to Watch
  - Watching
  - Completed
  - Dropped
- Add personal ratings
- Edit saved recommendations
- Delete saved recommendations
- Update viewing status directly from the watchlist
- Search recommendations by title
- Filter by status, genre, platform, and rating
- Sort by recently added, alphabetical order, or rating
- Dashboard statistics for saved and completed titles
- Display recently added recommendations
- Load sample data for demonstrations

## Technology Stack

WatchTrack was created with:

- HTML5 for the page structure and forms
- CSS3 for layout, styling, and responsive design
- Vanilla JavaScript for application logic and user interaction
- Browser localStorage for account and watchlist data
- Git and GitHub for version control and team collaboration
- GitHub Pages for deployment

The project does not currently use a third-party movie database API. Movie and television information is entered by users or loaded from the included demonstration data.

## System Architecture

WatchTrack is a client-side web application.

1. `index.html` contains the user interface, authentication forms, dashboard, recommendation form, and watchlist.
2. `css/styles.css` controls the appearance and layout.
3. `js/app.js` connects the interface buttons and forms to the other JavaScript files.
4. `js/auth.js` manages registration, login, logout, and the current user.
5. `js/storage.js` saves and retrieves account and watchlist information.
6. `js/watchlist.js` handles adding, editing, updating, and deleting recommendations.
7. `js/filters.js` handles searching, filtering, and sorting.
8. `js/dashboard.js` calculates statistics and displays recent recommendations.

The frontend communicates directly with the JavaScript modules. The JavaScript modules then read from or write to browser localStorage.

## Data Storage

WatchTrack uses browser localStorage instead of a server-hosted database.

User accounts are stored under a shared user key. Each account receives a separate watchlist storage key based on the user's email address. This prevents one user from seeing another user's watchlist while using the application.

Because the information is stored inside the browser:

- Data remains available after refreshing or closing the page.
- Data is specific to the browser and device being used.
- Clearing browser data will remove saved WatchTrack information.
- Information is not synchronized between different devices.

## Authentication

The authentication system supports:

- Creating a new account
- Preventing duplicate email registrations
- Requiring passwords to contain at least six characters
- Logging in with a saved account
- Displaying an error for incorrect credentials
- Maintaining the current login session
- Logging out and returning to the authentication screen

This course-project version uses client-side authentication. Passwords are stored in browser localStorage and are not encrypted. A production version would use server-side authentication, password hashing, secure sessions, and a cloud database.

## Competitive Advantage

WatchTrack focuses on the person or community that recommended a title rather than only storing the title itself.

Users can record:

- Who recommended the title
- Why the title was recommended
- Which platform carries it
- Its current viewing status
- A personal rating and notes

This makes WatchTrack useful for organizing personal recommendations from several sources and streaming services without requiring a large or complicated media-tracking platform.

## How to Run the Project

### Online

Open the GitHub Pages application:

https://tevybub.github.io/Group-Project-CSCE-3444.401-WatchTrack/

### Locally

1. Clone or download the repository.
2. Open the project folder.
3. Open `index.html` in a web browser.
4. Register a new account or use the demonstration account.

No installation, package manager, or server is required.

## Team Members and Roles

| Team Member | Role | Contribution |
|---|---|---|
| Tevin Daney | Team Lead and Dashboard Developer | Repository organization, dashboard interface, application layout, and merge coordination |
| Jeet Rathod | Watchlist Feature Developer | Adding, editing, deleting, and updating media recommendations |
| Collin Burns | Search and Filter Developer | Search, filtering, sorting, and watchlist organization |
| Zion Welsh | User Authentication Developer | Registration, login, logout, account validation, and user-specific storage |

## Known Limitations

- There is currently no server backend.
- Data is stored only in the user's browser.
- Passwords are not encrypted.
- There is no third-party movie or television API.
- Accounts and watchlists do not synchronize between devices.
- Recommendations are organized by user input rather than generated by an automated recommendation algorithm.

## Future Improvements

- Secure server-side authentication
- Password hashing and account recovery
- Cloud-hosted user and watchlist database
- Integration with a movie and television information API
- Automatic poster images and media descriptions
- Personalized recommendation algorithms
- Profile settings
- Mobile application support
- Sharing recommendations with other users
- Notifications for newly available titles
