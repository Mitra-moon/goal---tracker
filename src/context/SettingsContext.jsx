import { createContext, useContext, useEffect, useState } from "react";

const SettingsContext = createContext();

const translations = {
  en: {
    dashboard: "Dashboard",
    goals: "Goals",
    newGoal: "New Goal",
    categories: "Categories",
    archive: "Archive",
    settings: "Settings",

    activeGoals: "Active Goals",
    completedGoals: "Completed Goals",

    xp: "XP",
    streak: "Streak",
    completed: "Completed",

    noGoals: "No goals yet",
    search: "Search...",

    all: "All",
    active: "Active",
    paused: "Paused",

    createGoal: "Create Goal",
    title: "Title",
    target: "Target",
    category: "Category",
    notes: "Notes",
    startDate: "Start Date",
    endDate: "End Date",

    restore: "Restore",
    status: "Status",
    progress: "Progress",
    logs: "Logs",

    viewArchive: "View Archive",
    completion: "Completion",

    pause: "Pause",
    resume: "Resume",
    delete: "Delete",
    edit: "Edit",
    complete: "Complete"
  },

  fa: {
    dashboard: "داشبورد",
    goals: "اهداف",
    newGoal: "هدف جدید",
    categories: "دسته‌بندی‌ها",
    archive: "آرشیو",
    settings: "تنظیمات",

    activeGoals: "اهداف فعال",
    completedGoals: "اهداف تکمیل شده",

    xp: "امتیاز",
    streak: "روز متوالی",
    completed: "تکمیل شده",

    noGoals: "هدفی وجود ندارد",
    search: "جستجو...",

    all: "همه",
    active: "فعال",
    paused: "متوقف",

    createGoal: "ایجاد هدف",
    title: "عنوان",
    target: "هدف",
    category: "دسته‌بندی",
    notes: "یادداشت",
    startDate: "تاریخ شروع",
    endDate: "تاریخ پایان",

    restore: "بازگردانی",
    status: "وضعیت",
    progress: "پیشرفت",
    logs: "ثبت‌ها",

    viewArchive: "مشاهده آرشیو",
    completion: "درصد تکمیل",

    pause: "توقف",
    resume: "ادامه",
    delete: "حذف",
    edit: "ویرایش",
    complete: "تکمیل"
  }
};

export const SettingsProvider = ({ children }) => {
  const [lang, setLang] = useState("en");

  useEffect(() => {
    document.body.dir = lang === "fa" ? "rtl" : "ltr";
  }, [lang]);

  return (
    <SettingsContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </SettingsContext.Provider>
  );
};

export const useSettings = () => useContext(SettingsContext);