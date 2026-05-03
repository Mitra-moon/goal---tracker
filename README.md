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
<img width="1881" height="914" alt="image" src="https://github.com/user-attachments/assets/ea82aece-388e-42d6-864f-77df8e6ff03c" />
<img width="1901" height="875" alt="image" src="https://github.com/user-attachments/assets/8f770551-8a05-4c8a-9e6c-f1c84912c2c9" />
<img width="1872" height="886" alt="image" src="https://github.com/user-attachments/assets/9dfb4d41-7b57-424a-be39-dc2e5dc247ba" />
<img width="1900" height="895" alt="image" src="https://github.com/user-attachments/assets/5f4575f7-2457-493e-8cc4-393aa8f9460b" />
<img width="1913" height="898" alt="image" src="https://github.com/user-attachments/assets/a7331398-1d8e-46b9-9fa4-d1e40bf0778e" />
<img width="1876" height="865" alt="image" src="https://github.com/user-attachments/assets/c9d01016-9088-4cb3-9797-9864523a7aee" />

Mobile:
<img width="709" height="893" alt="image" src="https://github.com/user-attachments/assets/1b70cf3f-aebe-4548-9b76-852d57a1444a" />
<img width="701" height="884" alt="image" src="https://github.com/user-attachments/assets/b7abbb81-85ce-454e-b6b1-9e183830af74" />
<img width="669" height="879" alt="image" src="https://github.com/user-attachments/assets/2d9d4704-f93c-4e1b-91b4-d8a138e32b58" />
<img width="718" height="887" alt="image" src="https://github.com/user-attachments/assets/b111c434-0b94-4a6e-925f-26434e9a84a4" />
<img width="727" height="872" alt="image" src="https://github.com/user-attachments/assets/a2422c35-a7a1-4b7d-8129-c9261762da54" />
<img width="731" height="865" alt="image" src="https://github.com/user-attachments/assets/f2e278d2-1744-462d-bedd-165fdc13c9f3" />
