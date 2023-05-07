import React from "react";
import PersonCard from "../../components/PersonCard/PersonCard";
import persons from "../../common/persons.json";
import "./AboutUs.css";

export default function AboutUs() {
  return (
    <div className="about-us-container">
      {persons.map((person) => {
        return (
          <PersonCard
            key={person.id}
            imageURL={person.imageURL}
            fullname={person.fullname}
            location={person.location}
            description={person.description}
          />
        );
      })}
    </div>
  );
}
