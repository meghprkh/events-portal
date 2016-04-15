/user
- POST /login
- GET /logout
- GET /groups => Return subscribed groups
- GET /events => Return going to events

/group
- GET / => list all groups
- GET /:group_id
- GET /:group_id/subscribe (user auth)
- GET /:group_id/unsubscribe (user auth)
- GET /:group_id/events

Group admin only (/group)
- POST /login
- GET /logout
- POST /:group_id/events
- PUT/DELETE /:group_id/:event_id

/event
- GET /
- GET /:event_id
- GET /:event_id/going
- GET /:event_id/notgoing
