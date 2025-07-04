# ReactJS Tic Tac Toe

A classic Tic Tac Toe game built with ReactJS, demonstrating component-based architecture and state management in a modern web application. This project provides a simple yet complete example of how to structure a React application for interactive games.

## Overview

This project implements the well-known Tic Tac Toe game using ReactJS. It serves as a practical example for understanding core React concepts such as:

* **Component-Based Architecture:** Breaking down the UI into reusable components (e.g., `Board`, `Square`, `GameInfo`).
* **State Management:** Managing game state (board, current player, game status) within React components.
* **Event Handling:** Responding to user interactions (clicks on squares).
* **Conditional Rendering:** Displaying different UI elements based on game state (e.g., winner message, current player).

The game features standard Tic Tac Toe rules, including alternating players, win detection (horizontal, vertical, diagonal), and draw detection.

## Features

* **Interactive Game Board:** A 3x3 grid of clickable squares.
* **Player Turn Indication:** Clearly displays whose turn it is (X or O).
* **Win/Draw Detection:** Automatically identifies and announces the winner or a draw.
* **Game Reset:** A button to easily start a new game.
* **Responsive Design:** Styled with modern CSS for a clean look on various screen sizes.
* **Clear Game Status Messages:** Provides informative messages about the game's progress and outcome.

## Technologies Used

* **ReactJS:** For building the user interface with a component-based approach.
* **JavaScript (ES6+):** For game logic and component functionality.
* **HTML5:** For the basic structure of the web page.
* **CSS3:** For styling and responsive design.

## Getting Started

### Prerequisites

* Node.js and npm (or yarn) installed on your system.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/your-username/react-tic-tac-toe.git](https://github.com/your-username/react-tic-tac-toe.git)
    cd react-tic-tac-toe
    ```
    (Replace `your-username` with your actual GitHub username.)

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    ```

### Running the Application

1.  **Start the development server:**
    ```bash
    npm start
    # or
    yarn start
    ```

2.  Open your web browser and navigate to `http://localhost:3000` (or the address provided in your terminal).

## Project Structure (Conceptual for React)

A typical React Tic Tac Toe project might have a structure similar to this:

```
react-tic-tac-toe/
├── public/
│   ├── index.html       # Main HTML file
│   └── ...
├── src/
│   ├── App.js           # Main application component
│   ├── index.js         # React DOM rendering
│   ├── components/
│   │   ├── Board.js     # Component for the Tic Tac Toe board
│   │   ├── Square.js    # Component for individual squares
│   │   └── GameInfo.js  # Component for displaying game status and player
│   ├── styles/
│   │   └── App.css      # Main application styles
│   └── utils/
│       └── gameLogic.js # Helper functions for win/draw detection
└── package.json         # Project dependencies and scripts
```

## How to Play

1.  The game board will appear in your browser.
2.  Click on any empty square to make your move. Player 'X' goes first.
3.  The game will automatically switch turns between 'X' and 'O'.
4.  The game status message will update to indicate the current player, a winner, or a draw.
5.  Click the "Reset Game" button to start a new round at any time.

## Code Overview (Conceptual for React)

* **`App.js`**: The root component that holds the overall game state, including the `squares` array (representing the board), `xIsNext` (to track turns), and `status` (game messages). It renders the `Board` and `GameInfo` components.
* **`Board.js`**: Renders the 3x3 grid of `Square` components. It receives the `squares` array and `onClick` handler from `App.js`.
* **`Square.js`**: A simple presentational component that renders a single square. It receives its `value` (X, O, or null) and an `onClick` handler.
* **`GameInfo.js`**: Displays the current player's turn or the game's outcome (winner/draw).
* **`calculateWinner(squares)` (or similar utility)**: A helper function (often placed in a utility file) that checks if there's a winner based on the current `squares` array.

## Contributing

Feel free to fork this repository, make improvements, and submit pull requests.

## License

This project is open-source and available under the MIT License.

## Contact

For any questions or feedback, please open an issue in the GitHub repository.
