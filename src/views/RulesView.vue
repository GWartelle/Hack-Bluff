<script setup></script>

<template>
  <div
    class="relative flex flex-col text-left text-white bg-neutral-900 p-8 md:p-10 my-10 mx-5 md:mx-10 border-1 border border-white shadow-2xl rounded-3xl min-h-screen max-w-4xl"
  >
    <!-- Header -->
    <header
      class="flex flex-col md:flex-row gap-8 text-white justify-between items-start mb-10"
    >
      <h1
        class="font-extrabold text-5xl bg-gradient-to-r from-white to-indigo-600 text-transparent bg-clip-text text-center"
      >
        RULES
      </h1>
      <div
        class="bg-indigo-600 rounded-3xl flex flex-col text-center py-2 px-8"
      >
        <h3 class="text-3xl font-semibold">4 - 7</h3>
        <span class="text-xl">players</span>
        <span class="text-xs text-indigo-950"> including Game Master </span>
      </div>
    </header>

    <!-- Concept Section -->
    <section class="flex flex-col gap-4 mb-10">
      <h2
        class="text-4xl font-semibold underline decoration-indigo-600 decoration-8"
      >
        Concept
      </h2>
      <p>
        In <strong>Hack & Bluff</strong>, each player is given a card with an
        associated word and receives a secret identity.
      </p>
      <span class="flex gap-3">
        <img src="@/assets/star-vector.svg" alt="star vector" />
        <p>
          The Game Master: He's elected among the players. He drives the game.
        </p>
      </span>
      <span class="flex gap-3">
        <img src="@/assets/plus-vector.svg" alt="plus vector" width="16px" />
        <p>Gamers: They share the same word.</p>
      </span>
      <span class="flex gap-3">
        <img src="@/assets/cross-vector.svg" alt="cross vector" />
        <p>The Hacker: He has a slightly different, but related word.</p>
      </span>
      <p>The objectives differ based on the role:</p>
      <div class="flex items-center gap-8">
        <img
          src="@/assets/return-vector.svg"
          alt="return vector"
          width="40px"
        />
        <ul class="flex flex-col gap-1">
          <li>Gamers must identify and eliminate the hacker.</li>
          <li>
            The Hacker must blend in with the gamers and avoid being discovered.
          </li>
          <li>
            The Game Master has to distribute the roles and guide the gameplay.
          </li>
        </ul>
      </div>
    </section>

    <!-- Steps -->
    <!-- Preparation -->
    <section class="flex flex-col gap-10 mb-10">
      <h2
        class="text-4xl font-semibold underline decoration-indigo-600 decoration-8"
      >
        Steps
      </h2>
      <section class="flex flex-col gap-5">
        <h3 class="text-3xl font-semibold text-indigo-600">
          Gameplay (Game Master Directive)
        </h3>
        <div>
          <h4 class="text-2xl font-semibold">Preparation</h4>
          <ul>
            <div class="flex items-center gap-2">
              <img
                src="@/assets/arrow-vector.svg"
                alt="arrow vector"
                width="24px"
              />
              <li>
                Choose a pocket and privately distribute 1 card to each player
                and choose who starts.
              </li>
            </div>
            <div class="flex items-center gap-2">
              <img
                src="@/assets/arrow-vector.svg"
                alt="arrow vector"
                width="24px"
              />
              <li>Make sure there is one Hacker among the players.</li>
            </div>
          </ul>
        </div>

        <!-- Speaking turns -->
        <div>
          <h4 class="text-2xl font-semibold">Speaking Turns</h4>
          <ul>
            <div class="flex items-start gap-2">
              <img
                src="@/assets/arrow-vector.svg"
                alt="arrow vector"
                width="24px"
                class="lg:pt-1 pt-8"
              />
              <li>
                Ask each player to give one word related to their card’s word
                without revealing it.
                <span class="flex gap-3">
                  <img
                    src="@/assets/splash-vector.svg"
                    alt="splash vector"
                    width="16px"
                  />
                  <p>
                    Example: If the word is <em>Algorithm</em>, a player might
                    say <em>"Maths"</em>.
                  </p>
                </span>
              </li>
            </div>
            <div class="flex items-center gap-2">
              <img
                src="@/assets/arrow-vector.svg"
                alt="arrow vector"
                width="24px"
              />
              <li>
                Have each player, in turn and in a clockwise direction, give a
                word related to their card.
              </li>
            </div>
          </ul>
        </div>

        <!-- Discussions and Voting -->
        <div>
          <h4 class="text-2xl font-semibold">Discussions and Deductions</h4>
          <ul>
            <div class="flex items-center gap-2">
              <img
                src="@/assets/arrow-vector.svg"
                alt="arrow vector"
                width="24px"
              />
              <li>After all players have spoken, initiate group discussion.</li>
            </div>
            <div class="flex items-center gap-2">
              <img
                src="@/assets/arrow-vector.svg"
                alt="arrow vector"
                width="24px"
              />
              <li>Ensure fair participation by all players.</li>
            </div>
          </ul>
        </div>

        <div>
          <h4 class="text-2xl font-semibold">Voting</h4>
          <ul>
            <div class="flex items-center gap-2">
              <img
                src="@/assets/arrow-vector.svg"
                alt="arrow vector"
                width="24px"
              />
              <li>Announce the start of voting after the discussion.</li>
            </div>
            <div class="flex items-center gap-2">
              <img
                src="@/assets/arrow-vector.svg"
                alt="arrow vector"
                width="24px"
              />
              <li>
                Facilitate the process by having players vote simultaneously to
                avoid influencing others.
              </li>
            </div>
          </ul>
        </div>

        <!-- Elimination Section -->
        <div>
          <h4 class="text-2xl font-semibold">Elimination</h4>
          <ul>
            <div class="flex items-center gap-2">
              <img
                src="@/assets/arrow-vector.svg"
                alt="arrow vector"
                width="24px"
              />
              <li>Reveal the eliminated player’s role after voting.</li>
            </div>
            <div class="flex items-center gap-2">
              <img
                src="@/assets/arrow-vector.svg"
                alt="arrow vector"
                width="24px"
              />
              <li>If the Hacker is eliminated, the Gamers win.</li>
            </div>
            <div class="flex items-center gap-2">
              <img
                src="@/assets/arrow-vector.svg"
                alt="arrow vector"
                width="24px"
              />
              <li>
                If the vote fails to eliminate the hacker, proceed to the next
                round.
              </li>
            </div>
          </ul>
        </div>
      </section>

      <!-- Conclusion -->
      <section class="z-10">
        <h3 class="text-3xl font-semibold text-indigo-600 mb-5">
          Ending the Game
        </h3>
        <p>The game concludes when:</p>
        <ul>
          <div class="flex items-center gap-2">
            <img
              src="@/assets/arrow-vector.svg"
              alt="arrow vector"
              width="24px"
            />
            <li>The Hacker is successfully eliminated (Gamers win).</li>
          </div>
          <div class="flex items-center gap-2">
            <img
              src="@/assets/arrow-vector.svg"
              alt="arrow vector"
              width="24px"
            />
            <li>Only one Gamer and the Hacker remain (Hacker wins).</li>
          </div>
        </ul>
      </section>
    </section>

    <!-- Special Settings -->
    <section
      class="flex flex-col z-10 md:flex-row gap-8 justify-between items-center"
    >
      <div
        class="bg-indigo-600 rounded-3xl flex flex-col text-center gap-2 py-2 px-5"
      >
        <h3 class="text-2xl font-semibold">Special Settings</h3>
        <p>Use the spinning wheel tool for randomized challenges !</p>
        <p class="text-xs">
          This special setting can be added starting in the second round.
        </p>
      </div>
      <RouterLink to="/wheel">
        <button class="wheel-btn btn btn-lg text-2xl border-none">Wheel</button>
      </RouterLink>
    </section>

    <!-- Barckground logo -->
    <img
      src="@/assets/big-logo-vector.svg"
      alt="Background decoration"
      class="absolute bottom-5 right-0 w-96 pointer-events-none"
    />
  </div>

  <!-- Back home button -->
  <RouterLink
    to="/"
    class="back-btn btn btn-lg border-none fixed right-5 bottom-10 group"
  >
    <img
      src="@/assets/go-back.svg"
      alt="Go back arrow"
      class="w-6 h-6 transition duration-300 ease-in-out group-hover:invert"
    />
  </RouterLink>
</template>

<style scoped>
.wheel-btn {
  color: var(--color-primary);
  background-color: white;
}

.wheel-btn:hover {
  color: white;
  background-color: var(--color-primary);
}

.back-btn {
  background-color: var(--color-primary);
}

.back-btn:hover {
  background-color: white;
}
</style>
