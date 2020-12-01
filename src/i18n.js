import i18n from "i18next";
//import LanguageDetector from "i18next-browser-languagedetector";

i18n.init({
  // we init with resources
  resources: {
    en: {
      translations: {
        Drivers: "Drivers",
        "Add driver":
          "Add driver",
        Routes: "Routes",
        "Flexibility to use other packages": "Flexibility to use other packages",
        DesignatedRoutes: "Designated Routes",
          Profile: "Profile",
          Logout: "Logout",
          Login: "Login",
          Email: "Email",
          Password: "Password",
          "Confirm password": "Confirm password",
          Submit: "Submit",
          Register: "Register",
          "First name": "First name",
          "Last name": "Last name",
          Company: "Company",
          "Don't have an account?": "Don't have an account?",
          "Already have an account?": "Already have an account?",
                    Name: "Name",
          Experience: "Experience",
          "License type": "License type",
          "Car type": "Car type",
          "Car max load": "Car max load",
          "Average speed per hour": "Average speed per hour",
          "Pay for km": "Pay for km",
          "Health state": "Health state",
          Edit: "Edit",
          Delete: "Delete",
          "Add route": "Add route",
          "Designate current routes": "Designate current routes",
          Title: "Title",
          Priority: "Priority",
          "Load type": "Load type",
          "Load quantity": "Load quantity",
          "Start location": "Start Location",
          "End location": "End location",
          "Min experience": "Min experience",
          "Min health": "Min health",
          "Distance": "Distance",
          "Status": "Status",
          "Route id": "Route id",
          "Route title": "Route title",
          "Driver id": "Driver id",
          "Driver name": "Driver name",
          "Current location": "Current location",
          "Range priorities for the route": "Range priorities for the route",
          "First priority": "First priority",
          "Second priority": "Second priority",
          "Third priority": "Third priority",
          "Fourth priority": "Fourth priority",
          "Fifth priority": "Fifth priority",
          "Select language": "Select language",
          "In progress": "In progress",
          "Assign driver": "Assign driver",
      }
    },
    ukr: {
      translations: {
        Drivers: "Водії",
        "Add driver":
          "Додати водія",
          Routes: "Маршрути",
          DesignatedRoutes: "Назначені маршрути",
          Profile: "Профіль",
          Logout: "Вийти з системи",
          Login: "Логін",
          Email: "Електрона пошта",
          Password: "Пароль",
          "Confirm password": "Підтвердити пароль",
          Submit: "Продовжити",
          Register: "Зареєструватися",
          "First name": "Ім'я",
          "Last name": "Прізвище",
          Company: "Компанія",
          "Don't have an account?": "Не маєте акаунту?",
          "Already have an account?": "Вже маєте акаунт?",
          Name: "Ім'я",
          Experience: "Роки досвіду",
          "License type": "Тип посвідчення",
          "Car type": "Тип авто",
          "Car max load": "Макс. навантаження",
          "Average speed per hour": "Середня швидкість за год.",
          "Pay for km": "Плата за км",
          "Health state": "Показник здоров'я",
          Edit: "Редагувати",
          Delete: "Видалити",
          "Add route": "Додати маршрут",
          "Designate current routes": "Назначити водіїв на поточні маршрути",
          Title: "Назва",
          Priority: "Пріорітет",
          "Load type": "Тип перевезення",
          "Load quantity": "Кількість",
          "Start location": "Початкова локація",
          "End location": "Кінцева локація",
          "Min experience": "Мін. необхідний досвід",
          "Min health": "Мін. необхідний показник здоров'я",
          "Distance": "Відстань",
          "Status": "Статус",
          "Route id": "id маршрута",
          "Route title": "Назва маршруту",
          "Driver id": "id водія",
          "Driver name": "Ім'я водія",
          "Current location": "Поточна локація",
          "Range priorities for the route": "Проранжуйте приоритети для маршруту",
          "First priority": "Перший приорітет",
          "Second priority": "Другий приорітет",
          "Third priority": "Третій приорітет",
          "Fourth priority": "Четвертий приорітет",
          "Fifth priority": "П'ятий приорітет",
          "Select language": "Обрати мову",
          "In progress": "В процесі",
          "Assign driver": "Назначити водія",
      }
    },
  },
  fallbackLng: "en",
  debug: true,

  // have a common namespace used around the full app
  ns: ["translations"],
  defaultNS: "translations",

  keySeparator: false, // we use content as keys

  interpolation: {
    escapeValue: false, // not needed for react!!
    formatSeparator: ","
  },

  react: {
    wait: true
  }
});

export default i18n;