import { createContext, useState } from "react";
import proptypes from "prop-types";

export const TagsContext = createContext();

export const TagsProvider = ({ children }) => {
  const [tags, setTags] = useState({
    "Programming Languages": [
      "JavaScript",
      "Python",
      "Java",
      "C++",
      "C#",
      "Ruby",
      "Go",
      "Rust",
      "Swift",
      "Kotlin",
      "TypeScript",
      "PHP",
      "Scala",
      "R",
      "Shell",
      "Perl",
    ],
    "Frameworks/Libraries": [
      "React",
      "Angular",
      "Vue",
      "Django",
      "Flask",
      "Spring",
      ".NET",
      "Laravel",
      "Rails",
      "Express",
      "Node.js",
      "Bootstrap",
      "Material-UI",
    ],
    Databases: [
      "SQL",
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Oracle",
      "SQLite",
      "DynamoDB",
      "Cassandra",
    ],
    DevOps: [
      "Docker",
      "Kubernetes",
      "Jenkins",
      "AWS",
      "Azure",
      "GCP",
      "Ansible",
      "Terraform",
      "CI/CD",
    ],
    Testing: ["Jest", "Mocha", "Jasmine", "Selenium", "JUnit", "PyTest"],
    "Version Control": ["Git", "GitHub", "Bitbucket", "GitLab"],
    "Mobile Development": [
      "Android",
      "iOS",
      "React Native",
      "Flutter",
      "Xamarin",
    ],
    "Web Development": ["HTML", "CSS", "JavaScript", "TypeScript", "Figma"],
    "Data Science": [
      "Machine Learning",
      "Deep Learning",
      "AI",
      "Tensorflow",
      "PyTorch",
      "Pandas",
      "NumPy",
      "Figma",
    ],
    "Other Skills": [
      "Agile",
      "Scrum",
      "Kanban",
      "Project Management",
      "UX/UI Design",
    ],
  });
  const [selectedCategory, setSelectedCategory] = useState(
    Object.keys(tags)[0]
  );
  const [selectedTags, setSelectedTags] = useState([]);
  const reset = () => setSelectedTags([]);
  return (
    <TagsContext.Provider
      value={{
        tags,
        setTags,
        selectedTags,
        setSelectedTags,
        selectedCategory,
        setSelectedCategory,
        reset,
      }}
    >
      {children}
    </TagsContext.Provider>
  );
};
TagsProvider.propTypes = {
  children: proptypes.node,
};

export default TagsContext;
