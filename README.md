This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

#To get started:

  yarn install

# yarn start
Runs the app in development mode.
Open http://localhost:3000 to view it in the browser.

# yarn test
Runs the test watcher in an interactive mode.
By default, runs tests related to files changed since the last commit.

# yarn build 
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
By default, it also includes a service worker so that your app loads from local cache on future visits.

Your app is ready to be deployed.

## Assumptions 

1. Starting board was hardcoded
2. Allows for attack by clicking on squares. The square is flipped from false to true if not already true. The number stays the same or turns into a -1 depending on if it is higher than 0
3. Rules of board pieces are as followed

    exampleBoard = [
      [[5,true],[-1,true],[0,false],[0,false]],
      [[5,false],[0,false],[0,false],[0,false]],
      [[5,false],[2,false],[2,false],[0,false]],
      [[0,false],[0,false],[0,false],[0,false]]
    ]

  - [5,false] represents hidden boat
  - [5,true] represents revealed spot with boat
  - [0,false] represents hidden spot with no boat
  - [-1, true] represents revealed spot with no boat 

4. Array Pairs that have the same number in the first element belong to the same boat and are colored the same shade of red SO [5,false], [5,false], [5,true] belong to the same boat, while [2,false], [2,false] is another boat
5. Game restarts when all boats have been sunk
