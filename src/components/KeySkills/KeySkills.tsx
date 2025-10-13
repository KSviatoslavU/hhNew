import styles from "./KeySkills.module.scss";
import { PillsInput, Pill, ActionIcon, Flex } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import { useState } from "react";
export default function KeySkills() {
  const [skills, setSkills] = useState<string[]>([
    "TypeScript",
    "React",
    "Redux",
  ]);

  const [inputValue, setInputValue] = useState("");

  const handleAddSkill = () => {
    if (!inputValue.trim()) {
      return;
    }
    if (!skills.includes(inputValue) && inputValue) {
      setSkills((prev) => [...prev, inputValue]);
      setInputValue("");
    }
  };

  const handleRemoveSkill = (skills: string) => {
    setSkills((prev) => prev.filter((skill) => skill !== skills));
  };
  return (
    <div className={styles.container}>
      <Flex align="flex-end" gap="xs">
        <PillsInput radius="md" label="Ключевые навыки" style={{ flex: 1 }}>
          <PillsInput.Field
            value={inputValue}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleAddSkill();
              }
            }}
            onChange={(e) => setInputValue(e.currentTarget.value)}
            placeholder="Навык"
          />
        </PillsInput>

        <ActionIcon
          onClick={handleAddSkill}
          variant="filled"
          color="blue"
          radius="md"
          style={{
            width: 34,
            height: 34,
            opacity: 0.5,
          }}
        >
          <IconPlus size={24} color="white" />
        </ActionIcon>
      </Flex>
      <Flex gap="xs" mt="sm" wrap="wrap">
        {skills.map((skill) => {
          return (
            <Pill
              key={skill}
              classNames={{ root: styles.root, remove: styles.remove }}
              withRemoveButton
              onRemove={() => handleRemoveSkill(skill)}
            >
              {skill}
            </Pill>
          );
        })}
      </Flex>
    </div>
  );
}
