# Portfolio 2023 Documentation

## Overview

This documentation provides an overview of the structure and functionality of the Portfolio 2023 GitHub project. The portfolio is a multipage site developed with Three.js, GSAP (GreenSock Animation Platform), and Barba.js. The main feature on the index.html page allows users to create random-sized spheres by clicking a button, along with the ability to change the camera angle and zoom in and out.

![Screenshot]("https://github.com/DavidJFigueroa/portfolio2023/assets/122026800/8a2b999e-eed3-4260-8ba4-4eaccf283476.png")


## Folder Structure

The project's folder structure is organized as follows:

- **/src**: Contains the source code for the project.
  - **/assets**: Holds assets such as images, fonts, or any other static files.
  - **/css**: Includes stylesheets for the project.
  - **/js**: Contains JavaScript files for the application.
    - **/pages**: Houses JavaScript files for each specific page of the portfolio.
  - **/views**: Contains HTML files for each page of the portfolio.
  
## Dependencies

The project relies on the following dependencies, managed using npm:

```json
{
  "devDependencies": {
    "autoprefixer": "^10.4.16",
    "postcss": "^8.4.31",
    "postcss-100vh-fix": "^1.0.2",
    "prettier": "^3.0.3",
    "prettier-plugin-tailwindcss": "^0.5.6",
    "tailwindcss": "^3.3.3",
    "vite": "^4.4.9"
  },
  "dependencies": {
    "@barba/core": "^2.9.7",
    "@seregpie/three.text-sprite": "^3.2.0",
    "cannon-es": "^0.15.1",
    "circletype": "^2.3.0",
    "flowbite": "^1.8.1",
    "gsap": "^3.12.2",
    "hover-effect": "^1.2.1",
    "lil-gui": "^0.18.1",
    "simplex-noise": "^4.0.1",
    "stats.js": "^0.17.0",
    "three": "^0.153.0"
  }
}
```

## Running the Project

To run the project locally, follow these steps:

1. Clone the repository: `git clone https://github.com/DavidJFigueroa/portfolio2023.git`
2. Navigate to the project directory: `cd portfolio2023`
3. Install dependencies: `npm install`
4. Start the development server: `npm run dev`
5. Open your browser and go to [http://localhost:8080](http://localhost:8080) to view the portfolio.

## Building the Project

To build the project for production, use the following command:

```bash
npm run build
```

This will generate a `dist` folder containing the optimized and minified assets.

## Additional Scripts

- `npm run tailwind`: Watches and compiles Tailwind CSS styles.
- `npm run prettier`: Formats HTML files using Prettier.
- `npm run preview`: Starts a Vite development server for previewing the build on a specific port (8080 in this case).

## Conclusion

The Portfolio 2023 is a dynamic and visually appealing site that showcases your work using modern web development technologies. Feel free to explore and customize it to suit your preferences. If you encounter any issues or have questions, refer to the project's GitHub repository or contact the developer.
