export type Project = {
  number: string;
  name: string;
  subtitle: string;
  description: string;
  tags: Array<{ label: string; tone?: "tan" | "purple" | "green" }>;
  stack: string[];
  impact?: string;
  confidential?: boolean;
  cta?: { label: string; href: string };
};

export type SkillGroup = {
  title: string;
  skills: string[];
};
