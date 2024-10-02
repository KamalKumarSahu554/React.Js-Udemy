import React from "react";
import { EXAMPLES } from "../data";
import { useState } from "react";
import TabButtun from "./TabButton";
import Section from "./Section";
import Tabs from "./Tabs";

const Examples = () => {
  const [selectedTopic, setSelectedTopic] = useState();

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  let tabContent = <p>Please select a topic</p>;
  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <code>{EXAMPLES[selectedTopic].code}</code>
      </div>
    );
  }
  return (
    <Section id="examples" title="Examples">
      <Tabs
        // ButtonsContainer="menu"
        buttons={
          <>
            <TabButtun
              isSelected={selectedTopic === "components"}
              onClick={() => handleSelect("components")}>
              Components
            </TabButtun>
            <TabButtun
              isSelected={selectedTopic === "jsx"}
              onClick={() => handleSelect("jsx")}>
              JSX
            </TabButtun>
            <TabButtun
              isSelected={selectedTopic === "props"}
              onClick={() => handleSelect("props")}>
              Props
            </TabButtun>
            <TabButtun
              isSelected={selectedTopic === "state"}
              onClick={() => handleSelect("state")}>
              State
            </TabButtun>
          </>
        }>
        {tabContent}
      </Tabs>
    </Section>
  );
};

export default Examples;
