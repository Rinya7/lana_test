# Luna Edge technical interview
## Basic commands
- Run app: <code>yarn vite</code>
- Install deps: <code>yarn install</code>
- Build app: <code>yarn build</code>

## Summary
Imagine that you are a Pokémon trainer where you have to fill out a form with your name and last name and then select your team of 4 Pokémon to fight in the Battle Tower. The task is to create this form with inputs, button and a **select component** to select these 4 Pokémon and also show the sprites of your chosen Pokémon in a modal.

## Luna Edge projects are built with:
- React
- typescript
- Axios
- tailwindcss
- storybook
- React hook form

## Information
- Do request with Axios to this API to extract the necessary Pokemon data: https://pokeapi.co/
- You can use Icons from HEROICONS library.
- Use Yarn instead of NPM
- Use only Tailwindcss for styles.
- Create story with storybook for at least the select component.
- Storybook should be compatible with Tailwindcss and documentation should be similar in theme to: https://storybook.newskit.co.uk/?path=/docs/components-select--story-select-default
- Use latest storybook version.
- In the select component you must be able to type to filter the list of Pokemon. Make this filter as you want, either inside the select component or inside the dropdown.
- Storybook may show Luna Edge logo
- The task may be developed with the technologies used by Luna Edge. It is necessary to use all of them, install and configure necessary packages.
- All the data should be validated and if the validation isn't correct may show an error message according to design.
- Component libraries like MUI are banned.
- The project is empty, you can structure at your convenience to develop the tasks.
- The test is mainly focused on making a good **Select component** as well as its **documentation in Storybook**. The rest of the components are not necessary to make them 100% or to make them components.
- Logos and designs are located in the assets folder

## Validations
- First name and surname must be between 2 and 12 characters long. Only characters from a-z and A-Z are accepted.
- For select our team in the select component you only can select 4 Pokemon.
- Before you can see your selected team in, you must have your data filled in and your team completely selected.

## Important!
- Prepare adequately: Take the time to review the relevant topics for the technical test. Go over key concepts and practice related exercises. Make sure you have your development environment properly set up.
- Stay calm: Before and during the technical test, it's normal to feel some pressure, but remember to stay calm. Anxiety can affect your performance, so take deep breaths, focus, and maintain a positive attitude.
- Read the instructions carefully: Before starting the test, carefully read all the instructions. Ensure you fully understand the requirements and the evaluator's expectations.
- Manage your time: Determine how much time you have available for the test and plan your work accordingly. Divide the time evenly between understanding the problem, planning, coding, and reviewing.
- Start with the basics: When tackling test problems, begin by solving the most basic aspects before moving on to more challenging ones. This will help you build a solid foundation and gain confidence as you progress.
- **Good luck!**: Lastly, remember that luck can also play a role, so maintain a positive attitude and have confidence in your abilities. Do your best and maintain self-assurance throughout the technical test.

### I wish you the best of luck in your technical test!🤞😄
2️⃣ Заменяем статичные данные покемонов на PokeAPI (Axios).
3️⃣ Реализуем модальное окно с выбранными покемонами.
4️⃣ Добавляем логотип Luna Edge в Storybook (если нужно).
5️⃣ Финальный тест, пуш в репозиторий и всё готово! 🎉