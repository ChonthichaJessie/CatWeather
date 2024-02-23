# Decision Record for Hardware ADR
---
## Status
Proposed.
## Context
The team is in the process of selecting an weather forecast API that requires accessing user's location information. The goal is to decide on a method that allows the application to ask permission to access user's GPS information and return accurate weather information.
## Decision
The team has chosen the react-native-permissions library for consideration as it provides a unified interface for requesting permissions, ensuring cross-platform consistency. This library will be used to handle GPS permissions in our weather application.

We anticipate the following outcomes and consequences of our decision:
### Easier:
- Unified UI: Utilizing react-native-permissions ensures a consistent interface for requesting GPS permissions across both iOS and Android
- User Understanding: Clear communication about permissions enhance user understanding and trust
## Difficult:
- Correct Permission Request: Ensuring that the app requests the correct permissions for the specific device and operating system may cause issues
- User Revolking Permission: Users can also revoke permissions at any time, which can cause unexpected behavior in the app

This decision is crucial for enabling the weather application to access accurate GPS data, providing users with reliable weather information. 