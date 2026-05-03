📄.Goal Tracker App-Explanation:
The Goal Tracker App is a web application built with React that helps users manage and track their personal goals in a simple and organized way.
Users can create goals by setting a title, target value, and category. Each goal can be updated by adding progress over time. The app automatically tracks completion status and moves finished goals to an archive section.
The application also includes a basic gamification system. Users earn XP (experience points) whenever they update progress, and a daily streak is maintained to encourage consistent usage.
Goals are grouped by categories for better organization, and users can filter goals based on their status (active, completed, or paused).
The app supports both English and Persian languages. When Persian is selected, the layout switches to RTL (right-to-left) and all interface text is translated.
All data is stored locally using the browser’s localStorage, so the user’s goals and progress are saved even after refreshing the page.
The interface is designed to be clean, responsive, and user-friendly, working well on both desktop and mobile devices.


💡.Features Checklist
Create goals
Edit goals
Delete goals
Track progress
Archive completed goals
Categories
XP system
Streak system
RTL/LTR support
Responsive UI
Dashboard
goals
New goal
Categories
Archive
Settings

✨.How to Run
npm install
npm run dev

📄.Language 
RTL/LTR Explanation:
The app supports two languages:
English → Left-to-Right (LTR)
Persian → Right-to-Left (RTL)
Direction is handled dynamically in the app using:
document.body.dir = lang === "fa" ? "rtl" : "ltr";
All texts are translated using a translations object.

✏.Streak + XP Rules
Each progress update gives +20 XP
Streak increases when user logs activity daily
If a day is missed, streak resets

📸.Screenshots (Desktop + Mobile)
Desktop:
<img width="1917" height="970" alt="image" src="https://github.com/user-attachments/assets/d0e12b93-37f8-47d1-8522-d8f3b45130a1" />
Mobile:
<img width="713" height="926" alt="image" src="https://github.com/user-attachments/assets/06e55973-a1cb-426a-882b-cfbfed8d94df" />
