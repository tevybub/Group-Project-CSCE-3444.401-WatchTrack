# WatchTrack
## Project Description
WatchTrack is a social recommendation and media watchlist application designed to help users track movies and TV shows recommended by friends, family, classmates, or online communities. Unlike standard streaming platform watchlists, WatchTrack focuses on tracking who recommended each title, why it was recommended, viewing progress, and whether the recommendation was useful. The goal is to help users organize personal and shared recommendations outside of one streaming service.

## Goal 
To create a simple, personal alternative to bloated media tracking apps — helping users keep track of what they're watching, what's next, and what's worth rewatching.

## Planned Features

- User account registration and login
- Add movies and television shows to a personal recommendation list
- Record who recommended each title
- Add a reason or note for the recommendation
- Track viewing status:
  - Recommended
  - Plan to Watch
  - Watching
  - Completed
  - Dropped
- Add personal ratings after watching
- Search recommendations by title
- Filter entries by genre, platform, recommender, or viewing status
- Dashboard showing saved recommendations and viewing progress


## Team Members and Roles
| Team Member | Role | Assigned Feature Branch | Planned Contribution |
|---|---|---|---|
| Tevin Daney | Team Lead / Repository Manager | `feature/dashboard-ui` | Repository organization, dashboard interface, and merge coordination |
| Jeet Rathod | Watchlist Feature Developer | `feature/watchlist-management` | Add, edit, delete, and update media watchlist entries |
| Collin Burns | Search & Filter Developer | `feature/search-filter` | Search functionality and filtering by genre, platform, or watch status |
| Zion Welsh | Account / Backend Developer | `feature/user-authentication` | User registration, login, and account-related features |

Future Feature Branches:
- feature/profile-settings
- feature/recommendation-engine
- feature/mobile-responsive-ui
- feature/notifications

## Branch Structure

- `main` - Stable version of the application
- `dev` - Development and integration branch
- `feature/user-authentication` - User registration, login, logout, and account access
- `feature/watchlist-management` - Add, edit, delete, and update recommended media entries
- `feature/search-filter` - Search and filter by title, genre, platform, recommender, or status
- `feature/dashboard-ui` - Dashboard layout and recommendation display interface


## Development Workflow
1. Create a feature branch from dev
2. Work on assigned features independently
3. Commit changes regularly with clear messages
4. Push updates to GitHub
5. Open pull requests for review
6. Merge approved changes into dev
7. Merge completed sprint work into main
