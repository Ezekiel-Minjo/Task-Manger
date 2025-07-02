# 📝 Task Manager

A modern, responsive task management application built with vanilla HTML, CSS, and JavaScript. Perfect for organizing your daily tasks with a beautiful, intuitive interface.

![Task Manager Preview](https://img.shields.io/badge/Status-Live-brightgreen)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

## ✨ Features

- ➕ **Add Tasks** - Quick task creation with Enter key support
- ✅ **Toggle Completion** - Mark tasks as complete/incomplete
- ✏️ **Edit Tasks** - Modify existing tasks
- 🗑️ **Delete Tasks** - Remove unwanted tasks
- 🔍 **Filter Tasks** - View All, Pending, or Completed tasks
- 📊 **Live Statistics** - Real-time task completion metrics
- 💾 **Persistent Storage** - Tasks saved automatically in browser
- 📱 **Responsive Design** - Works perfectly on all devices
- 🎨 **Modern UI** - Beautiful glassmorphism design with smooth animations

## 🚀 Live Demo

🔗 **[View Live Demo](https://task-manger-beryl.vercel.app/)**

## 🛠️ Technologies Used

- **HTML5** - Semantic structure and accessibility
- **CSS3** - Modern styling with Flexbox/Grid, animations, and glassmorphism effects
- **Vanilla JavaScript** - Core functionality and DOM manipulation
- **LocalStorage API** - Client-side data persistence

## 📁 Project Structure

```
task-manager/
├── index.html          # Main HTML structure
├── style.css           # All styling and responsive design
├── script.js           # JavaScript functionality
└── README.md           # Project documentation
```

## 🏗️ Installation & Setup

### Option 1: Direct Download

1. Download or clone this repository
2. Open `index.html` in your browser
3. Start managing your tasks!

### Option 2: Local Development

```bash
# Clone the repository
git clone https://github.com/Ezekiel-Minjo/Task-Manger.git

# Navigate to project directory
cd task-manager

# Open in your preferred code editor
code .

# Open index.html in browser or use Live Server extension
```

## 🔧 Usage

### Adding Tasks

1. Type your task in the input field
2. Click "Add Task" or press Enter
3. Task appears in the list instantly

### Managing Tasks

- **Complete**: Click the circular checkbox
- **Edit**: Click the yellow "Edit" button
- **Delete**: Click the red "Delete" button

### Filtering

- **All**: View all tasks
- **Pending**: View only incomplete tasks
- **Completed**: View only finished tasks

### Bulk Actions

- **Clear Completed**: Remove all completed tasks at once

## 💡 Code Architecture

### JavaScript Modules

- **Data Management**: Task creation, storage, and retrieval
- **DOM Manipulation**: Dynamic UI updates and rendering
- **Event Handling**: User interactions and form submissions
- **Local Storage**: Persistent data management
- **Statistics**: Real-time metrics calculation

### CSS Features

- **CSS Grid & Flexbox**: Responsive layout system
- **CSS Animations**: Smooth transitions and micro-interactions
- **CSS Variables**: Consistent theming and easy customization
- **Mobile-First Design**: Optimized for all screen sizes

## 🎨 Customization

### Colors

Edit the CSS variables in `style.css`:

```css
:root {
  --primary-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  --background-color: #f8f9fa;
  --text-color: #333;
  --border-color: #e1e5e9;
}
```

### Features

Add new functionality by extending the JavaScript modules:

- Categories/Tags system
- Due dates and reminders
- Task priorities
- Drag and drop reordering

## 🐛 Known Issues

- None currently! 🎉

## 🚀 Future Enhancements

- [ ] **Dark Mode Toggle** - Switch between light and dark themes
- [ ] **Categories** - Organize tasks by project or type
- [ ] **Due Dates** - Set deadlines with visual indicators
- [ ] **Priority Levels** - High, medium, low priority tasks
- [ ] **Search Functionality** - Find tasks quickly
- [ ] **Export/Import** - Backup and restore tasks
- [ ] **PWA Support** - Install as a mobile app
- [ ] **Keyboard Shortcuts** - Power user features

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 Learning Objectives

This project covers:

- **DOM Manipulation** - Dynamic content creation and updates
- **Event Handling** - User interactions and form processing
- **Array Methods** - Filtering, mapping, and reducing data
- **Local Storage** - Browser-based data persistence
- **Responsive Design** - Mobile-first CSS approach
- **Modern JavaScript** - ES6+ features and best practices

## 🙏 Acknowledgments

- Design inspiration from modern task management apps
- Built as a learning project to master vanilla JavaScript
- Icons and animations from various open-source libraries

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

⭐ **Star this repository if you found it helpful!**

_Made with ❤️ and lots of ☕_
