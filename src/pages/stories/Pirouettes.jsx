import React from "react";
import { useNavigate } from "react-router-dom";

export const Pirouettes = () => {
  const navigate = useNavigate();

  const navigateToShortFiction = () => {
    navigate("/shortFiction");
  };

  return (
    <div>
      <h2>Pirouettes</h2>
      <h5>By Julian Faustini</h5>
      <button onClick={navigateToShortFiction}>BACK</button>
      <p className="shortPiece">
        I pirouette naked in front of the bedroom mirror from time to time. My
        husband, Bob, when home, always comes to me as I twirl. He grabs me
        mid-air in his robust arms, presses his woolly chest hair against my
        back, unzips his pants, and does me. In the mirror, I see his mouth
        O-ing. I don’t, but he likes to spank me. I’m forty-four, and my body
        hasn’t changed over the last twenty years. I don’t have any of that
        orange-peel thing on my thighs. Not a roll of abundance on my belly. Bob
        calls me Pear Preserve sometimes. I’ve never had a child, that’s the
        thing, and I swim and swim and swim every single day. That is what I
        look at in the mirror: I look at myself unchanged. Every day at 5:50 am,
        I slip into my swimsuit. The first thing I do is smell the water. I
        should hate chlorine. It makes my hair dry. Bob always says my curls
        don’t look good anymore. But I love that smell of clean. It makes me
        think of movement. Energy. Flawlessness. Bob used to get into the water,
        too. He did it only to come out with chlorine on his skin. I was tired
        of making love to him only for the purpose of trying to have a child.
        But he put my nose to his neck because he believed the smell got me all
        for it again. He then kept trying a little longer. Poor Bob. I couldn’t
        go swimming before office hours today. At 4 pm, when I did go, five
        million school kids had already taken over the swimming pool. I didn’t
        smell chlorine but their piss. There was nothing I didn’t hate about
        them, goddammit, and I wasn’t going to let the monsters deform my body.
        I got into the lane that had the least of them. I did some front crawls
        and warmed up arms and legs. I daydreamed about drowning a snotty one
        (he hit my elbow with his) and getting away with it, while I alternated
        breaststrokes and backstrokes. I soon grew tired. Too much running
        around the office. Then the butterfly stroke killed me. I got out of the
        water and noticed the empty jacuzzi. I found the holes where the
        pressure spurted bubbles straight to my clitoris. I sat and closed my
        eyes. Bob and I were sitting in the same jacuzzi when he told me he was
        infertile. Poor Bob. He was terrified I’d leave him. Anyway, I made
        myself comfortable on the seat, and the bubbles were about to make me
        come. But before I did, I opened my eyes, and ten million kids rushed
        into the jacuzzi. They jumped around, goddammit, shouting and stumbling
        over my legs and stomping on my feet. I did a 7-second inhale; a
        4-second hold; a 7-second exhale. Useless. I lost it. I yelled and told
        them kids weren’t allowed in the jacuzzi. I sent them away, relaxed for
        a while, and then came, the bubbles pleasing me from underneath. Once
        home, I said Bob, we got lucky having not had any. I pirouetted naked
        before the bedroom mirror until he caught me mid-air.
      </p>
    </div>
  );
};
