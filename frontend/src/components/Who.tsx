import { useState } from 'react';

const Who = () => {
  const [showBridesmaids, setShowBridesmaids] = useState(true);

  return (
    <>
      <div className="jumbotron" id="who">
        <div className="inner">
          <h1>Who</h1>
        </div>
      </div>
      <div className="container centered">
        <div className="toggle-buttons">
          <button
            className={`big ${showBridesmaids ? 'active' : ''}`}
            onClick={() => setShowBridesmaids(true)}
          >
            Bridesmaids
          </button>
          <button
            className={`big ${showBridesmaids ? '' : 'active'}`}
            onClick={() => setShowBridesmaids(() => false)}
          >
            Groomsmen
          </button>
        </div>
        {showBridesmaids ? (
          <>
            <div className="section">
              <div className="image">
                <img alt="Sharon" src="/src/assets/images/who/sharon.jpg" />
              </div>
              <div className="info left">
                <h2 className="title">Sharon</h2>
                <p className="subtitle"><em>Maid of Honor, Thither Shar</em></p>
                <p>
                  My favorite sister! I&apos;ve known Sharon all her life ;) She&apos;s one of the most creative and
                  talented people ever! She blows me away with her passion and skill in art and music (a JDL
                  Capt&apos;n!). She&apos;s got spunk and some hilarious, yet genius comebacks. She&apos;s got a heart
                  for God that I admire. I even turn to her for advice at times. Though she&apos;s soon to graduate high
                  school, I see her as the little chunky baby she was years ago. She&apos;ll always be my baby, even
                  though she&apos;s practically as tall as me. I think I&apo;m the luckiest sister ever. I&apos;ve got
                  the greatest sisters who double as best friends. I love you, thither!
                </p>
              </div>
            </div>
            <hr />
            <div className="section">
              <div className="image left">
                <img alt="Abigail" src="/src/assets/images/who/abigail.jpg" />
              </div>
              <div className="info right">
                <h2 className="title">Abigail</h2>
                <p className="subtitle"><em>Maid of Honor, Abby Thither</em></p>
                <p>
                  My favorite sister! Sharon got boring after awhile, so I&apo;m so glad Abby came along a few years
                  later. She sings so beautifully and is killer at violin. Oh, and have you seen her hair? She&apos;s
                  rocks these beautiful hairstyles! Abby&apos;s passion for the Lord is beyond her years. I love how
                  excited she gets when I come home from school. She&apos;ll run out of her room and to the garage
                  yelling &quot;Miiiiiiish!&quot; and give me a giant hug. Abby is my little baby, and she always will
                  be :) I can go on and on about how awesome my sisters are! They&apos;re the best sisters and best
                  friends I could ever ask for. Love you so much, thither!
                </p>
              </div>
              <div className="image right">
                <img alt="Abigail" src="/src/assets/images/who/abigail.jpg" />
              </div>
            </div>
            <hr />
            <div className="section">
              <div className="image">
                <img alt="Rebecca" src="/src/assets/images/who/rebecca.jpg" />
              </div>
              <div className="info left">
                <h2 className="title">Rebecca</h2>
                <p className="subtitle"><em>Jelly</em></p>
                <p>
                  Rebecca and I have been friends for such a long time! She is Godly, beautiful, and one of the kindest
                  souls I&apos;ve ever met. We&apos;ve gotten even closer since we went to UTD together. I am extremely
                  grateful for our many sleepovers and study sessions. Even though school kept us busy, we met up almost
                  every week to study the book of Proverbs and encourage each other in prayer. Honestly, I&apos;ve
                  missed her like crazy this last year with us in different schools, but luckily she is coming to my
                  medical school next year! Yippee!
                </p>
              </div>
            </div>
            <hr />
            <div className="section">
              <div className="image left">
                <img alt="Elizabeth" src="/src/assets/images/who/elizabeth.jpg" />
              </div>
              <div className="info right">
                <h2 className="title">Elizabeth</h2>
                <p className="subtitle"><em>Little Sis</em></p>
                <p>
                  Elizabeth (Samuel&apos;s niece) is already family. She has popped up in several of our family pictures
                  :) I&apo;m so glad that she is now officially our little sister. I have tons of memories of Elizabeth
                  as a little baby! She was and is still a cutie! Elizabeth always had a wish in the back of her head
                  that her Sammy and Mishal chechee got together. Looks like dreams come true! She&apos;s growing up to
                  be a beautiful girl, and I&apo;m so happy to have her as family now.
                </p>
              </div>
              <div className="image right">
                <img alt="Elizabeth" src="/src/assets/images/who/elizabeth.jpg" />
              </div>
            </div>
            <hr />
            <div className="section">
              <div className="image">
                <img alt="Amy" src="/src/assets/images/who/amy.jpg" />
              </div>
              <div className="info left">
                <h2 className="title">Amy</h2>
                <p className="subtitle"><em>James</em></p>
                <p>
                  My friendship with Amy began back in middle school. Thinking back, there are so many memories &mdash;
                  all the teachers we (I) talked back to, notes we used to pass, and chats we had. Amy is beautiful both
                  inside and out. She&apos;s got a passion for God and His people. Her kind and caring heart towards
                  others is a trait I admire. We&apos;ve been there for each other through our many ups and downs.
                  I&apo;m so excited that she, too, is on the journey towards marriage soon. I cherish our friendship
                  beyond what words can say.
                </p>
              </div>
            </div>
            <hr />
            <div className="section">
              <div className="image left">
                <img alt="Megan" src="/src/assets/images/who/megan.jpg" />
              </div>
              <div className="info right">
                <h2 className="title">Megan</h2>
                <p className="subtitle"><em>Meggy Weggy</em></p>
                <p>
                  Megan and I became friends back in middle school during our awkward puberty stage. I&apo;m pretty sure
                  that&apos;s why we became friends &mdash; we were so weird and weird-looking that no one else wanted
                  to befriend us! Throughout the years, I&apos;ve had a ton of fun stealing her family&apos;s food,
                  blasting our music while we drive, and just doing some crazy, goofy stuff. On the few occasions we are
                  serious, I love that I can count on her. She&apos;s such a beautiful and talented woman, and I&apo;m
                  glad she&apos;s been a part of my life for all these years.
                </p>
              </div>
              <div className="image right">
                <img alt="Megan" src="/src/assets/images/who/megan.jpg" />
              </div>
            </div>
            <hr />
            <div className="section">
              <div className="image">
                <img alt="Stacey" src="/src/assets/images/who/stacey.jpg" />
              </div>
              <div className="info left">
                <h2 className="title">Stacey</h2>
                <p className="subtitle"><em>Bacon</em></p>
                <p>
                  I really didn&apos;t make many close friends in college, but there was something so special about
                  Stacey. We started talking one summer as coworkers at the residence halls, and we just clicked! She is
                  a beautiful, talented, loving person with a heart of gold and such warmth to her personality. We are
                  both not the biggest fans of mushy-gushy feelings, so I&apo;m sure she&apos;s laughing right now...
                  and crying (we&apos;re both softies inside)! I love how we encourage each other through prayer and
                  Bible verses. Even though our friendship started recently, I feel like I&apos;ve known her forever.
                </p>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="section">
              <div className="image left">
                <img alt="Sibi" src="/src/assets/images/who/sibi.jpg" />
              </div>
              <div className="info right">
                <h2 className="title">Sibi</h2>
                <p className="subtitle"><em>Best Man, T2</em></p>
                <p>
                  I have known Sibi my whole life, or at least for as long as I can remember. We met at church, started
                  talking, and somehow developed a strong bond and friendship. As kids we played sports, video games,
                  and talked about girls. Now as adults, we play sports, video games, and still talk about girls. (The
                  only difference now is that I only talk about Mishal). I know I can turn to him when needed, whether
                  it be spiritually or just something I need to get off my chest. His work ethic, drive, and love for
                  God continually encourage me, and I am honored that he will be standing with me on the big day..
                </p>
              </div>
              <div className="image right">
                <img alt="Sibi" src="/src/assets/images/who/sibi.jpg" />
              </div>
            </div>
            <hr />
            <div className="section">
              <div className="image">
                <img alt="Robin" src="/src/assets/images/who/robin.jpg" />
              </div>
              <div className="info left">
                <h2 className="title">Robin</h2>
                <p className="subtitle"><em>Bob</em></p>
                <p>
                  Robin (Mishal&apos;s cousin) has been a good friend of mine, and that friendship has grown over the
                  last few years. If you ever need someone to make you laugh, or make fun of you, he&apos;s the guy to
                  talk to. I&apos;ve enjoyed knowing him and being able to talk to him about anything. He can act tough
                  on the outside, but I know him as the teddy bear he is &mdash; caring and always helpful. When I first
                  told him that I wanted to marry Mishal, he was happy and encouraging. It makes me happy to know he
                  doubles as both friend and family now..
                </p>
              </div>
            </div>
            <hr />
            <div className="section">
              <div className="image left">
                <img alt="Sanish" src="/src/assets/images/who/sanish.jpg" />
              </div>
              <div className="info right">
                <h2 className="title">Sanish</h2>
                <p className="subtitle"><em>Jacob</em></p>
                <p>
                  Sanish is my cousin and good friend. We grew up together and went to the same daycare and elementary
                  school. I kept him out of trouble, and he got me into it, but I enjoyed it all. I&apo;m not sure what
                  I would have done in my earlier years or who I would have hung out with if it wasn&apos;t for Sanish.
                  Sleepovers at his house were always fun and still are. If you are bored and need a house to hang out
                  in, it&apos;s his &mdash; with everything from a dog to a baby, movies, and videogames. We continue to
                  grow closer together, and I know I can count on him for anything. I am so glad to share my wedding day
                  with him..
                </p>
              </div>
              <div className="image right">
                <img alt="Sanish" src="/src/assets/images/who/sanish.jpg" />
              </div>
            </div>
            <hr />
            <div className="section">
              <div className="image">
                <img alt="Jevin" src="/src/assets/images/who/jevin.jpg" />
              </div>
              <div className="info left">
                <h2 className="title">Jevin</h2>
                <p className="subtitle"><em>Jevin</em></p>
                <p>
                  Jevin is also my cousin but more like a younger brother. What stands out about Jevin is his loving and
                  caring heart. He also knows how to have fun, and I am grateful he asks me to tag along with him.
                  Growing up, Jevin came along and completed the cousin trio (with Sanish). We played a ton of silly
                  games together, including games in the bath tub (when we were like 5). If it was just me and Sanish,
                  it would have been weird. Jevin continues to amaze me with his passion for God and worship. I am
                  blessed to have him in my life and on stage with me..
                </p>
              </div>
            </div>
            <hr />
            <div className="section">
              <div className="image left">
                <img alt="Dennis M." src="/src/assets/images/who/dennis-m.jpg" />
              </div>
              <div className="info right">
                <h2 className="title">Dennis M.</h2>
                <p className="subtitle"><em>Denny</em></p>
                <p>
                  Dennis is like a brother to me, a basketball brother. At times he reminds me of myself; he is quiet
                  but has a fierceness inside him that can be released when needed (just ask the trash can at the rec
                  center we played a tournament in and lost). If I ever played any sport with him, I always wanted to be
                  on his team (only because I wouldn&apos;t have to guard him then). The connection and friendship I
                  have with Dennis is unique. I say that because I really cannot describe it. I just know that he is
                  someone I will always be really good friends with, and he will always be a big part of my life..
                </p>
              </div>
              <div className="image right">
                <img alt="Dennis M." src="/src/assets/images/who/dennis-m.jpg" />
              </div>
            </div>
            <hr />
            <div className="section">
              <div className="image">
                <img alt="Prince" src="/src/assets/images/who/prince.jpg" />
              </div>
              <div className="info left">
                <h2 className="title">Prince</h2>
                <p className="subtitle"><em>Catfish Billy</em></p>
                <p>
                  I met Prince in church and have gotten closer to him over the years. He is probably the best looking
                  out of all of us, but he won&apos;t admit it. My relationship with Prince is basically like the
                  relationship between Jimmy Fallon and Justin Timberlake: when we hang out, we have fun. I know I can
                  always confide in him and that he is always willing to listen to anything I need to say. His caring
                  heart amazes me at times, and his kindness towards others is a trait I want to mimic. I am grateful he
                  will be with me throughout the big day and am thankful to have him as a friend..
                </p>
              </div>
            </div>
            <hr />
            <div className="section">
              <div className="image left">
                <img alt="Dennis R." src="/src/assets/images/who/dennis-r.jpg" />
              </div>
              <div className="info right">
                <h2 className="title">Dennis R.</h2>
                <p className="subtitle"><em>DRaj (KB)</em></p>
                <p>
                  Dennis is like a little brother to me, and we have gotten close over the last few years. Our
                  relationship stems from our love for sports. It has grown into more than that now. Being able to see
                  him grow over the years has been fun. Dennis has been the type of friend who I can talk to about
                  anything. He keeps me up to date with anything important that happens in the sports world, which I
                  actually really appreciate. If I ever needed a travel buddy or wanted to get a workout in, he&apos;s
                  the guy. I am grateful for his friendship and happy he will be there on my wedding day..
                </p>
              </div>
              <div className="image right">
                <img alt="Dennis R." src="/src/assets/images/who/dennis-r.jpg" />
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Who;
