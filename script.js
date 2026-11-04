/* ==========================================================================
   ITF 101 · CYBER DEFENSE SIMULATOR & DEVICE SECURITY SCORECARD (WEEKS 15 & 16)
   ========================================================================== */

const PHISH_DATA = {
  gmail: {
    title: "Case 1: Gmail Security Alert",
    spots: {
      g1: {
        label: "Alarmist Subject Line",
        clueText: "[URGENT] Final Notice: Your Google & Student Account Will Be Deleted in 30 Minutes!!",
        question: "Why is this email subject line a classic phishing red flag?",
        options: [
          "Manufactured urgency & panic to make you click before thinking critically",
          "Because Google never sends security emails to students",
          "Because email subject lines are not allowed to use brackets",
        ],
        correct: 0,
        explain: "Correct! Scammers use extreme urgency ('deleted in 30 minutes!!') to trigger panic so you act fast without checking the sender or URL.",
      },
      g2: {
        label: "Spoofed / Lookalike Sender Domain",
        clueText: "<security-alert@g00gle-account-verify.ru>",
        question: "Look closely at the sender email address. Why is it fake?",
        options: [
          "It uses 'security-alert' before the @ symbol",
          "It uses zeros ('g00gle') and a foreign '.ru' domain instead of '@google.com'",
          "Real companies only use Yahoo Mail addresses",
        ],
        correct: 1,
        explain: "Spot on! Attackers register lookalike domains (typosquatting like 'g00gle-account-verify.ru') hoping you only read the display name ('Google Security Support Team').",
      },
      g3: {
        label: "Unverified Bulk Mailer & No Encryption",
        clueText: "via mailer.unverified-bulk-host.net (⚠️ Not encrypted)",
        question: "What does the 'via mailer.unverified-bulk-host.net (Not encrypted)' warning tell you?",
        options: [
          "The email was sent through a shady third-party spam server without TLS encryption",
          "Your computer's Wi-Fi is disconnected",
          "The email is extra safe because it was scanned twice",
        ],
        correct: 0,
        explain: "Correct! Official Google messages come straight from google.com with verified DKIM/SPF signatures and TLS encryption.",
      },
      g4: {
        label: "Generic Greeting",
        clueText: "Dear Valued Customer User,",
        question: "Why is 'Dear Valued Customer User' suspicious in an official account alert?",
        options: [
          "It is too polite for an IT department",
          "Mass phishing campaigns don't know your real name, so they use generic greetings",
          "Google always addresses users by their home street address",
        ],
        correct: 1,
        explain: "Right! While some targeted spear-phishing emails include your name, mass phishing blasts use awkward generic greetings like 'Dear Valued Customer User'.",
      },
      g5: {
        label: "Coercive Threat of Permanent Loss",
        clueText: "If you do not verify within 30 minutes, all your school files will be erased forever!",
        question: "Which social engineering psychological trigger is being used in this paragraph?",
        options: [
          "Fear and intimidation (threatening permanent loss of your schoolwork)",
          "Greed and lottery rewards",
          "Curiosity about celebrity news",
        ],
        correct: 0,
        explain: "Exactly! Real providers do not suddenly wipe your entire Google Drive in 30 minutes over a single login attempt.",
      },
      g6: {
        label: "Mismatched / Malicious Link Destination",
        clueText: "Button links to: http://login.g00gle-verify-session.xyz/auth.php",
        question: "When you hover over the red button, the URL points to 'http://login.g00gle-verify-session.xyz'. What is wrong here?",
        options: [
          "Red buttons cannot open HTTPS websites",
          "It uses unencrypted HTTP and leads to a fake '.xyz' domain designed to harvest your password",
          "The URL ends in '.php' which means it is a picture file",
        ],
        correct: 1,
        explain: "Great catch! Always inspect the actual link destination before clicking. This link leads to a credential-harvesting page on a fake '.xyz' domain.",
      },
      g7: {
        label: "Double-Extension Malware Attachment (.pdf.exe)",
        clueText: "Account_Recovery_Tool_2026.pdf.exe (Windows Executable)",
        question: "Why is the attachment 'Account_Recovery_Tool_2026.pdf.exe' extremely dangerous?",
        options: [
          "It is a Trojan/Malware executable (.exe) disguised with '.pdf' in the name to trick you into running code",
          "PDF files cannot be larger than 1 MB",
          "It is an outdated 2026 font file",
        ],
        correct: 0,
        explain: "BINGO! In Windows, the real file type is the LAST extension ('.exe'). Running this file executes a Trojan or Ransomware on your PC!",
      },
    },
  },

  sms: {
    title: "Case 2: GCash & Bank SMS (Smishing)",
    spots: {
      s1: {
        label: "Random Personal Mobile Number (+63 994...)",
        clueText: "Sender: +63 994 817 2049 (Unknown 11-digit mobile number)",
        question: "Why is a '[GCash-Advisory]' coming from '+63 994 817 2049' a major red flag?",
        options: [
          "Legitimate e-wallets & banks never send advisories from random personal 11-digit prepaid numbers",
          "GCash only sends messages between 8:00 AM and 5:00 PM",
          "The phone battery is below 90%",
        ],
        correct: 0,
        explain: "Correct! Scammers use regular prepaid SIM cards and manually type '[GCash-Advisory]' at the start of the text to look official.",
      },
      s2: {
        label: "Fake Wallet Freeze & Penalty Threat",
        clueText: "ALERT! Your GCash wallet has been TEMPORARILY FROZEN... avoid a ₱5,000 penalty fee",
        question: "Why does the scammer claim your wallet is frozen with a ₱5,000 penalty?",
        options: [
          "Because BSP charges ₱5,000 every night at 9:38 PM",
          "To create fear and urgency so you click their fake link without checking your real GCash app first",
          "To test your phone's SMS inbox speed",
        ],
        correct: 1,
        explain: "Right! If you ever get an SMS like this, NEVER click the link — simply open your official GCash app directly to see that your account is fine.",
      },
      s3: {
        label: "Smishing Link in Text Message",
        clueText: "http://gcash-portal-ph-verify.top/login",
        question: "What is wrong with the link 'http://gcash-portal-ph-verify.top/login'?",
        options: [
          "GCash's real website is not '.top', it uses unencrypted HTTP, and banks/e-wallets no longer send clickable links in SMS!",
          "It is missing 'www' at the front",
          "Links only work on laptops, not smartphones",
        ],
        correct: 0,
        explain: "Exactly! Under BSP/NTC anti-smishing rules, legitimate Philippine banks and e-wallets DO NOT send clickable web links via SMS.",
      },
      s4: {
        label: "Requesting MPIN and 6-Digit OTP",
        clueText: "Enter your 4-digit MPIN and the 6-digit OTP code sent to your phone",
        question: "Why must you NEVER enter or share your MPIN and OTP on a link someone texted you?",
        options: [
          "The scammer is logging into your real GCash account in the background and needs your OTP to drain your balance",
          "Because OTP codes expire after 24 hours",
          "Because typing numbers uses extra mobile data",
        ],
        correct: 0,
        explain: "100% Correct! When you type your MPIN and OTP into a fake site, the attacker uses them in real-time to take over your wallet or authorize a transfer.",
      },
      s5: {
        label: "Too-Good-To-Be-True Lottery / Raffle Bait",
        clueText: "CONGRATULATIONS! Your mobile number won ₱50,000 Cash + iPhone 16 Pro!",
        question: "You never joined a raffle, yet this SMS says you won ₱50,000 + an iPhone 16 Pro. What threat is this?",
        options: [
          "Social engineering 'Fake Offer / Prize Scam' exploiting greed and excitement",
          "A computer worm spreading through Bluetooth",
          "An official telecom loyalty reward",
        ],
        correct: 0,
        explain: "Correct! You cannot win a raffle you never entered. Scammers dangle big prizes to hook victims.",
      },
      s6: {
        label: "Advance-Fee Fraud ('Processing Fee' Trap)",
        clueText: "Send a ₱1,500 processing & shipping fee via GCash within 1 hour",
        question: "Why does the scammer ask for ₱1,500 first before releasing the '₱50,000 prize'?",
        options: [
          "This is an Advance-Fee Scam — once you send ₱1,500, the scammer disappears and blocks you",
          "Courier companies require GCash transfers for raffle taxes",
          "To verify that your SIM card can send money",
        ],
        correct: 0,
        explain: "Spot on! Legitimate prizes never require you to send 'processing fees' to a personal e-wallet number first.",
      },
    },
  },

  web: {
    title: "Case 3: Fake Login Webpage",
    spots: {
      w1: {
        label: "Missing HTTPS / 'Not Secure (http://)'",
        clueText: "🔓 Not Secure | http://",
        question: "Look at the left side of the browser address bar. Why is '🔓 Not Secure | http://' a huge warning?",
        options: [
          "There is no SSL/TLS encryption — any password or card number typed here travels in plain text and the site is unverified",
          "It means your browser is in Dark Mode",
          "HTTP is faster and safer than HTTPS for banking",
        ],
        correct: 0,
        explain: "Correct! Real online banking portals ALWAYS use encrypted HTTPS. Never type passwords or financial data on an HTTP page.",
      },
      w2: {
        label: "Typosquatted Fake Bank Domain",
        clueText: "www.bd0-online-banking-ph.xyz",
        question: "Inspect the domain name 'www.bd0-online-banking-ph.xyz'. How can you tell it is a spoofed website?",
        options: [
          "It spells 'bd0' with a zero, adds hyphens, and uses a cheap '.xyz' domain instead of 'bdo.com.ph'",
          "Because it starts with 'www.'",
          "Because bank websites never use the word 'online'",
        ],
        correct: 0,
        explain: "Great eye! A Password Manager would also refuse to autofill your password here because 'bd0-online-banking-ph.xyz' does not match 'bdo.com.ph'!",
      },
      w3: {
        label: "High-Pressure Countdown Timer",
        clueText: "⏳ SESSION EXPIRES IN 02:14 — VERIFY NOW OR ACCOUNT WILL BE LOCKED!",
        question: "Why do fake phishing webpages place a ticking red countdown timer at the top?",
        options: [
          "To rush you into typing sensitive details before you notice the fake URL",
          "Because web servers automatically delete accounts after 2 minutes",
          "To synchronize your computer clock",
        ],
        correct: 0,
        explain: "Exactly! Urgency is the #1 weapon of social engineering. Slowing down defeats the trap.",
      },
      w4: {
        label: "Harvesting Full Card Number + CVV + ATM PIN",
        clueText: "Full 16-Digit ATM Card Number + 3-Digit CVV + ATM PIN",
        question: "Why would a 'login verification' page ask for your 16-digit card number, 3-digit CVV, AND your ATM PIN?",
        options: [
          "No legitimate bank login asks for your CVV and ATM PIN together — scammers want to clone your card and make unauthorized purchases",
          "Banks need your ATM PIN every time you check your balance online",
          "To upgrade your debit card to a gold card automatically",
        ],
        correct: 0,
        explain: "Correct! Your CVV and ATM PIN should never be entered on a verification form.",
      },
      w5: {
        label: "Harvesting Live OTP & Security Question",
        clueText: "Enter 6-Digit One-Time Password (OTP) & Mother's Maiden Name",
        question: "Why is asking for your 6-digit OTP AND Mother's Maiden Name on this form so dangerous?",
        options: [
          "It gives attackers both your real-time 2FA code AND the security answer needed to reset your account permanently",
          "Because OTPs should only be 4 digits",
          "Because banks only ask for your Father's middle name",
        ],
        correct: 0,
        explain: "Spot on! With your password, live OTP, and security question answer, attackers can completely hijack your bank account.",
      },
      w6: {
        label: "Free Webmail Support Address & Broken Grammar",
        clueText: "© 2019 BDO Unibank Inc. All Right Reserve... Contact Support at bdo.helpdesk.verify@gmail.com",
        question: "Look at the footer at the bottom of the webpage. What two clues give away the scam?",
        options: [
          "Poor grammar ('All Right Reserve'), outdated 2019 copyright, and a free '@gmail.com' support email instead of '@bdo.com.ph'",
          "The copyright symbol is too small",
          "Banks never put a footer at the bottom of webpages",
        ],
        correct: 0,
        explain: "Excellent detective work! Major banks never use free '@gmail.com' addresses for official customer support.",
      },
    },
  },

  campus: {
    title: "Case 4: Scholarship Grant Email",
    spots: {
      c1: {
        label: "Fake Public Email Domain (@hotmail / @yahoo)",
        clueText: "<spc.scholarship.claim2026@hotmail.com> (Reply-To: claim-grant-fast@yahoo.com)",
        question: "The sender name says 'SPC Office of Student Affairs', but look at the email address. Why is it fake?",
        options: [
          "Official school offices use the institutional domain ('@spc.edu.ph'), not free '@hotmail.com' or '@yahoo.com' accounts",
          "Hotmail accounts cannot send attachments",
          "Student Affairs only communicates via TikTok",
        ],
        correct: 0,
        explain: "Correct! Always check the actual email address inside the `< >` brackets, not just the display name.",
      },
      c2: {
        label: "Artificial Scarcity & 15-Minute Deadline",
        clueText: "ONLY 5 SLOTS REMAINING! First-come, first-served. Closes in 15 minutes!",
        question: "Why does the email claim 'ONLY 5 SLOTS REMAINING! Closes in 15 minutes!'?",
        options: [
          "Real CHED/school scholarships are awarded through official evaluation, not a 15-minute panic race",
          "Because school servers shut down every 15 minutes",
          "To save electricity on the campus network",
        ],
        correct: 0,
        explain: "Right! Scammers combine excitement (₱15,000 grant) with artificial scarcity (5 slots left!) so students don't verify with the Registrar/OSA.",
      },
      c3: {
        label: "Asking for Portal Password & GCash MPIN via Email",
        clueText: "Reply with your Student Portal Password and your GCash MPIN so our cashier can deposit funds",
        question: "To send money TO your GCash or credit your tuition, what information does a legitimate cashier NEVER need?",
        options: [
          "They NEVER need your Password or MPIN — you only need a recipient's account/phone number to send them money!",
          "They never need your student ID number",
          "They never need your full name",
        ],
        correct: 0,
        explain: "Crucial rule! Anyone asking for your password or MPIN 'to send you money' is trying to steal FROM your account.",
      },
      c4: {
        label: "Executable Installer Inside a .ZIP File",
        clueText: "SPC_Scholarship_Form_2026.zip (contains Grant_Setup.exe)",
        question: "Why is a scholarship application form delivered as a '.zip' containing 'Grant_Setup.exe'?",
        options: [
          "Application forms are documents (PDF/Word) or web forms — '.exe' inside a '.zip' is a classic way to smuggle malware/ransomware past email filters!",
          "Because '.exe' files print faster on school printers",
          "ZIP files automatically fill out your grades",
        ],
        correct: 0,
        explain: "Spot on! Attackers hide '.exe' malware inside '.zip' archives because email scanners often block direct '.exe' attachments.",
      },
      c5: {
        label: "Instructing You to Turn Off Antivirus",
        clueText: "Please TURN OFF your Antivirus / Windows Defender before running the file...",
        question: "The email tells you to TURN OFF Windows Defender / Antivirus before opening their file. What does that guarantee?",
        options: [
          "100% Malware! No legitimate school form ever requires you to disable your security software",
          "It makes the scholarship deposit arrive twice as fast",
          "Windows Defender is incompatible with PDF files",
        ],
        correct: 0,
        explain: "BINGO! If any download or email tells you to disable your antivirus first, it is 100% malicious software (Trojan, Spyware, or Ransomware).",
      },
    },
  },
};

const AUDIT_ITEMS = [
  {
    id: "a1",
    title: "1. Screen Lock & Auto-Timeout (PIN / Biometrics)",
    desc: "My phone and laptop automatically lock within 1–5 minutes of inactivity and require a strong PIN, password, fingerprint, or Face ID.",
    fix: "Enable a 1–2 minute auto-screen lock with PIN/biometrics (and press Win + L whenever stepping away from a PC).",
  },
  {
    id: "a2",
    title: "2. Automatic OS & Browser Updates",
    desc: "Automatic updates are turned ON for my operating system (Windows/macOS/Android/iOS) and web browser to patch security holes.",
    fix: "Turn ON automatic OS and browser updates in Settings so known vulnerabilities are patched immediately.",
  },
  {
    id: "a3",
    title: "3. Unique Passwords (No Password Reuse)",
    desc: "My primary email, school portal, and e-wallet/bank accounts each have a completely DIFFERENT password that I don't use anywhere else.",
    fix: "Stop reusing passwords! Give your email, banking/GCash, and social media unique passphrases immediately.",
  },
  {
    id: "a4",
    title: "4. Strong Passphrase Length (12+ Characters)",
    desc: "My main passwords are at least 12+ characters long (or multi-word passphrases) with no birthdays or personal names.",
    fix: "Upgrade short passwords to 12–16+ character passphrases (e.g., 3–4 random words + numbers/symbols).",
  },
  {
    id: "a5",
    title: "5. Multi-Factor Authentication (2FA / MFA) Enabled",
    desc: "Two-Factor Authentication (2FA) is turned ON for my primary Google/email account and social media accounts.",
    fix: "Enable 2FA/MFA (preferably via an Authenticator App or Passkey) on your primary email and social accounts tonight.",
  },
  {
    id: "a6",
    title: "6. Password Manager in Use",
    desc: "I use a secure Password Manager (e.g., Bitwarden, Google/Apple Password Manager, 1Password) instead of sticky notes or memorizing one weak password.",
    fix: "Start using a reputable Password Manager to generate and store unique passwords safely.",
  },
  {
    id: "a7",
    title: "7. Antivirus / Windows Security Active",
    desc: "Real-time malware protection (Windows Security / Defender or reputable antivirus) is active — and I don't install 'cracked' or pirated software.",
    fix: "Ensure Windows Security / Defender is active and remove any pirated/cracked software installers.",
  },
  {
    id: "a8",
    title: "8. Find My Device & Remote Wipe",
    desc: "'Find My Device' (Android/Windows) or 'Find My' (iPhone/Mac) is enabled so I can locate, lock, or wipe my device if lost or stolen.",
    fix: "Turn on Find My Device (Android/Windows) or Find My iPhone/Mac in your device security settings.",
  },
  {
    id: "a9",
    title: "9. App Permissions & Public Wi-Fi Care",
    desc: "I review app permissions (camera/mic/location) and avoid logging into banks or e-wallets over open, unencrypted public Wi-Fi.",
    fix: "Audit your phone's App Permissions (revoke unnecessary mic/location access) and use mobile data or VPN for banking outside.",
  },
  {
    id: "a10",
    title: "10. 3-2-1 Data Backup Habit",
    desc: "My important schoolwork and photos are backed up in at least two places (e.g., Cloud Drive + external USB drive), not just on one device.",
    fix: "Set up a 3-2-1 backup routine: sync important school folders to Google Drive/OneDrive and keep an offline USB copy.",
  },
];

/* STATE */
const state = {
  currentScene: "gmail",
  foundFlags: new Set(), // e.g., "gmail:g1"
  passphrasePassed: false,
  backupPassed: false,
  auditAnswers: {}, // id -> true/false
};

/* DOM READY */
document.addEventListener("DOMContentLoaded", () => {
  initTabs();
  initStudentInputs();
  initPhishInspector();
  initPassphraseForge();
  initBackupSimulator();
  initDeviceAudit();
  initReportActions();
  updateAllScores();
});

/* ================= NAVIGATION TABS ================= */
function initTabs() {
  const tabBtns = document.querySelectorAll(".tab-btn");
  const panels = document.querySelectorAll(".tab-panel");

  tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = btn.getAttribute("data-tab");
      tabBtns.forEach((b) => b.classList.remove("active"));
      panels.forEach((p) => p.classList.remove("active"));
      btn.classList.add("active");
      document.getElementById("tab-" + target).classList.add("active");
      updateAllScores();
    });
  });
}

function initStudentInputs() {
  const nameIn = document.getElementById("studentName");
  const secIn = document.getElementById("studentSection");
  const devIn = document.getElementById("auditedDeviceType");

  const sync = () => {
    const name = nameIn.value.trim() || "Guest Student";
    const sec = secIn.value.trim() || "Not specified";
    document.getElementById("scorecardStudentName").textContent = "Student: " + name;
    document.getElementById("scorecardStudentSection").textContent = "Section: " + sec;
    document.getElementById("repName").textContent = nameIn.value.trim() || "______________________";
    document.getElementById("repSection").textContent = secIn.value.trim() || "____________";
    updateAllScores();
  };

  nameIn.addEventListener("input", sync);
  secIn.addEventListener("input", sync);
  devIn.addEventListener("change", sync);

  const now = new Date();
  document.getElementById("repDate").textContent = now.toLocaleDateString("en-PH", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

/* ================= MODULE 1: PHISH INSPECTOR ================= */
function initPhishInspector() {
  const sceneTabs = document.querySelectorAll(".scenario-tab");
  sceneTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      const scene = tab.getAttribute("data-scene");
      state.currentScene = scene;
      sceneTabs.forEach((t) => t.classList.remove("active"));
      tab.classList.add("active");

      document.querySelectorAll(".scene").forEach((s) => s.classList.remove("active"));
      document.getElementById("scene-" + scene).classList.add("active");

      resetQuizBox();
      renderFoundList();
    });
  });

  // Hint toggle
  const hintBtn = document.getElementById("toggleHintsBtn");
  const stage = document.getElementById("uiStage");
  hintBtn.addEventListener("click", () => {
    stage.classList.toggle("show-hints");
    const on = stage.classList.contains("show-hints");
    hintBtn.textContent = on ? "🙈 Hide Clues" : "💡 Highlight Unfound Clues (Hint)";
  });

  // Attach click handlers to all phish-spot elements
  document.querySelectorAll(".phish-spot").forEach((el) => {
    el.addEventListener("click", (e) => {
      e.stopPropagation();
      const sceneKey = el.getAttribute("data-scene");
      const spotId = el.getAttribute("data-id");
      document.querySelectorAll(".phish-spot").forEach((s) => s.classList.remove("selected"));
      el.classList.add("selected");
      openSpotQuiz(sceneKey, spotId, el);
    });
  });

  renderFoundList();
}

function resetQuizBox() {
  document.getElementById("quizPlaceholder").classList.remove("hidden");
  document.getElementById("quizActiveContent").classList.add("hidden");
}

function openSpotQuiz(sceneKey, spotId, el) {
  const spot = PHISH_DATA[sceneKey].spots[spotId];
  if (!spot) return;

  const fullKey = `${sceneKey}:${spotId}`;
  const alreadyFound = state.foundFlags.has(fullKey);

  document.getElementById("quizPlaceholder").classList.add("hidden");
  const activeBox = document.getElementById("quizActiveContent");
  activeBox.classList.remove("hidden");

  document.getElementById("quizElementTitle").textContent = `CLUE: ${spot.label}`;
  document.getElementById("quizQuestionText").textContent = spot.question;

  const optsContainer = document.getElementById("quizOptionsList");
  optsContainer.innerHTML = "";

  const fbBox = document.getElementById("quizFeedbackBox");
  fbBox.className = "quiz-feedback hidden";

  spot.options.forEach((optText, idx) => {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "quiz-opt-btn";
    btn.textContent = optText;

    if (alreadyFound && idx === spot.correct) {
      btn.classList.add("correct");
    }

    btn.addEventListener("click", () => {
      if (idx === spot.correct) {
        btn.classList.add("correct");
        state.foundFlags.add(fullKey);
        el.classList.add("found");
        el.classList.remove("selected");

        fbBox.textContent = "✅ " + spot.explain;
        fbBox.className = "quiz-feedback ok";

        renderFoundList();
        updateAllScores();
      } else {
        btn.classList.add("wrong");
        fbBox.textContent = "❌ Not quite! Look closely at the clue and try another option.";
        fbBox.className = "quiz-feedback err";
      }
    });

    optsContainer.appendChild(btn);
  });

  if (alreadyFound) {
    fbBox.textContent = "✅ Already Identified: " + spot.explain;
    fbBox.className = "quiz-feedback ok";
  }
}

function renderFoundList() {
  const sceneKey = state.currentScene;
  const spots = PHISH_DATA[sceneKey].spots;
  const keys = Object.keys(spots);
  let foundInScene = 0;

  const ul = document.getElementById("foundFlagsList");
  ul.innerHTML = "";

  keys.forEach((id, index) => {
    const fullKey = `${sceneKey}:${id}`;
    const isDone = state.foundFlags.has(fullKey);
    if (isDone) foundInScene++;

    const li = document.createElement("li");
    li.className = isDone ? "done" : "";
    li.textContent = isDone
      ? `🚩 #${index + 1}: ${spots[id].label} — Verified!`
      : `🔒 Red Flag #${index + 1}: Click suspicious UI element to unlock...`;
    ul.appendChild(li);
  });

  document.getElementById("currentSceneCount").textContent = `${foundInScene} / ${keys.length}`;

  // Update all 4 scenario progress counters
  Object.keys(PHISH_DATA).forEach((sc) => {
    const scKeys = Object.keys(PHISH_DATA[sc].spots);
    const scFound = scKeys.filter((k) => state.foundFlags.has(`${sc}:${k}`)).length;
    const progEl = document.getElementById("prog-" + sc);
    if (progEl) {
      progEl.textContent = `${scFound} / ${scKeys.length} Flags Found`;
    }
  });
}

/* ================= MODULE 2A: PASSPHRASE FORGE ================= */
function initPassphraseForge() {
  const pwInput = document.getElementById("pwTestInput");
  const mfaSelect = document.getElementById("mfaSelect");
  const genBtn = document.getElementById("genPassphraseBtn");

  const samplePhrases = [
    "Mango-Jeepney-84-Cloud!",
    "Tarsier#72-Volcano-Guitar!",
    "Kakanin-95-Starlight-Coral$",
    "Batanes!48-Compass-waffle#",
    "Haribon-63-Lantern-Breeze@",
  ];

  genBtn.addEventListener("click", () => {
    const pick = samplePhrases[Math.floor(Math.random() * samplePhrases.length)];
    pwInput.value = pick;
    evaluatePassphrase();
  });

  pwInput.addEventListener("input", evaluatePassphrase);
  mfaSelect.addEventListener("change", evaluatePassphrase);
}

function evaluatePassphrase() {
  const pw = document.getElementById("pwTestInput").value;
  const mfa = document.getElementById("mfaSelect").value;

  const hasLen12 = pw.length >= 12;
  const hasLen16 = pw.length >= 16;
  const hasUpper = /[A-Z]/.test(pw);
  const hasLower = /[a-z]/.test(pw);
  const hasNum = /[0-9]/.test(pw);
  const hasSym = /[^A-Za-z0-9]/.test(pw);
  const hasMix = hasUpper && hasLower && hasNum && hasSym;
  const commonBad = /(password|123456|qwerty|admin|iloveyou|spc2026)/i.test(pw);
  const noCommon = pw.length > 0 && !commonBad;

  setCrit("crit-len12", hasLen12, "At least 12+ characters long");
  setCrit("crit-len16", hasLen16, "16+ characters (Passphrase length bonus!)");
  setCrit("crit-mix", hasMix, "Mixes uppercase, lowercase, numbers & symbols");
  setCrit("crit-nocommon", noCommon, "Avoids common dictionary patterns ('password', '123456')");

  let score = 0;
  if (pw.length >= 8) score += 20;
  if (hasLen12) score += 25;
  if (hasLen16) score += 25;
  if (hasMix) score += 20;
  if (noCommon) score += 10;
  if (commonBad) score = Math.min(score, 15);

  const fill = document.getElementById("pwStrengthFill");
  const ratingEl = document.getElementById("pwRatingText");
  const crackEl = document.getElementById("pwCrackTime");

  fill.style.width = Math.max(5, score) + "%";

  if (score < 40) {
    fill.style.background = "#c0392b";
    ratingEl.textContent = "Weak / Vulnerable";
    crackEl.textContent = "Seconds to Minutes";
  } else if (score < 75) {
    fill.style.background = "#d97706";
    ratingEl.textContent = "Moderate";
    crackEl.textContent = "Days to Months";
  } else if (score < 95) {
    fill.style.background = "#028090";
    ratingEl.textContent = "Strong";
    crackEl.textContent = "Decades";
  } else {
    fill.style.background = "#02c39a";
    ratingEl.textContent = "Unbreakable Passphrase!";
    crackEl.textContent = "Centuries+";
  }

  const banner = document.getElementById("forgeStatusBanner");
  if (score >= 95 && mfa === "app") {
    state.passphrasePassed = true;
    banner.className = "challenge-status passed";
    banner.textContent = "✅ Challenge A Passed! You forged an unbreakable 16+ char passphrase paired with Authenticator App 2FA.";
  } else {
    state.passphrasePassed = false;
    banner.className = "challenge-status";
    banner.textContent = "⏳ Challenge Status: Reach 'Unbreakable Passphrase!' (16+ chars, mixed) AND select Authenticator App 2FA.";
  }

  updateAllScores();
}

function setCrit(id, ok, text) {
  const el = document.getElementById(id);
  el.textContent = (ok ? "✅ " : "⬜ ") + text;
  el.style.color = ok ? "#065f46" : "#5a7076";
  el.style.fontWeight = ok ? "700" : "400";
}

/* ================= MODULE 2B: 3-2-1 BACKUP SIMULATOR ================= */
function initBackupSimulator() {
  const checks = document.querySelectorAll(".bk-check");
  checks.forEach((c) => c.addEventListener("change", evaluateBackupRule));

  document.getElementById("simRansomwareBtn").addEventListener("click", () => runDisasterSim("ransomware"));
  document.getElementById("simTheftBtn").addEventListener("click", () => runDisasterSim("theft"));
}

function getBackupState() {
  const sameDrive = document.getElementById("bkSameDrive").checked;
  const usbPlugged = document.getElementById("bkUsbPlugged").checked;
  const usbUnplugged = document.getElementById("bkUsbUnplugged").checked;
  const cloud = document.getElementById("bkCloud").checked;

  // Working copy on laptop SSD is always copy #1
  let totalCopies = 1 + (sameDrive ? 1 : 0) + (usbPlugged ? 1 : 0) + (usbUnplugged ? 1 : 0) + (cloud ? 1 : 0);

  const mediaTypes = new Set(["ssd"]);
  if (usbPlugged || usbUnplugged) mediaTypes.add("external");
  if (cloud) mediaTypes.add("cloud");

  const hasOffsite = cloud;
  const hasOfflineSafe = usbUnplugged || cloud;

  return {
    totalCopies,
    mediaCount: mediaTypes.size,
    hasOffsite,
    hasOfflineSafe,
    usbPlugged,
    usbUnplugged,
    cloud,
  };
}

function evaluateBackupRule() {
  const b = getBackupState();

  const r3 = document.getElementById("rule3");
  const r2 = document.getElementById("rule2");
  const r1 = document.getElementById("rule1");

  const ok3 = b.totalCopies >= 3;
  const ok2 = b.mediaCount >= 2;
  const ok1 = b.hasOffsite;

  r3.textContent = (ok3 ? "✅ " : "❌ ") + `${b.totalCopies} / 3 Copies`;
  r3.className = "rule-pill" + (ok3 ? " ok" : "");

  r2.textContent = (ok2 ? "✅ " : "❌ ") + `${b.mediaCount} / 2 Formats`;
  r2.className = "rule-pill" + (ok2 ? " ok" : "");

  r1.textContent = (ok1 ? "✅ " : "❌ ") + (ok1 ? "1 Off-Site Copy" : "0 Off-Site");
  r1.className = "rule-pill" + (ok1 ? " ok" : "");

  if (ok3 && ok2 && ok1 && b.usbUnplugged) {
    state.backupPassed = true;
  } else {
    state.backupPassed = false;
  }
  updateAllScores();
}

function runDisasterSim(type) {
  evaluateBackupRule();
  const b = getBackupState();
  const resBox = document.getElementById("backupSimResult");

  if (type === "ransomware") {
    if (b.usbUnplugged && b.cloud && b.totalCopies >= 3) {
      state.backupPassed = true;
      resBox.style.background = "#ddf5f1";
      resBox.style.color = "#065f46";
      resBox.textContent =
        "🎉 THESIS SAVED! Ransomware encrypted your Laptop SSD (and any plugged-in USB drives), but your Unplugged External Drive and Cloud Version History restored 100% of your files for free!";
    } else if (b.usbPlugged && !b.usbUnplugged && !b.cloud) {
      resBox.style.background = "#fde8e8";
      resBox.style.color = "#991b1b";
      resBox.textContent =
        "💀 DATA LOST! Because your External USB Drive was left plugged into the laptop 24/7, the ransomware encrypted BOTH your laptop C: drive AND your plugged-in USB drive! Check 'Unplugged External USB' and 'Cloud Storage'.";
    } else {
      resBox.style.background = "#fef3c7";
      resBox.style.color = "#92400e";
      resBox.textContent =
        "⚠️ INCOMPLETE 3-2-1 PLAN! Make sure you have at least 3 copies, 2 formats, an Unplugged External Drive, AND Off-site Cloud Storage to pass the Ransomware test.";
    }
  } else {
    // Stolen backpack
    if (b.cloud && b.totalCopies >= 3 && b.mediaCount >= 2) {
      state.backupPassed = true;
      resBox.style.background = "#ddf5f1";
      resBox.style.color = "#065f46";
      resBox.textContent =
        "🎉 THESIS SAVED! A thief stole your backpack containing your laptop and USB drive, but your Off-Site Encrypted Cloud Backup let you download your thesis onto a new computer immediately!";
    } else {
      resBox.style.background = "#fde8e8";
      resBox.style.color = "#991b1b";
      resBox.textContent =
        "💀 DATA LOST! Both your laptop and local USB drives were inside your stolen backpack! Without an Off-Site Cloud Backup (the '1' in 3-2-1), all local copies vanished together.";
    }
  }
  updateAllScores();
}

/* ================= MODULE 3: MY DEVICE SECURITY SCORECARD ================= */
function initDeviceAudit() {
  const container = document.getElementById("auditChecklist");
  container.innerHTML = "";

  AUDIT_ITEMS.forEach((item) => {
    const row = document.createElement("div");
    row.className = "audit-item";
    row.id = "row-" + item.id;

    row.innerHTML = `
      <div>
        <div class="audit-q-title">${item.title}</div>
        <div class="audit-q-desc">${item.desc}</div>
      </div>
      <div class="audit-toggle">
        <button type="button" class="yn-btn yes" data-id="${item.id}" data-val="yes">✅ YES</button>
        <button type="button" class="yn-btn no" data-id="${item.id}" data-val="no">❌ NO</button>
      </div>
    `;
    container.appendChild(row);
  });

  container.querySelectorAll(".yn-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-id");
      const val = btn.getAttribute("data-val") === "yes";
      state.auditAnswers[id] = val;

      const parent = btn.parentElement;
      parent.querySelectorAll(".yn-btn").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const itemCard = document.getElementById("row-" + id);
      itemCard.classList.toggle("checked", val);

      renderAuditScorecard();
      updateAllScores();
    });
  });
}

function renderAuditScorecard() {
  const totalItems = AUDIT_ITEMS.length;
  let yesCount = 0;
  const fixes = [];

  AUDIT_ITEMS.forEach((item) => {
    if (state.auditAnswers[item.id] === true) {
      yesCount++;
    } else if (state.auditAnswers[item.id] === false) {
      fixes.push(item.fix);
    }
  });

  const pct = Math.round((yesCount / totalItems) * 100);
  const deg = Math.round((pct / 100) * 360);

  let color = "#c0392b";
  let grade = "High Risk — Needs Urgent Care";
  if (pct >= 90) {
    color = "#02c39a";
    grade = "Cyber Guardian (Excellent!)";
  } else if (pct >= 70) {
    color = "#028090";
    grade = "Hardened User (Good)";
  } else if (pct >= 50) {
    color = "#d97706";
    grade = "Moderate — Patch Gaps";
  }

  const gauge = document.getElementById("hygieneGaugeCircle");
  gauge.style.background = `conic-gradient(${color} ${deg}deg, #e2e8f0 ${deg}deg)`;

  document.getElementById("hygieneScoreNum").textContent = pct + "%";
  document.getElementById("hygieneGradeText").textContent = grade;

  const ul = document.getElementById("auditRecsList");
  ul.innerHTML = "";

  const answeredCount = Object.keys(state.auditAnswers).length;
  if (answeredCount === 0) {
    ul.innerHTML = "<li>Click YES or NO on each of the 10 audit items on the left to generate your personalized fix list.</li>";
  } else if (fixes.length === 0 && answeredCount === totalItems) {
    ul.innerHTML = "<li>🌟 Outstanding! Your device passes all 10 Cyber Hygiene checks. Keep maintaining your backups and updates!</li>";
  } else {
    fixes.forEach((f) => {
      const li = document.createElement("li");
      li.textContent = f;
      ul.appendChild(li);
    });
    if (answeredCount < totalItems) {
      const rem = document.createElement("li");
      rem.style.color = "#5a7076";
      rem.textContent = `(${totalItems - answeredCount} audit items remaining to answer...)`;
      ul.appendChild(rem);
    }
  }
}

/* ================= OVERALL LAB SCORING & CERTIFICATE ================= */
function updateAllScores() {
  // Module 1: 24 total red flags -> 40 points max
  const totalFlags = 24;
  const foundCount = state.foundFlags.size;
  const phishPts = Math.round((foundCount / totalFlags) * 40);

  // Module 2: 2 challenges -> 15 pts each = 30 points max
  const forgeCount = (state.passphrasePassed ? 1 : 0) + (state.backupPassed ? 1 : 0);
  const forgePts = forgeCount * 15;

  // Module 3: Completing all 10 audit questions -> 30 points max (3 pts per item audited)
  const answeredAudit = Object.keys(state.auditAnswers).length;
  const auditPts = answeredAudit * 3;

  const yesAudit = Object.values(state.auditAnswers).filter(Boolean).length;
  const hygienePct = Math.round((yesAudit / AUDIT_ITEMS.length) * 100);

  const totalScore = phishPts + forgePts + auditPts;

  // Topbar & Badges
  document.getElementById("totalLabScore").textContent = `${totalScore} / 100`;
  document.getElementById("badgePhish").textContent = `${foundCount} / ${totalFlags} Found`;
  document.getElementById("badgeForge").textContent = `${forgeCount} / 2 Done`;
  document.getElementById("badgeAudit").textContent = `Hygiene: ${hygienePct}% (${answeredAudit}/10)`;

  // Certificate Report
  document.getElementById("repTotalScore").textContent = `${totalScore} / 100 pts`;
  document.getElementById("repPhishScore").textContent = `${foundCount} / ${totalFlags} Red Flags Found`;
  document.getElementById("repPhishPts").textContent = `${phishPts} / 40 pts`;

  document.getElementById("repForgeScore").textContent = `${forgeCount} / 2 Challenges Passed`;
  document.getElementById("repForgePts").textContent = `${forgePts} / 30 pts`;

  const devType = document.getElementById("auditedDeviceType").value;
  document.getElementById("repAuditScore").textContent = `${devType} · Hygiene: ${hygienePct}%`;
  document.getElementById("repAuditPts").textContent = `${auditPts} / 30 pts (${answeredAudit}/10 Audited)`;

  // Commitment text
  const failedItems = AUDIT_ITEMS.filter((it) => state.auditAnswers[it.id] === false);
  const commitEl = document.getElementById("repCommitmentText");
  if (answeredAudit < 10) {
    commitEl.textContent = `Please answer all 10 questions in Module 3 (My Device Security Scorecard) to generate your personal action plan (${10 - answeredAudit} remaining).`;
  } else if (failedItems.length === 0) {
    commitEl.textContent = `Audited Device: ${devType} (Cyber Hygiene Score: 100%). All 10 security controls are active! I commit to maintaining automatic updates, unique passphrases with 2FA, and regular 3-2-1 backups.`;
  } else {
    const topFixes = failedItems.slice(0, 3).map((i) => i.fix).join(" | ");
    commitEl.textContent = `Audited Device: ${devType} (Initial Cyber Hygiene Score: ${hygienePct}%). Priority security upgrades I am implementing tonight: ${topFixes}`;
  }
}

function initReportActions() {
  document.getElementById("printReportBtn").addEventListener("click", () => {
    window.print();
  });

  document.getElementById("copySummaryBtn").addEventListener("click", () => {
    const name = document.getElementById("studentName").value.trim() || "Student";
    const sec = document.getElementById("studentSection").value.trim() || "N/A";
    const score = document.getElementById("repTotalScore").textContent;
    const phish = document.getElementById("repPhishScore").textContent;
    const forge = document.getElementById("repForgeScore").textContent;
    const audit = document.getElementById("repAuditScore").textContent;
    const commit = document.getElementById("repCommitmentText").textContent;

    const summary = [
      `ITF 101 — CYBER DEFENSE SIMULATOR LAB REPORT`,
      `Student: ${name} (${sec})`,
      `Overall Lab Score: ${score}`,
      `- Module 1 (Spot the Phish): ${phish}`,
      `- Module 2 (Passphrase & 3-2-1 Backup): ${forge}`,
      `- Module 3 (Device Scorecard): ${audit}`,
      `Action Plan: ${commit}`,
    ].join("\n");

    navigator.clipboard.writeText(summary).then(() => {
      const btn = document.getElementById("copySummaryBtn");
      btn.textContent = "✅ Copied to Clipboard!";
      setTimeout(() => {
        btn.textContent = "📋 Copy Summary for Submission";
      }, 2200);
    });
  });
}
