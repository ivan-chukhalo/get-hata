# get-hata

**get-hata** is a website featuring real estate projects.
Its key feature is a contact form that allows users to send messages directly to the site owner via email.
The project is built with a modern Front-End stack: Vite, React and Tailwind.

## 📦 Deployment

The project is deployed on [Vercel](https://vercel.com/).  
You can see it live at the following [link](https://get-hata.vercel.app/).

## 🛠️ Technologies

<div style="display: flex; flex-wrap: wrap; gap: 8px; align-items: center;">
  <img src="https://img.shields.io/badge/React-black?style=for-the-badge&logo=react&logoColor=%2361dbfb" height="40">
  <img src="https://img.shields.io/badge/Tailwind%20CSS-black?style=for-the-badge&logo=tailwindcss&logoColor=%2306B6D4" height="40">
  <img src="https://img.shields.io/badge/Vite-black?style=for-the-badge&logo=vite&logoColor=%23646CFF" height="40">
  <img src="https://img.shields.io/badge/Motion-black?style=for-the-badge&logo=framer&logoColor=blue" height="40">
  <img src="https://img.shields.io/badge/NPM-black?style=for-the-badge&logo=npm&logoColor=%23CB3837" height="40">
  <img src="https://img.shields.io/badge/Git-black?style=for-the-badge&logo=git&logoColor=%23F05032" height="40">
  <img src="https://img.shields.io/badge/JavaScript-black?style=for-the-badge&logo=javascript&logoColor=%23FFFF00" height="40">
  <img src="https://img.shields.io/badge/HTML-black?style=for-the-badge&logo=html5&logoColor=%23e34c26" height="40">
  <img src="https://img.shields.io/badge/CSS-black?style=for-the-badge&logo=css&logoColor=rebeccapurple" height="40">
</div>

## ⚙️ Features

✅ The website includes a contact form that allows users to send a message directly to the site owner's email. This functionality is implemented without a custom backend using the Web3Forms service.<br>
✅ There is a slider showcasing completed real estate projects.<br>
✅ On smaller screens, the main menu is hidden and replaced with a hamburger icon that toggles the menu visibility.

## 🚀 Installation & Setup

### 1. Clone the repository:

```bash
git clone https://github.com/ivan-chukhalo/get-hata.git
cd get-hata
```

### 2. Install dependencies:

```bash
npm install
```

### 3. Obtain API key and create an environment variable:

- Create an access key on [Web3Forms](https://web3forms.com/) to receive user's fill out form to your email. Get the key without registraion and sms (Ukrainial local meme 😁).
- In the project root, create a file named `.env`.
- In that file, add: `VITE_WEB3FORMS_KEY='YOUR_KEY'`, replacing `YOUR_KEY` with the one you get on [Web3Forms](https://web3forms.com/).

Save the file.

### 4. Run the app in development mode:

```bash
npm run dev
```

After that, the app will be available at [http://localhost:5173](http://localhost:5173).

### 5. Build for production:

```bash
npm run build
```

The compiled files will be located in the `dist/` directory.

## 📚 What I Learned

✅ How to create a responsive mobile menu that appears on small screens, while showing the regular navigation on larger screens.<br>
✅ Familiarity with the Motion animation library and its basic functionalities.<br>


## 🗂️ Project Structure

```
get-hata/
├── public/           # Favicon and SVG sprite
├── src/              # Application source code
│   ├── assets/       # Images
│   ├── components/   # Components
│   ├── App.jsx       # Root React component
│   ├── index.css     # Tailwind and Google Font import
│   ├── main.jsx      # Entry point
├── index.html        # Main HTML page
├── vite.config.js    # Vite configuration
├── package.json      # Dependencies and scripts
└── README.md         # Documentation
```

## 🧪 Testing

Automated tests are not implemented yet.
You can manually test the app via [this link](https://get-hata.vercel.app/) or by running it in development mode.

## 🙋‍♂️ Author

Developed by [Ivan Chukhalo](https://github.com/ivan-chukhalo).
