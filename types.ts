
export enum View {
  LOGIN = 'LOGIN',
  HOME = 'HOME',
  COURSE_SELECTION = 'COURSE_SELECTION',
  STUDENT_LIST = 'STUDENT_LIST',
  STUDENT_REGISTRATION = 'STUDENT_REGISTRATION',
  SKILL_CHECK_SHEET = 'SKILL_CHECK_SHEET',
  CHECK_RESULT_CONFIRM = 'CHECK_RESULT_CONFIRM'
}

export interface Student {
  id: string;
  name: string;
}

export interface SkillItem {
  id: string;
  name: string;
  status: 'UNACHIEVED' | 'PARTIAL' | 'ACHIEVED' | 'NONE';
}

export interface SkillSection {
  title: string;
  items: SkillItem[];
}
