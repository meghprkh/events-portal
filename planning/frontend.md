Public pages:
- Homepage
- Login -> /login
- All groups -> /groups/
- Group view page (shows group events also) -> /group/:group_id
- All events -> /events/ (alias homepage)
- Event view page -> /event/:event_id

User Logged In
- Homepage (shows all events)
- My groups -> /user/groups
- My events -> /user/events
- Modified public pages
  - All groups / group view page have subscribe button
  - Events pages have going/not-going button

Group Logged in
- Homepage (shows all events)
- Group administration:
  - Create/update event -> /group/new_event
  - See/Edit group page (alias /group/:group_id) -> /group
  - See member list -> /group/members
- Modified public pages
  - If event by group will have edit/delete button on view page
  - Edit button on /group/:group_id
