// Test data
const settings = {
  theme: "light",
  notifications: true,
  autoSave: false,
  language: "en"
};

// 1. Toggle theme between "light" and "dark"
settings.theme = settings.theme === "light" ? "dark" : "light";

// 2. Turn autoSave to true
settings.autoSave = true;

// 3. Remove the notifications setting
delete settings.notifications;

// 4. Freeze the settings object
Object.freeze(settings);

console.log("Final Settings:", settings);

// Trying to modify after freeze (will not change)
settings.language = "fr";   // This will fail silently in non-strict mode
console.log("After Attempted Modification:", settings);
