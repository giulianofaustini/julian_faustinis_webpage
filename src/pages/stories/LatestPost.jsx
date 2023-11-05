
import { useNavigate } from "react-router-dom";

export const LatestPost = () => {
  const navigate = useNavigate();

  const navigateToShortFiction = () => {
    navigate("/shortFiction");
  };

  return (
    <div>
      <h2>Latest Post</h2>
      <h5> <em>By Julian Faustini</em></h5>
      <button onClick={navigateToShortFiction}>BACK</button>
      <p className="shortPiece" >
        Mark Johnson <br />3 December 01:41 <br />I can’t help but think about
        the old man I see every morning, struggling to walk across the road. At
        6:55 am, he waits for the light to turn green. The two sides of the
        intersection teem with broad-chested businessmen; slender students;
        trotting school kids. Car engines growl, their windshields reflect
        cumulus clouds. I stand behind the glass door of my shop. The 15-second
        timer goes off, and I say to my customers to wait for their coffee.
        “Where is he going?” some say. 15. 14. 13. I hold my breath: He may
        fall; he may not make it. He has a hunchback. He laces his fingers
        behind his back. A leather briefcase dangles down on his butt. 11. 10.
        9. The neck falls almost horizontal, his eyes are locked down on his
        feet. His pointed shoes never get too far from one another. The white
        scarf twirls in the wind, depending on where it blows. 7. 6. 5. We lose
        sight of him, when he meets the crowd. He seems to be a man who spent
        his life with his head bowed on a typewriter; on a microscope; on rare
        postal stamps. He remains alone on the zebra a little further down the
        middle. “He seems faster now!” we say. “He feels the pressure.” 3. 2. 1.
        Then the cars honk, driving toward him, and I get angry. This must come
        to an end. <br />
        <br />
        <em>54 likes 12 shares <br /> View 5 more comments </em>
        <br />
        <br />
        <strong> Mariah: </strong>I thought he was my grandpa. Then I remembered he’s dead
        <br /> <strong>Matthew:</strong> go home, man LOL old farts always causing a traffic jam{" "}
        <br />
        <strong>Layla:</strong> Have you talked to him?
        <br /> <br />
        Mark Johnson <br /> 4 December 09:41 <br /> Overnight, someone trashed
        the pedestrian traffic light that dictated the old man’s crossing. It
        was pouring out there, at 7am, when he arrived. He had an I❤ MY WIFE
        cap. The drenched coat that reached his knees made him even slower.
        “I’ll help,” I said. “We can wait,” the customers said. I stood beside
        him with an umbrella. He must have felt no more rain on his head; he
        turned his neck to look back. His eyes were gray. He breathed in and out
        with his open mouth. Then the crowd began to cross the road, and so we
        did. “Take your time,” I said. We were already behind all the
        businessmen and the students and the kids. “Where are you going?” I
        asked him twice. “Far from home,” he said. “Why?” “Time goes by too
        quickly. There, I feel I’m dying.” He picked up the pace. “I’ll start a
        petition to demand a 30-second timer for you,” I said. “That would give
        no meaning to my walk.” I froze. Cars honked at me.
        <br />
        <br /> <em> 93 likes 36 shares <br />
        View 10 more comments </em> <br />
        <br />
        <strong>Jeff:</strong> he’d have slapped your face, if he had had some strength <br />
        <strong>Julia:</strong> ahhhhh old men ❤ <br />
        <strong>Chris:</strong> you wanted to help, uh?
      </p>
    </div>
  );
};
