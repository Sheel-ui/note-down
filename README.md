

# Note-Down Application
The Note-Down Application is a note-taking solution that offers a seamless user experience with its React frontend and Node.js backend. It empowers users to effortlessly write down notes, revisit them later for review, and efficiently manage their notes by deleting them when no longer needed.

### Features
-   
    **Dark and light modes**:  Offers both dark and light modes, allowing users to choose a theme that suits their preferences.
-   **Infinite scroll**: With infinite scroll functionality, users can smoothly navigate through their notes without interruption.
-   **Intuitive Note Management:** Users can easily create new notes, review existing ones, and delete notes they no longer require.

 
# Getting Started

To get started with Note-Down, follow these steps:

### Install Dependencies
1. Clone the repository to your local machine.
2. Navigate to the project directory and run the following command to install the necessary dependencies:

```bash
$ npm i
```
### Starting the JSON Server
Note-Down utilizes a JSON server for its infinite scroll functionality. Start the server by running the following command:

```bash
$ npx json-server --watch ./data/data.json --port 8000
```

### Starting  the application
To start the application, use the following command:
```bash
$ npm start
```
These steps will get your Note-Down application up and running, allowing you to start taking notes seamlessly.

# Demo

![Alt Text](./demo/demo.gif)
