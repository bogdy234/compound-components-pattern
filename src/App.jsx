import React from "react";
import Accordion from "./components/Accordion";
import faqData from "./data";

export default function App() {
  return (
    <Accordion>
      <Accordion.Title>React FAQ</Accordion.Title>
      <Accordion.Wrapper>
        {faqData.map((item) => (
          <Accordion.Item key={item.id}>
            <Accordion.ItemHeader>{item.header}</Accordion.ItemHeader>
            <Accordion.Body>{item.body}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion.Wrapper>
    </Accordion>
  );
}