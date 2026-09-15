export type Project = {
  number: string;
  name: string;
  subtitle: string;
  description: string;
  summary?: string;
  image?: string;
  tags: Array<{ label: string; tone?: "tan" | "purple" | "green" }>;
  stack: string[];
  impact?: string;
  confidential?: boolean;
  cta?: { label: string; href: string };
  kind: string;
  status?: "content-pending";
};

export type SkillGroup = {
  title: string;
  skills: string[];
};
