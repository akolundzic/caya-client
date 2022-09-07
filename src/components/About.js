import React from "react";
import Navbar from "./Navbar";

const About = () => {
  return (
    <div>
      <Navbar />
      <h3 className="text-3xl font-bold subtitle mb-4 ml-4">About</h3>
      <div className="about">
        <p className="about-text p-4">
          Jeder Mensch braucht andere Menschen, Einsamkeit verschlimmert nur das
          Leiden. Doch manchmal sind wir so verletzt, sodass das Vertrauen in
          andere verloren haben. Diese Webseite richtet speziell an Menschen,
          die unter PTDS aufgrund von sexualen Missbrauch leiden. Hier kannst
          gemeinsam mit anderen an Veranstaltungen teilnehmen oder selber welche
          kreieren.
          
          Du kannst hier auch mit anderen Chatten. Falls es aber ganz brenzlich
          wird, hast du hiere einen Link. Nur gemeinsam lassen sich Hürden
          überwinden.
        </p>
      </div>
    </div>
  );
};

export default About;
