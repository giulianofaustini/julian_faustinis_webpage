

import { useNavigate } from "react-router-dom";

export const HouseAndGarden = () => {
  const navigate = useNavigate();

  const navigateToShortFiction = () => {
    navigate("/shortFiction");
  };

  return (
    <div>
      <h2>House and Garden</h2>
      <h5> <em>By Julian Faustini</em></h5>
      <button onClick={navigateToShortFiction}>BACK</button>
      <p className="shortPiece">
        Patches of yellowed grass cover Martha’s backyard. The summer drought
        might finally wither the bonsai tree she doesn’t have the heart to cut
        down. She waits for the 10-o’clock sun to rise above the red wooden
        walls of her house. From the kitchen window, she watches a shaft of
        light on the apex of shadowy lilac trees as it slowly descends,
        unveiling their purple flowers, dusted foliage, and thin trunks. The
        coffee in her mug is almost cold now. She dabs her forehead with some
        paper towels and her lower back, too, where the dark-blue t-shirt is
        damp. Coffee makes her heart beat faster, but she swallows some more,
        bitter and black, and walks into the garden from the back door. Martha’s
        hand hurts a little as she spins the faucet handle to load a 10-liter
        watering can. Mat’s presence still haunts her; his vibrant voice echoes
        in her ears: The more water, the less refills you need to cover the
        whole garden. So, she fills it to the brink, yet her weak arms cannot
        carry its weight. She pours some water out onto her splayed toes and
        bared ankles, and the blades of grass flatten for a moment but bounce
        back upright again. She lifts the can and walks on the flat river-stone
        path to reach the pots. She’s fully awake; it’s not the caffeine, but
        the refreshing sensation that swells up from her feet to her knees. It’s
        the first summer she gardens alone. Twelve large pots are lined up on a
        low, long bench along the cedar-boarded fence. She proceeds from left to
        right, so she never leaves out any of them. She wets the burgundy
        dahlias, passionate like the heart of a just-married woman; the
        sweet-scented white jasmine; the azaleas, whose red flowers never live
        as long as Martha wishes them to. The bonsai tree comes next. An aged
        red pine. Its needles are yellow-green, the ground dry like desert sand.
        This drought will do it, she thinks. She moves on to water the yellow
        angel’s trumpets, lively and intoxicating, and as she does, Martha takes
        in air and bits of their solace. An orange-breasted robin lands on the
        top of the fence. It chirps as if to remind her that Mat poured an
        abundant liter to his bonsai and misted it until droplets tipped off the
        foliage and down to the ground again. Martha waves her hand to scare the
        bird away and keeps on watering the large hibiscus—her favorite. She
        feels sorry now. Two withered flowers lost their rosy color. She plucks
        them off their stem and barely holds back her tears. The bonsai is the
        only thing she has left of Mat. She can still see him at times, wiring
        and pruning its branches, or trimming fresh and resinous candles. He
        spent hours alone before the tree, seeking an aesthetic ideal to
        reproduce a contagious beauty. She used to photograph his serious
        expression from the kitchen, the dedication in his eyes. It’s not that
        she’s happy about not having any of his pictures to look at anymore. But
        she needs her memories of him to wane with the end of the summer. A
        yellow ladybug climbs on an elongated leaf of the magnolia, while Martha
        empties the can into its pot. Mat had a lot of water left at this point,
        she thinks, when a fresh scent of honey surprises her. She inhales. Air
        in. Air out. But she knows the smell of only one man’s skin could bring
        her senses to life. She reaches the faucet, spins the handle, and the
        water falls to fill the watering can. Mat’s side of the bedroom closet
        is now filled with bed sheets, and blankets, and bathroom towels. She
        misses the smell of his clothes, and the smell of his skin before the
        chemo changed his scent, and the smell of coffee on his breath before
        his lungs collapsed. She wishes she had not gotten rid of his things. If
        only I could sink my nose in his gardening t-shirt once again, she
        thinks. It had a blue butterfly on the back. Martha waters the colorless
        peonies; the meaningless roses; the next pot; the next pot; the next one
        again. She walks back to the bonsai tree. She pours water in it. And
        tears.
      </p>
    </div>
  );
};
