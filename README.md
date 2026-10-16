# Student Portfolio: TEMPLATE (structure + CSS only)

Every component has only empty HTML tags with their CSS class names. There is no text, no data
and no JavaScript logic. Add them in class:

1. `App.jsx`: fetch `/portfolio.json` (`useState`, `useEffect`, `fetch`), then pass props.
2. Fill each empty tag with data, for example `<h1 className="hero-title gradient-text">{data.role}</h1>`.
3. Add `href`, `src`, `alt` and `target` attributes where needed.
4. Repeat cards with `.map()`: nav links, skills, projects, education, interests, API users.
5. `ApiDemo.jsx`: fetch https://jsonplaceholder.typicode.com/users.

```
npm install
npm run dev
```
`public/portfolio.json` contains the sample data to fetch.
