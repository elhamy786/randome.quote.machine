# Random Quote Machine 🚀

## Project Description 📝

> Random Quote Machine is a React application that generates and displays a random inspirational quote with each button click. Users can easily refresh the quote, and each one is styled to provide a visually engaging experience.

- Random Quote Machine project, inspired by a desire to provide quick, motivational insights, stands out for its sleek, responsive design, solving the problem of easy access to inspiring quotes while enhancing your skills in API integration, DOM manipulation, and event handling.

```css
body::before,
body::after {
  content: "";
  position: fixed;
  width: 400px;
  height: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  z-index: -1;
}
```

```javascript
  const fetchQuote = async () => {
    try {
      const response = await fetch('https://api.quotable.io/random');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setQuote({ text: data.content, author: data.author });
      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

```

## Demo 📸
[Live Demo](https://deploy-preview-1--boisterous-cupcake-dc91c8.netlify.app/)

![Screenshot](./src/Screenshot%202024-08-24%20123007.png)

## Technologies Used 🛠️

- HTML
- CSS
- JavaScript
- React


## Installation 💻

```bash
1: Clone the Repository:
git clone https://github.com/elhamy786/random.quote.machine.git
```

```bash
2: Navigate to the Project Directory:
cd random.quote.machine
```

```bash
3: Open the index.html , App.js , App.css and another Files in Your Browser.
```


## Usage 🎯

```bash
# Click the "New Quote" button to generate a random quote, and use the "Share" button to post it to social media.
```

## Features ⭐

- Random Quote Generation: Displays a new, randomly selected quote with each click.
- API Integration: Fetches quotes from an external source or database.
- Responsive Design: Optimized for both desktop and mobile devices.

## Author 👩‍💻

- [Linkedin](https://www.linkedin.com/in/elham-afzali-05326130b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app)
- [Email](elham.afzali1383@gmail.com)

## Contributing 🤝

To contribute, submit bug reports, feature requests, or pull requests via the GitHub repository issues and pull requests tabs.