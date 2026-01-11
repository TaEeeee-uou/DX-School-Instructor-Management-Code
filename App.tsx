
import React, { useState } from 'react';
import { View } from './types';
import LoginView from './views/LoginView';
import HomeView from './views/HomeView';
import CourseSelectionView from './views/CourseSelectionView';
import StudentListView from './views/StudentListView';
import StudentRegistrationView from './views/StudentRegistrationView';
import SkillCheckSheetView from './views/SkillCheckSheetView';
import CheckResultConfirmView from './views/CheckResultConfirmView';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>(View.LOGIN);

  const navigate = (view: View) => setCurrentView(view);

  const renderView = () => {
    switch (currentView) {
      case View.LOGIN:
        return <LoginView onLogin={() => navigate(View.HOME)} />;
      case View.HOME:
        return <HomeView onNavigate={navigate} />;
      case View.COURSE_SELECTION:
        return <CourseSelectionView onBack={() => navigate(View.HOME)} onSelectSubject={() => navigate(View.STUDENT_LIST)} />;
      case View.STUDENT_LIST:
        return <StudentListView onBack={() => navigate(View.COURSE_SELECTION)} onSelectStudent={() => navigate(View.SKILL_CHECK_SHEET)} />;
      case View.STUDENT_REGISTRATION:
        return <StudentRegistrationView onBack={() => navigate(View.STUDENT_LIST)} onRegister={() => navigate(View.STUDENT_LIST)} />;
      case View.SKILL_CHECK_SHEET:
        return <SkillCheckSheetView onBack={() => navigate(View.STUDENT_LIST)} onSave={() => navigate(View.CHECK_RESULT_CONFIRM)} />;
      case View.CHECK_RESULT_CONFIRM:
        return <CheckResultConfirmView onBack={() => navigate(View.SKILL_CHECK_SHEET)} onConfirm={() => navigate(View.HOME)} />;
      default:
        return <LoginView onLogin={() => navigate(View.HOME)} />;
    }
  };

  return (
    <div className="min-h-screen max-w-md mx-auto relative bg-background-light shadow-2xl overflow-hidden flex flex-col border-x border-pink-50">
      {renderView()}
    </div>
  );
};

export default App;
