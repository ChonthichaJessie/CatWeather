# Architecture Decision Record: Database
---
## Status
Accepted 
## Context
When creating a mobile application, it will contain libaries and resources that are needed to work within the application. These will include source files for the framework which the application is constructed upon, API configurations and other supporting files (Widgets and icons used in the application). The team has also decided to use what is called AsyncStorage. This method of storage stores minute data such as the most recent API 
## Decision
Practically, the application uses API calls to create what will be displayed on the page. We will then make use of the AsyncStorage to store any sort of asynchronous data. This approach ensures that user data is stored securely on the user's device, providing a seamless experience even when offline. The encryption adds an extra layer of security, protecting sensitive information from unauthorized access. The method will be in a key-value pair that can be retrieved or set as needed. The application will not go deeper than using this sort of storage as database. It will be kept as simple as possible to convinient change of any sort to the application.

## Consequences
- **Dependency on External Services**: The application's functionality is reliant on external APIs, and any changes or disruptions to these services could impact the app's performance.
- **Network Dependency**: Since the application relies on API calls for data, it requires a stable internet connection to function properly. Offline functionality are only limited to Async Data.
-- **Offline Access**: Async data stored will handle persistent data. It will allow the application to display the latest data drawn by the API and store nothing more than that.
-- **Security**: Encrypting the local database adds a layer of security, protecting user data from potential threats.

## Considerations
-- **Scalabilty**: The application will endure changes over time. It is hence subject to change and might need to make use of offline-enabled architectures or other synchronization technologies.
